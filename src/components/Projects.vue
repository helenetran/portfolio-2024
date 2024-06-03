<script setup>
const projects = [
  { client: 'Framar', title: 'Doing this and that', website: 'css | javascript', keywords: '', image: new URL('@/assets/projects-images/framar.png', import.meta.url).href },
  { client: 'Everhome', title: '', website: '', keywords: '', image: new URL('@/assets/projects-images/everhome.png', import.meta.url).href },
  { client: 'Evaluation 361', title: '', website: '', keywords: '', image: new URL('@/assets/projects-images/framar.png', import.meta.url).href },
  { client: 'Groupe Chênevert', title: '', website: '', keywords: '', image: new URL('@/assets/projects-images/framar.png', import.meta.url).href },
  { client: 'Vanderbrand', title: '', website: '', keywords: '', image: new URL('@/assets/projects-images/framar.png', import.meta.url).href },
  { client: 'Superhumans', title: '', website: '', keywords: '', image: new URL('@/assets/projects-images/framar.png', import.meta.url).href },
  { client: 'Sweet Cocktails', title: '', website: '', keywords: '', image: new URL('@/assets/projects-images/framar.png', import.meta.url).href }
]
</script>

<template lang="pug">
div
  h1 Projects
  div.projects
    .project(v-for="(item, i) in projects" :key="i")
      .project__description.description
        .description__client Client: {{ item.client }}
        .description__title {{ item.title }}
        .description__website {{ item.website }}
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
      max-height: 35vh;
      overflow: hidden;

      img {height: 100%;}
    }

    .description {
      div {padding-bottom: 5px;}

      &__client {
        color: var(--secondary-color);
        font-style: italic;
        font-family: CaviarDreamsBold;
        font-size: 14px;
      }

      &__title {
        font-family: 'CaviarDreamsBold';
      }
    }
  }

  .project:nth-child(even) {flex-direction: row-reverse;}
}
</style>
