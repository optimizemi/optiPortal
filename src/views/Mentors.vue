<template>
  <div class="mentors">
    <h1>Mentors</h1>
    <p>Use this page to find and view mentors in the optiMize community.</p>

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

    <!--- List all mentors returned below -->
    <div class="cardWrapper">
      <ProfileCard
        v-for="mentor in mentorsList"
        :mentor="mentor"
        :key="mentor.name"
      />
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard";

import mentorsList from "@/assets/dataFile.json";
export default {
  name: "mentors",
  components: {
    ProfileCard
  },
  data() {
    return {
      searchText: "",
      mentorsList: mentorsList
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
  & > * {
    margin: 10px;
  }
}
.cardWrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1.5rem;
}
</style>
