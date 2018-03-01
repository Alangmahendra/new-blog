<template>
  <div class="container" v-if="getArticles">
    <div class="row">
      <sidebar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import sidebar from './Sidebar'
export default {
  name: 'Blog',
  components: {sidebar},
  computed: {
  },
  mounted () {
    this.getArticles()
  },
  methods: {
    ...mapActions([
      'getArticles'
    ])
  }
}
</script>

<style>

</style>
