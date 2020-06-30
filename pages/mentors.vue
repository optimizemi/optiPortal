<template>
  <div class="container mx-auto px-4 pt-16">
    <strong>MENTORS</strong>
    <br />
    <br />
    <hr />
    <br />
    <p>
      On this page you can find active mentors in the optiMize community. These
      mentors have agreed to list their information for the optiMize community
      so please be mindful of sharing this information. You can use the search
      bar and filters below to find mentors.
    </p>
    <br />
    <!---
    <div class="flex items-center border-b border-b-2  py-2">
      <input
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search mentor by name"
        aria-label="Mentor name"
      />
      <button 
        v-on:click="console.log(hello)"
        class="flex-shrink-0 bg-orange-500 hover:bg-orange-800 border-orange-500 hover:border-orange-800 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
      >
        Search
      </button>
    </div>
    --->
    <hr />
    <div class="cardWrapper">
      <!--- LOOP over to create cards --->
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
