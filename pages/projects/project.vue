<template>
    <section class="container has-padding-y-4" id="about">
        <div class="has-margin-bottom-5">
            <nuxt-link :to="{ path: '/' + lang}">
                <fa-icon class="is-size-3 has-text-purple" :icon="['fa', 'long-arrow-alt-left']" />
            </nuxt-link>
        </div>
        <div class="columns">
            <div class="column is-8 is-offset-1 has-text-left is-border-bottom">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <!-- <span class="is-size-4">{{ $t('home.hello') }},</span> -->
                        <h1 class="title is-font-size-6 is-font-title">
                            {{ id }}<span class="has-text-purple">.</span>
                        </h1>
                        <h2 class="subtitle is-font-size-3 has-margin-y-1">
                           {{ $t('project.subtitle' + id) }}
                        </h2>
                    </div>
                </section>
            </div>
        </div>
        <div class="columns info_company has-margin-bottom-5 has-margin-top-2">
            <div class="column is-offset-1 is-2">
                <h3 class="title is-size-6 is-font-title">
                    Company
                </h3>
                <p class="subtitle is-size-6 has-margin-y-1">
                    Memlin AB, Sweden
                </p>
            </div>
            <div class="column is-offset-1">
                <h3 class="title is-size-6 is-font-title">
                    Service
                </h3>
                <p class="subtitle is-size-6 has-margin-y-1">
                    Event Management, SAAS
                </p>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6 is-offset-1">
                <section>
                    <div>
                        <span class="has-text-weight-semibold has-text-grey-light">{{ $t('title.about') }}<span class="has-text-purple">.</span></span>
                        <h2 class="title has-text-weight-bold has-margin-top-2 is-font-title">
                            {{ $t('main_title.about_1') }}<br><span class="has-text-purple">&</span> {{ $t('main_title.about_2') }}<span class="has-text-purple">.</span>
                        </h2>
                        <p class="is-size-6 has-text-weight-light">
                            {{ $t('text.about_1') }}
                        </p>
                        <p class="is-size-6 has-text-weight-bold has-margin-y-1">
                            {{ $t('text.about_2') }}
                        </p>
                        <p class="is-size-6 has-text-weight-light">
                            {{ $t('text.about_3') }}
                        </p>
                        <p class="has-margin-top-1">
                            <a href="mailto:damien.jaillot@gmail.com" class="has-text-weight-semibold has-text-purple">{{ $t('text.about_4') }}</a>
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
        head () {
            return {
                title: 'UI/UX design | Damien',
                meta: [
                    { hid: 'description', name: 'description', content: 'Web designer lover, making also front-end design and a bit back-end.' }
                ]
            }
        },
        data() {
            return {
                id: this.$route.query.id,
                projects: [
                    {
                        name: 'Memlin',
                        title: 'titleMemlin',
                        comp: 'Company',
                        subComp: 'subCompMemlin',
                        service: 'Service',
                        subService: 'subServiceMemlin',
                    },
                    {
                        name: 'LEGALFIS CONSULT',
                        title: 'titleLegalfis',
                        comp: 'Company',
                        subComp: 'subCompLegalfis',
                        service: 'Service',
                        subService: 'subServiceLegalfis',
                    },
                    {
                        name: 'Source',
                        title: 'titleSource',
                        comp: 'Company',
                        subComp: 'subCompSource',
                        service: 'Service',
                        subService: 'subServiceSource',
                    }
                ],
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