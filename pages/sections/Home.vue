<template>
    <section class="container" id="home">
        <div class="columns">
            <div class="column is-6 has-text-left">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <!-- <span class="is-size-4">{{ $t('home.hello') }},</span> -->
                        <h1 class="title is-font-size-title is-font-title fade-in-down-2">
                            {{ $t('home.name') }}<span class="has-text-purple">.</span>
                        </h1>
                        <h2 class="subtitle is-font-size-3 has-margin-y-1 fade-in-up-3">
                            {{ $t('home.subtitle_1') }} {{ $t('home.subtitle_2') }}
                        </h2>
                        <h3 class="subtitle is-size-4 has-margin-y-1 fade-in-up-3-2">
                            ({{ $t('home.subtitle_3') }} )
                        </h3>
                        <div class="columns buttons has-margin-x-0 has-margin-y-6 is-mobile">
                            <div class="column is-two-fifths-desktop is-half-mobile is-half-tablet has-padding-left-0 fade-in-up-2">
                                <a href="mailto:damien.jaillot@gmail.com" class="button button-contact">
                                    {{ $t('home.contact') }}
                                </a>
                            </div>
                            <div class="column is-two-fifths-desktop is-half-mobile is-half-tablet fade-in-up-3">
                                <a href="/cv_damien_jaillot.pdf" target="_blank" class="button button-resume">
                                    <fa-icon class="has-margin-right-8px" :icon="['fa', 'file-pdf']" />
                                    {{ $t('home.resume') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="column is-6 has-text-right-tablet has-text-centered-mobile">
                <img class="img-face" src="~/assets/images/home/portrait.jpg" />
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