<template>
    <div class="row">
        <div class="col">
            <GifList :gifs="gifs"/>
        </div>
        <div class="col">
            <GifSearch v-on:fetchData="fetchData"/>
        </div>
    </div>
</template>

<script>
import GifSearch from '../components/GifSearch'
import GifList from './GifList'

export default {
    name:'GifListContainer',
    components:{
        GifSearch,
        GifList
    },
    data() {
        return{
            gifs:[],
            apiKey:'R3puW40kE2eTKIZDC5qJhH1VmApSiT1t'
        }
    },
    methods:{
        fetchData(searchTerm="animal") {
            fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${this.apiKey}&rating=g`,{
                method:'GET'
            })
            .then(res => res.json())
            .then(gifs => {
                console.log(gifs.data)
                this.gifs = gifs.data.map(gif => {
                    return gif.images.downsized.url
                })
            })
            .catch(err => console.log(err))
        },
        
    },
    created() {
        this.fetchData()
    }
}
</script>