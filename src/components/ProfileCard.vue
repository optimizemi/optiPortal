<template>
  <div class="profile-card">
    <img :src="mentor.photo" />
    <h1>{{ mentor.name }}</h1>
    <h3>{{ mentor.city }}, {{ mentor.state }}</h3>
    <p>{{ mentor.bio }}</p>
    <p>{{ mentor.skills }}</p>
    <hr />
    <h3>Contact Information</h3>
    <p v-if="mentor.email">
      Email: <a :href="'mailto:' + mentor.email">{{ mentor.email }} </a>
    </p>
    <p v-if="mentor.phone">Phone: {{ mentor.phone }}</p>
    <p v-if="mentor.linkedin">
      LinkedIn:
      <a :href="mentor.linkedin" target="_blank">{{ mentor.linkedin }}</a>
    </p>
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
a {
  color: #42b983;
}

.profile-card {
  border: solid 1px #333;
  background: #eee;
  padding: 1rem;
  margin: 1rem;
  text-align: left;
}
</style>
