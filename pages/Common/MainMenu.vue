<template>
    <nav class="navbar has-background-transparent has-padding-y-1 has-no-margin">
        <div class="container has-padding-x-1">
            <div class="navbar-brand">
                <a href="#" class="navbar-item has-no-padding is-logo">
                    <img src="~assets/images/svg/logo/logo.svg">
                </a>
                <div :class="['navbar-burger ', showNavMobile ? 'active' : '']" @click="showNavMobile = !showNavMobile">
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom">LANG</span>
                </div>
            </div>
            <div :class="['overlay-mobile ', showNavMobile ? 'is-open' : '']">
                <nav class="overlay-menu">
                    <ul>
                        <!-- <li><nuxt-link class="has-margin-bottom-2" :to="switchLocalePath('fr')">Français</nuxt-link></li>
                        <li><nuxt-link class="has-margin-bottom-2" :to="switchLocalePath('en')">English</nuxt-link></li> -->
                        <li><a href="/" :class="['has-margin-bottom-2', lang == '' ? 'lang-active' : '']">Français</a></li>
                        <li><a href="/en" :class="['has-margin-bottom-2', lang == 'en' ? 'lang-active' : '']">English</a></li>
                    </ul>
                </nav>
            </div>
            <div class="navbar-menu">
               <!-- <div class="navbar-start">
                    <nuxt-link class="navbar-item" to="/">{{ $t('menu[\'accueil\']') }}</nuxt-link>
                    <nuxt-link class="navbar-item" to="/#about">{{ $t('menu[\'a propos\']') }}</nuxt-link>
                    <nuxt-link class="navbar-item" to="/#works">{{ $t('menu[\'portfolio\']') }}</nuxt-link>
                </div> -->
                <div class="navbar-end lang">
                   <!-- <nuxt-link class="navbar-item" :to="switchLocalePath('fr')">FR</nuxt-link>
                    <nuxt-link class="navbar-item" :to="switchLocalePath('en')">EN</nuxt-link> -->
                    <a href="/" :class="['navbar-item', lang == '' ? 'lang-active' : '']">FR</a>
                    <a href="/en" :class="['navbar-item', lang == 'en' ? 'lang-active' : '']">EN</a>
                    <!-- <span class="navbar-item">
                        <a href="#" class="button has-no-border has-background-purple">{{ $t('menu[\'contact\']') }}</a>
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
                lang: this.$i18n.locale == 'en' ? 'en' : '',
                showNavMobile: false,
            }
        },
        methods: {

        }
    }
</script>