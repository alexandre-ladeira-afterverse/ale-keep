<template>
  <div>         
    <form @keyup.enter="addCard" >
      <input type="text" placeholder="Create a title..." v-model="title">
      <input type="text" placeholder="Create a new note..." v-model="content">       
    </form> 
    
    <div v-for="(card, index) in cards" :key = 'index' class="card" >
      <h3>{{ card.title }}</h3> 
      <p>{{ card.content }}</p>
    </div>  
       
  </div>    
</template>

<script>
export default {
  name: 'AppCards',  
  data() {   
    return {
      title: '',
      content: '',
      cards: [
        { "title": "Titulo", "content": "blalblalballbalbal" }, 
        { "title": "Titulo2", "content": "blal22blalb2a222llba22lbal" }, 
        { "title": "Titulo2", "content": "blal22blalb2a222llba22lbal" }, 
        { "title": "Titulo2", "content": "blal22blalb2a222llba22lbal" }
        ]
      }    
    },
    methods: {
      addCard() {
        this.cards.push({title: this.title, content: this.content});
        this.title = '';
        this.content = '';
      }
  }
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

.card {			    
  width: 20%;
  max-height: 5em;
  margin: 0.5em;
  padding: 0.4em;
  background-color: #99bfff; 
  overflow: auto;
  word-wrap: break-word;
  border-radius: 7px;   
}

.card:hover {
	box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.3); 
	transition: 0.2s;   
}

@media(max-width:568px) {
	.card {width: 100%}
}

::-webkit-scrollbar {
   width: 0px;
}

.formContainer { 
  width: 100%;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.3); 
}

form {
  width: 100%;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.3); 
}


input { 
  width: 100%;    
  border: 0;
  font-size: 1em;
  padding: 0.5em;
  margin: 0.5em auto;
  
}

</style>
