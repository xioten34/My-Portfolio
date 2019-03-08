<template>
    <section class="container has-margin-y-5 has-padding-y-1" id="home">
        <div class="columns">
            <div class="column has-text-centered is-5 is-offset-1">
                <img class="img-face" src="~/assets/images/svg/element/portrait.svg" />
            </div>
            <div class="column is-5 is-mobile is-flex">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <h1 class="title is-size-1 font-noto-jp-black is-uppercase">
                            {{ $t('home.name') }}<span class="has-text-corail">.</span>
                        </h1>
                        <h2 class="subtitle is-size-3 font-noto-jp-thin has-text-corail">
                            {{ $t('home.subtitle_1') }}<br><strong class="font-noto-jp-thin has-text-corail">{{ $t('home.subtitle_2') }}</strong>
                        </h2>
                        <p class="has-margin-top-8 has-text-corail">{{ $t('home.next') }} <i class="is-button-next has-margin-left-1"><fa-icon :icon="['fa', 'long-arrow-alt-down']" /></i></p>
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
                title: 'Web design | Damien',
                meta: [
                    { hid: 'description', name: 'description', content: 'Thinking, Loving & Making Web design' }
                ]
            }
        }
    }
</script>