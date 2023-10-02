<template lang='pug'>
.app
  client-only
    nuxt-layout
      nuxt-page
</template>

<script setup lang='ts'>

import { useUserStore } from '@/store/user'
import { useDepositStore } from '@/store/deposit'

const userStore = useUserStore()
const depositStore = useDepositStore()

onBeforeMount(() => {
  userStore.getProfile()
  depositStore.getCurrentDeposit()
  
})
</script>

<style>
@import 'assets/styles/global.scss';

:root {
  --BACKGROUND-COLOR: var(--surface-100);
}

.app {
  width: 100vw;
  height: 100vh;
  background-color: var(--BACKGROUND-COLOR);
}
</style>
