<template>
  <div class="vh-60">
    <div class="pos-f-t">
      <nav class="navbar navbar-dark">
        <i
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          text-white
        >
          <span class="navbar-toggler-icon"></span>
        </i>

        <router-link to="/">Weather</router-link>
        <router-link to="/photo">Gallery</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "NavigationBar",

  data() {
    return {
      show: ref(false),
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  .navbar {
    background-color: #17355f;
    padding: 5px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 81%;
    margin: 0 auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .navbar-toggler {
      margin-left: 76px;
    }

    a {
      margin-right: 84px;
      padding: 5px;
      outline: none;
      text-decoration: none;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 5px;

      &:hover {
        background-color: #fff;
        color: #17355f;
        transition: ease 0.3s;
      }
    }
  }
}
</style>
