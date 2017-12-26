
import Vuex, { MutationTree } from 'vuex';

class AppProperty {
  public title: string = 'ホーム';
  public isLogin: boolean = false;
}

const getters: MutationTree<AppProperty> = {
  title: state => state.title,
  isLogin: state => state.isLogin,
};

const mutations: MutationTree<AppProperty> = {
  ['setTitle'](state: AppProperty, payload) {
    state.title = payload;
  },
  ['doLogin'](state: AppProperty, payload) {
    state.isLogin = true;
  },
  ['doLogout'](state: AppProperty, payload) {
    state.isLogin = false;
  },
};

export default {
  state: new AppProperty(),
  getters,
  mutations,
};
