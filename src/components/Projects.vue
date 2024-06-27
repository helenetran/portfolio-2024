<script setup>
const projects = [
  { client: 'Framar', title: 'Doing this and that', websiteName: 'framar.com', website: 'https://framar.com', keywords: 'Shopify | javascript | css', image: new URL('@/assets/projects-images/framar.png', import.meta.url).href },
  { client: 'Everhome', title: '', websiteName: 'everhome.co', website: 'https://everhome.co', keywords: 'Shopify | javascript | css', image: new URL('@/assets/projects-images/everhome.png', import.meta.url).href },
  { client: 'Credibility Institute', title: '', websiteName: 'evaluation361.com', website: 'www.evaluation361.com', keywords: 'Vue.js | javascript | css', image: new URL('@/assets/projects-images/evaluation361.png', import.meta.url).href },
  { client: 'Groupe Chênevert', title: '', websiteName: 'groupechenevert.com', website: 'www.groupechenevert.com', keywords: 'Vue.js | javascript | css', image: new URL('@/assets/projects-images/groupe-chenevert.png', import.meta.url).href },
  { client: 'Vanderbrand', title: '', websiteName: 'onedelisle.com', website: 'https://onedelisle.com', keywords: 'Vue.js | javascript | css', image: new URL('@/assets/projects-images/onedelisle.png', import.meta.url).href },
  { client: 'Superhumans', title: '', websiteName: 'superhumans.it', website: 'https://superhumans.it', keywords: 'Vue.js | javascript | css', image: new URL('@/assets/projects-images/superhumans.png', import.meta.url).href },
  { client: 'Sweet Cocktails', title: '', websiteName: 'sweetcocktails.com', website: 'https://sweetcocktails.com', keywords: 'Vue.js | javascript | css', image: new URL('@/assets/projects-images/sweetcocktails.png', import.meta.url).href }
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
        padding-top: 6px;
      }
    }
  }

  .project:nth-child(even) {flex-direction: row-reverse;}
}
</style>
