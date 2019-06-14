<template>
  <div id="side-menu" class="side-bar">  
    <router-link v-for="(item, index) in menuItems" :key='index' :to="item.link" class="option">
      <font-awesome-icon :icon="item.icon"/> 
      <p>{{ item.text }}</p>
    </router-link>
    <hr>
	</div>   
</template>

<script>
import { bus } from '../main';

export default {
  name: 'SideMenu',
  props: ['menuItems'],  
  data() {
    return {
      isClosed: true
    }
  }, 
  created() {
    bus.$on('menu-triggered',() => {      
      if (this.isClosed) {
        document.getElementById('side-menu').style.width = '250px'; 
        this.isClosed = false;
      } else {
        document.getElementById('side-menu').style.width = '0px';
        this.isClosed = true; 
      }
    })
  }
}
</script>

<style>
.side-bar{  
  height: 100%;
  width: 0px;
  position: fixed;  	
  left: 0;
  background-color: white;  
  overflow-x: hidden;
  padding-top: 1em;
  transition: 0.5s;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.3);
}

.side-bar .btn-close {
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 3em;
  margin-left: 50px;
}

.option {
  padding: 10px 10px 10px 30px; 
	display: flex; 	
  color: #4286f4;  	 	
  text-decoration: none;
  font-size: 1.5em;
  transition: 0.3;
}

.option:hover {
	background-color: #e1e7f2;
	transition: 0.2s;
}

</style>


