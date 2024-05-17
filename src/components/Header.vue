<template lang="pug">
  header.header
    .logo H.
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
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 1000;

  .logo {
    font-family: Autography;
    font-size: 50px;
  }


  nav {
    padding-left: 10px;
    text-align: right;
  }

  .menu__item {
    padding-bottom: 20px;
    display: block;
    height: 20px;

    &:hover {
      font-size: 18px;
      transition: ease-in-out 0.3s;
    }
  }
}
</style>
