<template>
  <div id="app" >
    <app-header></app-header> 
    <router-view class="container"/>   
  </div>
</template>

<script>
export default {
  name: 'app',  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

* {
  margin: 0%;
  padding: 0;
}

body {
  background-color: #f4f4f4;    
  font: normal 16px 'Montserrat', sans-serif;
  line-height: 1.6em;
  margin: 0;
}

.container {
	width: 60%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
hr {
	border: 0; 
	border-top: 1px solid #ccc;
}

</style>


