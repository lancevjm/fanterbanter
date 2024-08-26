<template>
    <router-link
        :to="{ path: link}"
        custom
        v-slot="{ href, navigate}"
        >
        <li :class="['nav-item' ]">
            <a class="nav-link" :href="href" @click="navigate">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" :data-icon="icon" class="svg-inline--fa fa-w-18" :class="iconClass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" :d="iconDetail">
                        </path>
                    </svg>
                </div>

                <span class="nav-link-text ms-1">{{ title }}</span>
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
        icon: {
            type: String,
            required: true
        },
        iconView: {
            type: String,
            required: true
        },
        iconDetail:{
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    },

    computed: {
        iconClass: function(){
            return "fa-"+this.icon
        },

        viewBoxVal: function(){
            Number(this.iconView)
        }
    },
}
</script>