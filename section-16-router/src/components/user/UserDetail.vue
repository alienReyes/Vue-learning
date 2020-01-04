<template>
  <div>
    <h3>Some User Details</h3>
    <!-- we dont have to do anything to update the route
    cause it's loading a diferent instance of the component-->
    <p>User Loaded has ID:{{$route.params.id}}</p>
    <router-link tag="button" class="btn btn-primary" :to="link">Edit</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: "en",
          q: 100
        },
        hash: "#data"
      }
    };
  },
  // This is like  lifecycle methode which means it loads
  // before the component is created
  beforeRouteEnter(to, from, next) {
    // if we don't call next this component does not exist
    // if it does note exist we can't access data dah!
    // we can validate the access to the route
    next();
  }
};
</script>