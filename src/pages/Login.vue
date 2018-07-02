<template>
  <q-layout padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
          <div class="text-center">
            <img src="~assets/quasar-logo-full.svg">
          </div>
          <q-field
            :count="30"
            :error="error"
            error-label="Hey, we got an error"
            :warning="warning"
            warning-label="Hey, we got a warning"
          >
            <q-input v-model="loginId" float-label="ログインID"/>
          </q-field>
          <q-field
            :count="30"
            :error="error"
            error-label="Hey, we got an error"
            :warning="warning"
            warning-label="Hey, we got a warning"
          >
            <q-input v-model="password" float-label="パスワード" type="password"/>
          </q-field>
          <q-btn
            label="ログイン"
            class="full-width"
            :loading="loading"
            @click="doLogin()"
          >
            <q-spinner-oval slot="loading" />
          </q-btn>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import store from 'store/index';

@Component({
  store
})
export default class Login extends Vue {
  private loginId: string = '';
  private password: string = '';
  private error: boolean = false;
  private warning: boolean = false;
  
  private doLogin() {
    // TODO とりあえずバリデーションなしでボタンを押したら認可する
    this.$store.commit('doLogin');
    // トップページへ遷移させる
    this.$router.push('/')
  }

}
</script>


<style>
</style>
