<template>
    <div>
        <li>
            <img :src="gif"/>
        </li>
    </div>
</template>

<script>
export default {
    name:"Gif",
    props:["gif"]
}
</script>