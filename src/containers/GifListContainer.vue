<template>
    <div class="row">
        <div class="col">
            <GifList/>
        </div>
        <div class="col">
            <GifSearch v-on:fetchData="getGifs"/>
        </div>
    </div>
</template>

<script>
import GifSearch from '../components/GifSearch'
import GifList from './GifList'
import { mapActions } from 'vuex'

export default {
    name:'GifListContainer',
    components:{
        GifSearch,
        GifList
    },
    data() {
        return{
        }
    },
    methods:{
        ...mapActions([
            'getGifs'
        ])
    },
    created() {
        this.getGifs('animal')
    }
}
</script>