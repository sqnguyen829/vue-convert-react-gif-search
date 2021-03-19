<template>
    <div>
        <Gif :key="gif" :gif="gif" v-for="gif in gifs"/>
    </div>
</template>

<script>
import Gif from '../components/Gif'
export default {
    name:'GifList',
    props:["gifs"],
    components:{
        Gif
    }
}
</script>