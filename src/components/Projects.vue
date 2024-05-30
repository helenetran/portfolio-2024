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
      .project__image image here

</template>

<style lang="scss">
.projects {
  padding: 20px;

  .project {
    display: flex;
    justify-content: space-between;

    &__image {min-width: 66%;}
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
