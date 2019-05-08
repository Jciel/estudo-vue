<template>
    <nav>
        <ul>
            <li v-for="route in rotas">
                <router-link :to="route.path">
                    {{ route.titulo }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

    export default {


        props: ['rotas']

    }
</script>

<style scoped>

</style>
