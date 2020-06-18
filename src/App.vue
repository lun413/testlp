<template>
  <div id="app">
    <chat />
  </div>
</template>

<script>
import Chat from './components/chat'

export default {
  name: 'App',
  components: {
    Chat
  }
}
</script>

<style>
@import "~normalize.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
