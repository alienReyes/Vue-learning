<template>
  <div>
    <h3>Edit the User</h3>
    <!-- this how we extract the Query parameters omg!! -->
    <p>Locale: {{$route.query.locale}}</p>
    <p>Analytics:{{$route.query.q}}</p>
    <hr />
    <button @click="confirmed=true;" class="btn btn-primary">Confirm</button>
    <div style="height:300px"></div>
    <p id="data">Data</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      // this confirm  opens an alert if ok then true and goes
      // to the route
      if (confirm("are you sure")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>