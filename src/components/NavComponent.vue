<template>
    <div class="nav">
        <div class="container">
            <h1 class="logo">Where in the world?</h1>
            <div @click="changeMode" class="modes">
               <div class="dark mode" v-if="mode">
                <img class="mode-icon" src="@/assets/images/dark-mode.svg" alt="mode">
                <span class="mode-text">Dark Mode</span>
               </div>
               <div class="light mode" v-else>
                <img class="mode-icon" src="@/assets/images/light-mode.svg" alt="mode">
                <span class="mode-text">Light Mode</span>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mode: true
        }
    },
    methods: {
        changeMode() {
            document.querySelector('body').classList.toggle('dark-mode')
            this.mode = !this.mode
        }
    },
}
</script>

<style lang="scss" scoped>

</style>