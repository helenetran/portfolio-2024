<script>

</script>

<template lang="pug">
footer.footer
  div.contact
    .contact__text Let's talk :)
    a.contact__icon.i-linkedin(href="https://www.linkedin.com/in/helenetrandev/" target="_blank")
    a.contact__icon.i-github(href="https://github.com/helenetran" target="_blank")
  div.copyright Copyright @ 2024 Helene Tran. All rights reserved.
</template>

<style lang="scss">
.footer {
  position: absolute;
  left: 0;
  height: 10vh;
  width: 100vw;
  text-align: center;

  .contact {
    display: flex;
    justify-content: center;
    width: 100vw;

    &__text {
      padding-right: 10px;
      font-family: CaviarDreamsBold;
    }

    &__icon {
      font-size: 18px;
      padding-left: 5px;
    }
  }

  .copyright {
    opacity: 0.6;
    font-style: italic;
    font-size: 13px;
    padding-top: 12px;
  }
}

</style>
