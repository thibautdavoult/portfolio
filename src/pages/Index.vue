<template>
  <Layout>

    <div>
      👷 Posts are WIP 👷
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
      

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
      }
    }
  }
}
</page-query>


<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="stylus">

.home-links 
  a
    margin-right 1rem

.title
  text-align center

.author-container
  display flex

.author-image
  margin auto
  border-radius 100%
  margin-bottom 1em

</style>
