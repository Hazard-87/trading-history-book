<template lang='pug'>
button(
  class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround"
  @click="profileClick"
)
  Avatar(class="mr-2" shape="circle")
  div(class="flex flex-column align")
    span(class="font-bold") {{firstName}} {{lastName}}
    span(class="text-sm") {{deposit}}
</template>

<script setup lang='ts'>

interface Props {
  firstName?: string
  lastName?: string
  deposit?: number
}
defineProps<Props>()

const profileClick = () => {
  console.log('click')
}
</script>

<style scoped>

</style>