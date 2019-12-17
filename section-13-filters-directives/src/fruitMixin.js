
// The mixin is a constant and is an object with all the code we want to pass

export const fruitMixin={
  data() {
    return {

      fruits:['Apple', 'Banana', 'Piña','Tejocotes', 'Aguacate', 'Mamey'],
      filterText:''
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
