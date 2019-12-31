<template>
    <section class="container has-margin-y-10" id="about">
        <div class="columns">
            <div class="column is-5">
                <img class="is-img-about" src="~/assets/images/about/portrait-real.jpg" />
            </div>
            <div class="column is-6 is-offset-1">
                <section class="has-fullheight has-padding-2-mobile is-align-center">
                    <div>
                        <span class="has-text-weight-semibold has-text-grey-light">{{ $t('title.about') }}<span class="has-text-purple">.</span></span>
                        <h2 class="title has-text-weight-bold has-margin-top-2">
                            {{ $t('main_title.about_1') }}<br><span class="has-text-purple">&</span> {{ $t('main_title.about_2') }}<span class="has-text-purple">.</span>
                        </h2>
                        <p class="is-size-6 has-text-weight-light has-text-purple">
                            {{ $t('text.about_1') }}
                        </p>
                        <p class="is-size-6 has-text-weight-bold has-text-purple has-margin-y-1">
                            {{ $t('text.about_2') }}
                        </p>
                        <p class="is-size-6 has-text-weight-light has-text-purple">
                            {{ $t('text.about_3') }}
                        </p>
                        <div class="columns is-skills is-mobile is-multiline has-margin-top-1">
                            <div v-for="skill in skills" :key="skill.id" class="column is-narrow">
                                <figure v-lazyload class="image is-square is-skill"> <!-- is-clipped -->
                                    <img class="has-background-purple has-padding-1" :data-url="require('~/assets/images/skills/' + skill.img + '.svg')" :alt="skill.name" :title="skill.name">
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        transition: "about",
        components: {},
        head () {
            return {
                title: 'Web design | Damien',
                meta: [
                    { hid: 'description', name: 'description', content: 'Web designer lover, making also front-end design and a bit back-end.' }
                ]
            }
        },
        
        data() {
            return {
                isModalActive: false,
                skills: [
                    {
                        name: 'Adobe photoshop',
                        path: '',
                        img: 'adobe-photoshop-brands'
                    },
                    {
                        name: 'Adobe illustrator',
                        path: '',
                        img: 'adobe-illustrator-brands'
                    },
                    {
                        name: 'Adobe xd',
                        path: '',
                        img: 'adobe-xd-brands'
                    },
                    {
                        name: 'Adobe indesign',
                        path: '',
                        img: 'adobe-indesign-brands'
                    },
                    {
                        name: 'Affinity designer',
                        path: '',
                        img: 'affinity-designer-brands'
                    },
                    {
                        name: 'HTML5',
                        path: '',
                        img: 'html5-brands'
                    },
                    {
                        name: 'CCS3',
                        path: '',
                        img: 'css3-brands'
                    },
                    {
                        name: 'Sass',
                        path: '',
                        img: 'sass-brands'
                    },
                    {
                        name: 'Javascript',
                        path: '',
                        img: 'js-brands'
                    },
                    {
                        name: 'Vue.js',
                        path: '',
                        img: 'vuejs-brands'
                    },
                    {
                        name: 'Wordpress',
                        path: '',
                        img: 'wordpress-simple-brands'
                    },
                    {
                        name: 'And more',
                        path: '',
                        img: 'ellipsis-h-solid'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
$t-duration: 800ms;
$t-delay: 300ms;

.intro-enter-active,
.intro-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #2e2e2e;
  }

  &::after {
    top: 50%;
    background-color: #2e2e2e;
  }
}

.intro-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.intro-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.intro-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.intro-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>