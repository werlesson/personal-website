<script setup lang="ts">
import type { HomeSectionProps } from '@/types/HomeSectionProps';

const props = withDefaults(defineProps<HomeSectionProps>(), {
  title: "Título",
  description: "Descrição a ser acrescenta",
  textButtonPrimary: "Botão primário",
  textButtonSecondary: "Botão secundário"
});

</script>

<template>
  <section class="bg-indigo-100 relative overflow-hidden">
    <article class="py-32 relative z-10 lg:flex lg:items-end lg:min-h-screen">
      <div class="container">
        <div class="grid items-center gap-8 lg:grid-cols-2">
          <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 class="my-6 text-pretty text-3xl font-semibold lg:text-5xl">{{ props.title }}</h1>
            <p class="mb-8 max-w-xl text-zinc-600 lg:text-lg">{{ props.description }}</p>
            <div class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
                {{ props.textButtonPrimary }}
              </button>
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-indigo-200 hover:bg-indigo-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
                {{ props.textButtonSecondary }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
    <div class="absolute inset-0 z-0 bg-cover bg-center diagonal-cut"></div>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .diagonal-cut {
    background-image: url('/public/image/bg-home.avif');
    clip-path: polygon(75% 0, 100% 0, 100% 100%, 60% 100%);
    box-shadow: -10px 0 15px -5px rgba(0, 0, 0, 0.3);
  }
}
</style>
