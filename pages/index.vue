<template>
    <div class="main">
        <main-menu />
        <home />
        <about />
        <works />
        <!--
        <section class="has-fullheight is-icon-list is-align-center has-rs-purple is-text-vertical-right">
            <p>
                <a href="https://dribbble.com/j-dams" target="_blank" class="has-margin-bottom-1">dribbble</a>
                <a href="https://www.instagram.com/j.dams" target="_blank" class="has-margin-bottom-1">instagram</a>
                <a href="https://www.linkedin.com/in/damien-jaillot" target="_blank" class="has-margin-bottom-1">linkedin</a>
                <a href="https://github.com/xioten34" target="_blank" class="has-margin-bottom-1">github</a>
                <a href="mailto:damien.jaillot@gmail.com">email</a>
            </p>
        </section>
        -->
        <!-- 
        <section class="has-fullheight is-icon-list is-align-center has-text-purple">
            <p>
                <a href="https://www.instagram.com/j.dams" target="_blank"><fa-icon class="has-no-margin-top" :icon="['fab', 'instagram']" /></a>
                <a href="https://www.linkedin.com/in/damien-jaillot" target="_blank"><fa-icon :icon="['fab', 'linkedin']" /></a>
                <a href="https://github.com/xioten34" target="_blank"><fa-icon :icon="['fab', 'github']" /></a>
                <a href="mailto:damien.jaillot@gmail.com"><fa-icon :icon="['fa', 'envelope']" /></a>
            </p>
        </section> 
        -->
        <footer class="footer" :style="'background:url(' + backgroundimg + '); background-size: cover'">
            
            <cookie-law :buttonText="$t('cookie.button')">
                <div slot="message">
                    {{ $t('cookie.message') }} <!-- <router-link to="legal-notes"> {{ $t('cookie.click') }} </router-link> -->
                </div>
                <button slot="button-text">
                    {{ $t('cookie.button') }}
                </button>
            </cookie-law>
            <no-ssr>
                <h2 class="content is-size-2 has-text-weight-semibold has-text-centered has-text-purple">
                    {{ $t('footer.contact') }} <a href="mailto:damien.jaillot@gmail.com">{{ $t('footer.me') }}</a><span>.</span>
                </h2>
            </no-ssr>
            <div class="content has-text-centered has-text-purple">
                <p>
                    <strong class="has-text-purple">{{ $t('footer.text_1') }}</strong>{{ $t('footer.text_2') }}<a href="https://www.linkedin.com/in/damien-jaillot">Damien Jaillot</a>{{ $t('footer.text_3') }}. {{ $t('footer.text_4') }}<a href="https://github.com/xioten34">Github</a>{{ $t('footer.text_5') }}.
                </p>
            </div>
            <div class="content has-text-centered is-size-5 has-text-purple">
                <a href="https://www.linkedin.com/in/damien-jaillot" class="has-margin-right-0-3" target="_blank"><fa-icon :icon="['fab', 'linkedin']" /></a>
                <a href="https://dribbble.com/j-dams" class="has-margin-right-0-3" target="_blank"><fa-icon :icon="['fab', 'dribbble']" /></a>
                <a href="https://www.instagram.com/j.dams" class="has-margin-right-0-3" target="_blank"><fa-icon :icon="['fab', 'instagram']" /></a>
                <a href="https://github.com/xioten34" class="has-margin-right-0-3" target="_blank"><fa-icon :icon="['fab', 'github']" /></a>
                <a href="mailto:damien.jaillot@gmail.com"><fa-icon :icon="['fa', 'envelope']" /></a>
            </div>
            <div class="content has-text-centered has-text-purple">
                <a href="/mentions_legales.pdf" target="_blank" class="has-text-lightt">{{ $t('footer.mentions') }}</a> - <nuxt-link :to="{ path: lang + '/RGPD/confidentialite'}" class="has-text-lightt">{{ $t('footer.rgpd') }}</nuxt-link>
            </div>
        </footer>
    </div>
</template>

<script>
    import mainMenu from './common/mainMenu'
    import home from './sections/home'
    import about from './sections/about'
    import works from './sections/works'
    import CookieLaw from 'vue-cookie-law'
    import background from '~/assets/images/svg/element/background.png';

    export default {
        transition: "home",
        components: {
            mainMenu,
            home,
            about,
            works,
            CookieLaw
        },
        data() {
            return {
                backgroundimg: background,
                lang: this.$i18n.locale == 'en' ? 'en' : '',
            }
        }
    }
</script>
