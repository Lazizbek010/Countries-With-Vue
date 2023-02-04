<template>
    <div class="about-country container">
        <button class="back">
            <router-link class="back-link" :to="{name: 'home'}">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="none"><path fill="#111517" fill-rule="evenodd" d="m6.464.107 1.179 1.179-3.89 3.889h14.85v1.65H3.753l3.89 3.889-1.179 1.179L.572 6 6.464.107Z" clip-rule="evenodd"/></svg>
                <span>Back</span>
            </router-link>
        </button>
        <div class="about-country__info">
            <div class="about-country__info__img">
                <img :src="about.flag" :alt="about.name">
            </div>
            <div class="about-country__info__text">
                <h1>{{ about.name }}</h1>
                <div class="about-country__info__content">
                    <ul>
                        <li>Native Name: &nbsp; <span>{{about.nativeName}}</span></li>
                        <li>Population: &nbsp; <span>{{about.population  }}</span></li>
                        <li>Region: &nbsp; <span>{{ about.region}}</span></li>
                        <li>Sub Region: &nbsp; <span>{{about.subregion}}</span></li>
                        <li>Capital:  &nbsp; <span>{{ about.capital}}</span></li>
                    </ul>
                    <ul>
                        <li>Top Level Domain: &nbsp;<span v-for="(domain, i) in about.topLevelDomain" :key="i">{{ domain }}</span></li>
                        <li>Currencies &nbsp;<span v-for="(currencie, i) in about.currencies" :key="i">{{ currencie.name }}</span></li>
                        <li class="languages">Languages &nbsp; <span v-for="(language, i) in about.languages" :key="i">{{language.name}}</span></li>
                    </ul>
                </div>
                <div class="borders">
                    <h3>Border Countries: </h3>
                    <ul class="border-list" v-if="about.borders !== undefined">
                        <li class="border-list__item" v-for="(border, i) in about.borders" :key="i">{{ border }}</li>
                        <!-- <li v-else class="border-list__item" v-for="(border, i) in about.borders" :key="i">No </li> -->
                    </ul>
                    <h1 v-else>No Borders!</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutCountry',
        props:['nomi'],
        data() {
            return {
                about: {},
            }
        },
        created(){
            fetch(`https://restcountries.com/v2/name/${this.nomi}`)
            .then(api=> api.json())
            .then(data =>{
                this.about = data[0]
                console.log(data);
            })
        },
        computed: {
        },
    }
</script>

<style lang="scss" scoped>

</style>