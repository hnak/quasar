
import Vuex, { MutationTree } from "vuex";

class AppProperty {
    public title = 'ホーム';
}

const getters: MutationTree<AppProperty> = {
    title: (state) => state.title,
};

const mutations: MutationTree<AppProperty> = {
    ["setTitle"](state: AppProperty, payload) {
        state.title = payload;
    },
};

export default {
    state: new AppProperty(),
    getters,
    mutations
}