<template>
  <div class="container">
    <div class="card" style="width: 200px">
      <img class="card-img-top" :src="data.url" alt="Card image" />
      <div class="card-img-overlay">
        <h4 class="card-title text-white">{{ data.title }}</h4>
        <p class="card-text text-white">
          {{ data.explanation }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NassaApp",
  data() {
    return {
      api_key: "HrGS6VngKLyzgSvyEbaCUbDzN1TEyVp0wYzX0QRa",
      url_base: `https://api.nasa.gov/planetary/apod?`,
      data: [],
    };
  },

  created() {
    axios
      .get(`${this.url_base}api_key=${this.api_key}`)
      .then((response) => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
  transition: width 2s, height 3s, transform 3s;

  .card-text {
    text-align: left;
    display: none;
    margin-left: -25px;
  }

  &:hover {
    width: 500px;
    height: 300px;
    transform: scale(1);
    background: #17355f;

    img {
      display: flex;
      height: 300px;
      margin-right: 60px;
      transform: scale(0.8);
    }
    .card-img-top {
      width: 900px;
      transform: scale(3.83);
      overflow: hidden;
      justify-content: center;
      align-items: center;
    }
    .card-title {
      margin-top: -300px;
      width: 800px;
      text-align: center;
    }

    .card-text {
      margin: 120px;
      width: 700px;
      text-align: center;
      justify-content: center;
      display: block;
    }
    .card-img-overlay {
      border-radius: 12px;
      width: 400px;
      transform: scale(0.8);
    }
  }
}
</style>
