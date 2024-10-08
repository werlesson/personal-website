<script setup lang="ts">

const year = computed(() => new Date().getFullYear())

</script>

<template>
  <div class="h-52 py-8 border-t border-t-gray-200" style="height: 100px !important;">
    <div class="container flex justify-between items-center">
      <span>© Werlesson, todos os direitos reservados. {{ year }}</span>
      <div class="flex gap-2">
        <LucideGithub />
        <LucideLinkedin />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
