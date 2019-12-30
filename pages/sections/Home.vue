<template>
    <section class="container" id="home">
        <div class="columns">
            <div class="column is-6 has-text-left">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <span class="is-size-4">Hello,</span>
                        <h1 class="title is-font-size-6">
                            {{ $t('home.name') }}<span class="has-text-purple">.</span>
                        </h1>
                        <h2 class="subtitle is-font-size-3-5 has-margin-y-1">
                            {{ $t('home.subtitle_1') }} {{ $t('home.subtitle_2') }}
                        </h2>
                        <div class="columns buttons has-margin-x-0 has-margin-y-6 is-mobile">
                            <div class="column is-two-fifths-desktop is-half-mobile is-half-tablet">
                                <a href="mailto:damien.jaillot@gmail.com" class="button button-contact">
                                    Contact me
                                </a>
                            </div>
                            <div class="column is-two-fifths-desktop is-half-mobile is-half-tablet">
                                <a href="/cv_damien.pdf" target="_blank" class="button button-resume">
                                    <fa-icon class="has-margin-right-8px" :icon="['fa', 'file-pdf']" />
                                    My Resume
                                </a>
                            </div>
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