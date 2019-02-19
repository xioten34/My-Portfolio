<template>
    <section id="travels">
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
                            <span class="has-text-weight-semibold has-text-grey-light">Travel<span class="has-text-corail">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                I take my inspiration<br>from travels<span class="has-text-corail">.</span>
                            </h2>
                            <p class="is-size-6 has-text-weight-light has-text-justified has-text-corail">
                                I love to travel espacially in Asia, my favorite country is Japan, as you can see my portfolio is a bit inspired by it.
                            </p>
                        </div>
                    </section>
                </div>
                <div class="column is-5 is-offset-1">
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-vertical is-parent">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail is-cursor-hand" @click="isModalActive = true" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail is-cursor-hand" @click="isModalActive = true" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child">
                                        <figure class="image is-clipped has-fullheight">
                                            <img class="has-background-corail is-cursor-hand has-fullheight" @click="isModalActive = true" src="" alt="">
                                        </figure>
                                    </article>
                                </div>
                            </div>
                            <div class="tile">
                                <div class="tile is-vertical is-parent">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped">
                                                    <img class="has-background-corail is-cursor-hand" @click="isModalActive = true" src="" alt="">
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
            }
        }
    }
</script>