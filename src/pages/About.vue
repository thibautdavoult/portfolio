<template>
  <Layout>
    <h1>Want to grab a ☕?</h1>
    Contact: {firstName}.{lastName}@gmail.com || <a style="text-decoration:none" href="https://twitter.com/thibautdavoult">@thibautdavoult</a>
    <div class="resume">
      <h2 class="resume__subtitle">Resume</h2>
      <h3 class="resume__entry">Livestorm</h3>
      <p class="resume__dates">2017 - now</p>
      <ul>
        <li>4th employee, 1st marketing hire</li>
        <li>From 1st marketing hire to building team of 4</li>
        <li>From 100 to 1000+ customers</li>
        <li>From seed to Series A +</li>
      </ul>
      <h3 class="resume__entry">Ironhack Webdev Bootcamp</h3>
      <p class="resume__dates">2017</p>
      <ul>
        <li>Fullstack JS course (Node.js, Vue)</li>
        <li>Built 3 apps</li>
      </ul>
      <h3 class="resume__entry">Wisembly</h3>
      <p class="resume__dates">2015 - 2017</p>
      <ul>
        <li>Launched app from private beta to 20k+ users</li>
        <li>Hired & managed 1 CS rep</li>
        <li>Managed EN and FR content</li>
      </ul>
      <h3 class="resume__entry">TOTEMS</h3>
      <p class="resume__dates">2012 - 2015 (acq: Stripe)</p>
      <ul>
        <li>Managed 1 rebranding & 3 product launches</li>
        <li>Published on Forbes, Moz, Kiss Metrics, Social Media Examiner</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Work with me'
  }
}
</script>

<style lang="stylus">

.resume 
  .resume__subtitle
    color $title-color
    border-bottom solid $title-color 4px
    
  .resume__entry
    color rgba($title-color, 0.8)
    font-size $base-font-size * 1.3
    margin-bottom 0

  .resume__dates
    font-size $base-font-size * 0.85
    color $title-color
    margin-bottom $s-space

  ul
    margin-left 0
    list-style-type none
    li
      margin-bottom 0
</style>
