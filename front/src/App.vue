<template>
  <div id="app">
    <loader></loader>
    <nav-bar></nav-bar>
    <router-view></router-view>    
  </div>
</template>

<script>
import Loader from './components/Loader'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
    'loader': Loader
  },
  
  async mounted () {
    this.$store.dispatch("uxModule/setLoaderMsg", "Loading Tweets...")
    await this.$store.dispatch('homeModule/getAllTweets')
    this.$store.dispatch("uxModule/setLoader", false)
  }
}
</script>
