<template>
  <div class="chat-input">
    <textarea
      type="text" 
      class="chat-input__input"
      placeholder="Введите текст..."
    />
    <div class="chat-input__input">
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
  }
}
</script>

<style>
.chat-input{
  width:100%;
}
.chat-input__input{
  color: #7D8790;
}
.chat-input__send{
  background-color: #398BFF;
  height: 100%;
  min-height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>