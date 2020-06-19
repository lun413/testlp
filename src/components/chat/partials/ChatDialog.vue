<template>
  <div 
    id="dialog-container"
    class="chat-dialog"
  >
    <dialog-bubble />
    <dialog-signature />
    <dialog-bubble right />
    <dialog-signature right />
    <dialog-bubble />
    <dialog-signature />
    <dialog-bubble right />
    <dialog-signature right />
    <dialog-bubble />
    <dialog-signature />
    <dialog-bubble right />
    <dialog-signature right />
  </div>
</template>

<script>
import DialogBubble from "./dialog/DialogBubble"
import DialogSignature from "./dialog/DialogSignature"

export default {
  name: "ChatDialog",
  components: {
    "dialog-bubble": DialogBubble,
    "dialog-signature": DialogSignature
  },
  methods: {
    scollToBottom: function(){
      this.$nextTick(() => {
        this.$el.scrollTop = this.$el.scrollHeight;
      });
    }
  },
  mounted: function (){
    this.scollToBottom();
  },
  
}
</script>

<style>
.chat-dialog {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: flex-end; DO NOT USE: breaks scrolling */
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 24px 16px 24px 40px;
}
#container > :first-child {
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