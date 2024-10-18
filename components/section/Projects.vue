<script setup lang="ts">
import type { Project } from '@/types/Project';
import type { ProjectsSectionProps } from '@/types/ProjectsSectionProps';

const props = withDefaults(defineProps<ProjectsSectionProps>(), {
  title: "Título",
  subtitle: "Subtítulo",
  description: "Descrição a ser acrescenta",
  projects: (): Project[] => []
});
</script>

<template>
  <section id="projetos" class="py-32 bg-indigo-300">
    <div class="container flex flex-col items-center text-center">
      <p class="semibold">{{ props.subtitle }}</p>
      <h2 class="my-6 text-pretty text-2xl font-bold lg:text-4xl">{{ props.title }}</h2>
      <p class="mb-8 max-w-3xl text-zinc-700 lg:text-xl">{{ props.description }}</p>
      <!-- <div class="flex w-full flex-col justify-center gap-2 sm:flex-row">
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
          Secondary</button><button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
          Primary
        </button>
      </div> -->
    </div>
    <div class="container mt-16 grid gap-x-12 gap-y-8 lg:grid-cols-2">
      <ProjectCard v-for="project in props.projects" :project="project" />
    </div>
  </section>

</template>

<style scoped></style>
