<template>
    <div class="home">
        <div class="overlay" v-show="loading">
            <div class="loader">
                <img src="loader/circle-loader.gif" alt="">
            </div>
        </div>
        <div class="container">
            <div class="search">
                <div class="search__left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                        <path fill="#848484" fill-rule="evenodd"
                            d="M12.5 11h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C13 2.9 10.1 0 6.5 0S0 2.9 0 6.5 2.9 13 6.5 13c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5 1.5-1.5-5-5Zm-6 0C4 11 2 9 2 6.5S4 2 6.5 2 11 4 11 6.5 9 11 6.5 11Z"
                            clip-rule="evenodd" />
                    </svg>
                    <input @input="searchCountry" v-model="searchEL" class="search__left__input" type="search"
                        placeholder="Search for a country…">
                </div>
                    <select class="search__select" @change="changeRegion" v-model="selected">
                        <option value="all" selected>Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
            </div>
            <div class="countries">
                <CountryComponent :country="country" v-for="(country, i) in countries" :key="i"></CountryComponent>
            </div>
        </div>
    </div>
</template>

<script>
import CountryComponent from '../components/CountryComponent.vue'
export default {
    name: 'HomeView',
    components: { CountryComponent },
    data() {
        return {
            countries: [],
            loading: true,
            searchEL: '',
            selected: 'all'
        }
    },
    methods: {
        async searchCountry() {
            if (this.searchEL !== '') {
                this.loading = true
                await fetch(`https://restcountries.com/v2/name/${this.searchEL}`)
                    .then(api => api.json())
                    .then(data => {
                        this.countries = data
                        console.log(data);
                    })
                this.loading = false
            } else {
                this.loading = true
                await fetch('https://restcountries.com/v2/all')
                    .then(api => api.json())
                    .then(data => {
                        this.countries = data
                        console.log(data);
                    })
                this.loading = false
            }
        },
        changeRegion() {
            console.log(this.selected);
            if(this.selected !== 'all'){
                fetch(`https://restcountries.com/v2/region/${this.selected}`)
                .then(api => api.json())
                .then(data => {
                    this.countries = data
                    console.log(data);
                })
            }else{
                fetch('https://restcountries.com/v2/all')
                .then(api => api.json())
                .then(data => {
                    this.countries = data
                    console.log(data);
                })
            }
        }
    },
    async created() {
        this.loading = true
        await fetch('https://restcountries.com/v2/all')
            .then(api => api.json())
            .then(data => {
                this.countries = data
                console.log(data);
            })
        this.loading = false
    }
}
</script>

<style lang="scss" scoped>

</style>