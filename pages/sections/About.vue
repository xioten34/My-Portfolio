<template>
    <section id="about">
        <modal v-show="isModalActive" @close="isModalActive = false">
            <div slot="text-modal">
                <span class="has-text-weight-semibold has-text-grey-light">About me<span class="has-text-corail">.</span></span>
                <h2 class="title has-text-weight-bold has-margin-top-2">
                    I love webdesign<br><span class="has-text-corail">&</span> also front-end design<span class="has-text-corail">.</span>
                </h2>
                <p class="is-size-6 has-text-weight-light has-text-justified has-text-corail">
                    I'm interested by a lot of thing around the web, espacially webdesign, but i can also coding as front-end but sometime using php but infortunaltly not my speciallity.
                    I started to work by myself as freelancer but finallly i looked for a job in company after came back school. I work for a french company and also Swedish startup. Next step is to find job in Japan.
                </p>
            </div>
        </modal>
        <div class="container has-margin-y-12 has-padding-left-1-tablet">
            <div class="columns">
                <div class="column is-4 is-flex">
                    <section class="has-fullheight has-padding-left-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-grey-light">About me<span class="has-text-corail">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                I love webdesign<br><span class="has-text-corail">&</span> also front-end design<span class="has-text-corail">.</span>
                            </h2>
                            <p class="is-size-6 has-text-weight-light has-text-justified has-text-corail">
                                I'm interested by a lot of thing around the web, espacially webdesign, but i can also coding as front-end but sometime using php but infortunaltly not my speciallity.
                                I started to work by myself as freelancer but finallly i looked for a job in company after came back school. I work for a french company and also Swedish startup. Next step is to find job in Japan.
                            </p>
                            <a href="#" class="button has-no-border has-background-corail has-margin-top-2">My resume <fa-icon class="has-margin-left-1" :icon="['fa', 'file-pdf']" /></a>
                        </div>
                    </section>
                </div>
                <div class="column is-5 is-offset-1">
                    <div class="has-padding-left-2 has-text-weight-semibold has-text-grey-dark">What i know <span class="has-text-corail">&</span> what i use<span class="has-text-corail">.</span></div>
                    <div class="columns is-skills is-multiline is-mobile has-padding-2 has-padding-right-0 has-padding-right-2-mobile">
                        <div v-for="skill in skills" :key="skill.id" class="column is-2-desktop is-one-fifth-mobile is-one-third-tablet">
                            <figure class="image is-square is-skill"> <!-- is-clipped -->
                                <img class="has-background-corail has-padding-1" :src="'/skills/' + skill.img + '.svg'" alt="">
                                <div class="is-hover is-align-center">{{ skill.name }}</div>
                            </figure>
                        </div>
                    </div>
                    <div class="has-padding-left-2 has-text-weight-semibold has-text-grey-dark">Where i used it <span class="has-text-corail">&</span> where i improved it<span class="has-text-corail">.</span></div>
                    <div class="columns is-mobile has-padding-2 has-padding-right-0 has-padding-right-2-mobile is-clipped has-padding-left-20px">
                        <hooper  :settings="hooperSettings">
                            <slide v-for="exp in experiences" :key="exp.id">
                                <div class="is-overlay-project"></div>
                                <img class="is-img-experience" :src="'/experiences/' + exp.img + '.jpg'" alt="lund ideon" />
                                <h3 class="has-padding-left-1">
                                    {{ exp.name }}
                                </h3>
                                <a class="button has-no-border has-background-corail" @click="isModalActive = true">More</a>
                            </slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        </hooper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
    import Modal from '../Common/Modal.vue';

    export default {
        components: {
            Hooper,
            Slide,
            HooperNavigation,
            Modal
        },
        data() {
            return {
                hooperSettings: {
                    itemsToShow: 1.5,
                },
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
                        name: 'Memlin',
                        img: 'lund_ideon'
                    },
                    {
                        name: 'eCare',
                        img: 'montpellier'
                    },
                    {
                        name: 'Freelance',
                        img: 'freelance'
                    }
                ]
            }
        }
    }
</script>