<template>
  <div 
    class="chat-dialog__bubble"
    :class="{
      'chat-dialog__bubble_right': right
    }"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'ChatDialogBubble',
  props: {
    right: {
      type: Boolean,
      default: false 
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.chat-dialog__bubble {
  background: #F6F7F9;
  max-width: 380px;
  border-radius: 8px 8px 8px 0px;
  padding: 21px 22px 16px;
  margin: 5px 0;
  text-align: left;
}
.chat-dialog__bubble_right {
  align-self: flex-end;
  background: #E9F5F4;
  border-radius: 8px 8px 0px 8px;
}
</style>