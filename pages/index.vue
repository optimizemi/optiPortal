<template>
  <div class="container mx-auto px-4 pt-16">
    <div class="flex m-2">
      <div class="w-1/2 h-12">
        <strong>WELCOME</strong>
        <br />
        <br />
        <p>
          optiPortal is a tool and directory for the greater optiMize community.
          You can find projects, participants, mentors, organizers, resources
          and more here.
        </p>
      </div>

      <div class="w-1/2 h-12">
        <strong>ANNOUNCEMENTS</strong>
        <br />
        <br />
        <p>
          Expect community announcements to be listed here via API push. Maybe
          Slackbot?
        </p>
        <p>Build ID:</p>
      </div>
    </div>
  </div>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

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
