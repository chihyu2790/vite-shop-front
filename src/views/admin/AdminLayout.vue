<template lang="pug">
v-navigation-drawer(expand-on-hover rail permanent)
    v-list
        v-list-item(:prepend-avatar='avatar' :title='account')
    v-divider
    v-list
        v-list-item(to='/admin/products' title='商品管理' prepend-icon='mdi-shopping')
        v-list-item(to='/admin/orders' title='訂單管理' prepend-icon='mdi-format-list-checkbox')
        v-list-item(to='/' title='回前台' prepend-icon='mdi-home')
v-main
    v-container
        router-view
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const { avatar, account } = storeToRefs(user)
</script>
