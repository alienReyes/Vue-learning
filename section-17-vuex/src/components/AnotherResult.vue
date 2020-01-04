<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Number for clicks {{clicks}}</p>
  </div>
</template>

<script>
// This creates computed properties from all the getters

import { mapGetters } from "vuex";
export default {
  //this can take  an object and we can remap the getters to new names
  // propertyName: newName??
  //   We can also use the ... spread operator pero solo en ES6
  computed: {
    //   we need the spread to be able to add our computed properties
    ...mapGetters({
      counter: "doubleCounter",
      clicks: "stringCounter"
    })
  }
};
</script>