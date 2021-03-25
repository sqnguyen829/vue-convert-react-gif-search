<template>
    <div>
        <Gif :key="gif" :gif="gif" v-for="gif in gifs"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import Gif from '../components/Gif'
export default {
    name:'GifList',
    components:{
        Gif
    },
    computed: {
        ...mapState([
            'gifs'
        ])
    }
}
</script>