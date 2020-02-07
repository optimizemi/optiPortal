<template>
  <div class="m-2">
    <h2 class="subtitle">Mentors</h2>
    <p>
      On this page you can find active mentors in the optiMize community. These
      mentors have agreed to list their information for the optiMize community
      so please be mindful of sharing this information. You can use the search
      bar and filters below to find mentors.
    </p>
    <br />
    <hr />

    <div class="cardWrapper">
      <ProfileCard v-for="mentor in Data" :mentor="mentor" :key="mentor.name" />
    </div>
  </div>
</template>

<!-- todo: add script tags, load mentor picker component --->
<script>
import ProfileCard from '../components/ProfileCard'
// import mentorsListData from '../assets/mentorsList.json'

export default {
  components: { ProfileCard },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    async fetchMentors() {
      const mentorsData = await this.$axios.$get(`${process.env.baseurl}`)
      this.mentorsList = mentorsData
    }
  }
}
</script>

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
