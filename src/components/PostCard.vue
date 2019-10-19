<template>
    <div class="post-card content-box">
        <h2 v-html="post.title" />
        <p v-html="post.description" />
        <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
</template>

<script>
export default {
    props: ['post'],
}
</script>

<style scoped lang="stylus">

.post-card
  position relative
  &:hover
      box-shadow inset 0px 35px 0px -30px $link-color, 0 0px 0px 0 rgba(0,0,0,.1)

    .post-card__link
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      opacity 0.0
      overflow hidden
      text-indent -9999px
      z-index 0

    p
        margin-bottom 10px


</style>