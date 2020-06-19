import Vue from 'vue'
import Vuex from 'vuex'
import example from "./example.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
  },
  mutations: {
    setMessages: (state, payload) => {
      state.messages = payload;
    }
  },
  actions: {
    initMessages: (state) => {
      state.messages = example;
    }
  },
  getters: {
    getConversationById: state => id => (
      state.messages.find(element => 
        element.id === id
      ).parts
    )
  },
  modules: {
  }
});
