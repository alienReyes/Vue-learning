<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>That's the syntax for filters the  <strong>|</strong> is part of it, it indcates the filter, the filters can be chained</p>
                <p>{{text| toUppercase | to-lowercase}}</p>
                <hr>
                <p>Computed is more performant than filters, cause computed is only calculated when something changes</p>
                <input v-model="filterText">
                <ul v-for="fruit in filteredFruits">
                  <li>{{fruit}}</li>

                </ul>
              <blockquote>
                filters are usually not the best solution, remember they are not as performant
              </blockquote>

              <hr>
            <list></list>

            </div>

        </div>
    </div>
</template>

<script>
  import List from './List.vue'
    export default {
      components:{
        List
      },
      data() {
        return {
          text: 'Hello There',
          fruits:['Apple', 'Banana', 'Piña','Tejocotes', 'Aguacate', 'Mamey'],
          filterText:''
        }
      },
      // This creates a filter, but it's locally
      // filters are functions and require Values
      filters:{
        toUppercase(value){
          return value.toUpperCase();
        }

      },
      computed:{
          filteredFruits(){
            // this is a regular ES6 filter for the array, learn to use it
            return this.fruits.filter((element)=>{
              return element.match(this.filterText)
            })
          }
      }
    }
</script>

<style>

</style>
