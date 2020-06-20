<template>
  <div class="list">
		<div class="list-title">
			<span class="list-title__text">Сообщения<span class="list-title__count">151</span></span>
		</div>
		<div class="list-container">
			<div
				v-for="(item, index) in chatList"	
				:key="index"
				class="list-item"
				:class="{
					'list-item_active': index === activeIndex
				}"
				@click="setActiveIndex(index, item.id)"
			> 
				<span class="list-item__subject">{{ item.subject }}</span>
				<span class="list-item__date">{{ item.date }}</span>
				<span class="list-item__text">{{ item.text | trimListItemText }}</span>
			</div>
		</div>
	</div>
</template>
<script>
// TODO Fix list-item__text
// TODO Add Fonts
export default {
	name: "ChatList",
	filters: {
		trimListItemText: function(text){
			return text.substr(0, 40) + ' ...';
		}
	},
	data: () => ({
		activeIndex: 0,
	}),
	computed: {
		chatList(){
			return this.$store.state.chatList;
		}
	},
	methods: {
		setActiveIndex: function(index, id){
			this.activeIndex = index;
			this.$store.dispatch('handleChangeConversation', id)
		}
	}
}
</script>
<style>
.list {
	background: #F3F6F8;
	min-width: 300px;
	width: 300px;
}
.list-title{
	text-align: left;
	padding: 24px 0 16px 20px;
	border-bottom:  1px solid #E9EDF2;
}
.list-title__text{
	font-size: 14px;
	line-height: 20px;
	color: #656B77;
}
.list-title__count{
	font-size: 14px;
	line-height: 20px;
	color: #D2D8DE;
	margin-left: 10px;
}
.list-container{
	max-height: 660px;
	overflow-y: auto;

}
.list-container::-webkit-scrollbar {
  width: 2px;
}
.list-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.list-container::-webkit-scrollbar-thumb {
  background: #aaa;
	border-radius: 50px;
}
.list-container::-webkit-scrollbar-thumb:hover {
  background: #888;
}
.list-item{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 20px 20px 10px 20px;
	min-height: 100px;
	width: 100%;
	border-bottom: 1px solid #E9EDF2;
	cursor: default;
}
.list-item:hover{
	background-color: #E3E6E8;
}
.list-item_active{
	background-color: #FFFFFF;
	border-left: #398BFF 2px solid;
}
.list-item__subject{
	font-size: 14px;
	line-height: 20px;
	color: #35383D;
	width: 50%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.list-item__date{
	font-size: 10px;
	line-height: 14px;
	text-align: right;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #B7C0C8;
}
.list-item__text{
	width: 100%;
	text-align: left;
}
</style>