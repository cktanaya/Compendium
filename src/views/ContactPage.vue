<template>
  <div class="contact-page-container">
    <div class="container mt-5">
      <h2 class="text-center mb-4">Contact Me</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg contact-card">
            <div class="card-body">
              <form @submit.prevent="handleSubmit">
                <!-- Name Input -->
                <div class="form-group mb-3">
                  <label for="name" class="form-label">Your Name</label>
                  <input type="text" v-model="name" id="name" class="form-control" placeholder="Enter your name" required>
                </div>

                <!-- Email Input -->
                <div class="form-group mb-3">
                  <label for="email" class="form-label">Your Email</label>
                  <input type="email" v-model="email" id="email" class="form-control" placeholder="Enter your email" required>
                </div>

                <!-- Message Input -->
                <div class="form-group mb-4">
                  <label for="message" class="form-label">Your Message</label>
                  <textarea v-model="message" id="message" rows="5" class="form-control" placeholder="Enter your message" required></textarea>
                </div>

                <!-- Submit Button -->
                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      // For example, sending form data to an API or email service
      alert(`Message sent by ${this.name} (${this.email})\n\nMessage: ${this.message}`);
      
      // Clear form inputs after submission
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>

<style scoped>
.contact-page-container {
  background: linear-gradient(to bottom right, #d1c4e9, #f4f4f4); /* Matches the ProfilePage background color */
  min-height: 10vh;
  padding: 60px 20px;
}

.container {
  max-width: 900px;
}

.card.contact-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 0;
}

h2 {
  color: #673ab7;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.form-label {
  font-weight: bold;
  color: #333;
}

.form-control {
  border-radius: 8px;
  box-shadow: none;
  border: 2px solid #ddd;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #673ab7;
  box-shadow: 0 0 5px rgba(103, 58, 183, 0.4);
}

.btn-primary {
  background-color: #673ab7;
  border-color: #673ab7;
  padding: 12px 30px;
  border-radius: 8px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary:hover {
  background-color: #7e57c2;
  box-shadow: 0 5px 15px rgba(103, 58, 183, 0.3);
}

/* Adjust spacing on larger screens */
@media (min-width: 768px) {
  .card.contact-card {
    padding: 50px;
  }

  .form-control {
    font-size: 1.1rem;
  }
}
</style>
