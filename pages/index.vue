<script setup lang="ts">
import type { BlogSectionProps } from '@/types/BlogSectionProps';
import type { HomeSectionProps } from '@/types/HomeSectionProps';
import type { ProjectsSectionProps } from '@/types/ProjectsSectionProps';
import type { ServicesSectionProps } from '@/types/ServicesSectionProps';

const home: HomeSectionProps = {
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

const projects: ProjectsSectionProps = {
  title: "Meus Projetos",
  subtitle: "Projetos Pessoais",
  description: "Explore os projetos pessoais que desenvolvi ao longo da minha carreira. Cada projeto reflete minha paixão por tecnologia e meu compromisso com a excelência. Confira abaixo para saber mais sobre cada um deles.",
  projects: [
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
  ]
}

const blog: BlogSectionProps = {
  title: "Blog",
  subtitle: "Tag line",
  description: "Bem-vindo ao meu blog! Aqui você encontrará artigos sobre desenvolvimento web, dicas de programação, tutoriais e muito mais. Acompanhe minhas postagens para se manter atualizado com as últimas tendências e melhores práticas do setor.",
  textLink: "Explorar todas as postagens",
  // posts: []
}

const service: ServicesSectionProps = {
  title: "Como posso lhe ajudar?",
  description: "Ofereço uma variedade de serviços no desenvolvimento de soluções web personalizadas, com foco na experiência do usuário e performance.Abaixo estão alguns dos principais serviços que ofereço: ",
  textLink: "Entre em contato",
  services: [
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
  ]
}

</script>

<template>
  <div>
    <SectionHome v-bind="home" />
    <SectionAbout v-bind="about" />
    <SectionProjects v-bind="projects" />
    <SectionServices v-bind="service" />
    <SectionBlog v-bind="blog" />
    <SectionContact />
  </div>
</template>

<style scoped></style>
