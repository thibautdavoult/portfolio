---
title: Modern Static Websites & How to Optimize for Growth
date: 2019-10-20
published: true
series: false
canonical_url: false
description: "The JAMStack has revolutionized static website development. With more and more people in growth who know some code, these new stacks make websites flexible and allow for quick iterations. This article is a list of all the benefits, and an exploration of key points to think about when planning a static website that takes growth and scale into account."
---


The JAMStack has revolutionized static website development (and many other things on the web that I'm not advanced enough to truly understand). What is sure is that moving a company's static website away from the usual alternative of Wordpress can solve a lot of headaches and allow for quick iterations with minimal skills and workforce required.

# What is the JAMStack in regards to static web development?

JAMStack stands for Javascript + API + Markup. It is basically a way to show data online without having to host it on a server on your end. In regards to a static website, this is how it'll work:

1. Data source = CMS, API, etc.
2. Static site generator
3. Online host

## Static Site Generator

So how does it work? To unpack this, we'll start with the Static Site Generator (SSG in short). You can think of the SSG as the builder: you give them the plans for what your website will look like, how many pages of each type there are, and the data these pages contain, and they'll run through it and build all of it for the world to see.

SSGs are always built on top of a specific language or framework (we'll come back to why it's important). Here are some of the most popular options:
- Vue: Nuxt, Gridsome
- React: Next, Gatsby
- Ruby + html templating: Middleman, Jekyll
- Go: Hugo

It is possible to only use the SSG alone and directly add your pages and content within its folders for it to work. That's how this very blog works by the way. But for companies, the real magic happens with...

## Headless CMS

The CMS (we call it headless because its head is the SSG, and it's up to you to decide how you'll pair the CMS and the SSG.)

Popular options for headless CMS inclucde:
- Strapijs
- Prismic
- DatoCMS
- Contentful

The way it works is rather simple: Rather than to manually generate all your site's pages by creating files within your SSG's folders, you'll access the CMS's API with your SSG. You'll tell your SSG to go through the CMS's items the way you like, which they'll execute in order to generate your full website.

This gives you an extreme flexibility in the way you order your content in your CMS, but also how you use it. A simple example is: let's say, for your website, you want to show testimonials from customers, as well as their logos, and also want to display long-form customer success stories. You'll create a repeatable item for customers that can be iterated on that contains all this information. If the logo is present, it'll be added in the list of logos where you use it. If the story is present, it will create the page because that's how you coded your site. If the testimonial is present, it'll be added in the carousel of testimonials on your homepage because, guess what, that's also how you coded your site.

## Deployment

But the full extent of JAMStack's magic for static sites wouldn't be complete without talking about deployment. If you've ever been a marketing/growth employee with 0 dev knoweldge, you've experienced the pain of updating a website (and I mean creating a new page from scratch or changing something that goes beyond adding a blog post). Modern offers such as Netfify or Zeit Now allow you to parameter your site's deployment to make it easy for virtually anyone, dev or not, to test the site, and to deploy new version to production without doing any code.

Specifically for that, [Netlify](https://netlify.com) has really pushed the enveloppe in the number of features that are pretty much game changers from a growth team standpoint.

# The perfect static site for Growth teams

For a bit of context, we've been using DatoCMS + Middleman + Amazon's s3 for Livestorm's website since inception (3+ years ago). It worked, and still does, but it's starting to really show its limits. Problems have started to arise when the first non-technical employee joined the marketing team. And also, when the whole stack hasn't been updated in 3 years, with some tool's (languages, frameworks etc) versions that are now really, really, really old.

In short, here are issues we're having:

- No easy way to deploy the site without code
- The site deploys from everyone's local environment, this makes it easy to mistakenly deploy the wrong branch or an old version of master
- No easy way to collaborate on a file within the CMS
- It's possible to deploy the site while someone else still has some WIP items in the CMS, and that will get deployed too (no management of drafts/unpublished items)
- Developer experience isn't great (possibly debatable): Middleman separates css, templates and js. This makes it hard to access some variables in your js file, makes it tough to navigate through your project and literally makes cmd+shift+f (global search in project) the most reliable+fast way to find what you're looking for
- Code isn't easily maintainable by the frontend team allocated to the app. This could be helpful for specific projects when the dev in the growth team (yours truly, also pretty much a noob) needs a hand
- Only 1 staging site available at a time, again to be done from your local files, not the actual repo
- Relies on JQuery for JS/HTML interactions, which isn't exactly fun or friendly to use, + takes longer to write than Vue / React
- Site is slower than with newer SSGs
- A build rebuilds the entire site rather than the deltas that changed
- No GraphQL support. Which could be an issue if/when we decide to take data from the app.
- No management of lazy loading (apparently not really an issue now that it's built-in browsers so we could fix that with HTML)

## Easy deploys with Netlify

Netlify is both extremely easy to setup, and extremely easy to use. You can plug your Github repo to Netlify in order to deploy it to production. It's literally a no-code setup to connect the 2. Once done, you can decide what workflow you want. Do you want Netlify to deploy your site everytime the Master branch is updated? That's possible. Do you want to manually deploy from Netlify? That's also possible. Do you want to connect your CMS to Netlify so your collaborators can deploy by clicking a button on their CMS dashboard which triggers a build using the latest version of the CMS's items + the latest site version available on Github's master? That's also possible.