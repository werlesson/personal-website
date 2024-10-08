<script setup lang="ts"></script>

<template>
  <section class="bg-gray-100 relative overflow-hidden">
    <article class="py-32 relative z-10 lg:flex lg:items-end lg:min-h-screen">
      <div class="container">
        <div class="grid items-center gap-8 lg:grid-cols-2">
          <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 class="my-6 text-pretty text-3xl font-semibold lg:text-5xl">Olá, sou Werlesson, Desenvolvedor Web</h1>
            <p class="mb-8 max-w-xl text-zinc-600 lg:text-lg">
              Sou um desenvolvedor especializado em frontend, com foco em criar interfaces modernas e de alta
              performance. Tenho experiência em tecnologias como Nuxt.js e Next.js, que me permitem construir
              aplicativos web otimizados e escaláveis.
            </p>
            <div class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
                Entre em contato</button><button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-zinc-200 hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
                Read The Docs<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-arrow-down-right ml-2 size-4">
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- <img src="https://www.wickedblocks.dev/images/placeholders/minima/placeholder-1.jpg" alt="placeholder hero"
            class="max-h-96 w-full rounded-md object-cover" /> -->
        </div>
      </div>
    </article>
    <div class="absolute inset-0 z-0 bg-cover bg-center diagonal-cut"></div>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .diagonal-cut {
    background-image: url('/public/image/bg-home.avif');
    clip-path: polygon(75% 0, 100% 0, 100% 100%, 60% 100%);
    box-shadow: -10px 0 15px -5px rgba(0, 0, 0, 0.3);
  }
}
</style>
