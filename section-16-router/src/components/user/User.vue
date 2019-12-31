<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <!-- <p>Loaded Id: {{ id }}</!-->

    <button @click="navigateToHome" class="btn btn-primary">Go back to home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // this is how we retrieve the route params
      // id: this.$route.params.id
    };
  },
  //   we have to watch for the route change so we can fetch the new params
  //  for the new rout, we use a watcher on the $routes, this is to reload the component
  //    this may be deprecated check  https://github.com/vuejs/vue-router/tree/dev/examples/route-props
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   }
  // },
  methods: {
    navigateToHome() {
      // Pushes the route into the stack this keeps the back button
      // functionality
      //   this.$router.push({ path: "/" });
      this.$router.push("/");
    }
  }
};
</script>
