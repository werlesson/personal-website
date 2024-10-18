<script setup lang="ts">
import type { Post } from '@/types/Post';

const props = defineProps<{
  post: Post
}>()

</script>

<template>
  <a href="#" class="flex flex-col overflow-clip rounded-xl border border-black">
    <div>
      <img :src="props.post.image" alt="algo" exploring UI Design
        class="aspect-[16/9] h-full w-full object-cover object-center" />
    </div>
    <div class="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
      <h3 class="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
        {{ props.post.title }}
      </h3>
      <p class="mb-3 text-zinc-600 md:mb-4 lg:mb-6">
        {{ props.post.description }}
      </p>
      <p class="flex items-center hover:underline">
        Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-arrow-right ml-2 size-4">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </p>
    </div>
  </a>
</template>

<style scoped></style>
