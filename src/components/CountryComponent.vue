<template>
    <div class="country">
        <router-link class="country__link" :to="{name: 'country', params:{nomi: country.name}}">
            <div class="country__img">
            <img :src="country.flags.svg" :alt="country.name">
            </div>
            <div class="country__info">
                <h1 class="country__name">{{ country.name }}</h1>
                <ul>
                    <li>Population:&nbsp; <span class="population"> {{country.population}}</span></li>
                    <li>Region:&nbsp; <span class="region">{{ country.region}}</span></li>
                    <li>Capital:&nbsp; <span class="capital">{{ country.capital }}</span></li>
                </ul>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['country']
    }
</script>

<style lang="scss" scoped>

</style>