<template>
    <section class="container has-margin-y-5" id="home">
        <div class="columns">
            <div class="column has-text-centered is-5 is-offset-1">
                <img class="img-face" src="~assets/images/svg/element/portrait.svg" />
            </div>
            <div class="column is-4 is-mobile is-flex">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <h1 class="title is-size-1 is-uppercase has-text-weight-bold">
                            Damien<span class="has-text-corail">.</span>
                        </h1>
                        <h2 class="subtitle is-size-3 has-text-weight-light has-text-corail">
                            Thinking, Loving & Making<br>Webdesign
                        </h2>
                    </div>
                </section>
            </div>
            <div class="column is-1 is-offset-1 is-flex">
                <section class="has-fullheight is-align-center has-text-corail">
                    <p class="is-icon-list">
                        <span>social media —</span>
                        <a href="https://www.instagram.com/j.dams" target="_blank"><fa-icon class="has-no-margin-top" :icon="['fab', 'instagram']" /></a>
                        <a href="https://www.linkedin.com/in/damien-jaillot" target="_blank"><fa-icon :icon="['fab', 'linkedin']" /></a>
                        <a href="https://github.com/xioten34" target="_blank"><fa-icon :icon="['fab', 'github']" /></a>
                        <a href="mailto:damien.jaillot@gmail.com"><fa-icon :icon="['fa', 'envelope']" /></a>
                    </p>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>