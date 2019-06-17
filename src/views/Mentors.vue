<template>
  <div class="mentors">
    <h1>Mentors</h1>
    <p>Use this page to find and view mentors in the optiMize community.</p>

    <!-- Search bar + GraphQL Query based on filters -->
    <form>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>
    </form>

    <hr>

    <!--- List all mentors returned below -->

    <ProfileCard
      name="Bob Dole"
      userType="mentor"
      location="Scranton, PA"
      currentEmployer="Dunder Miflin Paper Co."
    />
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard";

export default {
  name: "mentors",
  components: {
    ProfileCard
  }
};
</script>
