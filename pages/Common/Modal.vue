<template>
    <transition name="modal-fade">
        <div class="d-modal-background">
            <div class="d-modal">
                <div class="container has-padding-left-1-tablet">
                    <div class="columns">
                        <div class="column is-5 is-offset-1 is-flex">
                            <section class="has-fullheight has-padding-2-mobile">
                                <div>
                                    <slot name="text-modal"></slot>
                                </div>
                            </section>
                        </div>
                        <div class="column has-padding-x-5 is-5 is-offset-1">
                            <figure class="image is-2by3">
                               <!-- <img class="is-rounded" :src="'/' + this.data.path + '/' + this.data.img" alt="" /> -->
                               <slot name="image-modal"></slot>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    </transition>
</template>

<script>
    export default {

    }
</script>