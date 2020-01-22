<template>
    <section class="container has-margin-y-10" id="about">
        <div class="columns">
            <div class="column is-5 is-hidden-mobile">
                <img class="is-img-about" src="~/assets/images/about/damien.jpg" />
            </div>
            <div class="column is-6 is-offset-1">
                <section class="has-fullheight has-padding-2-mobile is-align-center">
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
                title: 'UI/UX design | Damien',
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
                        img: 'adobe-photoshop-brands'
                    },
                    {
                        name: 'Adobe illustrator',
                        img: 'adobe-illustrator-brands'
                    },
                    {
                        name: 'Adobe xd',
                        img: 'adobe-xd-brands'
                    },
                    {
                        name: 'Adobe indesign',
                        img: 'adobe-indesign-brands'
                    },
                    {
                        name: 'Affinity designer',
                        img: 'affinity-designer-brands'
                    },
                    {
                        name: 'HTML5',
                        img: 'html5-brands'
                    },
                    {
                        name: 'CCS3',
                        img: 'css3-brands'
                    },
                    {
                        name: 'Sass',
                        img: 'sass-brands'
                    },
                    {
                        name: 'Javascript',
                        img: 'js-brands'
                    },
                    {
                        name: 'Vue.js',
                        img: 'vuejs-brands'
                    },
                    {
                        name: 'Wordpress',
                        img: 'wordpress-simple-brands'
                    },
                    {
                        name: 'And more',
                        img: 'ellipsis-h-solid'
                    }
                ]
            }
        }
    }
</script>