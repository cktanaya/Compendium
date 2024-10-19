<template>
  <div class="d-flex align-items-center justify-content-center vh-100 login-page">
    <div class="card p-4 shadow-lg rounded login-card">
      <h3 class="text-center mb-4 text-primary">Welcome Back!</h3>

      <!-- Username Input -->
      <div class="form-group">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="username"
          v-model="username"
          placeholder="Enter your username"
        />
      </div>

      <!-- Password Input with Toggle Icon -->
      <div class="form-group mt-3">
        <label for="password" class="form-label">Password</label>
        <div class="input-group">
          <input
            :type="passwordVisible ? 'text' : 'password'"
            class="form-control form-control-lg"
            id="password"
            v-model="password"
            placeholder="Enter your password"
          />
          <div class="input-group-append">
            <span class="input-group-text" @click="togglePasswordVisibility" style="cursor: pointer;">
              <i :class="passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </span>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <p v-if="errorMessage" class="text-danger text-center mt-3">{{ errorMessage }}</p>

      <!-- Login Button -->
      <button class="btn btn-primary w-100 mt-4 btn-lg" @click="login">
        Sign In
      </button>

      <!-- Footer Text -->
      <div class="text-center mt-3">
        <small class="text-muted">© 2024 Christian Kyle Tanaya</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "", // User input for username
      password: "", // User input for password
      passwordVisible: false, // Control the visibility of password
      errorMessage: "", // To display login errors
    };
  },
  methods: {
    togglePasswordVisibility() {
      // Toggle between password visibility
      this.passwordVisible = !this.passwordVisible;
    },
    login() {
      // Hardcoded credentials
      const correctUsername = "mcktanaya1";
      const correctPassword = "2111920";

      // Simple validation
      if (this.username === correctUsername && this.password === correctPassword) {
        // Redirect to the dashboard upon successful login
        this.$router.push("/dashboard");
      } else {
        // Display error message if credentials are incorrect
        this.errorMessage = "Invalid username or password";
      }
    },
  },
};
</script>

<style scoped>
/* Background for the login page */
.login-page {
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  height: 10vh;
}

/* Login card styles */
.login-card {
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  max-width: 400px;
  width: 100%;
}

h3 {
  font-weight: bold;
}

/* Input fields styling */
.form-control {
  border-radius: 10px;
}

.form-control-lg {
  font-size: 1.25rem;
  padding: 15px;
}

/* Button styles */
.btn-lg {
  padding: 12px;
  font-size: 1.2rem;
  border-radius: 10px;
}

/* Error message */
.text-danger {
  font-weight: bold;
  font-size: 1rem;
}

/* Styling for the password toggle icon */
.input-group-text {
  background-color: white;
  border: none;
}
</style>
