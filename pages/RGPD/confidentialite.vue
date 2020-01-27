<template>
    <section class="container has-padding-y-4" id="about">
        <div class="has-margin-bottom-5">
            <nuxt-link :to="{ path: '/' + lang}">
                <fa-icon class="is-size-3 has-text-purple" :icon="['fa', 'long-arrow-alt-left']" />
            </nuxt-link>
        </div>
        <div class="columns">
            <div class="column is-9 is-offset-1 has-text-left is-border-bottom">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <!-- <span class="is-size-4">{{ $t('home.hello') }},</span> -->
                        <h1 class="title is-font-size-6 is-font-title">
                            {{ $t('rgpd.confidentialite') }}<span class="has-text-purple">.</span>
                        </h1>
                        <h6 class="subtitle has-margin-top-6">
                           {{ $t('rgpd.intro') }}
                        </h6> 
                    </div>
                </section>
            </div>
        </div>
        <div class="columns">
            <div class="column is-8 is-offset-1">
                <section>
                    <div>
                        <h6 class="has-text-weight-semibold has-margin-bottom-1 has-text-grey-light">{{ $t('rgpd.cookies.title') }}<span class="has-text-purple">.</span></h6>
                        <p class="is-size-6 has-text-weight-light">
                            {{ $t('rgpd.cookies.definition') }}
                        </p>
                        <p class="is-size-6 has-text-weight-bold has-margin-y-1">
                            {{ $t('rgpd.cookies.indispensables') }}
                        </p>
                        <p class="is-size-6 has-text-weight-light">
                            {{ $t('rgpd.cookies.indi_text') }}
                        </p>
                        <ul class="has-margin-top-1">
                            <li>{{ $t('rgpd.cookies.SERVERID') }} : <span class="has-text-weight-light">{{ $t('rgpd.cookies.servText') }}</span></li>
                            <li>{{ $t('rgpd.cookies.i18n') }} : <span class="has-text-weight-light">{{ $t('rgpd.cookies.i18nText') }}</span></li>
                        </ul>
                    </div>
                </section>
                <section class="has-margin-top-2">
                    <div>
                        <p class="is-size-6 has-text-weight-bold has-margin-bottom-1">{{ $t('rgpd.cookies.confidentialite_2') }}</p>
                        <p class="is-size-6 has-text-weight-light">
                            {{ $t('rgpd.cookies.intro_2') }}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        transition: "work",
        components: {},
        data() {
            return {
                lang: this.$i18n.locale == 'en' ? 'en' : '',
            }
        }
    }
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 2000ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>