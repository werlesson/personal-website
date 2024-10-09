<script setup lang="ts">
const props = defineProps<{
  value: string | number;
  text: string;
}>();
</script>

<template>
  <div class="flex-col justify-start items-start inline-flex">
    <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">{{ props.value }}</h3>
    <h6 class="text-gray-500 text-base font-normal leading-relaxed">{{ props.text }}</h6>
  </div>
</template>

<style scoped></style>
