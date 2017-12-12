<template>
  <q-list highlight>
    <q-list-header>Recent chats</q-list-header>
    <q-item>
      <q-item-side avatar="/statics/boy-avatar.png" />
      <q-item-main>
        <q-item-tile label>John Doe</q-item-tile>
        <q-item-tile sublabel>Quasar enthusiast</q-item-tile>
      </q-item-main>
      <q-item-side right>
        <q-item-tile icon="chat_bubble" color="green" />
      </q-item-side>
    </q-item>
    <q-item>
      <q-item-side>
        <q-item-tile avatar>
          <img src="~assets/ic_face_black_24px.svg" />
        </q-item-tile>
      </q-item-side>
      <q-item-main label="John Doe" sublabel="Quasar enthusiast" />
      <q-item-side right icon="chat_bubble" />
    </q-item>
    <q-item-separator />
    <q-list-header>Previous chats</q-list-header>
    <q-item>
      <q-item-side avatar="/statics/guy-avatar.png" />
      <q-item-main label="Jack Doe" />
    </q-item>
  </q-list>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class MyPage extends Vue {
  }
</script>

