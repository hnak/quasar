import Vuex, { MutationTree } from 'vuex';

class Socket {
  public message: string = '';
  public isConnected: boolean = false;
  public reconnectError: boolean = false;
}

const getters: MutationTree<Socket> = {
  message: state => state.message,
  isConnected: state => state.isConnected,
  reconnectError: state => state.reconnectError,
};

const mutations: MutationTree<Socket> = {
  ['SOCKET_ONOPEN'](state: Socket, event) {
    state.isConnected = true;
  },
  ['SOCKET_ONCLOSE'](state: Socket, event) {
    state.isConnected = false;
  },
  ['SOCKET_ONERROR'](state: Socket, event) {
    console.error(state, event);
  },
  ['SOCKET_ONMESSAGE'](state: Socket, message) {
    state.message = message;
  },
  ['ws.WS_RECONNECT'](state: Socket, count) {
    console.info(state, count);
  },
  ['ws.WS_RECONNECT_ERROR'](state: Socket) {
    state.reconnectError = true;
  },
};

export default {
  state: new Socket(),
  getters,
  mutations,
};
