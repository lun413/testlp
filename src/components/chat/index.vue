<template>
	<div class="chat">
		<chat-list />
		<chat-conversation />
	</div>
</template>

<script>
import ChatList from "./ChatList"
import ChatConversation from "./ChatConversation"

export default {
	name: "Chat",
	data: () => ({
		list: [],
	}),
	components: {
		"chat-list": ChatList,
		"chat-conversation": ChatConversation
	}, 
	
	beforeCreate: function() {
		this.$store.dispatch("initChat");
	},
}
</script>

<style>
.chat{
	display: flex;
	width: 100%;
	max-width: 980px;
	height: 719px;
	max-height: 95vh;
	box-shadow: black 0px 0px 30px -10px;
}
</style>