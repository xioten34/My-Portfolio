<template>
    <section class="container" id="works">
        <div class="has-margin-bottom-6">
            <div class="columns">
                <div class="column is-5">
                    <section class="has-fullheight has-padding-left-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-grey-light">{{ $t('title.portfolio') }}<span class="has-text-purple">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                {{ $t('main_title.portfolio_detail') }}<span class="has-text-purple">.</span>
                            </h2>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="has-padding-x-2-mobile has-padding-left-1-tablet has-margin-bottom-12">
            <div class="columns">
                <div class="column is-12">
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-vertical is-parent">
                                    <div class="columns is-multiline is-mobile">
                                        <div v-for="(work, key) in works" :key="key" class="column is-half">
                                            <article class="tile is-child">
                                                <!-- <nuxt-link to="/sections/About">Accueil</nuxt-link> -->
                                                <figure v-lazyload class="image is-clipped is-4by3"> 
                                                    <img class="has-background-purple is-cursor-hand" :data-url="require('~/assets/images/works/' + work.img + '.png')" :alt="work.img">
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
    export default {
        components: {},
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
                works: [
                    {
                        name: 'ui-design',
                        type: 'ui-design',
                        img: 'memlin',
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