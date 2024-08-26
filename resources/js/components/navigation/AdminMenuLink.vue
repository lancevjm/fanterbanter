<template>
    <router-link
        :to="{ path: link}"
        custom
        v-slot="{ href, navigate}"
        >
        <li :class="['nav-item' ]">
            <a class="nav-link" :href="href" @click="navigate">
                <span class="sidenav-mini-icon text-xs"> {{ miniIcon }} </span>
                <span class="sidenav-normal"> {{ title }} </span>
            </a>
        </li>
    </router-link>
</template>

<script>
export default {
    props:{
        link: {
            type: String,
            required: true
        },
        miniIcon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    },
}
</script>