<template lang="pug">
div
  h1 Projects
  div.projects
    .project
      .project__description.description
        .description__client Client name
        .description__title Doing this and that
        .description__website www.lorem.com
        .description__keywords css | javascript
      .project__image
        img(src="@/assets/projects-images/framar.png" alt="project name")
</template>

<style lang="scss">
.projects {
  padding: 20px;

  .project {
    display: flex;
    justify-content: space-between;

    &__image {
      max-width: 66%;
      max-height: 35vh;
      overflow: hidden;
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
}
</style>
