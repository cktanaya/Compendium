<template>
    <div class="d-flex" id="wrapper">
      <div id="page-content-wrapper" class="w-100">
        <AppNavbar />
        <div class="container-fluid my-4">
          <router-view />
        </div>
  
      </div>
    </div>
  </template>
  <script>
  import AppNavbar from "../components/AppNavbar.vue";

  
  export default { components: { AppNavbar } };
  </script>
  <style>
  #wrapper {
    display: flex;
    position: relative;
  }
  #sidebar-wrapper {
    width: 250px;
  }
  #page-content-wrapper {
    flex: 1;
  }
  .AppNavbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Make sure it's on top */
}

.container-fluid {
  margin-top: 60px; /* Adjust margin to avoid overlapping content */
}
  </style>