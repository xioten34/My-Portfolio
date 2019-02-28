<template>
    <section class="container has-margin-y-5" id="home">
        <div class="columns">
            <div class="column has-text-centered is-5 is-offset-1">
                <img class="img-face" src="~/assets/images/svg/element/portrait.svg" />
            </div>
            <div class="column is-4 is-mobile is-flex">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <h1 class="title is-size-1 font-noto-jp-black is-uppercase">
                            {{ $t('home.name') }}<span class="has-text-corail">.</span>
                        </h1>
                        <h2 class="subtitle is-size-3 font-noto-jp-thin has-text-corail">
                            {{ $t('home.subtitle_1') }}<br><strong class="font-noto-jp-thin has-text-corail">{{ $t('home.subtitle_2') }}</strong>
                        </h2>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        head () {
            return {
                title: 'Damien - webdesigner',
                meta: [
                    { hid: 'description', name: 'description', content: 'Thinking, Loving & Making Web design' }
                ]
            }
        }
    }
</script>