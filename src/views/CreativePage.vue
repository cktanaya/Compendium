<template>
  <div class="creative-page-container">
    <div class="container mt-5">
      <h2 class="text-center mb-4">Creative Page</h2>

      <!-- Work Highlight Section -->
      <div class="highlight-section mb-5">
        <h3 class="text-center">Highlighted Work</h3>
        <p class="text-center">
          A mock website for an Internet Service Provider company.
        </p>
        <div class="text-center">
          <a href="https://www.sddph.net/" target="_blank" class="btn btn-info">
            Visit ISP Mock Website
          </a>
        </div>
      </div>

      <!-- Blog Section -->
      <div class="blog-section mb-5">
        <h3>Blog</h3>

        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">My Journey into Web Development</h5>
            <p class="card-text">
              My Web Development Journey at Technological Institute of the Philippines
              When I first enrolled at the Technological Institute of the Philippines, I was excited to dive into web development. 
              My journey started with the basics—HTML, CSS, and JavaScript—learning how websites work behind the scenes. 
              It was fascinating to see how simple lines of code could create something visual and interactive. 
              As I progressed, I started building a simple web app with a functional front end and even integrated a little backend.
              It was incredibly rewarding to see my app come to life, handling user inputs and generating dynamic content. 
              This hands-on experience made me appreciate the complexity of web development.

              But what stood out to me the most in my program was learning computer networking through NetAcad. 
              Diving into the world of networking, I pursued certifications in Cisco Certified Network Associate (CCNA) and CyberOps Associate, 
              which included topics like ethical hacking and cybersecurity. This blend of web development and networking has given me a comprehensive 
              understanding of the tech world, and I look forward to expanding my skills further. 

              It's been an incredible journey, and I'm excited for what's next! 
            </p>
            <a href="https://www.netacad.com/badges-certifications" target="_blank" class="btn btn-info">
              View My NetAcad Certifications
            </a>
          </div>
        </div>

        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">IoT and Agriculture: Innovating with the Vermimometer</h5>
            <p class="card-text">
              As Computer Engineering students in our final year, we were tasked with devising a prototype that could make a real-world impact. 
              Our focus was agriculture, an essential industry ripe for technological advancements. After considering various ideas, our team developed 
              the Vermimometer: an automated environmental monitoring and control system aimed at enhancing earthworm productivity in vermiculture.

              The project centers around optimizing the growth environment for African Nightcrawlers, which are valuable for their ability to produce 
              nutrient-rich vermicast. By integrating IoT (Internet of Things) technology, we created a system capable of monitoring critical factors 
              such as temperature, humidity, and pH levels—conditions essential to worm health and productivity.

              The Vermimometer automatically adjusts these parameters to maintain the ideal environment, which not only reduces manual labor but also 
              ensures the worms thrive. With this, we aim to increase the efficiency of vermicomposting and help small- and large-scale farmers boost 
              their production.

              This project has been an incredible journey into how technology can address real-world agricultural challenges, making us realize the 
              potential for IoT to revolutionize farming. We’re excited about the possibilities this system could unlock for sustainable agriculture!
            </p>
          </div>
        </div>
      </div>

      <!-- Hobbies Section -->
      <div class="hobbies-section mb-5">
        <h3>Hobbies</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="hobby in hobbies" :key="hobby">{{ hobby }}</li>
        </ul>
      </div>

      <!-- Mini-Resume Section -->
      <div class="resume-section">
        <h3>Mini-Resume</h3>
        <ul class="list-group">
          <li class="list-group-item">
            <strong>Position:</strong> Computer Engineer Intern
          </li>
          <li class="list-group-item">
            <strong>Skills:</strong> C++, Python, Web Development, Arduino, NodeMCU, IoT, Networking (Cisco CCNA, CyberOps Associate)
          </li>
          <li class="list-group-item">
            <strong>Education:</strong> Bachelor of Science in Computer Engineering
          </li>
          <li class="list-group-item">
            <strong>Institution:</strong> Technological Institute of the Philippines
          </li>
          <li class="list-group-item">
            <strong>Certifications:</strong>
            <a href="https://www.netacad.com/badges-certifications" target="_blank">Cisco CCNA, CyberOps Associate</a>
          </li>
          <li class="list-group-item">
            <strong>Achievements:</strong>
            <ul>
              <li>With Honors - University of Negros Occidental - Recoletos (2019-2020)</li>
              <li>President’s Lister - Technological Institute of the Philippines (2020-2021)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hobbies: [
        "Programming",
        "Web Development",
        "IoT Projects",
        "Basketball",
        "Photography"
      ]
    };
  }
};
</script>

<style scoped>
.creative-page-container {
  background-color: #f4f4f9;
  padding: 60px 20px;
  min-height: 100vh;
}

.highlight-section, .blog-section, .hobbies-section, .resume-section {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

h3 {
  color: #673ab7;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.card {
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  background-color: #f8f9fa;
}

.btn-info {
  background-color: #673ab7;
  border-color: #673ab7;
  padding: 10px 20px;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
}

.btn-info:hover {
  background-color: #7e57c2;
}
</style>
