<template>
    <section id="works">
        <modal v-show="isModalActive" @close="isModalActive = false">
            <p slot="content-modal" :class="'image ' + this.currentWork.size">
                <img class="img-modal" :src="this.currentWork.img" :alt="this.currentWork.name">
            </p>
        </modal>
        <div class="container has-margin-top-12 has-margin-bottom-6 has-padding-left-1-tablet">
            <div class="columns">
                <div class="column is-5 is-offset-1 is-flex">
                    <section class="has-fullheight has-padding-left-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-grey-light">{{ $t('title.portfolio') }}<span class="has-text-corail">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                {{ $t('main_title.portfolio_detail') }}<span class="has-text-corail">.</span>
                            </h2>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="container has-padding-x-2-mobile has-padding-left-1-tablet has-margin-bottom-12">
            <div class="columns">
                <div class="column is-10 is-offset-1 is-flex">
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-parent">
                                    <article class="tile is-child">
                                        <figure v-lazyload class="image is-clipped is-square">
                                            <img class="has-background-corail is-cursor-hand" :data-url="require('~/assets/images/works/' + this.firstWork.img + '.png')" :alt="this.firstWork.img" @click="showModalFirst()">
                                        </figure>
                                    </article>
                                </div>
                                <div class="tile is-vertical is-parent">
                                    <div class="columns is-multiline is-mobile">
                                        <div v-for="(work, key) in works" :key="key" class="column is-one-third-desktop is-one-third-tablet is-one-third-mobile">
                                            <article class="tile is-child">
                                                <figure v-lazyload class="image is-clipped is-square">
                                                    <img class="has-background-corail is-cursor-hand" :data-url="require('~/assets/images/works/' + work.img + '.png')" :alt="work.img" @click="showModal(works[key])">
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
        head () {
            return {
                title: 'Web design | Damien',
                meta: [
                    { hid: 'description', name: 'description', content: 'Some of my web design and graphic design work' }
                ]
            }
        },
        data() {
            return {
                isModalActive: false,
                firstWork: {
                    name: 'UI design',
                    type: 'ui-design',
                    img: 'find_your_room',
                    size: 'is-4by3'
                },
                works: [
                    {
                        name: 'Company logo',
                        type: 'logo',
                        img: 'logo_up',
                        size: 'is-4by3'
                    },
                    {
                        name: 'Business card',
                        type: 'illustration',
                        img: 'business_card',
                        size: 'is-4by3'
                    },
                    {
                        name: 'In Leather',
                        type: 'logo',
                        img: 'inleather_logo',
                        size: 'is-4by3'
                    },
                    {
                        name: 'ui-design',
                        type: 'ui-design',
                        img: 'payment method',
                        size: 'is-4by3'
                    },
                    {
                        name: 'Portfolio',
                        type: 'ui-design',
                        img: 'portfolio',
                        size: 'is-4by3'
                    },
                    {
                        name: 'design website',
                        type: 'ui-design',
                        img: 'corpsetame',
                        size: 'is-4by3'
                    },
                    {
                        name: 'ui-design',
                        type: 'ui-design',
                        img: 'event-spa',
                        size: 'is-4by3'
                    },
                    {
                        name: 'mobile design',
                        type: 'ui-design',
                        img: 'mobile-portfolio',
                        size: 'is-4by3'
                    },
                    {
                        name: 'ui-design',
                        type: 'ui-design',
                        img: 'event',
                        size: 'is-4by3'
                    }                    
                ],
                currentWork: {
                    name: 'test',
                    type: '',
                    img: '',
                    size: '',
                    title: ''
                }
            }
        },
        methods: {
            showModalFirst() {
                this.currentWork.name = this.firstWork.name
                this.currentWork.img = require('~/assets/images/works/' + this.firstWork.img + '_big.png') 
                this.currentWork.size = this.firstWork.size
                this.currentWork.path = this.firstWork.path
                this.isModalActive = true
            },
            showModal(work) {
                this.currentWork.name = work.name
                this.currentWork.img = require('~/assets/images/works/' + work.img + '_big.png')
                this.currentWork.size = work.size
                this.currentWork.path = work.path
                this.isModalActive = true
            }
        }
    }
</script>