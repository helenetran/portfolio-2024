<template lang="pug">
  .logo H.
  .menu
    nav(v-for="(item, i) in menuItems")
      RouterLink(:to="item.link") {{ item.name }}

</template>

<script>
export default {
  props: {
    number: Number,
  },
  data: () => ({
    menuItems: [
      { name: 'Home', icon: 'icon-home', link: '/', class: 'menu__about-me dark-green', number: 1 },
      { name: 'About', icon: 'icon-home', link: '/about', class: 'menu__about-me dark-green', number: 2 },
      { name: 'Projects', icon: 'icon-home', link: '/works', class: 'menu__pworks orange', number: 3 },
      { name: 'Get in Touch', icon: 'icon-home', link: '/get-in-touch', class: 'menu__get-in-touch light-green', number: 4 },
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
  // background: rgba(255,255,255,0.2);

  .logo {
    font-family: Autography;
    font-size: 50px;
  }


  nav {
    padding-left: 10px;

    a {
      text-decoration: unset;
      color: unset;
    }
  }
}
</style>
