<template lang='pug'>
.login
  Form.flex.flex-column.gap-3(@submit='onSubmit')
    app-input-text(v-bind='email' label='Почта' :error='errors.email')
    app-password(v-bind='password' toggle-mask :error='errors.password')
    .flex.justify-content-center
      app-button(type='submit' label='Войти' icon='pi pi-sign-in' :loading='isSubmitting')
  .mt-4
    span.mr-2 Нет аккаунта?
    nuxt-link(to='/registration') Регистрация
</template>

<script setup lang='ts'>
import * as yup from 'yup'
import { Form, useForm } from 'vee-validate'
import AppInputText from '@/components/Base/Inputs/AppInputText.vue'
import AppPassword from '@/components/Base/Inputs/AppPassword.vue'
import AppButton from '@/components/Base/AppButton.vue'
import { useAuthStore } from '@/store/auth'
import { useUserStore } from '@/store/user'

const defaultValues = {
  email: 'test@gmail.com',
  password: 'test'
}
const authStore = useAuthStore()
const userStore = useUserStore()

const { handleSubmit, errors, defineComponentBinds, isSubmitting, resetForm } = useForm({
  initialValues: defaultValues,
  validationSchema: yup.object({
    email: yup.string()
      .email('Введите правильную почту!')
      .required('Это обязательное поле!'),
    password: yup.string()
      .required('Это обязательное поле!')
  })
})

const email = defineComponentBinds('email', {
  validateOnModelUpdate: false
})

const password = defineComponentBinds('password', {
  validateOnModelUpdate: false
})

const onSubmit = handleSubmit(async (values) => {
  try {
    await authStore.login(values)
    resetForm({
      values: {
        email: '',
        password: ''
      }
    })
    await userStore.getProfile()
    navigateTo('/')
  } catch (e) {
    console.log(e)
  }
})
</script>

<style scoped>
/*.form {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  gap: 20px;*/
/*}*/
</style>