<template>
  <a hidden rel="me" href="https://mastodon.griefed.de/@griefed">Mastodon</a>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>
