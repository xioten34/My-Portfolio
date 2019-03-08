<template>
    <div class="main">
        <main-menu />
        <home />
        <about />
        <works />
        <travels />
       <!-- <section class="has-fullheight is-icon-list is-align-center has-text-corail">
            <p>
                <a href="https://www.instagram.com/j.dams" target="_blank"><fa-icon class="has-no-margin-top" :icon="['fab', 'instagram']" /></a>
                <a href="https://www.linkedin.com/in/damien-jaillot" target="_blank"><fa-icon :icon="['fab', 'linkedin']" /></a>
                <a href="https://github.com/xioten34" target="_blank"><fa-icon :icon="['fab', 'github']" /></a>
                <a href="mailto:damien.jaillot@gmail.com"><fa-icon :icon="['fa', 'envelope']" /></a>
            </p>
        </section> -->
        <footer class="footer">
            <no-ssr>
                <h2 class="content is-size-2 has-text-weight-semibold has-text-centered">
                    {{ $t('contact') }} <a class="has-text-corail" href="mailto:damien.jaillot@gmail.com">{{ $t('me') }}</a>{{ $t('contact_jp') }}<span class="has-text-corail">.</span>
                </h2>
            </no-ssr>
            <div class="content has-text-centered">
                <p>
                    <strong>{{ $t('footer.text_1') }}</strong>{{ $t('footer.text_2') }}<a class="has-text-corail" href="https://www.linkedin.com/in/damien-jaillot">Damien Jaillot</a>{{ $t('footer.text_3') }}. {{ $t('footer.text_4') }}<a class="has-text-corail" href="https://github.com/xioten34">Github</a>{{ $t('footer.text_5') }}.
                </p>
            </div>
            <div class="content has-text-centered is-size-5 has-text-corail">
                <a href="https://dribbble.com/j-dams" class="has-margin-right-0-3" target="_blank"><fa-icon :icon="['fab', 'dribbble']" /></a>
                <a href="https://www.instagram.com/j.dams" class="has-margin-right-0-3" target="_blank"><fa-icon :icon="['fab', 'instagram']" /></a>
                <a href="https://www.linkedin.com/in/damien-jaillot" class="has-margin-right-0-3" target="_blank"><fa-icon :icon="['fab', 'linkedin']" /></a>
                <a href="https://github.com/xioten34" class="has-margin-right-0-3" target="_blank"><fa-icon :icon="['fab', 'github']" /></a>
                <a href="mailto:damien.jaillot@gmail.com"><fa-icon :icon="['fa', 'envelope']" /></a>
            </div>
        </footer>
    </div>
</template>

<script>
    import mainMenu from './Common/MainMenu'
    import home from './sections/Home'
    import about from './sections/About'
    import works from './sections/Works'
    import travels from './sections/Travels'

    export default {
        transition: 'modal-fade',
        components: {
            mainMenu,
            home,
            about,
            works,
            travels
        }
    }
</script>
