<template>
    <div class="main">
        <main-menu />
        <home />
        <about />
        <works />
        <travels />
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
