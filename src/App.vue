<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="layout" view="hHr Lpr lfr" :left-class="{'bg-grey-2': true}">
      <q-toolbar slot="header">
        <q-toolbar-title>
          {{ getTitle() }}
        </q-toolbar-title>
        <q-btn flat @click="$refs.layout.toggleRight()">
          <q-icon name="search" />
        </q-btn>
        <q-btn flat @click="$refs.layout.toggleRight()">
          <q-icon name="notifications" />
        </q-btn>
      </q-toolbar>
      <!-- Right Side Panel -->
      <div slot="right">
        <q-list no-border link inset-delimiter>
          <q-list-header>マイページ</q-list-header>
          <q-side-link item to="/login">
            <q-item-side icon="lock open"></q-item-side>
            <q-item-main label="ログイン"></q-item-main>
          </q-side-link>
          <q-side-link item to="/evaluation">
            <q-item-side icon="school"></q-item-side>
            <q-item-main label="評価一覧"></q-item-main>
          </q-side-link>
        </q-list>
      </div>
      <!-- Navigation -->
      <q-tabs slot="navigation">
        <q-route-tab slot="title" icon="home" to="/home" replace hide="icon" label="ホーム" @select='setTitle("ホーム")' color="teal" />
        <q-route-tab slot="title" icon="favorite" to="/schedule" replace label="お気に入り" @select='setTitle("お気に入り")' color="teal" />
        <q-route-tab slot="title" icon="message" to="/message" replace label="メッセージ" @select='setTitle("メッセージ")' color="teal" />
        <q-route-tab slot="title" icon="event" to="/schedule" replace label="予約" @select='setTitle("予約")' color="teal" />
        <q-route-tab slot="title" icon="account circle" to="/mypage" replace label="マイページ" @select='setTitle("マイページ")' color="teal" />
      </q-tabs>
      <!-- sub-routes get injected here: -->
      <router-view />

    </q-layout>
  </div>
</template>

<script lang="ts">
/*
 * Root component
 */
import Vue from 'vue';
import Component from 'vue-class-component';
import store from './store/index';

@Component({
  store,
})
export default class App extends Vue {
  private getTitle(): string {
    return this.$store.getters.title;
  }
  private setTitle(val) {
    this.$store.commit('setTitle', val);
  }
}
</script>

<style></style>
