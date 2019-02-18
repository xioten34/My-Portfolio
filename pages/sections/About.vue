<template>
    <section>
        <modal v-show="isModalActive" :active="isModalActive" :data="experiences" @close="isModalActive = false"></modal>
        <div class="container has-margin-y-12 has-padding-left-1-tablet">
            <div class="columns">
                <div class="column is-5 is-flex">
                    <section class="has-fullheight has-padding-left-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-grey-light">About me<span class="has-text-corail">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                I love webdesign<br><span class="has-text-corail">&</span> also front-end design<span class="has-text-corail">.</span>
                            </h2>
                            <h2 class="subtitle is-size-3 has-text-weight-light has-text-corail">
                                Thinking, Loving & Making<br>Webdesign
                            </h2>
                        </div>
                    </section>
                </div>
                <div class="column is-5">
                    <div class="has-padding-left-2 has-text-weight-semibold has-text-grey-dark">What i know <span class="has-text-corail">&</span> what i use<span class="has-text-corail">.</span></div>
                    <div class="columns is-multiline is-mobile has-padding-2 has-padding-right-0 has-padding-right-2-mobile">
                        <div v-for="skill in skills" :key="skill.id" class="column is-2-desktop is-one-quarter-mobile is-one-third-tablet">
                            <figure class="image is-clipped is-square">
                                <img class="has-background-corail" src="" alt="">
                            </figure>
                        </div>
                    </div>
                    <div class="has-padding-left-2 has-text-weight-semibold has-text-grey-dark">Where i used it <span class="has-text-corail">&</span> where i improved it<span class="has-text-corail">.</span></div>
                    <div class="columns is-mobile has-padding-2 has-padding-right-0 has-padding-right-2-mobile is-clipped has-padding-left-20px">
                        <hooper  :settings="hooperSettings">
                            <slide v-for="exp in experiences" :key="exp.id" class="has-background-corail">
                                <h3 class="has-padding-left-1">
                                    {{ exp.name }}
                                </h3>
                                <a @click="isModalActive = true">More</a>
                            </slide>
                            <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        </hooper>
                    </div>
                </div>
                <div class="column is-1 is-offset-1"></div>
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
                        name: 'HTML',
                        img: ''
                    },
                    {
                        name: 'CSS',
                        img: ''
                    },
                    {
                        name: 'SCSS',
                        img: ''
                    },
                    {
                        name: 'JS',
                        img: ''
                    },
                    {
                        name: 'VueJs',
                        img: ''
                    },
                    {
                        name: 'Xd',
                        img: ''
                    },
                    {
                        name: 'Photoshop',
                        img: ''
                    },
                    {
                        name: 'Illustrator',
                        img: ''
                    },
                    {
                        name: 'Inesign',
                        img: ''
                    },
                    {
                        name: 'Infinity designer',
                        img: ''
                    },
                    {
                        name: 'Git',
                        img: ''
                    },
                    {
                        name: '...',
                        img: ''
                    }
                ],
                experiences: [
                    {
                        name: 'Memlin',
                    },
                    {
                        name: 'eCare',
                    },
                    {
                        name: 'Freelance',
                    }
                ]
            }
        }
    }
</script>