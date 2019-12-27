<template>
    <section id="about">
        <div class="container has-margin-y-12 has-padding-left-1-tablet">
            <div class="columns">
                <div class="column is-4 is-offset-1 is-flex">
                    <section class="has-fullheight has-padding-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-grey-light">{{ $t('title.about') }}<span class="has-text-corail">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                {{ $t('main_title.about_1') }}<br><span class="has-text-corail">&</span> {{ $t('main_title.about_2') }}<span class="has-text-corail">.</span>
                            </h2>
                            <p class="is-size-6 has-text-weight-light has-text-justified has-text-corail">
                                {{ $t('text.about_1') }}
                            </p>
                            <p class="is-size-6 has-text-weight-bold has-text-corail has-margin-y-1">
                                {{ $t('text.about_2') }}
                            </p>
                            <p class="is-size-6 has-text-weight-light has-text-justified has-text-corail">
                                {{ $t('text.about_3') }}
                            </p>
                            <a href="/cv_damien.pdf" target="_blank" class="button has-no-border has-background-corail has-margin-top-2">{{ $t('text.resume') }} <fa-icon class="has-margin-left-1" :icon="['fa', 'file-pdf']" /></a>
                        </div>
                    </section>
                </div>
                <div class="column is-5 is-offset-1">
                    <div class="has-padding-left-2 has-text-weight-semibold has-text-grey-dark">{{ $t('title.about_1') }}<span class="has-text-corail">.</span></div>
                    <div class="columns is-skills is-multiline is-mobile has-padding-2 has-padding-right-0 has-padding-right-2-mobile">
                        <div v-for="skill in skills" :key="skill.id" class="column is-2-desktop is-one-fifth-mobile is-one-third-tablet">
                            <figure v-lazyload class="image is-square is-skill"> <!-- is-clipped -->
                                <img class="has-background-corail has-padding-1" :data-url="require('~/assets/images/skills/' + skill.img + '.svg')" :alt="skill.img">
                                <div class="is-hover is-align-center">{{ skill.name }}</div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {},
        head () {
            return {
                title: 'Web design | Damien',
                meta: [
                    { hid: 'description', name: 'description', content: 'Web designer lover, making also front-end design and a bit back-end.' }
                ]
            }
        },
        data() {
            return {
                isModalActive: false,
                skills: [
                    {
                        name: 'Adobe photoshop',
                        path: '',
                        img: 'adobe-photoshop-brands'
                    },
                    {
                        name: 'Adobe illustrator',
                        path: '',
                        img: 'adobe-illustrator-brands'
                    },
                    {
                        name: 'Adobe xd',
                        path: '',
                        img: 'adobe-xd-brands'
                    },
                    {
                        name: 'Adobe indesign',
                        path: '',
                        img: 'adobe-indesign-brands'
                    },
                    {
                        name: 'Affinity designer',
                        path: '',
                        img: 'affinity-designer-brands'
                    },
                    {
                        name: 'HTML5',
                        path: '',
                        img: 'html5-brands'
                    },
                    {
                        name: 'CCS3',
                        path: '',
                        img: 'css3-brands'
                    },
                    {
                        name: 'Sass',
                        path: '',
                        img: 'sass-brands'
                    },
                    {
                        name: 'Javascript',
                        path: '',
                        img: 'js-brands'
                    },
                    {
                        name: 'Vue.js',
                        path: '',
                        img: 'vuejs-brands'
                    },
                    {
                        name: 'Wordpress',
                        path: '',
                        img: 'wordpress-simple-brands'
                    },
                    {
                        name: 'And more',
                        path: '',
                        img: 'ellipsis-h-solid'
                    }
                ],
                experiences: [
                    {
                        name: 'memlin',
                        date: '2018 to 2019 (10 months)',
                        location: 'Lund, Sweden',
                        img: 'lund_ideon'
                    },
                    {
                        name: 'ecare',
                        date: '2017 (10 months)',
                        location: 'Montpellier, France',
                        img: 'montpellier'
                    },
                    {
                        name: 'freelance',
                        date: '',
                        location: 'World',
                        img: 'freelance_thumb'
                    }
                ]
            }
        }
    }
</script>