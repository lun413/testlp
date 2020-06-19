<template>
	<div class="chat">
		<chat-list :list="list" />
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
	
	mounted: function() {
		this.list = [1,2,3,4,5,6,7,8,9]
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