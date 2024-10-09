<script setup lang="ts">
const home = {
  title: "Olá, sou Werlesson, Desenvolvedor Web",
  description: "Sou um desenvolvedor especializado em frontend, com foco em criar interfaces modernas e de alta performance.Tenho experiência em tecnologias como Nuxt.js e Next.js, que me permitem construir aplicativos web otimizados e escaláveis.",
  textButtonPrimary: "Entre em contato",
  textButtonSecondary: "Leia a documentação"
}

const about = {
  title: "Sobre mim",
  textButton: "Ler mais",
  description: "Sou um desenvolvedor web com anos de experiência no desenvolvimento de soluções digitais. Minha paixão é criar interfaces intuitivas e interativas que melhoram a experiência do usuário. Ao longo da minha carreira, tenho me especializado em frameworks como Nuxt e Next.js, o que me permite construir projetos rápidos, eficientes e otimizados para SEO.",
  stats: [
    { value: '10+', text: 'Anos de experiência' },
    { value: '30+', text: 'Projetos de sucesso' },
  ]
}
</script>

<template>
  <div>
    <SectionHome v-bind="home" />
    <SectionAbout v-bind="about" />
    <SectionProjects />
    <SectionServices />
    <SectionBlog />
    <SectionContact />
  </div>
</template>

<style scoped></style>
