<template>
  <div>
    <div class="profile-card card">
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
            <p class="title is-4">{{ mentor.name }}</p>
            <p class="subtitle is-6">{{ mentor.city }}, {{ mentor.state }}</p>
          </div>
        </div>

        <div class="content">
          <p>{{ mentor.bio }}</p>
          <h3>Focus Areas</h3>
          <p>{{ mentor.skills }}</p>
          <hr />
          <h3>Contact Information</h3>
          <p v-if="mentor.email">
            Email: <a :href="'mailto:' + mentor.email">{{ mentor.email }} </a>
          </p>
          <p v-if="mentor.phone">Phone: {{ mentor.phone }}</p>
          <p v-if="mentor.linkedin">
            <a :href="mentor.linkedin" target="_blank">LinkedIn profile</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    mentor: Object
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

.profile-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  text-align: left;
}

.profile-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
