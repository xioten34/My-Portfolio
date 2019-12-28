<template>
    <section class="container" id="home">
        <div class="columns">
            <div class="column is-6 has-text-left">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <span class="is-size-4">Hello,</span>
                        <h1 class="title is-font-size-6">
                            {{ $t('home.name') }}<span class="has-text-corail">.</span>
                        </h1>
                        <h2 class="subtitle is-font-size-3-5 has-margin-y-1">
                            {{ $t('home.subtitle_1') }} {{ $t('home.subtitle_2') }}
                        </h2>
                        <div class="is-cta columns has-margin-x-0 has-margin-y-6">
                            <a class="column is-6 is-cta-contact has-text-centered">
                                Contact me
                            </a>
                            <a class="column is-6 is-cta-resume has-text-centered">
                                My Resume
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div class="column is-6 has-text-right">
                <img class="img-face" src="~/assets/images/home/portrait.png" />
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