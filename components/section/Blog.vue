<script setup lang="ts">
import type { Post } from '@/types/Post';
import type { BlogSectionProps } from '@/types/BlogSectionProps';

const props = withDefaults(defineProps<BlogSectionProps>(), {
  title: 'Blog Posts',
  subtitle: 'Tag Line',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
  textLink: 'Explore all posts',
  posts: (): Post[] => [
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
})
</script>

<template>
  <section id="blog" class="py-32 bg-indigo-300 shadow-sm">
    <div class="container flex flex-col items-center gap-16 lg:px-16">
      <div class="text-center">
        <p class="mb-6 text-xs font-medium uppercase tracking-wider">{{ props.subtitle }}</p>
        <h2 class="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
          {{ props.title }}
        </h2>
        <p class="mb-8 text-zinc-700 md:text-base lg:max-w-2xl lg:text-lg">{{ props.description }}</p>
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-zinc-600 underline-offset-4 hover:underline h-10 px-4 py-2 w-full sm:w-auto">
          {{ props.textLink }}
          <LucideArrowRight class="w-4 h-4 ml-2" />
        </button>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <BlogCardPost v-for="post in props.posts" :post="post" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
