<template>
  <div id="app">
  <AppMain/>
  <LearnMore/>
  </div>
</template>

<script>
import AppMain from './components/AppMain';
import LearnMore from './components/LearnMore';

export default {
  name: 'App',
  components:{ AppMain,LearnMore},

}
</script>

<style lang="scss">

</style>
