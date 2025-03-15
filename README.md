# Personal Portfolio & Blog

A modern personal website built with Nuxt 3, featuring a blog system that uses markdown files.

## Features

- 🎨 Modern, responsive design with dark mode support
- 📝 Blog system using markdown files
- 🚀 Built with Nuxt 3 and Vue 3 Composition API
- 🎯 TypeScript support
- 🎨 TailwindCSS for styling
- 📱 Mobile-friendly
- ⚡️ Fast page loads with static site generation

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Blog Posts

1. Create a new markdown file in the `content/blog` directory
2. Add front matter at the top of the file:
   ```md
   ---
   title: Your Post Title
   description: A brief description of your post
   date: YYYY-MM-DD
   ---
   ```
3. Write your post content in markdown format
4. The post will automatically appear in the blog listing

## Project Structure

- `app.vue` - Main app component
- `pages/` - Vue components for each route
  - `index.vue` - Home page
  - `blog/index.vue` - Blog listing
  - `blog/[...slug].vue` - Individual blog post pages
- `content/blog/` - Markdown files for blog posts
- `public/` - Static assets

## Technologies Used

- [Nuxt 3](https://nuxt.com)
- [Vue 3](https://vuejs.org)
- [Nuxt Content](https://content.nuxtjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## License

MIT
