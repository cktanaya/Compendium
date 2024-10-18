<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
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
  }
  
  footer nav ul li a {
    color: white;
    text-decoration: none;
  }
  
  footer nav ul li a:hover {
    text-decoration: underline;
  }
  </style>
  