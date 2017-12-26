<template>
  <div class="layout-padding row docs-input justify-center">
    <div style="width: 600px; max-width: 80vw;">
      <q-field
        icon="account circle"
        error-label="We need a valid username"
        :count="10"
      >
        <q-input float-label="username" v-model="username" />
      </q-field>
      <q-field
        icon="lock outline"
        error-label="We need a valid password"
        :count="10"
      >
        <q-input type="password" float-label="password" v-model="password" />
      </q-field>
      <q-btn
        color="teal"
        style="width: 600px; max-width: 80vw; margin-top: 50px"
        @click="doLogin()"
      >
        ログイン
      </q-btn>
      <q-btn
        color="grey"
        style="width: 600px; max-width: 80vw; margin-top: 10px"
        @click="doLogout()"
      >
        ログアウト
      </q-btn>
      <div>
        ログイン状態: {{ isLogin() }}
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import store from '../store/index';

@Component
export default class Login extends Vue {
  private username: string = '';
  private password: string = '';

  private doLogin() {
    this.$store.commit('doLogin');
  }

  private doLogout() {
    this.$store.commit('doLogout');
  }
  
  private isLogin(): boolean {
    return this.$store.getters.isLogin;
  }
}
</script>