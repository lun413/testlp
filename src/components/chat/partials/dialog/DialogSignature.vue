<template>
  <div 
    class="chat-dialog__signature"
    :class="{'chat-dialog__signature_right': right}"
  >
    <span class="chat-dialog__signature__name">{{ user }}</span>
    <span class="chat-dialog__signature__date">{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: "ChatDialogSignature",
  props: {
    right: {
      type: Boolean,
      default: false
    },
    user: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.chat-dialog__signature{
  margin: 5px 0 15px;
  text-align: left;
}
.chat-dialog__signature_right{
  align-self: flex-end;
  text-align: right;
}
.chat-dialog__signature__name{
  font-size: 13px;
  line-height: 18px;
  color: #000000;
  padding-right: 12px;
}
.chat-dialog__signature__date{
  font-size: 10px;
  line-height: 14px;
  color: #B7C0C8;
}
</style>