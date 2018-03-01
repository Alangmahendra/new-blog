<template>
  <div>
    <H1>
      Welcome To My Blog
    </H1>
    <b-button variant="outline-success" size="lg" @click="toBlog"> my blog</b-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toBlog () {
      this.$router.push({name: 'Blog'})
    }
  }
}
</script>

<style>

</style>
