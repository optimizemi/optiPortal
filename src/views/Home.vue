<template>
  <div class="home">
    <h1>Welcome to optiPortal</h1>
    <p>optiPortal is a directory designed for the optiMize community.</p>
    <h2>The optiMize Community</h2>
    <p>
      The optiMize Community is a living, breathing, thing. We come togeter from
      all walks of life to make the world a better place.<br />
      <strong>Participants</strong> come to us with ideas. <br />
      <strong>Organizers</strong> work hard to create an inclusive and
      encouraging enviornment for everyone. <br />
      <strong>Mentors</strong>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileCard from "@/components/ProfileCard.vue";

export default {
  name: "home",
  components: {
    ProfileCard
  }
};
</script>

<style scoped>
p {
  text-align: left;
}
</style>
