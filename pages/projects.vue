<template>
  <div class="m-2">
    <h2 class="subtitle">Projects</h2>
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

<!-- todo: add script tags, load mentor picker component --->

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
