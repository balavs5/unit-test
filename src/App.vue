<template>
  <!-- <div id="app"></div> -->

  <div class="container-fluid">
    <Header></Header>
    <!-- <ul>
      <li
        v-for="(i, index) in count"
        :key="index"
        @mouseover="i.active = true"
        @mouseout="i.active = false"
        :class="{ items: !i.active, 'items-hover': i.active }"
        :data-test-id="index"
      >
        {{ i.label }}
      </li>
    </ul> -->
  </div>
</template>
<script lang="ts">
/* eslint-disable */
import Header from "@/components/Header.vue";
import { ref } from "@vue/composition-api";

export default {
  components: {
    Header,
  },
  setup() {
    const count = ref([
      {
        label: "One",
        active: false,
      },
      {
        label: "Two",
        active: false,
      },
      {
        label: "Three",
        active: false,
      },
      {
        label: "Four",
        active: false,
      }
    ]);
    return { count };
  },
}
/* eslint-enable */
</script>
<style scoped>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}*/
li {
  padding: 10px;
}
.items {
  color: black;
}
.items-hover {
  color: red;
}
</style>
