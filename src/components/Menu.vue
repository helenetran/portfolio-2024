<template lang="pug">
  .logo Helene Dev.
  .menu.flex
    ul
      li.menu__item(
        v-for="(item, i) in menuItems"
        :key="i"
        :class="item.class")
        span {{ item.name }}

</template>

<script>
export default {
  // mounted () {
  //   this.setClassActive()
  // },
  props: {
    number: Number,
  },
  data: () => ({
    menuItems: [
      { name: 'About', icon: 'icon-home', link: '#about-me', class: 'menu__about-me dark-green', number: 1 },
      { name: 'Projects', icon: 'icon-home', link: '#works', class: 'menu__pworks orange', number: 2 },
      { name: 'Get in Touch', icon: 'icon-home', link: '#get-in-touch', class: 'menu__get-in-touch light-green', number: 3 },
    ]
  }),

  methods: {
    // setClassActive () {
    //   let controllerClassActive = new ScrollMagic.Controller({globalSceneOptions: {duration: "170%"}})

    //   new ScrollMagic.Scene({triggerElement: '#home', triggerHook: 1})
    //     .setClassToggle('.menu__home', 'active')
    //     .addTo(controllerClassActive)
    //   new ScrollMagic.Scene({triggerElement: '#works', triggerHook: 1})
    //     .setClassToggle('.menu__works', 'active')
    //     .addTo(controllerClassActive)
    //   new ScrollMagic.Scene({triggerElement: '#about-me', triggerHook: 1})
    //     .setClassToggle('.menu__about-me', 'active')
    //     .addTo(controllerClassActive)
    //   new ScrollMagic.Scene({triggerElement: '#get-in-touch', triggerHook: 1})
    //     .setClassToggle('.menu__get-in-touch', 'active')
    //     .addTo(controllerClassActive)
    // },

    // scrollDown() {
    //   setTimeout(() => {
    //     window.scrollBy(0, 10)
    //   }, 600)
    // }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;

  .logo {
    // font-family: CaviarDreams;
    font-size: 20px;
  }
}

ul {
  li {
    display: inline;
    padding-left: 10px;
  }
}
</style>
