<template lang="pug">
header.header
  RouterLink.i-hotdog(to="/")
  nav.menu
    RouterLink(v-for="(item, i) in menuItems" :key="i" :to="item.link" class="menu__item") {{ item.name }}

</template>

<script>
export default {
  data: () => ({
    menuItems: [
      { name: 'Home', icon: 'icon-home', link: '/', class: 'menu__about-me dark-green' },
      { name: 'Projects', icon: 'icon-home', link: '/projects', class: 'menu__projects orange' },
      { name: 'About', icon: 'icon-home', link: '/about', class: 'menu__about-me dark-green' },
      { name: 'Get in Touch', icon: 'icon-home', link: '/get-in-touch', class: 'menu__get-in-touch light-green' }
    ]
  })
}
</script>

<style lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 1000;

  .i-hotdog {font-size: 64px;}

  nav {
    padding-left: 10px;
    text-align: right;
  }

  .menu__item {
    padding-bottom: 20px;
    display: block;
    height: 20px;
    font-family: 'CaviarDreamsBold';

    &:hover {
      font-size: 18px;
      color: var(--secondary-color);
      transition: ease-in-out 0.3s;
    }
  }
}
</style>
