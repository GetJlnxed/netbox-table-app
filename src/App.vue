<template>
  <div id="app" class="app">
    <div class="app__outer">
      <vTable msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import vTable from "./components/v-table.vue";

export default {
  name: "App",
  components: {
    vTable
  }
};
</script>

<style lang="stylus">
body {
  margin: 0;
  padding: 0;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button
  width auto
  padding 5px 10px
  box-sizing border-box
  background-color #29B6F6
  border 1px solid @background-color
  border-radius 2px
  transition background-color .3s 0s
  outline none
  cursor pointer
  &:disabled
    background-color #E0E0E0
    color #9E9E9E
    border: 1px solid @color;
  &:enabled
    &.invisible
      border: none
    &:hover
      background-color lighten(@background-color, 50%)
    &:active
      background-color lighten(@background-color, 100%)
    &.selected
      background-color #558B2F
      color #fff
      border-color @background-color
      &:hover
        background-color darken(@background-color, 10%)
      &:active 
        background-color darken(@background-color, 40%)

.app__outer {
  display: flex;
  width: 80%;
  height 80%
  margin-right: auto;
  margin-left: auto;
  justify-content center;
}
</style>
