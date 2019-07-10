<template>
    <div class="library-wrapper">
        <search-bar></search-bar>
    </div>
</template>

<script>
    import searchBar from "@/components/library/searchBar"
    import {storeMixin} from "../../utils/storeMixin"

    export default {
        mixins: [storeMixin],
        components: {
            searchBar,
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">

</style>