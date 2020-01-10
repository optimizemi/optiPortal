<template>
  <div>
    <div class="project-card card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ project.title }}</p>
            <!-- TO DO: Category as subtitle? Another field? -->
                <p class="subtitle is-6">Status: {{ project.status }}</p>
          </div>
        </div>

        <div class="content">
          <p>{{ project.description }}</p>
          <p>Category: {{ project.category }}</p>
          <hr />
          <h3>Details</h3>
          <p v-if="project.members">Members: {{ project.members }}</p>
          <p v-if="project.link">
            Website: <a v-bind:href="project.link">{{ project.link }} </a>
          </p>
          <p v-if="project.year">Cohort Year: {{ project.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            project: Object
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    .project-card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        text-align: left;
    }
    
    .project-card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>