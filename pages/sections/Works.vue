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
                                               <nuxt-link :to="{ path: lang + '/projects/project', query:{id:work.name}}">
                                                    <figure v-lazyload class="image is-clipped is-4by3"> 
                                                        <img class="has-background-purple is-cursor-hand" :data-url="require('~/assets/images/works/' + work.img + '.png')" :alt="work.img">
                                                    </figure>
                                                </nuxt-link>
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
    import project from '../projects/project';

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
                lang: this.$i18n.locale == 'en' ? 'en' : '',
                works: [
                    {
                        name: 'Memlin',
                        type: 'ui-design',
                        img: 'memlin_project',
                    },
                    {
                        name: 'Legalfis',
                        type: 'ui-design',
                        img: 'legalfis_project',
                    },
                    {
                        name: 'Source',
                        type: 'ui-design',
                        img: 'source_project',
                    },
                    {
                        name: 'next',
                        type: 'ui-design',
                        img: 'new_project',
                    }                    
                ],
                currentWork: {
                    name: '',
                    type: '',
                    img: '',
                    title: ''
                }
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