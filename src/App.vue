<template>
  <div id="app" class="d-flex">
    <!-- Sidebar, shown only if the route does not have noSidebar meta field -->
    <AppSidebar v-if="!$route.meta.noSidebar" />

    <!-- Main Content Wrapper -->
    <div :class="{'content-wrapper': !$route.meta.noSidebar, 'w-100': $route.meta.noSidebar }" class="d-flex flex-column flex-grow-1">
      <router-view class="content flex-grow-1 p-4" />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppSidebar from "./components/AppSidebar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "AppRoot",
  components: {
    AppSidebar,
    AppFooter,
  },
};
</script>

<style scoped>

</style>
