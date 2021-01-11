<template>
  <div id="app">
    <Navbar/>
  <AppMain/>
  <LearnMore/>
  </div>
</template>

<script>
import AppMain from './components/AppMain';
import LearnMore from './components/LearnMore';
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components:{ AppMain,LearnMore, Navbar},

}
</script>

<style lang="scss">

</style>
