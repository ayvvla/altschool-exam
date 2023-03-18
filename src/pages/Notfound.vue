<template>
  <div class="main">
    <div class="fof">
      <h1>ERROR 404 - THIS PAGE DOES NOT EXIST</h1>
    </div>
    <RouterLink to="/" class="link">
        <img :src="logo" style="height: 40px;"/>
        <span>Back to homepage</span>
      </RouterLink>
  
  </div> 
</template>

<script setup>
  import { RouterLink } from "vue-router";
</script>

<style scoped>
  #main{
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.fof{
	  display: table-cell;
	  vertical-align: middle;
}

.fof h1{
	  font-size: 50px;
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .5s alternate infinite;
}

@keyframes type{
	  from{box-shadow: inset -3px 0px 0px #888;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}

.link {
  font-size: 1.3rem;
  color: #FFF;
}

.link:hover {
  text-decoration: none;
}
</style>
