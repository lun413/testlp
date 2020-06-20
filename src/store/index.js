import Vue from 'vue'
import Vuex from 'vuex'
import example from "./example.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    chatList: [],
    activeConversationId: 1,
    conversationsById: {}
  },
  mutations: {
    setMessages: (state, payload) => {
      state.messages = payload;
    },
    setChatList: (state, payload) => {
      state.chatList = payload;
    },
    setConversationsById: (state, payload) => {
      state.conversationsById = payload;
    }, 
    setActiveConversationId: (state, payload) => {
      state.activeConversationId = payload;
    },
  },
  actions: {
    initChat: ({commit}) => {
      commit('setMessages', example)
      
      let chatList = example.map((item) => ({
        id: item.id,
        subject: item.subject,
        text: item.parts[item.parts.length - 1].text,
        date: item.parts[item.parts.length - 1].created,
      }))
      commit('setChatList', chatList);

      let conversations = example.reduce((acc, item) => {
        
        acc[item.id] = item.parts;
        return acc;
      },{});
      commit('setConversationsById', conversations);
    
    },
    handleChangeConversation: ({commit}, id) => {
      commit('setActiveConversationId', id)
    }
  },
  getters: {
    getChatList: (state) => (
      state.messages
    ),
    getConversationById: state => id => (
      state.conversationsById[id] 
    ),
    getActiveConversationId: state => state.activeConversationId
  },
  modules: {
  }
});
