<template>
    <Layout>
        <div class="post-title">
            <h1 class="post-title__text">
                {{ $page.post.title }}
            </h1>
        </div>
        <div class="post content-box">
            <div class="post__content" v-html="$page.post.content" />
        </div>
    </Layout>
</template>


<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<style lang="stylus">

.post-title
    text-align center
    margin $space 0

.body
  max-width $content-width
  width 100%
  height 100%
  background-color rgba($bg-color, .05)
  border-radius $radius
  padding $space

.post
  .post__content
    img
      width 100%
      margin 0 auto
      display block
      max-width none
    li
      list-style initial

</style>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>