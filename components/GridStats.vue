<script setup lang="ts">
const props = defineProps<{
  stats: {
    value: string | number;
    text: string;
  }[];
}>();
</script>

<template>
  <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
    <Stats v-for="stat in props.stats" :key="stat.text" :value="stat.value" :text="stat.text" />
  </div>
</template>

<style scoped></style>
