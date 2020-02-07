<template>
  <nav class="navbar">
    <div class="flex items-center flex-shrink-0 text-white mr-2 logo">
      <Logo />
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto navbar-content"
    >
      <div class="text-sm lg:flex-grow">
        <a
          href="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Home
        </a>
        <a
          href="/projects"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Projects
        </a>
        <a
          href="/mentors"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Mentors
        </a>
        <a
          href="/resources"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >Resources
        </a>
      </div>

      <!-- Disable Log In
        <div>
          <a
            href="/auth"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Log In</a
          >
        </div>
        -->
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'
export default {
  name: 'NavBar',
  components: { Logo }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  background: #3db4ed;
}

.logo {
  height: 60%;
}
</style>
