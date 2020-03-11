<template>
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
    <img
      :src="`${project.Image_URL}`"
      :alt="`${project.Name}`"
      class="w-full"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ project.Name }}</div>
      <p>{{ project.Year }} {{ project.Track }}</p>
      <br />
      <p class="text-gray-700 text-base">{{ project.Description }}</p>
      <br />
      <p>Primary Contact: {{ project.Primary_Contact }}</p>
      <p>Members: {{ project.Members }}</p>
      <p>Mentors: {{ project.Mentors }}</p>
      <button
        :href="`${project.Link}`"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Learn More
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: () => ({
        Name: 'Project Title',
        Image_URL: 'https://place-hold.it/300x300.jpg',
        Project_ID: 'hex092',
        Description: 'Project description (500 char)',
        Year: '2099',
        Primary_Contact: 'Primary Contact Name',
        Members: ['String Array'],
        Mentors: ['String Array'],
        Status: ['Project Status String Array'],
        Category: ['Project Category String Array'],
        Track: ['Project Track String Array'],
        Attachments: ['Document Array'],
        Link: 'https://#'
      })
    }
  },
  methods: {
    async fetchSomething() {
      const ip = await this.$axios.$get('http://icanhazip.com')
      console.log(`This is the IP: ${ip}`)
    }
  }
}
</script>
