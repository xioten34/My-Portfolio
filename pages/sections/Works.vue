<template>
    <section>
        <modal v-show="isModalActive" :active="isModalActive" :current-work="works.id" @close="isModalActive = false"></modal>
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
                                        <div v-for="work in works" :key="work.id" class="column is-one-fifth-desktop is-one-quarter-mobile">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" :src="'/works/' + work.link" alt="logo" @click="showModal(works[work.id])">
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
                        id: 1,
                        name: '',
                        link: 'logo_up.png',
                        text: ''
                    },
                    {
                        id: 2,
                        name: '',
                        link: '',
                        text: ''
                    },
                    {
                        id: 3,
                        name: '',
                        link: '',
                        text: ''
                    },
                    {
                        id: 4,
                        name: '',
                        link: '',
                        text: ''
                    },
                    {
                        id: 5,
                        name: '',
                        link: '',
                        text: ''
                    },
                    {
                        id: 6,
                        name: '',
                        link: '',
                        text: ''
                    },
                    {
                        id: 7,
                        name: '',
                        link: '',
                        text: ''
                    },
                    {
                        id: 8,
                        name: '',
                        link: '',
                        text: ''
                    },
                    {
                        id: 9,
                        name: '',
                        link: '',
                        text: ''
                    },
                    {
                        id: 10,
                        name: '',
                        link: '',
                        text: ''
                    },
                    
                ],
                currentWork: {
                    id: '',
                    name: '',
                    link: '',
                    text: ''
                }
            }
        },
        methods: {
            showModal(work) {
                console.log(work)
                this.isModalActive = true
            },
        }
    }
</script>