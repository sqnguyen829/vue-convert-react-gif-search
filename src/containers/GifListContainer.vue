<template>
    <div className="row">
               <div className="column-right">
                    <GifSearch setSearch={this.setSearch}/>
               </div>
               <div className="column-left">
                    <GifList images= {this.state.images}/>
               </div>
            </div>
</template>

<script>
export default {
    name:'GifListContainer',
    data() {
        return{
            images:[]
        }
    },
    methods:{
        fetchData() {
            console.log('fetching...')
        }
    },
    created() {
        this.fetchData()
    }
}
</script>