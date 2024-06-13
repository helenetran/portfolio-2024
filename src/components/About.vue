<script setup>
import { onMounted } from 'vue'

onMounted (() => {
  const body = document.getElementsByTagName('body')
  body[0].id = 'about-page'
})
</script>

<template lang="pug">
.about
  h1 About

  .about__description
    div
      h2 Hi there!
      br
      div I’m Helene, a web developer who loves creating beautiful and functional digital experiences. I've worked a lot with Vue.js and Shopify, developing everything from e-commerce sites to interactive data visualizations. I enjoy bringing ideas to life and making sure they are not only visually appealing but also user-friendly and responsive.
      br
      div I take pride in my attention to detail and my commitment to crafting seamless user interfaces. When I'm not coding, I enjoy keeping up with the latest tech trends, mixing up some fun cocktails, and sharing knowledge with the developer community.
      br
      div Outside of tech, I'm passionate about cooking and eating delicious food. I love experimenting with new recipes and exploring different cuisines. If you want to see know more about my cooking hobby:&nbsp;
        a(href="www.eatingwithhelene.com" target="_blank") eatingwithhelene.com&nbsp;
        span ;)
      div When I'm not in the kitchen, you might find me gliding through the streets on my inline roller skates, enjoying the freedom and thrill of the ride.
      br
      div I'm always excited to take on new challenges and help bring innovative web solutions to life. So, if you're looking for someone who is passionate about web development and dedicated to creating engaging digital experiences, I'd love to chat!

    div
      h2 Other things I enjoy
      div

</template>

<style lang="scss">
html #about-page {
  background: #f5f0eb;

  .i-hotdog {color: var(--secondary-color);}
  .about__description {
    padding-left: 10px;

    a {
      font-style: italic;
      color: var(--secondary-color);
    }
  }
}
</style>
