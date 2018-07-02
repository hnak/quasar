# toiware frontend template project

## Overview

トイウェアで作成する業務アプリケーションのフロントエンドのテンプレートプロジェクトです。  
VueのUIフレームワークであるQuasarをコアコンポーネントとしています。  

バックエンドはREST APIを実装したJava（SpringBoot）を推奨とします。  
バックエンドへのインテグレーションはbuildスクリプト内で行います。（TODO）

ローカル環境での開発についてはQuasarにdev server機能があるのでこれを利用してフロントエンドをスタンドアローンで起動することができます。（下記コマンド参照）  
APIを呼び出す部分はMockのレスポンスが返るようになります。

## System Requirement
- node
- npm
- quasar 0.16

nodeとnpmをインストーラーからインストールしたらQuasarをnpmでインストールしてください。

https://nodejs.org/en/
```bash
$ npm install -g quasar-cli
```

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8081
$ quasar dev
$ quasar dev -t ios # for ios design

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

## Development environment

### IDE & plugin
以下のツールを推奨設定とします。
- IDE : VSCode  
- plugin
    - TSLint Vue
    - Vetur

TSLintをローカルで動かすにはインストールが必要なので以下コマンドを実行してください。
```bash
$ npm install -g tslint typescript
```

VSCodeの設定に以下を追加してください。コメントアウト部分は任意で設定してください。
```json
{
    // "terminal.integrated.shell.windows": "C:/Users/nakanoya150151/AppData/Local/Programs/Git/bin/bash.exe", // ターミナルをgit bashにする
    // "editor.fontSize": 12, // フォントサイズを小さく
    // "workbench.colorTheme": "Atom One Dark",　// Atomのカラーにする、要カラーテーマ
    // "git.path": "C:/Users/nakanoya150151/AppData/Local/Programs/Git/bin/git.exe", // gitのパス、VSCode起動時に怒られたので設定
    "tslint.typeCheck": true,
}
```

- Chromeプラグイン : Vue.js devtools

https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?utm_source=chrome-ntp-icon

Vuexで定義した変数やVueイベントをデバッグすることができるツールです。

## Package structure

```
.
├─config-utils : webpackのカスタム設定ファイル（quasar.conf.jsから読み込んでいる）
├─.quasar : Quasarの環境設定
├─dist : デプロイ用の実行ファイル
├─src : フロントエンドのソースのroot
│  ├─@types : typescriptの型定義ファイル置き場
│  ├─assets : 静的ファイル置き場（jsから相対パスで取得可能）
│  ├─components : 共通で使用するコンポーネント群をここに配置
│  ├─css : CSSファイルをここに配置
│  ├─i18n : 言語設定ファイルをここに配置
│  ├─model : ViewやAPIのパラメータをモデルとしてここに配置
│  ├─layouts : テンプレートとなる画面のレイアウトを決めるVueファイルを配置
│  ├─pages : 画面ごとのVueファイルを配置する
│  ├─statics : 静的ファイル置き場（絶対パスで取得可能、assetとの使い分けが不明...）
│  ├─store : vuexの状態管理クラスを配置
|  | └─modules : モジュールごとにファイルを分割してここに配置する
│  ├─plugins : axiosなど外部コンポーネントの使用を定義するファイルの配置先
│  └─router : 各画面のコンポーネント（Vueファイル）とURLパスのマッピング
└─node_modules
```

## Architecture

### Modules
ベースモジュール
- Vue.js  
    javascriptベースのフロントエンドフレームワーク
    htmlとjsを分離して記述できたり、画面やボタンなどの部品をコンポーネント化して再利用できるのが特徴

- Typescript  
    javascriptをJavaっぽく書ける。もはやこれがないとjavascriptは書けない・・・

- webpack  
    javasciptのファイル群をいい感じにまとめるモジュールバンドラと呼ばれるもの
    今回はQuasarがwrapperになっているので直接コマンドは叩かない

- Quasar  
    VueのUIフレームワーク
    独自のクライアントツールがあり、UIのコンポーネント群というよりアプリ開発ツールに近い
    web向けのiosやandroid基盤であるcordovaやデスクトップ用のelectronもサポートしている
    まとめて色々やってくれそうなので今回これを採用、US圏のフォーラムでもこのライブラリのリファレンスが一番多い。

主なVueプラグイン
- vue-router  
    ルーティング（画面とURLのマッピング）を直感的に設定できるようにしてくれるプラグイン
    これを使うことで画面ごとにファイル、コンポーネントを分けて開発ができる

- axios  
    HTTPクライアント。バックエンドのREST APIを呼び出すときに使用する。
    Mockモジュールもサポートしているのでローカル環境では静的なMockオブジェクトを返すこともできる

- vuex  
    フロントエンド上での状態管理を可能にするプラグイン。Javaで使うようなメモリ管理のMapやStatus的なものをフロントエンド上に定義し、Chromeプラグインで見ることができる。

### Development techniques

#### ルーティング
以下のようにパスとVueクラスをマッピングすることでルーティングを定義できます。  
router.ts
```ts

export const appRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home }, // Default
    { path: '/home', component: Home },
    { path: '/schedule', component: Schedule },
    { path: '/message', component: Message },
    { path: '/mypage', component: MyPage },
    { path: '/evaluation', component: Evaluation },
    { path: '*', component: Error404 }, // Not found
  ],
});
```

#### API呼び出し
デフォルトの非同期処理が読みにくいのでaync/awaitを使って記述しています。  
Axiosクライアントにパス（'/user'）とパラメータ（userId）を投げてレスポンス（res）を受け取っています。

TODO：共通ライブラリっぽく作りたかったのですが、this.userとしているようにそのVueコンポーネントの変数でないと更新できませんでした。。。this.user部分を引数で渡してしまうと更新されず :P

sample.vue
```html
<template>
  <div>
    {{ user }}
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HttpClient from '../network/httpclient';

@Component
export default class MyPage extends Vue {
  private user: string = 'init';

  private async getUser(userId) {
    const res = await HttpClient.getAxios().get('/user', {
      adapter: HttpClient.getAdaptor(),
      params: {
        userId,
      },
    });
    if (res.status !== 200) {
      console.log('Error!!');
      process.exit();
    }
    this.user = res.data;
  }
}
</script>
```

#### 状態管理
以下に状態管理の例を記載します。  

div要素であるtitleがVuexの管理対象となっており、ボタンに紐づいたsetTitleイベントが実行されることで値が"ChangeTitle"に変化します。  

sample.vue
```html
<template>
  <div>
    {{ title }}
  </div>
  <q-btn @click='setTitle("ChangeTitle")'>
  </q-btn>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import store from './store/index';

@Component({
  store,
})
export default class App extends Vue {
  private get title() {
    return this.$store.getters.title;
  }
  private setTitle(val) {
    this.$store.commit('setTitle', val);
  }
}
</script>
```

Vuexの定義ファイルは定型的にstate,getters,mutationsを記載していますが、以下の資料を読むと考え方がわかると思います。

https://vuex.vuejs.org/ja/intro.html

VuexのStore Moduleの定義ファイル  
appProperty.ts
```ts
import Vuex, { MutationTree } from 'vuex';

class AppProperty {
  public title = 'ホーム';
}

const getters: MutationTree<AppProperty> = {
  title: (state) => {state.title;},
};

const mutations: MutationTree<AppProperty> = {
  ['setTitle'](state: AppProperty, payload) {
    state.title = payload;
  },
};

export default {
  state: new AppProperty(),
  getters,
  mutations,
};
```