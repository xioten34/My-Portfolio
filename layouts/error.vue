<template>
    <section class="container has-margin-y-10">
        <div class="columns">
            <div class="column has-text-centered is-5 is-offset-1">
                <img class="img-face" src="~/assets/images/svg/element/portrait.svg" />
            </div>
            <div class="column is-4 is-mobile is-flex">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <h1 class="title is-size-1 font-noto-jp-black is-uppercase" v-if="error.statusCode === 404">
                            {{ $t('error.first') }}<span class="has-text-purple">.</span>
                        </h1>
                        <h1 class="title is-size-1 font-noto-jp-black is-uppercase" v-else>
                            {{ $t('error.second') }}<span class="has-text-purple">.</span>
                        </h1>
                        <nuxt-link to="/">
                            <h2 class="subtitle is-size-3 font-noto-jp-thin has-text-purple">
                                {{ $t('error.third') }}
                            </h2>
                        </nuxt-link>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  props: ['error'],
}
</script>