<template>
    <div>
        <h5>Enter a Search Term:</h5>
        <form @submit.prevent="$emit('fetchData', searchValue)">
            <input class='input-submit' placeholder="Search..." v-model="searchValue"/>
            <br/>
            <button class='button-submit' type='submit'>Find Gif</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'GifSearch',
    data() {
        return {
            searchValue:''
        }
    }
}
</script>