<script setup lang="ts">
import type { Service } from '@/types/Service';
import type { ServicesSectionProps } from '@/types/ServicesSectionProps';

// const services = ref();

const props = withDefaults(defineProps<ServicesSectionProps>(), {
  title: "Titulo",
  description: "Descrição:",
  textLink: "Texto do link",
  services: (): Service[] => []
});

</script>

<template>
  <section class="py-24 ">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
        <div class="relative w-full text-center lg:text-left lg:w-2/4">
          <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
            {{ props.title }}
          </h2>
        </div>
        <div class="relative w-full text-center  lg:text-left lg:w-2/4">
          <p class="text-lg font-normal text-gray-500 mb-5">
            {{ props.description }}
          </p>
          <a href="#"
            class="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700 ">
            {{ props.textLink }}
            <LucideChevronRight class="w-5 h-5" />
          </a>
        </div>
      </div>
      <div
        class="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
        <ServiceCard v-for="service in props.services" :service="service" :key="service.title" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
