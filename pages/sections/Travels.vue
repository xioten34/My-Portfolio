<template>
    <section id="travels">
        <div class="container has-margin-y-12 has-padding-left-1-tablet">
            <div class="columns">
                <div class="column is-4 is-flex">
                    <section class="has-fullheight has-padding-x-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-grey-light">{{ $t('title.travels') }}<span class="has-text-corail">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                {{ $t('main_title.travels') }}<span class="has-text-corail">.</span>
                            </h2>
                            <p class="is-size-6 has-text-weight-light has-text-justified has-text-corail">
                                {{ $t('text.travels') }}
                            </p>
                        </div>
                    </section>
                </div>
                <div class="column is-5 is-offset-1">
                    <div class="columns has-padding-x-2-mobile is-multiline is-mobile">
                        <div class="column is-half-desktop is-half-tablet is-half-mobile">
                            <div class="columns">
                                <div class="column">
                                    <article class="tile is-child">
                                        <figure class="image is-clipped is-2by3">
                                            <img class="has-background-corail is-img-travels" src="/travels/indonesia.jpg" alt="Indonesia">
                                        </figure>
                                    </article>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <article class="tile is-child">
                                        <figure class="image is-clipped is-3by2">
                                            <img class="has-background-corail is-img-travels" src="/travels/philippines.jpg" alt="Philippines">
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div class="column is-half-desktop is-half-tablet is-half-mobile">
                            <figure class="image is-clipped has-fullheight">
                                <img class="has-background-corail is-img-travels has-fullheight" src="/travels/japan.jpg" alt="Japan">
                            </figure>
                        </div>
                    </div>
                  <!--  <div class="tile is-ancestor">
                        <div class="tile is-vertical">
                            <div class="tile">
                                <div class="tile is-vertical is-parent">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-2by3">
                                                    <img class="has-background-corail is-img-travels is-cursor-hand" @click="isModalActive = true" src="/travels/indonesia.jpg" alt="Indonesia">
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-3by2">
                                                    <img class="has-background-corail is-img-travels is-cursor-hand" @click="isModalActive = true" src="/travels/philippines.jpg" alt="Philippines">
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child">
                                        <figure class="image is-clipped has-fullheight">
                                            <img class="has-background-corail is-img-travels is-cursor-hand has-fullheight" @click="isModalActive = true" src="/travels/japan.jpg" alt="Japan">
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>    
    export default {
        data() {
            return {
                isModalActive: false,
            }
        }
    }
</script>