<template>
    <div :class="['modal', active ? 'is-active' : '']">
        <div class="modal-background">
        
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>

<script>
    export default {
        props: ['active', 'data'],
    }
</script>