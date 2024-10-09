<script setup lang="ts">
import { ref, resolveComponent } from 'vue';

const services = ref([
  {
    title: 'Desenvolvimento de Aplicações Web com Nuxt.js e Next.js',
    description: 'Construção de aplicações web modernas e otimizadas com foco em performance e SEO.',
    icon: 'Code'
  },
  {
    title: 'Interfaces Responsivas e Otimizadas',
    description: 'Desenvolvimento de interfaces que se adaptam a diferentes dispositivos e tamanhos de tela, proporcionando uma ótima experiência de usuário.',
    icon: 'MonitorSmartphone'
  },
  {
    title: 'Consultoria e Revisão de Código',
    description: 'Revisão técnica de código para garantir qualidade, boas práticas e escalabilidade em projetos web.',
    icon: 'MessageCircleCode'
  },
  {
    title: 'Websites e Aplicações Customizadas',
    description: 'Criação de soluções web personalizadas, adaptadas às necessidades específicas de cada cliente ou negócio.',
    icon: 'Globe'
  },
]);


</script>

<template>
  <section class="py-24 ">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
        <div class="relative w-full text-center lg:text-left lg:w-2/4">
          <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
            Como posso lhe ajudar?</h2>
        </div>
        <div class="relative w-full text-center  lg:text-left lg:w-2/4">
          <p class="text-lg font-normal text-gray-500 mb-5">Ofereço uma variedade de serviços no desenvolvimento de
            soluções web personalizadas, com foco na experiência do usuário e performance. Abaixo estão alguns dos
            principais serviços que ofereço:</p>
          <a href="#"
            class="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700 ">
            Entre em contato
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        class="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
        <ServiceCard v-for="service in services" :service="service" :key="service.title" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
