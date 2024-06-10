<template lang="pug">
div
  h1 Get in Touch

  form(action='https://formspree.io/f/mkgwwelz' method='POST')
    label
      | Your Name:
      input(type='text' name='text' required)
    label
      | Your email:
      input(type='email' name='email' required)
    label
      | Your message:
      textarea(name='message' required)
    button(type='submit') Send
</template>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  textarea {
    height: 150px;
    resize: none;

    &:focus-visible {outline: none;}
  }

  input, textarea {
    border: none;
    margin-top: 10px;
    padding: 10px;
    outline: none;
  }
  button {
    align-self: flex-end;
    margin-right: 10px;
    padding: 5px 10px;
    background-color: var(--secondary-color-light);
    color: #fff;
    border: none;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: var(--secondary-color-dark);
    }
  }
}
</style>
