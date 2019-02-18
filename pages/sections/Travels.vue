<template>
    <section>
        <modal v-show="isModalActive" :active="isModalActive" @close="isModalActive = false"></modal>
        <div class="container has-margin-y-12 has-padding-left-1-tablet">
            <div class="columns">
                <div class="column is-5 is-flex">
                    <section class="has-fullheight has-padding-left-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-grey-light">Travel<span class="has-text-corail">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                I take my inspiration<br>from travels<span class="has-text-corail">.</span>
                            </h2>
                            <h2 class="subtitle is-size-3 has-text-weight-light has-text-corail">
                                Thinking, Loving & Making<br>Webdesign
                            </h2>
                        </div>
                    </section>
                </div>
                <div class="column is-5">
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-vertical is-parent">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child">
                                        <figure class="image is-clipped has-fullheight">
                                            <img class="has-background-corail has-fullheight" src="" alt="">
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
                                                    <img class="has-background-corail" src="" alt="">
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