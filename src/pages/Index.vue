<template>
  <Layout>
    <p>
      {firstName}.{lastName}@gmail.com || <a href="https://twitter.com/thibautdavoult">@thibautdavoult</a> || <a href="https://www.linkedin.com/in/thibautdavoult/">in/thibautdavoult/</a>
      <br><br> 
      Growth and Marketing for B2B SaaS
    <div class="resume">
      <h2 class="resume__subtitle">Resume</h2>
      <h3 class="resume__entry">Livestorm</h3>
      <p class="resume__dates">2017 - now: Head of Growth</p>
      <ul>
        <li>From 1st marketing hire to building the Growth team</li>
        <li>From 100 to 10k+ customers</li>
        <li>From seed to Series B</li>
      </ul>
      <h3 class="resume__entry">Ironhack Webdev Bootcamp</h3>
      <p class="resume__dates">2017: Growth Manager</p>
      <ul>
        <li>Fullstack JS course (Node.js, Vue)</li>
      </ul>
      <h3 class="resume__entry">Wisembly</h3>
      <p class="resume__dates">2015 - 2017</p>
      <ul>
        <li>Launched app from private beta to 20k+ users</li>
        <li>Hired & managed 1 CS rep</li>
        <li>Managed EN and FR content</li>
      </ul>
      <h3 class="resume__entry">TOTEMS</h3>
      <p class="resume__dates">2012 - 2015 (acq: Stripe): Marketing Manager</p>
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
    margin 0 0 $s-space

  ul
    margin-left 0
    padding-left 0
    list-style-type none
    li
      margin-bottom 0
</style>
