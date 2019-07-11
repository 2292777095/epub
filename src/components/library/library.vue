<template>
    <div class="library-wrapper">
        <search-bar></search-bar>
        <flap-card></flap-card>
    </div>
</template>

<script>
    import searchBar from "@/components/library/searchBar"
    import flapCard from "@/components/library/flapCard"
    import {storeMixin} from "../../utils/storeMixin"

    export default {
        mixins: [storeMixin],
        components: {
            searchBar,
            flapCard
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">

</style>