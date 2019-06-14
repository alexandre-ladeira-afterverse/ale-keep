<template>
<div>
<header>	
    <span class="open-slide">
      <a href="#" @click="menuTriggered()">
        <svg width="30" height="30">
          <path d="M0,5 30,5" stroke="#4286f4" stroke-width="3"/>
          <path d="M0,14 30,14" stroke="#4286f4" stroke-width="3"/>
          <path d="M0,23 30,23" stroke="#4286f4" stroke-width="3"/> 
        </svg>
      </a>
    </span>
		<p>Ale keep</p>
  </header> 
  <hr>
  <side-menu :menuItems="sideMenuItems" ></side-menu>
</div> 

</template>

<script>
import { bus } from '../main';

export default {
  name: 'AppHeader',
  data() {
    return {
      sideMenuItems: [
        {"text": "Notas", "icon": "lightbulb", "link": "/"},
        {"text": "Lembretes", "icon": "bell", "link": "/about"}
      ]  
    }
  },
  methods: {
    menuTriggered() {
      bus.$emit('menu-triggered')
    }
  } 
}
</script>


<style>

header {
	display: flex;
	background: white;
  color: #4286f4;
  font-size: 1.25em;
  padding: 10px;
}

p {
	margin-left: 0.5em;
}

</style>
