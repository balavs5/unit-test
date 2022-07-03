<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            class="nav-item active"
            v-for="(benefit, index) in benefits"
            :key="index"
            :data-test-info="index"
            @click="selectnav(benefit)"
          >
            <a
              class="nav-link"
              href="#"
              data-toggle="modal"
              data-target="#staticBackdrop"
              >{{ benefit }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <modal v-if="displayModal"></modal>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref } from "@vue/composition-api";
import Modal from "./Modal.vue";
export default defineComponent({
  components: { Modal },
  name: "Header",
  setup() {
    const displayModal = ref(false);
    const benefits = ref(["One", "Two", "Three", "Four"]);
    const selectnav = (title: string) => {
      displayModal.value = true;
    };
    return { selectnav, displayModal, benefits };
  },
  mounted() {
    this.displayModal = false;
  },
});
/* eslint-enable */
</script>
<style scoped>
nav ul li a:hover {
  background-color: cyan;
}
</style>
