<template>
    <div class="nav">
        <div class="container">
            <h1 class="logo">Where in the world?</h1>
            <div @click="changeMode" class="mode">
                <img class="mode-icon" src="img/dark-mode.svg" alt="mode">
                <span class="mode-text">Dark Mode</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: true
        }
    },
    methods: {
        changeMode() {
            document.querySelector('body').classList.toggle('dark-mode')
            if (this.icons) {
                document.querySelector('.mode-icon').src = 'img/light-mode.svg'
                document.querySelector('.mode-text').textContent = 'Light Mode'
                this.icons = false
            } else {
                document.querySelector('.mode-icon').src = 'img/dark-mode.svg'
                document.querySelector('.mode-text').textContent = 'Dark Mode'
                this.icons = true
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>