<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string;
  description: string;
  textButton: string;
  stats: {
    value: string | number;
    text: string;
  }[]
}>(), {
  title: "Título",
  description: "Descrição a ser acrescenta",
  textButton: "Botão",
  stats: []
});
</script>

<template>
  <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
        <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
          <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
            <img class="h-96 w-72 rounded-xl object-cover"
              src="https://img.freepik.com/premium-photo/project-managers-work-new-idea-www-software-development-mobile-app-developer-innovative-startup-project-website-programming-code-it-business_372999-2226.jpg?w=360"
              alt="about Us image" />
          </div>
          <img class="sm:ml-0 ml-auto rounded-xl object-cover h-96 w-72"
            src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1728398991~exp=1728402591~hmac=6f00c296c62ff348a846a73a0d614ca83f1fa6be542b71a83eb151bc7024fdcf&w=996"
            alt="about Us image" />
        </div>
        <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
          <div class="w-full flex-col justify-center items-start gap-8 flex">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                {{ props.title }}
              </h2>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                {{ props.description }}
              </p>
            </div>
            <GridStats :stats="props.stats" />
          </div>
          <button
            class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
            <span class="px-1.5 text-white text-sm font-medium leading-6">{{ textButton }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped></style>
