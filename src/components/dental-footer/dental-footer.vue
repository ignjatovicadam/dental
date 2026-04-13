<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-text">
          <h3>Have a shining smile</h3>
          <p>Contact us by sending us an email or via phone number</p>
        </div>
        <div class="footer-quick-links">
          <div class="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Teeth Whitening</a></li>
              <li><a href="#">Dental Implants</a></li>
              <li><a href="#">Orthodontics</a></li>
              <li><a href="#">Root Canal</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2024 Dental Clinic. All rights reserved.</span>
        <ul class="footer-policy-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
  footer {
    padding-block: var(--space-9);
    background-color: #EFF5F8;
  }

  .footer-text h3 {
    font-family: var(--font-display);
    font-size: var(--text-h2);
    font-weight: var(--weight-bold);
    line-height: var(--leading-snug);
    letter-spacing: var(--tracking-tight);
    color: var(--gray-900);
  }

  .footer-text p {
    margin-top: var(--space-3);
    font-family: var(--font-body);
    font-size: var(--text-body-lg);
    font-weight: var(--weight-regular);
    line-height: var(--leading-relaxed);
    color: var(--gray-700);
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  @media (min-width: 768px) {
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .footer-quick-links {
    display: flex;
    gap: var(--space-8);
  }

  .footer-col h3 {
    font-family: var(--font-display);
    font-size: var(--text-h3);
    font-weight: var(--weight-bold);
    line-height: var(--leading-snug);
    letter-spacing: var(--tracking-tight);
    color: var(--gray-900);
  }

  .footer-col ul {
    margin-top: var(--space-4);
    list-style: none;
    padding: 0;
  }

  .footer-col ul li {
    margin-bottom: var(--space-2);
  }

  .footer-col ul li a {
    font-family: var(--font-body);
    font-size: var(--text-body-lg);
    font-weight: var(--weight-regular);
    line-height: var(--leading-relaxed);
    color: var(--gray-700);
    text-decoration: none;
  }

  .footer-col ul li a:hover {
    color: var(--teal-600);
  }

  .footer-bottom {
    margin-top: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    border-top: 1px solid var(--gray-300);
    padding-top: var(--space-4);
  }

  @media (min-width: 768px) {
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .footer-policy-links {
    list-style: none;
    display: flex;
    gap: var(--space-4);
    padding: 0;
  }

  .footer-policy-links li a {
    font-family: var(--font-body);
    font-size: var(--text-body-sm);
    font-weight: var(--weight-regular);
    line-height: var(--leading-relaxed);
    color: var(--gray-700);
    text-decoration: none;
  }

  .footer-policy-links li a:hover {
    color: var(--teal-600);
  }
</style>
