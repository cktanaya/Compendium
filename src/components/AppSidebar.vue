<template>
  <div id="sidebar-wrapper" class="bg-white text-black vh-100 d-flex flex-column">
    <router-link to="/dashboard" class="text-black text-decoration-none">
      <h3 class="text-center py-3">Portfolio Dashboard</h3>
    </router-link>

    <!-- Sidebar Links -->
    <div class="list-group list-group-flush flex-grow-1">
      <!-- Profile Page Link -->
      <router-link to="/portfolio/profile" class="list-group-item list-group-item-action text-black bg-transparent d-flex align-items-center">
        <i class="bi bi-person-circle me-2"></i>Profile
      </router-link>

      <!-- Portfolio Showcase Link -->
      <router-link to="/portfolio/showcase" class="list-group-item list-group-item-action text-black bg-transparent d-flex align-items-center">
        <i class="bi bi-briefcase me-2"></i>Portfolio Showcase
      </router-link>

      <!-- Contact Page Link -->
      <router-link to="/portfolio/contact" class="list-group-item list-group-item-action text-black bg-transparent d-flex align-items-center">
        <i class="bi bi-envelope me-2"></i>Contact
      </router-link>

      <!-- Creative Page Link -->
      <router-link to="/portfolio/creative" class="list-group-item list-group-item-action text-black bg-transparent d-flex align-items-center">
        <i class="bi bi-stars me-2"></i>Creative
      </router-link>

      <!-- Space between last link and logout button -->
      <div class="flex-grow-1"></div>

      <!-- Logout Button -->
      <div class="p-3">
        <button class="btn btn-danger w-100 d-flex align-items-center justify-content-center" @click="logout">
          <i class="bi bi-box-arrow-right me-2"></i>Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
  methods: {
    logout() {
      // Redirect to the login page
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#sidebar-wrapper {
  width: 250px;
  overflow-y: auto; /* Enables scrolling if content exceeds height */
}

.list-group-item {
  border: none; /* Clean, modern look */
}

.list-group-item:hover {
  background-color: rgba(0, 0, 0, 0.1); /* Subtle hover effect */
}

.flex-grow-1 {
  flex-grow: 1; /* Pushes logout button to bottom with space */
}

/* Optional: Additional styling for logout button */
.btn-danger {
  background-color: #dc3545; /* Bootstrap danger color */
  border-color: #dc3545; /* Bootstrap danger border */
}
</style>