<template>
    <div>
           <input v-model="filterText">
                <ul v-for="fruit in filteredFruits">
                  <li>{{fruit}}</li>
                </ul>

    </div>
</template>

<script>
  import {fruitMixin} from './fruitMixin.js'
    export default {
      // mixins is an array in case we want to import more than one
     mixins:[fruitMixin]
    }
</script>

<style>

</style>
