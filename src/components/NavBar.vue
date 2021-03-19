<template>
    <nav :style="{'black': 'navbar-inverse', 'white': 'navbar-default'}">
      <div class='container-fluid'>
        <div class='navbar-header' :style="{'background':'rgb(189, 181, 181)', 'text-align': 'center'}">
          <a class='navbar-brand'>
            {{title}}
          </a>
        </div>
      </div>
    </nav>
</template>


<script>
export default {
    name:'NavBar',
    data() {
        return {
            title:'Gif Searcher'
        }
    }
}
</script>