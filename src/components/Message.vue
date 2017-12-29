<template>
  <div class="layout-padding row docs-input justify-center">
    <div style="width: 600px; max-width: 80vw;">
      <q-chat-message
        name="佐藤 二郎"
        avatar="statics/quasar-logo.png"
        :text="['明日のレッスンよろしくお願いします。']"
        stamp="4 minutes ago"
      />
      <q-chat-message
        name="あなた"
        avatar="statics/quasar-logo.png"
        :text="['こちらこそ、よろしくお願いいたします。']"
        stamp="1 minutes ago"
        sent
      />
      </div>
      <q-input
        style="width: 90%; position: absolute; bottom: 0;"
        type="textarea"
        :max-height="100"
        :min-rows="1"
        v-model="message"
        color="teal"
        inverted
        :after="[
          {
            icon: 'send',
            error: false,
            handler () {
              // do something...
            }
          }
        ]"
      />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Message extends Vue {
  private message: string = '';
}
</script>
