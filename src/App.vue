<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
  <q-layout ref="layout" view="lHh Lpr lff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu"></q-icon>
      </q-btn>
  
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
    </q-toolbar>
    <!-- Left Side Panel -->
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school"></q-item-side>
          <q-item-main label="Docs" sublabel="quasar-framework.org"></q-item-main>
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over"></q-item-side>
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org"></q-item-main>
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat"></q-item-side>
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby"></q-item-main>
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed"></q-item-side>
          <q-item-main label="Twitter" sublabel="@quasarframework"></q-item-main>
        </q-item>
      </q-list>
    </div>
    <!-- Navigation -->
    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="home" to="/home" replace hide="icon" label="ホーム" @select='setTitle("ホーム")' />
      <q-route-tab slot="title" icon="event" to="/schedule" replace label="予約スケジュール" @select='setTitle("予約スケジュール")' />
      <q-route-tab slot="title" icon="message" to="/message" replace label="メッセージ" @select='setTitle("メッセージ")' />
      <q-route-tab slot="title" icon="account circle" to="/mypage" replace label="マイページ" @select='setTitle("マイページ")' />
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
import Vue from 'vue'
import Component from 'vue-class-component'
import store from './components/Store'

@Component({
  store
})
export default class App extends Vue {
  get title () {
    return this.$store.getters.title
  }
  setTitle (val) {
    this.$store.commit('setTitle', val)
  }
}
</script>

<style></style>
