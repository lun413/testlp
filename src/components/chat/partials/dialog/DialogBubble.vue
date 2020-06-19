<template>
  <div 
    class="chat-dialog__bubble"
    :class="{
      'chat-dialog__bubble_right': right
    }"
  >
    Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis ultrices mollitia porttitor praesentium animi ullamco eleifend scelerisque, sapien quam explicabo conubia egestas vehicula!
  </div>
</template>

<script>
export default {
  name: 'ChatDialogBubble',
  props: {
    right: {
      type: Boolean,
      default: false 
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
}
.chat-dialog__bubble_right {
  align-self: flex-end;
  background: #E9F5F4;
  border-radius: 8px 8px 0px 8px;
}
</style>