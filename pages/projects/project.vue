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
                           {{ $t('project.' + id + '.subtitle') }}
                        </h2>
                    </div>
                </section>
            </div>
        </div>
        <div class="columns info_company has-margin-bottom-5 has-margin-top-2">
            <div class="column is-offset-1 is-2">
                <h3 class="title is-size-6 is-font-title">
                    {{ $t('project.company') }}
                </h3>
                <p class="subtitle is-size-6 has-margin-y-1">
                    {{ $t('project.' + id + '.company') }}
                </p>
            </div>
            <div class="column is-offset-1">
                <h3 class="title is-size-6 is-font-title">
                    {{ $t('project.service') }}
                </h3>
                <p class="subtitle is-size-6 has-margin-y-1">
                    {{ $t('project.' + id + '.service') }}
                </p>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6 is-offset-1">
                <section>
                    <div>
                        <h6 class="has-text-weight-semibold has-margin-bottom-2 has-text-grey-light">{{ $t('project.about') }} {{ id }}<span class="has-text-purple">.</span></h6>
                        <p class="is-size-6 has-text-weight-light">
                            {{ $t('project.' + id + '.about') }}
                        </p>
                        <h6 class="has-text-weight-semibold has-margin-y-2 has-text-grey-light">{{ $t('project.problem') }}<span class="has-text-purple">.</span></h6>
                        <p class="is-size-6 has-text-weight-light">
                            {{ $t('project.' + id + '.problem') }}
                        </p>
                        <h6 class="has-text-weight-semibold has-margin-y-2 has-text-grey-light">{{ $t('project.process') }}<span class="has-text-purple">.</span></h6>
                        <p class="is-size-6 has-text-weight-light">
                            {{ $t('project.' + id + '.process') }}
                        </p>
                    </div>
                </section>
            </div>
        </div>
        <div class="columns">
            <div class="column is-11 is-offset-1">
                <section>
                    <div class="has-text-centered">
                        <img class="process" title="architecture design" :src="'~/assets/images/woks/projects/' + id + '-process.png'" />
                    </div>
                </section>
            </div>
        </div>
        <div class="columns">
            <div class="column is-6 is-offset-1">
                <section>
                    <div>
                        <h6 class="has-text-weight-semibold has-margin-y-2 has-text-grey-light">{{ $t('project.solution') }}<span class="has-text-purple">.</span></h6>
                        <p class="is-size-6 has-text-weight-light">
                            {{ $t('project.' + id + '.solution') }}
                        </p>
                    </div>
                </section>
            </div>
        </div>
        <div class="columns">
            <div class="column is-11 is-offset-1">
                <section>
                    <div class="has-text-centered">
                        <img class="process" title="architecture design" :src="'~/assets/images/woks/projects/' + id + '-solution.png'" />
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