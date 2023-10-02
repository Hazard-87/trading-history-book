<template lang='pug'>
nuxt-link(:to="item.route" class="flex" v-bind="props.action" active-class='active' )
  span(v-bind="props.icon")
  span(v-bind="props.label") {{ label }}
  Badge(v-if="item.badge" class="ml-auto" :value="item.badge")
</template>

<script setup lang='ts'>
interface Props {
  item: Item
  props: any
  label: string
}

interface Item {
  route: string
  label: string
  icon: string
  badge?: number
}

defineProps<Props>()

</script>

<style scoped>
.active {
  background-color: var(--surface-300);
}
</style>