<template>
  <div class="dashboard-container">
    <div class="container mt-4">
      <h2 class="mb-4 text-center">Christian Kyle Tanaya</h2>

      <!-- Cards Row -->
      <div class="row g-4 justify-content-center">
        <!-- C++ Skills Card -->
        <div class="col-md-6 col-lg-3">
          <div class="card text-white bg-info shadow-lg card-custom">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">C++ Programming</h5>
              <p class="card-text">Proficient in object-oriented programming, data structures, and algorithms.</p>
              <div class="mt-auto text-center"> <!-- Ensures button stays at the bottom -->
                <router-link to="/dashboard/cplusplus" class="btn btn-warning w-100">Learn More</router-link>
              </div>
              <i class="bi bi-code-slash card-icon"></i>
            </div>
          </div>
        </div>

        <!-- Python Skills Card -->
        <div class="col-md-6 col-lg-3">
          <div class="card text-white bg-success shadow-lg card-custom">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Python Development</h5>
              <p class="card-text">Experienced in web development, data analysis, and machine learning.</p>
              <div class="mt-auto text-center"> <!-- Ensures button stays at the bottom -->
                <router-link to="/dashboard/python" class="btn btn-warning w-100">Explore Python</router-link>
              </div>
              <i class="bi bi-file-earmark-code card-icon"></i>
            </div>
          </div>
        </div>

        <!-- Arduino Skills Card -->
        <div class="col-md-6 col-lg-3">
          <div class="card text-white bg-danger shadow-lg card-custom">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Arduino Projects</h5>
              <p class="card-text">Hands-on experience with sensors, actuators, and IoT applications.</p>
              <div class="mt-auto text-center"> <!-- Ensures button stays at the bottom -->
                <router-link to="/dashboard/arduino" class="btn btn-warning w-100">View Projects</router-link>
              </div>
              <i class="bi bi-tools card-icon"></i>
            </div>
          </div>
        </div>

        <!-- Circuits Skills Card -->
        <div class="col-md-6 col-lg-3">
          <div class="card text-white bg-secondary shadow-lg card-custom">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Circuit Design</h5>
              <p class="card-text">Knowledgeable in analog and digital circuit design and simulation.</p>
              <div class="mt-auto text-center"> <!-- Ensures button stays at the bottom -->
                <router-link to="/dashboard/circuits" class="btn btn-warning w-100">Learn More</router-link>
              </div>
              <i class="bi bi-circle card-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
};
</script>

<style scoped>
.dashboard-container {
  background-color: #f4f4f4; /* Light gray background color */
  min-height: 10vh; /* Full height of the viewport */
  padding: 20px; /* Add some padding */
}

.container {
  max-width: 1200px; /* Limit the width of the container */
}

/* Styling for all cards */
.card-custom {
  height: 400px; /* Adjust height for more content and spacing */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative; /* For positioning the icon */
  margin-bottom: 20px; /* Add margin to the bottom of each card */
  border-radius: 15px; /* Rounded corners */
  overflow: hidden; /* Hide overflow for smoother animations */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures space between content and buttons */
}

.card-body {
  display: flex;
  flex-direction: column;
}

.card-icon {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 2.5rem; /* Increased size for icons */
  opacity: 0.3;
}

.card:hover {
  transform: translateY(-10px) scale(1.05); /* Slightly lift the card */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5); /* Add box-shadow on hover */
}

.card-title {
  font-weight: bold;
  font-size: 1.6rem; /* Slightly larger title font */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Subtle text shadow */
}

.card-text {
  font-size: 1.1rem; /* Increase text font size */
  margin-bottom: 20px; /* Add space between content and button */
}

.mt-auto {
  margin-top: auto;
}

/* Button styles */
.btn-warning {
  padding: 12px;
  border-radius: 10px; /* Rounded button corners */
  transition: background-color 0.3s ease;
}

.btn-warning:hover {
  background-color: #ffc107; /* Lighter color on hover */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow on hover */
}

/* Adjust card margin and layout for larger screens */
@media (min-width: 992px) {
  .card-custom {
    margin: 15px; /* Margin around each card */
  }
}

/* Card icon bounce animation */
.card-custom:hover .card-icon {
  animation: icon-bounce 0.5s ease-in-out;
}

@keyframes icon-bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
