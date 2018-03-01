<template>
  <div class="col-md-9">
    <h2>{{ oneArticle.title }}</h2>
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <img :src="oneArticle.image" alt="harusnya gambar" class="image-responsive"/>
      </div>
    </div>
    <div class="row">
      <div id="article-content" class="col-md-12">
        <p>{{ oneArticle.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapState([
      'oneArticle'
    ])
  },
  created () {
    this.getOneArticle(this.id)
  },
  methods: {
    ...mapActions([
      'getOneArticle'
    ])
  },
  watch: {
    id (value) {
      this.getOneArticle(value)
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 0px;
}
#article-content {
  margin-top: 16px;
}
img{
  width: 500px;
  height: auto;
}
</style>
