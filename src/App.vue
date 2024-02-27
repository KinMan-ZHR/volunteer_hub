<template>
  <div id="app">
    <!-- <div style="display: flex; height: 100vh; overflow-y: hidden;">
      <div id="navigation">
        <NavigationRegion></NavigationRegion>
      </div>
      <router-view style="flex-grow: 1; background-color:antiquewhite;">

      </router-view>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import NavigationRegion from './components/NavigationRegion.vue'



export default{
  name: 'App',
//   components: {
//     NavigationRegion,
// }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
