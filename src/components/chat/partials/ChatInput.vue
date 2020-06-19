<template>
  <div class="chat-input">
    <textarea
      type="text" 
      class="chat-input__textarea"
      placeholder="Введите текст..."
      :disabled="textareaDisabled"
      :rows="lineCount"
      v-model="textareaValue"
    />
    <div 
      class="chat-input__send-btn"
      :class="{
        'chat-input__send-btn_disabled': textareaDisabled
      }"
      @click="sendMessage"
    >
      <SendIcon />
    </div>
  </div>
</template>

<script>
// TODO import from root path
//import SendIcon from "src/assets/svg/chat-send.svg"
import SendIcon from "./chat-send-icon.svg"

export default {
  name: 'ChatInput',
  components: {
    SendIcon
  },
  data: () => ({
    textareaValue: '',
    textareaDisabled: false
  }),
  methods: {
    sendMessage: function(){
      if (!this.textareaDisabled){
        this.textareaDisabled = true;
        window.setTimeout(() => {
          console.log("Message sent!");
          this.textareaDisabled = false;
        }, 2000);
      }
    }
  },
  computed: {
    lineCount: function() {
      return this.textareaValue.split(/\r\n|\r|\n/).length
    }
  }
}
</script>

<style>
.chat-input{
  width:100%;
  display: flex;
}
.chat-input__textarea{
  flex: 1;
  padding: 30px;
  color: #7D8790;
  resize: none;
}
.chat-input__send-btn{
  background-color: #398BFF;
  height: 100%;
  min-height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chat-input__send-btn:hover{
  background-color: #297BEF;
  cursor: pointer;
}
.chat-input__send-btn:active{
  background-color: #499BFF;
}
.chat-input__send-btn_disabled{
  background-color: #7D8790;
  cursor: default;
}
.chat-input__send-btn_disabled:hover{
  background-color: #7D8790;
}
.chat-input__send-btn_disabled:active{
  background-color: #7D8790;
}
</style>