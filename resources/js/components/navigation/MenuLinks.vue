<template>
    
    <li class="nav-item" v-for="item in menu" :key="item.heading">
        <a data-bs-toggle="collapse" :href="'#'+item.parent" class="nav-link " aria-controls="account" role="button" aria-expanded="false">
            <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="svg-inline--fa fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" :d="item.icon">
                    </path>
                </svg>
            </div>
            <span class="nav-link-text ms-1">{{ item.heading }}</span>
        </a>

        <div class="collapse " :id="item.menuId">
            <ul class="nav ms-4 ps-3">

                <MenuLink v-for="link in item.links" :key="link.title" v-bind="link" />
                
            </ul>
        </div>
    </li>
</template>

<script>
import MenuLink from './AdminMenuLink.vue'
export default {
    props: {
        menu: {
            type: Object,
            required: true
        },
    },
    components: {
        MenuLink,
    },
}
</script>