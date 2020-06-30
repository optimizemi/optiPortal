<template>
  <div class="container mx-auto px-4 pt-16">
    <strong>PROJECTS</strong>
    <br />
    <br />
    <p>On this page you can find projects in the optiMize community.</p>

    <!-- Build flexbox grid for easy tiling of projects -->
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard'

export default {
  components: { ProjectCard },
  methods: {} // GET projects
}
</script>

<!-- TO DO: add script tags, load mentor picker component --->

<style>
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
