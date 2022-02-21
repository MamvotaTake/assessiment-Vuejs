<template>
  <div class="container vh-60">
    <!-- <NavigationBar /> -->
    <!-- Gallery -->
    <div class="search-box">
      <input
        type="text"
        class="search-bar"
        placeholder="Search......."
        v-model="query"
        @keypress="findPhoto"
      />
    </div>
    <div class="photo-card row">
      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          :src="photo.urls.full"
          class="w-50 h-50 shadow-1-strong rounded mb-4"
          :alt="photo.description"
        />
        <h1>{{ photo.alt_description }}</h1>
        <p>{{ photo.user.name }}</p>
      </div>
    </div>
    <!-- Gallery -->
  </div>
</template>

<script>
import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

export default {
  name: "GalleryApp",
  //   components:{NavigationBar}
  data() {
    return {
      accessKey: "knLKaYeHCuLGcs9gtp1ISo5n-toQFLUsdxIdULkn_4A",
      query: "",
      url_base_search: `https://api.unsplash.com/search/photos`,
      url_base_random: `https://api.unsplash.com/photos/random`,
      photo: { urls: { full: "" }, user: { name: "" } },
    };
  },
  computed: {
    getQuery() {
      return this.query;
    },
  },
  methods: {
    findPhoto(e) {
      if (e.key == "Enter") {
        console.log(this.query);
        axios
          .get(
            this.url_base_search +
              "?query=" +
              this.query +
              `&client_id=${this.accessKey}`
          )
          .then((response) => {
            this.photo = response.data.results[0];
            console.log(response, this.photo);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },

  mounted() {
    axios
      .get(this.url_base_random + `?client_id=${this.accessKey}`)
      .then((response) => {
        this.photo = response.data;
        console.log(this.randomPhoto);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 81%;
  margin: 0px auto;
  background-color: gainsboro;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 1px solid #17355f;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .photo-card {
    width: 600px;
    height: 300px;
    padding: 15px;
    margin: 0px auto;
    background-color: #fff;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 12px;

    img {
      margin: 0px auto;
    }
    h1 {
      font-size: 18px;
      font-weight: bold;
    }

    h1,
    p {
      font-family: "Courier New", Courier, monospace;
      text-align: left;
      color: #17355f;
      margin-bottom: 10px;
    }

    &:hover {
      background-color: #17355f;
      transition: ease-in-out 2s;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      h1,
      p {
        color: #fff;
      }

      img {
        transform: scale(1);
        width: 200px;
        height: 300px;
      }
    }
  }
}

.search-box {
  width: 50%;
  margin: 15px auto;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #17355f;

  outline: none;
  font-size: 20px;

  appearance: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
</style>
