<template>
  <div 
    id="dialog-container"
    class="chat-dialog"
  >
    <Loader 
      v-if="loading" 
      :type="'spinner'"
    />
    <template 
      v-else
      v-for="(item, index) in conversation"
    >
      <dialog-bubble
        :key="'bubble'+index"
        :text="item.text"
        :right="item.author === 'petya'"
      />
      <dialog-signature 
        :key="'signature_'+index"
        :user="item.author"
        :date="item.created"
        :right="item.author === 'petya'"
      />
    </template>
  </div>
</template>
  
<script>
import DialogBubble from "./dialog/DialogBubble"
import DialogSignature from "./dialog/DialogSignature"
import Loader from "./Loader"

export default {
  name: "ChatDialog",
  components: {
    Loader,
    "dialog-bubble": DialogBubble,
    "dialog-signature": DialogSignature
  },
  props: {
    conversationId: {
      type: Number,
      required: true,
    }
  },
  data(){
    return {
      loading: false
    }
  },
  methods: {
    scollToBottom: function(){
      this.$nextTick(() => {
        this.$el.scrollTop = this.$el.scrollHeight;
      });
    }
  },
  computed:{
    conversation: function(){
      return this.$store.getters['getConversationById'](this.conversationId);
    }
  },
  watch: {
    conversationId: function(){
      this.loading = true;
      window.setTimeout(() => {
        this.loading = false;
      }, 1000)
    }
  },
  mounted: function (){
    this.scollToBottom();
  },
  updated: function() {
    this.scollToBottom();
  }
}
</script>

<style>
.chat-dialog {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: flex-end; DO NOT USE: breaks scrolling */
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 24px 16px 24px 40px;
}
.chat-dialog > :first-child {
    margin-top: auto !important;
    /* use !important to prevent breakage from child margin settings */
}
.chat-dialog::-webkit-scrollbar {
  width: 2px;
}
.chat-dialog::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.chat-dialog::-webkit-scrollbar-thumb {
  background: #aaa;
	border-radius: 50px;
}
.chat-dialog::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>