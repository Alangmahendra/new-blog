<template>
  <div class="panel panel-success">
    <div class="panel-heading">
      Latest Article
    </div>
    <div class="panel-body">
      <div class="list-group">
        <router-link
        v-for="(article, index) in articles"
        :to="'/blog/'+ article._id"
        :key="index"
        >
        {{ article.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'articles'
    ])
  }
}
</script>

<style>

</style>
