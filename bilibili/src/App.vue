<template>
  <div id="app">
    <Title />
    <Tabs />
    <RouterView/>
  </div>
</template>

<script>
import Tabs from "./components/tabs/Tabs";
import Title from "./components/title/Title";
import Rem from "./js/rem"

export default {
  name: "app",
  components: {
    Tabs,
    Title,
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
