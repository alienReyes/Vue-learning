<template>
  <ul class="nav nav-pills">
    <!-- Router link
        tag- sets the tag that's gonna contain the link
        active-class: configures the active class
        exact: adds the active class when the url matches the to exactly if not
        it will higlight all that has the pattern /
      
    -->
    <router-link tag="li" to="/" active-class="active" exact>
      <a>Home</a>
    </router-link>
    <router-link tag="li" to="/user" active-class="active">
      <a>User</a>
    </router-link>
    <!-- <router-link tag="li" to="/user/2" active-class="active">
      <a>User 2</a>
    </router-link>-->
  </ul>
</template>

<script>
export default {};
</script>

<style scoped></style>
