<template>
  <div id="footer" class="bg-dark text-light p-3">
    <div class="container">
      <footer>
        <div class="footer-content">
          <ul class="footer-links">
            <li><a href="https://www.google.com/">Privacy Policy</a></li>
            <li><a href="https://www.google.com/">Terms of Service</a></li>
            <li><a href="https://www.google.com/">Contact Us</a></li>
          </ul>
        </div>
        <p>&copy; 2023 LpLap &copy;. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
.footer-links {
  list-style-type: none;
}

.footer-links a {
  text-decoration: none;
}
</style>