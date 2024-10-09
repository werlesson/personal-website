<script setup lang="ts">
const props = defineProps<{
  project: {
    name: string;
    role: string;
    description: string;
    image: string; // Adiciona a propriedade image
  };
}>();
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <div class="mb-4 aspect-square rounded-xl w-full shrink-0 overflow-clip bg-zinc-100 sm:mb-0 sm:mr-5 sm:size-48">
      <img :src="props.project.image" alt="Project Image" class="w-full h-full object-cover" />
      <!-- Adiciona a imagem -->
    </div>
    <div class="flex flex-1 flex-col items-start">
      <p class="w-full text-left font-medium">{{ props.project.name }}</p>
      <p class="w-full text-left text-zinc-600">{{ props.project.role }}</p>
      <p class="w-full py-2 text-sm text-zinc-600">{{ props.project.description }}</p>
      <div class="my-2 flex items-start gap-4">
        <a href="#">
          <LucideGithub size="20" class="text-gray-600" />
        </a>
        <a href="#">
          <LucideExternalLink size="20" class="text-gray-600" />
        </a>
      </div>
    </div>
  </div>
</template>
