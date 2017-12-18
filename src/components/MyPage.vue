<template>
  <q-tabs>
    <!-- Tabs - notice slot="title" -->
    <q-tab slot="title" name="tab-1" label="すべて" class="text-black" />
    <q-tab slot="title" name="tab-2" icon="mood" label="良い" class="text-pink-6" />
    <q-tab slot="title" name="tab-3" icon="sentiment neutral" label="普通" class="text-amber-6" />
    <q-tab slot="title" name="tab-4" icon="mood bad" label="悪い" class="text-blue-6" />
    <!-- Targets -->
    <q-tab-pane name="tab-1">Tab One</q-tab-pane>
    <q-tab-pane name="tab-2">Tab Two</q-tab-pane>
    <q-tab-pane name="tab-3">Tab Three</q-tab-pane>
    <q-tab-pane name="tab-4">Tab Four</q-tab-pane>
  </q-tabs>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class MyPage extends Vue {
}
</script>
