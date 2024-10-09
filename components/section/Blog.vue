<script setup lang="ts">
const posts = [
  {
    title: 'Understanding Component Libraries and Their Benefits',
    description: 'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    image: 'https://www.wickedblocks.dev/images/placeholders/minima/placeholder-dark-1.jpg'
  },
  {
    title: 'Top 5 Component Libraries for React Developers',
    description: 'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    image: 'https://www.wickedblocks.dev/images/placeholders/minima/placeholder-dark-2.jpg'
  },
  {
    title: 'How to Choose the Right Component Library for Your Project',
    description: 'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    image: 'https://www.wickedblocks.dev/images/placeholders/minima/placeholder-dark-3.jpg'
  }
]
</script>

<template>
  <section class="py-32 bg-indigo-300">
    <div class="container flex flex-col items-center gap-16 lg:px-16">
      <div class="text-center">
        <p class="mb-6 text-xs font-medium uppercase tracking-wider">Tag Line</p>
        <h2 class="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
          Blog Posts
        </h2>
        <p class="mb-8 text-zinc-700 md:text-base lg:max-w-2xl lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
          omnis! Porro facilis quo animi consequatur. Explicabo.
        </p>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-zinc-600 underline-offset-4 hover:underline h-10 px-4 py-2 w-full sm:w-auto">
          Explore all posts<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-arrow-right ml-2 size-4">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <BlogCardPost v-for="post in posts" :post="post" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
