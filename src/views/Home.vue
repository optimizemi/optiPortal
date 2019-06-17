<template>
  <div class="home">
    <h1>Welcome to optiPortal</h1>
    <p>optiPortal is a directory designed for the optiMize community.</p>
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
