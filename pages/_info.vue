<template>
    <div class="d-corail-background has-padding-top-9 has-padding-bottom-3-mobile">
        <div class="container">
            <div class="columns">
                <div class="column is-5 is-offset-1 is-flex">
                    <section class="has-fullheight has-padding-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-white">{{ $t('title.about_2') }}<span class="has-text-white">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                {{ $route.params.info }}<span class="has-text-white">.</span>
                            </h2>
                            <p class="is-size-6 has-text-weight-light has-text-justified has-text-white">
                                {{ $t('experiences.' + $route.params.info) }}
                            </p>
                        </div>
                    </section>
                </div>
                <div class="column has-padding-x-3 is-5 is-offset-1">
                    <figure class="image is-4by5">
                        <img class="img-modal" :src="'/experiences/' + $route.params.info + '.jpg'" :alt="$route.params.info">
                    </figure>
                </div>
            </div>
        </div>
        <NuxtLink :to="localePath({ name: 'index' })">
            <button class="modal-close is-large" aria-label="close"></button>
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        transition: 'modal-fade',
        data() {
            return {

            }
        }
    }
</script>