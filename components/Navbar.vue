<script setup>
const navItems = {
    home: {
        title: 'Home',
        link: '/'
    },
    about: {
        title: 'About',
        link: '/about'
    },
    contact: {
        title: 'Contact',
        link: '/contact'
    },
    portfolio: {
        title: 'Portfolio',
        link: '/portfolio'
    },
    services: {
        title: 'Services',
        link: '/services'
    }
}
</script>

<template>
    <nav class="w-full h-20">
        <ul class="flex gap-x-4 justify-center items-center fixed top-0 left-0 w-full h-20 text-navy font-bold uppercase bg-slate-200 z-50">
            <li v-for="item in Object.values(navItems)" :key="item.title">
                <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>