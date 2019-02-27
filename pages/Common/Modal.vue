<template>
    <transition name="modal-fade">
        <div class="d-modal-background">
                <div class="modal-content">
                    <slot name="image-modal"></slot>
                </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    </transition>
</template>

<script>
    export default {
        transition: 'modal-fade',
    }
</script>