<template>
  <div class="profile-card">
    <h1>{{ name }}</h1>
    <h2>Currently {{ currentRole}} at {{ currentEmployer }}</h2>
    <p>{{schoolName}} class of {{ schoolGradYear }}</p>
    <p>{{ bio }}</p>
    <hr>
    <h3>Contact Infor</h3>
    <ul>
      <li>Social media links</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    name: String,
    userType: Array,
    currentRole: String,
    currentEmployer: String,
    schoolGradYear: Number,
    schoolName: String,
    location: String,
    bio: String,
    phone: String,
    email: String,
    project: Array,
    skills: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
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
