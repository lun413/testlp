<template>
  <div class="chat-conversation">
    <chat-dialog />
    <chat-input />
  </div>
</template>
<script>
import chatDialog from "./partials/ChatDialog.vue"
import chatInput from "./partials/ChatInput.vue"
export default {
  name: "ChatConversation",
  components: {
    'chat-dialog': chatDialog,
    'chat-input': chatInput,
  },
}
</script>

<style>
.chat-conversation{
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>