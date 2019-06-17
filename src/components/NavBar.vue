<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://optiportal.netlify.com">
        <img src="../assets/logo.png" width="112">
      </a>

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
            >Design Docs</a>
            <a class="navbar-item" href="https://forms.gle/uUcQEsBAxhSpsZHFA">Bug/Feature Report</a>
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
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar {
  background: #333;
  color: #eee;
}
</style>

