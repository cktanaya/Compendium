<template>
  <div class="profile-container py-5">
    <div class="container">
      <!-- Profile Header -->
      <div class="row align-items-center mb-5">
        <div class="col-md-4 text-center">
          <!-- Profile Photo -->
          <img
            src="@/assets/ProfilePhoto.jpg"
            alt="Profile Photo"
            class="profile-photo img-fluid rounded-circle shadow-lg"
          />
        </div>
        <div class="col-md-8">
          <!-- Name and Bio -->
          <h2 class="text-primary mb-3">Christian Kyle Tanaya</h2>
          <p class="lead">
            Bachelor of Science in Computer Engineering<br />
            Technological Institute of the Philippines<br />
            21 years old<br />
            Address: Avida Prime Towers Taft, Pasay
          </p>
          <p>
            I am a passionate Computer Engineering student with a solid foundation in coding and hardware design. As a lifelong learner, I am committed to staying updated with the latest trends in technology. My interests include embedded systems, software development, and IoT projects. I am always keen to enhance my problem-solving skills and contribute innovative solutions to real-world challenges.
          </p>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="row">
        <div class="col-12">
          <h4 class="text-center text-secondary mb-4">Skills Acquired</h4>
        </div>

        <!-- Skill Cards -->
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="card bg-info text-white mb-4 shadow-lg">
              <div class="card-body text-center">
                <h5 class="card-title">C++ Programming</h5>
                <p class="card-text">Experienced in object-oriented programming, data structures, and algorithms.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card bg-warning text-white mb-4 shadow-lg">
              <div class="card-body text-center">
                <h5 class="card-title">JavaScript Development</h5>
                <p class="card-text">Proficient in building interactive web applications using JavaScript.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card bg-success text-white mb-4 shadow-lg">
              <div class="card-body text-center">
                <h5 class="card-title">Python Programming</h5>
                <p class="card-text">Skilled in Python for data analysis, web development, and automation.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card bg-danger text-white mb-4 shadow-lg">
              <div class="card-body text-center">
                <h5 class="card-title">Arduino Projects</h5>
                <p class="card-text">Hands-on experience with microcontroller programming and IoT applications.</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card bg-secondary text-white mb-4 shadow-lg">
              <div class="card-body text-center">
                <h5 class="card-title">Lifelong Learner</h5>
                <p class="card-text">Adept at learning and applying new technologies in real-time projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Links Section -->
      <div class="row mt-5">
        <div class="col-12">
          <h4 class="text-center text-secondary mb-4">Connect with Me</h4>
        </div>
        <div class="d-flex justify-content-center">
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/ck.asonipse?mibextid=LQQJ4d"
            target="_blank"
            class="btn btn-primary mx-2"
          >
            <i class="bi bi-facebook"></i> Facebook
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            class="btn btn-info mx-2"
          >
            <i class="bi bi-linkedin"></i> LinkedIn
          </a>

          <!-- Email -->
          <a
            href="mailto:christiantanaya25@gmail.com"
            target="_blank"
            class="btn btn-danger mx-2"
          >
            <i class="bi bi-envelope"></i> Email
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style scoped>
.profile-container {
  background-color: #f4f4f4;
  min-height: 10vh;
}

.profile-photo {
  max-width: 200px;
  border: 5px solid #fff;
}

.card {
  border-radius: 10px;
}

.btn {
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 8px;
}
</style>
