<template>
    <section id="works">
        <modal v-show="isModalActive" @close="isModalActive = false">
            <div slot="text-modal">
                <span class="has-text-weight-semibold has-text-white">Works<span class="has-text-white">.</span></span>
                <h2 class="title has-text-weight-bold has-margin-top-2">
                    {{ this.currentWork.name }}<span class="has-text-white">.</span>
                </h2>
                <p class="is-size-6 has-text-weight-light has-text-justified has-text-white">
                    I'm interested by a lot of thing around the web, espacially webdesign, but i can also coding as front-end but sometime using php but infortunaltly not my speciallity.
                    I started to work by myself as freelancer but finallly i looked for a job in company after came back school. I work for a french company and also Swedish startup. Next step is to find job in Japan.
                </p>
            </div>
            <img slot="image-modal" :src="'/works/' + this.currentWork.img + '.png'" :alt="this.currentWork.name">
        </modal>
        <div class="container has-margin-top-12 has-margin-bottom-6 has-padding-left-1-tablet">
            <div class="columns">
                <div class="column is-5 is-flex">
                    <section class="has-fullheight has-padding-left-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-grey-light">Portfolio<span class="has-text-corail">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                Some of my work<span class="has-text-corail">.</span>
                            </h2>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="container has-padding-x-2-mobile has-padding-left-1-tablet has-margin-bottom-12">
            <div class="columns">
                <div class="column is-10 is-flex">
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-vertical is-parent">
                                    <div class="columns is-multiline is-mobile">
                                        <div v-for="(work, key) in works" :key="key" class="column is-one-fifth-desktop is-one-quarter-mobile">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail is-cursor-hand" :src="'/works/' + work.img + '.png'" alt="logo" @click="showModal(works[key])">
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Modal from '../Common/Modal.vue';

    export default {
        components: {
            Modal,
        },
        data() {
            return {
                isModalActive: false,
                works: [
                    {
                        name: 'Company logo',
                        img: 'logo_up',
                        text: ''
                    },
                    {
                        name: '',
                        img: '',
                        text: ''
                    },
                    {
                        name: '',
                        img: '',
                        text: ''
                    },
                    {
                        name: '',
                        img: '',
                        text: ''
                    },
                    {
                        name: '',
                        img: '',
                        text: ''
                    },
                    {
                        name: '',
                        img: '',
                        text: ''
                    },
                    {
                        name: '',
                        img: '',
                        text: ''
                    },
                    {
                        name: '',
                        img: '',
                        text: ''
                    },
                    {
                        name: '',
                        img: '',
                        text: ''
                    },
                    {
                        name: '',
                        img: '',
                        text: ''
                    },
                    
                ],
                currentWork: {
                    name: '',
                    img: '',
                    title: '',
                    text: ''
                }
            }
        },
        methods: {
            showModal(work) {
                console.log(work)
                this.currentWork.name = work.name
                this.currentWork.img = work.img + '_big'
                this.currentWork.path = work.path
                this.currentWork.text = work.text
                this.isModalActive = true
            },
        }
    }
</script>