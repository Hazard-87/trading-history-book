<template lang='pug'>
.registration
  Form.flex.flex-column.gap-3(@submit='onSubmit')
    app-input-text(v-bind='firstName' label='Имя' :error='errors.firstName')
    app-input-text(v-bind='lastName' label='Фамилия' :error='errors.lastName')
    app-input-text(v-bind='email' label='Почта' :error='errors.email')
    app-password(v-bind='password' toggle-mask :error='errors.password')
    app-password(v-bind='confirmPassword' toggle-mask :error='errors.confirmPassword')
    .flex.justify-content-center
      app-button(type='submit' label='Регистрация' icon='pi pi-sign-out' :loading='isSubmitting')
  .mt-4
    span.mr-2 Уже есть аккаунт?
    nuxt-link(to='/login') Авторизация
</template>

<script setup lang='ts'>
import * as yup from 'yup'
import { Form, useForm } from 'vee-validate'
import AppInputText from '@/components/Base/Inputs/AppInputText.vue'
import AppPassword from '@/components/Base/Inputs/AppPassword.vue'
import AppButton from '@/components/Base/AppButton.vue'
import { useAuthStore } from '@/store/auth'

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const authStore = useAuthStore()

const { handleSubmit, errors, defineComponentBinds, isSubmitting, resetForm } = useForm({
  initialValues: defaultValues,
  validationSchema: yup.object({
    firstName: yup.string()
      .required('Это обязательное поле!'),
    lastName: yup.string()
      .required('Это обязательное поле!'),
    email: yup.string()
      .email('Введите правильную почту!')
      .required('Это обязательное поле!'),
    password: yup.string()
      .required('Это обязательное поле!')
      .min(4, 'Минимальное количество символов 4!'),
    confirmPassword: yup.string().when('password', (password, field) =>
      password ? field
        .required('Это обязательное поле!')
        .min(4, 'Минимальное количество символов 4!')
        .oneOf([yup.ref('password')], 'Пароли не совпадают!') : field
    )
  })
})

const firstName = defineComponentBinds('firstName', {
  validateOnModelUpdate: false
})

const lastName = defineComponentBinds('lastName', {
  validateOnModelUpdate: false
})


const email = defineComponentBinds('email', {
  validateOnModelUpdate: false
})

const password = defineComponentBinds('password', {
  validateOnModelUpdate: false
})

const confirmPassword = defineComponentBinds('confirmPassword', {
  validateOnModelUpdate: false
})

const onSubmit = handleSubmit(async (values) => {
  try {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    }
    await authStore.registration(data)
    resetForm()
    navigateTo('/')
  } catch (e) {
    console.log(e)
  }
})
</script>

<style scoped>

</style>