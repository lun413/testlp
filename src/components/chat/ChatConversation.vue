<template>
  <div class="chat-conversation">
    <chat-dialog 
      :conversationId="activeId" 
    />
    <chat-input />
  </div>
</template>
<script>
import chatDialog from "./partials/ChatDialog.vue"
import chatInput from "./partials/ChatInput.vue"
import { mapGetters } from "vuex"
export default {
  name: "ChatConversation",
  components: {
    'chat-dialog': chatDialog,
    'chat-input': chatInput,
  },
  computed: {
    ...mapGetters({
      activeId: 'getActiveConversationId'
    }),
  }
}
</script>

<style>
.chat-conversation{
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>