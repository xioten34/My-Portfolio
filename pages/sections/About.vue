<template>
    <section class="container has-margin-y-10" id="about">
        <div class="columns">
            <div class="column is-5">
                <img class="is-img-about" src="~/assets/images/about/portrait-real.jpg" />
            </div>
            <div class="column is-6 is-offset-1">
                <section class="has-fullheight has-padding-2-mobile is-align-center">
                    <div>
                        <span class="has-text-weight-semibold has-text-grey-light">{{ $t('title.about') }}<span class="has-text-purple">.</span></span>
                        <h2 class="title has-text-weight-bold has-margin-top-2">
                            {{ $t('main_title.about_1') }}<br><span class="has-text-purple">&</span> {{ $t('main_title.about_2') }}<span class="has-text-purple">.</span>
                        </h2>
                        <p class="is-size-6 has-text-weight-light has-text-purple">
                            {{ $t('text.about_1') }}
                        </p>
                        <p class="is-size-6 has-text-weight-bold has-text-purple has-margin-y-1">
                            {{ $t('text.about_2') }}
                        </p>
                        <p class="is-size-6 has-text-weight-light has-text-purple">
                            {{ $t('text.about_3') }}
                        </p>
                        <div class="columns is-skills is-mobile is-multiline has-margin-top-1">
                            <div v-for="skill in skills" :key="skill.id" class="column is-narrow">
                                <figure v-lazyload class="image is-square is-skill"> <!-- is-clipped -->
                                    <img class="has-background-purple has-padding-1" :data-url="require('~/assets/images/skills/' + skill.img + '.svg')" :alt="skill.name" :title="skill.name">
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        transition: "about",
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
                ]
            }
        }
    }
</script>