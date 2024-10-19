<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <nav>
        <ul>
          <router-link to="/dashboard"><li>Home</li></router-link>
          <router-link to="/portfolio/profile"><li>About</li></router-link>
          <router-link to="/portfolio/contact"><li>Contact</li></router-link>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

footer nav ul {
  list-style-type: none;
  padding: 0;
}

footer nav ul li {
  display: inline;
  margin: 0 15px;
  cursor: pointer;
}

/* Remove underline and blue color from router-link */
router-link {
  text-decoration: none;
  color: inherit; /* Makes the text inherit the white color from the parent */
}

/* Remove any underline or color change when hovering */
router-link:hover {
  text-decoration: none;
  color: inherit;
}
</style>
