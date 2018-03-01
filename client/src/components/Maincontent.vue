<template>
  <div class="col-md-9">
    <div class="list-group">
      <articlesummary
      v-for="article in articles"
      :article="article"
      :key="article._id"
      >
      </articlesummary>
    </div>
  </div>
</template>

<script>

import articlesummary from './Articlesummary'
export default {
  components: {articlesummary},
  computed: {
    articles () {
      return this.$store.state.articles
    }
  }
}
</script>

<style>

</style>
