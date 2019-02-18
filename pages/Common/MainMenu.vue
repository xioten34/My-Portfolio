<template>
    <nav class="navbar hass-background-transparent has-padding-y-1 has-no-margin">
        <div class="container has-padding-x-1">
            <div class="navbar-brand">
                <a href="#" class="navbar-item has-no-padding is-logo">
                    <img src="~assets/images/svg/logo/logo.svg">
                </a>
                <div class="navbar-item has-text-weight-bold">Damien <span class="has-text-corail">.</span></div>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <nuxt-link class="navbar-item" to="#">{{ $t('menu[\'accueil\']') }}</nuxt-link>
                    <nuxt-link class="navbar-item" to="#">{{ $t('menu[\'a propos\']') }}</nuxt-link>
                    <nuxt-link class="navbar-item" to="#">{{ $t('menu[\'portfolio\']') }}</nuxt-link>
                    <nuxt-link class="navbar-item" to="#">{{ $t('menu[\'travel\']') }}</nuxt-link>
                </div>
                <div class="navbar-end lang">
                    <nuxt-link class="navbar-item" :to="switchLocalePath('fr')">Français</nuxt-link>
                    <nuxt-link class="navbar-item" :to="switchLocalePath('en')">English</nuxt-link>
                    <nuxt-link class="navbar-item" :to="switchLocalePath('ja')">日本語</nuxt-link>
                    <!-- <span class="navbar-item">
                        <a href="#" class="button has-no-border has-background-corail">{{ $t('menu[\'contact\']') }}</a>
                    </span> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        },
        methods: {
            switchLang(language) {
                const html = document.documentElement
                html.setAttribute('lang', language)
            }
        }
    }
</script>