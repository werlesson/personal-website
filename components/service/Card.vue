<script setup lang="ts">
import type { Service } from "@/types/Service";
import * as icons from "lucide-vue-next";
import { computed } from "vue";

const props = defineProps<{
  service: Service;
}>();

const icon: any = computed(() => icons[props.service.icon as keyof typeof icons]);
</script>

<template>
  <article
    class="shadow-sm group relative w-full bg-gray-100 rounded-2xl p-6 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-72 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
    <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
      <component :is="icon" :size="24" class="text-gray-900 group-hover:text-indigo-600" />
    </div>
    <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
      {{ props.service.title }}
    </h4>
    <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
      {{ props.service.description }}
    </p>
  </article>
</template>

<style scoped></style>
