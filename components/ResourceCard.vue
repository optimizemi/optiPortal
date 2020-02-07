<template>
  <div class="bg-white border rounded-lg overflow-hidden">
    <h3>{{ resource.Name }}</h3>
    <p>{{ resource.Description }}</p>
    <p><a :href="`${resource.Link}`">Learn More</a></p>
  </div>
</template>

<script>
export default {
  name: 'ResourceCard',
  props: {
    resource: {
      type: Object,
      default: () => ({
        Name: 'Resource Name',
        Description: 'Resource description',
        Tags: ['String Array'],
        Link: 'https://#'
      })
    }
  }
}
</script>
