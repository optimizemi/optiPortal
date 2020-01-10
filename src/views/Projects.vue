<template>
  <div class="projects">
    <h1>Projects</h1>
    <p>Find all optiMize projects here and their relevant details.</p>

    <!-- Search bar + GraphQL Query based on filters -->
    <form>
      <input
        class="input"
        type="text"
        placeholder="Type here..."
        v-model="searchText"
      />
      <button class="button is-medium is-primary" @click="search">
        Search
      </button>
    </form>

    <hr />

    <!--- List all projects returned below -->
    <div class="cardWrapper">
      <ProjectCard
        v-for="project in projectsList"
        :project="project"
        :key="project.title"
      />
    </div>
  </div>
</template>

<script>
    import ProjectCard from "@/components/ProjectCard";

    import projectsList from "@/assets/placeholderProjectData.json";
    export default {
        name: "projects",
        components: {
            ProjectCard
        },
        data() {
            return {
                searchText: "",
                projectsList: projectsList
            };
        },
        methods: {
            search() {}
        },
        mounted() {}
    };
</script>

<style lang="scss" scoped>
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        &>* {
            margin: 10px;
        }
    }
    
    .cardWrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-gap: 1.5rem;
    }
</style>