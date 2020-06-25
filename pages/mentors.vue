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
      <ProfileCard
        v-for="mentor in mentors.body"
        :key="mentor.mentorId"
        :mentor="mentor"
      />
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
      mentors: {
        statusCode: 200,
        body: [
          {
            mentorId: 81,
            firstName: 'Aaron',
            lastName: 'Stryker',
            email: 'astryker@wesleyan.edu',
            phone: '(734) 834-7604',
            currentPosition: 'Director',
            currentCity: 'Ann Arbor',
            currentState: 'MI'
          },
          {
            mentorId: 117,
            firstName: 'Aashka',
            lastName: 'Soni',
            email: 'aashkahsoni@gmail.com',
            phone: '(248) 496-7722',
            currentPosition: 'Partner Development',
            currentCity: 'Farmington Hills',
            currentState: 'MI'
          }
        ]
      },
      loading: true,
      errored: false
    }
  }
  /*
  mounted() {
    this.$axios
      .get(`https://p5mq2fkwwb.execute-api.us-east-2.amazonaws.com/v1/mentors`)
      .then((response) => (this.info = response.body))
      .catch((error) => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
  */
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
