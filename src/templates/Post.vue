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

<style lang="scss">

.post-title {
    text-align: center;
    margin: var(--space) 0;
}

.body {
    max-width: var(--content-width);
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: var(--radius);
    padding: var(--space);
}

.post {
    &__content {
        img {
            width: calc(100% + var(--space) * 2);
            margin-left: calc(var(--space) * -1);
            display: block;
            max-width: none;
        }
    }
}


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