<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" width="112" />
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/">Home</router-link>
        </a>

        <a class="navbar-item">
          <router-link to="/mentors">Mentors</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/alumni">Alumni</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/projects">Projects</router-link>
        </a>
        <a class="navbar-item">
          <router-link to="/resources">Resources</router-link>
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Development</a>

          <div class="navbar-dropdown">
            <a
              class="navbar-item"
              href="https://docs.google.com/document/d/18XfRsNlunHT1nVqBFkaxDZONdGGwtq4zYNixJieLgMg"
              target="_blank"
              >Design Docs</a
            >
            <a
              class="navbar-item"
              href="https://forms.gle/uUcQEsBAxhSpsZHFA"
              target="_blank"
              >Bug/Feature Report</a
            >
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Log In</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
function initializeNavbarBurger() {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
}

export default {
  name: "NavBar",
  mounted() {
    initializeNavbarBurger();
  }
};
</script>

<style scoped>
.navbar {
  background: #333;
  color: #eee;
}

.navbar-link {
  color: var(--optiMizeBlue) !important;
}
</style>
