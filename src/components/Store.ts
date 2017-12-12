
import Vue from "vue";
import Vuex, { MutationTree } from "vuex";

Vue.use(Vuex);

class State {
    public categoryName = "果物";
    public items: Item[] = [new Item("りんご", 100), new Item("ばなな", 200), new Item("いちご", 300)];
    public isLogin = false;
    public title = 'ホーム';
}

class Item {
    public name: string;
    public price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

const getters: MutationTree<State> = {
    categoryName: (state) => state.categoryName,
    items: (state) => state.items,
    isLogin: (state) => state.isLogin,
    title: (state) => state.title,
};

const mutations: MutationTree<State> = {
    ["updatePriceById"](state: State, payload) {
        state.items[payload.id].price = payload.price;
    },
    ["updateCategoryName"](state: State, payload) {
        state.categoryName = payload;
    },
    ["doLogin"](state: State, payload) {
        state.isLogin = true;
    },
    ["doLogout"](state: State, payload) {
        state.isLogin = false;
    },
    ["setTitle"](state: State, payload) {
        state.title = payload;
    },
};

const store = new Vuex.Store({
    getters,
    mutations,
    state: new State(),
});

export default store;
