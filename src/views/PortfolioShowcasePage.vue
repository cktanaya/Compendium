<template>
  <div class="portfolio-showcase-container">
    <div class="container mt-4">
      <h2 class="mb-4 text-center">Portfolio Showcase</h2>

      <!-- Cards Row -->
      <div class="row g-4 justify-content-center">
        <!-- Compendium Project Card -->
        <div class="col-md-6 col-lg-3">
          <div class="card shadow-lg card-custom text-white bg-dark">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Compendium</h5>
              <p class="card-text">A repository for Online Research Compendium for our Institution.</p>
              <div class="mt-auto text-center">
                <a href="https://github.com/cktanaya/Compendium" class="btn btn-warning" target="_blank">View on GitHub</a>
              </div>
              <i class="bi bi-folder card-icon"></i>
            </div>
          </div>
        </div>

        <!-- Research-Compendium Project Card -->
        <div class="col-md-6 col-lg-3">
          <div class="card shadow-lg card-custom text-white bg-info">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Research Compendium</h5>
              <p class="card-text">Collection of research works, data analysis, and documentation exclusively for the students and professors  of our institution.</p>

              <div class="mt-auto text-center">
                <a href="https://github.com/cktanaya/Research-Compendium" class="btn btn-warning" target="_blank">View on GitHub</a>
              </div>
              <i class="bi bi-book card-icon"></i>
            </div>
          </div>
        </div>

        <!-- App-with-Login-and-Redirect Project Card -->
        <div class="col-md-6 col-lg-3">
          <div class="card shadow-lg card-custom text-white bg-success">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">App with Login and Redirect</h5>
              <p class="card-text">A web app with user authentication and redirect after login.</p>
              <div class="mt-auto text-center">
                <a href="https://github.com/cktanaya/App-with-Login-and-Redirect" class="btn btn-warning" target="_blank">View on GitHub</a>
              </div>
              <i class="bi bi-lock card-icon"></i>
            </div>
          </div>
        </div>

        <!-- Landing-Page Project Card -->
        <div class="col-md-6 col-lg-3">
          <div class="card shadow-lg card-custom text-white bg-danger">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Landing Page</h5>
              <p class="card-text">A responsive landing page design using modern web technologies.</p>
              <div class="mt-auto text-center">
                <a href="https://github.com/cktanaya/Landing-Page" class="btn btn-warning" target="_blank">View on GitHub</a>
              </div>
              <i class="bi bi-browser-chrome card-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioShowcasePage',
};
</script>

<style scoped>
.portfolio-showcase-container {
  background: linear-gradient(to bottom right, #e0f7fa, #f4f4f4);
  min-height: 10vh;
  padding: 60px 20px;
}

.container {
  max-width: 1200px;
}

.card-custom {
  height: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 15px;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
}

.card-icon {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.2;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.card-title {
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}

.card-text {
  font-size: 1.1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}

.btn-warning {
  background-color: #ffc107;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.btn-warning:hover {
  background-color: #ffca2c;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.card-body {
  display: flex;
  flex-direction: column;
}

.mt-auto {
  margin-top: auto;
}

.text-center {
  text-align: center;
}

/* Spacing for larger screens */
@media (min-width: 992px) {
  .card-custom {
    margin: 15px;
  }
}

/* Icon bounce animation */
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
