<template>
    <section class="container has-margin-x-0 is-align-center" :style="'background:url(' + backgroundimg + '); background-size: cover'" id="error">
        <div class="columns">
            <div class="column is-mobile is-flex">
                <section class="has-fullheight is-align-center has-text-centered">
                    <div class="is-main-title">
                        <h1 class="title is-size-1 is-uppercase has-text-light" v-if="error.statusCode === 404">
                            {{ $t('error.first') }}<span class="has-text-purple">.</span>
                        </h1>
                        <h1 class="title is-size-1 is-uppercase has-text-light" v-else>
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
import background from '~/assets/images/svg/element/background.png';

export default {
  props: ['error'],
   data() {
        return {
            backgroundimg: background,
        }
   }
}
</script>