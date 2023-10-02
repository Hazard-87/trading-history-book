<template lang='pug'>
Menu(:model="navList" style='height: 100%;' :pt='pt')
  template(#start)
    navbar-user(
      :first-name='user?.firstName'
      :last-name='user?.lastName'
      :deposit='deposit?.count'
    )
  template(#item="{ item, label, props }")
    navbar-item(
      :item='item'
      :props='props'
      :label='label'
    )
  template(#end)
    navbar-footer(
      @on-logout='logout'
    )
</template>

<script setup lang='ts'>
import { useAuthStore } from '@/store/auth'
import { useUserStore } from '@/store/user'
import NavbarUser from '@/components/Navbar/NavbarUser.vue'
import NavbarItem from '@/components/Navbar/NavbarItem.vue'
import NavbarFooter from '@/components/Navbar/NavbarFooter.vue'
import navList from '@/lib/navlist'
import { useDepositStore } from '@/store/deposit'

const authStore = useAuthStore()
const userStore = useUserStore()
const depositStore = useDepositStore()

const user = computed(() => {
  return userStore.data
})

const deposit = computed(() => {
  return depositStore.data
})

const pt = computed(() => {
  return {
    root: {
      style: { position: 'relative' }
    },
    end: {
      style: { position: 'absolute', bottom: '0.5rem', left: 0, width: '100%' }
    }
  }
})

const logout = () => {
  authStore.logout()
}
</script>

<style scoped>
</style>