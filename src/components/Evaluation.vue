<template>
  <q-tabs>
    <!-- Tabs - notice slot="title" -->
    <q-tab slot="title" name="tab-1" label="すべて" class="text-black" />
    <q-tab slot="title" name="tab-2" icon="mood" label="良い" class="text-pink-6" />
    <q-tab slot="title" name="tab-3" icon="sentiment neutral" label="普通" class="text-amber-6" />
    <q-tab slot="title" name="tab-4" icon="mood bad" label="悪い" class="text-blue-6" />
    <!-- Targets -->
    <q-tab-pane name="tab-1">
      <q-scroll-area style="height: 600px;">
        <q-list highlight>
          <q-item v-for="n in 10" :key="n">
            <q-item-side>
              <q-item-tile avatar>
                <q-icon name="face" size="2.5rem" />
              </q-item-tile>
            </q-item-side>
            <q-item-main class="bg-brown-1">
              <q-item-tile avater><q-icon name="mood" size="1.5rem" color="pink-6" /></q-item-tile>
              <q-item-tile label>佐藤 二郎</q-item-tile>
              <q-item-tile sublabel>本日レッスン受けました。</br>勉強になりました。ありがとうございます！</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item-separator inset />
        </q-list>
      </q-scroll-area>
    </q-tab-pane>
    <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
    <q-tab-pane name="tab-3">Tab Three</q-tab-pane>
    <q-tab-pane name="tab-4">Tab Four</q-tab-pane>
  </q-tabs>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class MyPage extends Vue {
  }
</script>
