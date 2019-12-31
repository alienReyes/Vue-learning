<template>
  <div>
    <h3>Edit the User</h3>
    <!-- this how we extract the Query parameters omg!! -->
    <p>Locale: {{$route.query.locale}}</p>
    <p>Analytics:{{$route.query.q}}</p>
    <div style="height:1200px"></div>
    <p id="data">Data</p>
  </div>
</template>