<template>
  <div>
    <div class="profile-card card rounded overflow-hidden max-w-full">
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
            <strong class="title is-4">
              {{ mentor.firstName }} {{ mentor.lastName }}
            </strong>
            <div v-if="mentor.currentPosition">
              <em>{{ mentor.currentPosition }}</em>
            </div>
            <div v-if="mentor.currentCity">
              <em>{{ mentor.currentCity }}, {{ mentor.currentState }}</em>
            </div>
          </div>
        </div>

        <div class="content">
          <strong>Contact Information</strong>
          <p v-if="mentor.email">
            Email: <a :href="'mailto:' + mentor.email">{{ mentor.email }}</a>
          </p>
          <p v-if="mentor.phone">Phone: {{ mentor.phone }}</p>
          <p v-if="mentor.linkedin">
            <a :href="person.linkedin" target="_blank">LinkedIn profile</a>
          </p>
          <br />
          <hr />
          <br />
          <ul>
            <li v-for="(skill, index) in mentor.skills" :key="index">
              #{{ skill }} &nbsp;
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    mentor: {
      type: Object,
      default: () => ({
        mentorId: '0',
        firstName: '',
        lastName: '',
        email: 'n/a',
        phone: 'n/a',
        currentPosition: 'n/a',
        currentCity: 'n/a',
        currentState: 'n/a'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}

.profile-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  text-align: left;
  padding: 20px;
  margin: 20px 10px 10px 10px;
}

.profile-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
