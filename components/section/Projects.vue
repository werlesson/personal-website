<script setup lang="ts">
const projects = ref([
  {
    name: 'Project 1',
    role: 'Frontend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    image: "https://img.freepik.com/vetores-gratis/conceito-de-interface-de-aplicativo-de-caridade_23-2148614213.jpg?t=st=1728395711~exp=1728399311~hmac=4ebaef688428ae0f3f7acc37f4539b7945bc3992899a92033123adf4cc607986&w=996"
  },
  {
    name: 'Project 2',
    role: 'Backend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    image: "https://img.freepik.com/vetores-gratis/entregador-e-destinatario-que-inclinando-se-no-smartphone-com-pino_74855-5325.jpg?t=st=1728395756~exp=1728399356~hmac=d346b089a92a1a3c2a1118359288718d139bf62009528900e1aa41e5abe72955&w=1060"
  },
  {
    name: 'Project 3',
    role: 'Fullstack Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.',
    image: "https://img.freepik.com/fotos-gratis/jovem-na-barbearia-aparando-cabelo_1303-26254.jpg?t=st=1728395796~exp=1728399396~hmac=6564991a93c9475d58b9854fd150af8d7f8b03c29829414705649ae86c7a44b6&w=996"
  },
  {
    name: 'Project 4',
    role: 'Role 4',
    description: 'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    image: "https://img.freepik.com/vetores-gratis/pagina-inicial-da-tecnologia-de-fluidos-gradiente-com-foto_23-2148271505.jpg?t=st=1728395835~exp=1728399435~hmac=b66a93a0f23210db11d347d0897742d973696a549f7d3d7fbccb9a980b27eedc&w=996"
  },
  {
    name: 'Project 5',
    role: 'Role 5',
    description: 'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    image: "https://img.freepik.com/psd-gratuitas/contacao-de-historias-para-pagina-de-destino-de-marketing_23-2148949969.jpg?t=st=1728395900~exp=1728399500~hmac=57ca8cb79db9f52156446da70e6e14f026a685d7244455d809773b7257f1b9af&w=1060"
  },
  {
    name: 'Project 6',
    role: 'Role 6',
    description: 'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    image: "https://img.freepik.com/vetores-gratis/pagina-inicial-de-consultoria-financeira-de-design-plano_23-2150863943.jpg?t=st=1728395937~exp=1728399537~hmac=31eb2cb237f17f7d544a89ee43ccd4d9a8aeafcf4dc87bdcfb762c6f98671def&w=1060"
  },
  {
    name: 'Project 7',
    role: 'Role 7',
    description: 'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    image: "https://img.freepik.com/psd-gratuitas/modelo-de-pagina-de-destino-de-agencia-de-marketing-digital_23-2148707095.jpg?t=st=1728395967~exp=1728399567~hmac=464809b5aaae0ae1577b24f52000661df33e93150850910987b3012cf1ec3d62&w=1060"
  },
  {
    name: 'Project 8',
    role: 'Role 8',
    description: 'Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
    image: "https://img.freepik.com/vetores-gratis/pagina-inicial-de-empresas-com-foto_23-2148312361.jpg?t=st=1728395988~exp=1728399588~hmac=135c3388452d7c59bfeb2666fb031be867b4eece01965b45e08d408a1ea7b502&w=996"
  },
])
</script>

<template>
  <section class="py-32 bg-gray-300">
    <div class="container flex flex-col items-center text-center">
      <p class="semibold">We&#x27;re hiring</p>
      <h2 class="my-6 text-pretty text-2xl font-bold lg:text-4xl">Projects</h2>
      <p class="mb-8 max-w-3xl text-zinc-600 lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
        omnis! Porro facilis quo animi consequatur. Explicabo.
      </p>
      <!-- <div class="flex w-full flex-col justify-center gap-2 sm:flex-row">
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
          Secondary</button><button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
          Primary
        </button>
      </div> -->
    </div>
    <div class="container mt-16 grid gap-x-12 gap-y-8 lg:grid-cols-2">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </section>

</template>

<style scoped></style>
