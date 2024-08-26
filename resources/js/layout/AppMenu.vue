<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Manage Clients',
        items: [
            { label: 'View Clients', icon: 'pi pi-fw pi-users', to: '/customer' },
            {
                label: 'Orders',
                icon: 'pi pi-fw pi-truck',
                to: '/orders'
            },
            {
                label: 'Subscriptions',
                icon: 'pi pi-fw pi-sync',
                items: [
                    { label: 'Susbriptions', icon: 'pi pi-fw pi-sync', to: '/customersubs' },
                    { label: 'Susbriptions', icon: 'pi pi-fw pi-plus-circle', to: '/customersubs/new' },
                ]
            },
        ]
    },
    {
        label: 'Manage Subscriptions',
        items: [
            {
                label: 'Subscriptions',
                icon: 'pi pi-fw pi-sync',
                items: [
                    { label: 'Susbriptions', icon: 'pi pi-fw pi-sync', to: '/subscription' },
                    { label: 'Susbriptions', icon: 'pi pi-fw pi-plus-circle', to: '/subscription/new' },
                ]
            },
        ]
    },
    {
        label: 'Manage Products',
        items: [
            {
                label: 'Products',
                icon: 'pi pi-fw pi-box',
                items: [
                    { label: 'Products', icon: 'pi pi-fw pi-box', to: '/product' },
                    { label: 'Add Product', icon: 'pi pi-fw pi-plus-circle', to: '/product/new' },
                ]
            },
            {
                label: 'Product Category',
                icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Category', icon: 'pi pi-fw pi-list', to: '/product/categories' },
                    { label: 'Add Category', icon: 'pi pi-fw pi-plus-circle', to: '/product/new_category' },
                ]
            },
            {
                label: 'Product Sub Category',
                icon: 'pi pi-fw pi-sync',
                items: [
                    { label: 'Sub Category', icon: 'pi pi-fw pi-sync', to: '/product/sub_categories' },
                    { label: 'Add Sub Category', icon: 'pi pi-fw pi-plus-circle', to: '/product/new_sub_category' },
                ]
            }
        ]
    },
    {
        label: 'Billing',
        items: [
            {
                label: 'Accounts',
                icon: 'pi pi-fw pi-dollar',
                items: [
                    { label: 'Customer Accounts', icon: 'pi pi-fw pi-dollar', to: '/accounts' },
                    { label: 'Create', icon: 'pi pi-fw pi-plus-circle', to: '/accounts/new' },
                    { label: 'Arrears', icon: 'pi pi-fw pi-user-minus', to: '/accounts/arrears' },
                ]
            },
            {
                label: 'Invoices',
                icon: 'pi pi-fw pi-file',
                items: [
                    { label: 'Invoices', icon: 'pi pi-fw pi-file', to: '/invoices' },
                    { label: 'Create Invoice', icon: 'pi pi-fw pi-plus-circle', to: '/invoices/new' },
                ]
            },
            {
                label: 'Payments',
                icon: 'pi pi-fw pi-money-bill',
                items: [
                    { label: 'Payments', icon: 'pi pi-fw pi-money-bill', to: '/payments' },
                    { label: 'Capture', icon: 'pi pi-fw pi-plus-circle', to: '/payments/capture' },
                ]
            },
        ]
    },
    {
        label: 'Admin Settings',
        items: [
            {
                label: 'Users',
                icon: 'pi pi-fw pi-users',
                items: [
                    { label: 'Users', icon: 'pi pi-fw pi-users', to: '/users' },
                    { label: 'New user', icon: 'pi pi-fw pi-user-plus', to: '/users/new' },
                ]
            },
            {
                label: 'Roles',
                icon: 'pi pi-fw pi-ticket',
                items: [
                    { label: 'Roles', icon: 'pi pi-fw pi-ticket', to: '/roles' },
                    { label: 'New role', icon: 'pi pi-fw pi-plus-circle', to: '/roles/new' },
                ]
            },
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog',
                items: [
                    { label: 'Tokens', icon: 'pi pi-fw pi-ticket', to: '/settings/tokens' },
                ]
            },
            {
                label: 'Log Out',
                icon: 'pi pi-fw pi-sign-out',
                to: '/logout'
            }
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
