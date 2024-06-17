<script setup>
import { onMounted } from 'vue'

onMounted (() => {
  const body = document.getElementsByTagName('body')
  body[0].id = 'projects-page'
})

const projects = [
  {
    client: 'Framar',
    title: 'Fully customized e-commerce website developed using Shopify, featuring advanced integrations, responsive design, and enhanced user experience.',
    websiteName: 'framar.com',
    website: 'https://framar.com',
    keywords: 'Shopify | javascript | css',
    image: new URL('@/assets/projects-images/framar.webp', import.meta.url).href },
  {
    client: 'Everhome',
    title: 'Fully customized e-commerce website developed using Shopify, featuring advanced integrations, responsive design, and enhanced user experience.',
    websiteName: 'everhome.co',
    website: 'https://everhome.co', keywords: 'Shopify | javascript | css', image: new URL('@/assets/projects-images/everhome.webp', import.meta.url).href },
  {
    client: 'Credibility Institute',
    title: 'Dynamic web app for data visualization and statistical analysis using Vue.js & Firebase, featuring interactive graphs and real-time updates.',
    websiteName: 'evaluation361.com',
    website: 'www.evaluation361.com',
    keywords: 'Vue.js | javascript | css  | firebase', image: new URL('@/assets/projects-images/evaluation361.webp', import.meta.url).href },
  {
    client: 'Groupe Chênevert',
    title: 'Elegant website developed using Vue.js, featuring a responsive design and smooth user interactions.',
    websiteName: 'groupechenevert.com',
    website: 'www.groupechenevert.com',
    keywords: 'Vue.js | javascript | css',
    image: new URL('@/assets/projects-images/groupe-chenevert.webp', import.meta.url).href },
  {
    client: 'Vanderbrand',
    title: 'Sophisticated showcase website developed using Vue.js.',
    websiteName: 'onedelisle.com',
    website: 'https://onedelisle.com',
    keywords: 'Vue.js | javascript | css',
    image: new URL('@/assets/projects-images/onedelisle.webp', import.meta.url).href },
  {
    client: 'Superhumans',
    title: 'Showcase website developed with Vue.js, featuring GSAP animations and an engaging user experience.',
    websiteName: 'superhumans.it',
    website: 'https://superhumans.it',
    keywords: 'Vue.js | javascript | css',
    image: new URL('@/assets/projects-images/superhumans.webp', import.meta.url).href },
  {
    client: 'Sweet Cocktails',
    title: 'Dynamic hobby website about coooocktails using Vue.js and PHP, offering a vibrant user interface and interactive recipe exploration.',
    websiteName: 'sweetcocktails.com',
    website: 'https://sweetcocktails.com',
    keywords: 'Vue.js | javascript | css | PHP',
    image: new URL('@/assets/projects-images/sweetcocktails.webp', import.meta.url).href },
  {
    client: 'Eating with Helene :)',
    title: 'In my kitchen, What I do for fun.',
    websiteName: 'eatingwithhelene.com',
    website: 'https://eatingwithhelene.com',
    keywords: 'Vue.js | javascript | css | PHP',
    image: new URL('@/assets/projects-images/sweetcocktails.webp', import.meta.url).href }
]
</script>

<template lang="pug">
div
  h1 Projects
  div.projects
    .project(v-for="(item, i) in projects" :key="i")
      .project__description.description
        .description__client {{ item.client }}
        .description__title {{ item.title }}
        a.description__website(:href="item.website" target="_blank") {{ item.websiteName }}
        .description__keywords {{ item.keywords }}
      .project__image
        img(:src="item.image" alt="project name")
</template>

<style lang="scss">
.projects {
  padding: 20px;
  display: flex;
  flex-direction: column;

  .project {
    display: flex;
    justify-content: space-between;
    padding-bottom: 100px;

    &__image {
      max-width: 66%;
      max-height: 60vh;
      overflow: hidden;

      img {width: 100%;}
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: end;

      div {padding-bottom: 5px;}

      &__client {
        color: var(--secondary-color);
        font-style: italic;
        font-family: CaviarDreamsBold;
        font-size: 14px;
      }

      &__title {font-family: 'CaviarDreamsBold';}
      &__website {font-style: italic;}
      &__keywords {
        font-size: 12px;
        padding-top: 12px;
      }
    }
  }

  .project:nth-child(even) {
    flex-direction: row-reverse;
    .project__description {padding-left: 20px;}
  }
  .project:nth-child(odd) .project__description {padding-right: 20px;}
}
</style>
