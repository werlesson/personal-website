<script setup lang="ts"></script>

<template>
  <div class="h-screen flex flex-col w-full">
    <LayoutNavbar />
    <div class="flex-1">
      <slot></slot>
    </div>
    <LayoutFooter />
  </div>
</template>

<style scoped></style>
