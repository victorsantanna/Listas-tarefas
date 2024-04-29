<template>
 
  <div class="px-3 py-10 md:px-10">
      <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
       

         <TodoSpinner v-if="loading"/>
        
            <template v-else>
                
                <TodoFormAdd />
                
                <TodoItems />
        
                <TodoEmpty />
                
            </template>
      </div>
  </div>
  
</template>

<script>
import TodoSpinner from './components/TodoSpinner.vue'
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoItems from './components/TodoItems.vue';
import TodoEmpty from './components/TodoEmpty.vue';
import axios from 'axios';



export default {

name: 'App',
    components: { TodoItems, TodoFormAdd, TodoSpinner, TodoEmpty },
    data(){
        return{
            loading:false,
            todos: []
        }
    },

    created(){ //fase ideal para fazer o setup do nosso componente.

        this.loading = true
        axios.get('http://localhost:3000/todos')
        .then((response) => {
            this.$store.commit('storeTodos', response.data)
            
        })
        .finally(() => {
            this.loading = false
        })

    },
}


</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>