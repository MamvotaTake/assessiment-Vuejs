<template>
  <section
    class="vh-60"
    style="background-color: #4b515d"
    :class="getHour() < 12 ? 'day' : 'night'"
  >
    <!-- <NavigationBar /> -->

    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4">
          <div
            class="card"
            style="color: #4b515d; border-radius: 35px"
            v-if="typeof weather.main != 'undefined'"
          >
            <div class="card-body p-4">
              <div class="d-flex">
                <h6 class="flex-grow-1">
                  {{ dateBuilder() }}
                </h6>
                <h6>{{ timeBuilder() }}</h6>
              </div>

              <div class="d-flex">
                <h2 class="flex-grow-1 text-center my-4 text-info">
                  {{ weather.name }}, {{ weather.sys.country }}
                </h2>
              </div>

              <div class="d-flex flex-column text-center mt-5 mb-4">
                <h6
                  class="display-4 mb-0 font-weight-bold"
                  style="color: #1c2331"
                >
                  {{ Math.round(weather.main.temp) }}°C
                </h6>
                <span class="small" style="color: #868b94">{{
                  weather.weather[0].main
                }}</span>
              </div>

              <div class="d-flex align-items-center">
                <div class="flex-grow-1" style="font-size: 1rem">
                  <div>
                    <i class="fas fa-wind fa-fw" style="color: #868b94"></i>
                    <span class="ms-1"> {{ weather.wind.speed }} km/h </span>
                  </div>
                  <div>
                    <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                    <span class="ms-1"> {{ weather.main.humidity }}% </span>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NasaApp />
    </div>
  </section>
</template>

<script>
import NasaApp from "./NasaApp.vue";
import axios from "axios";

export default {
  name: "WeatherApp",
  components: { NasaApp },

  data() {
    return {
      api_key: "7641cd1b81489e421150cd252720198e",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },

  created() {
    axios
      .get(`${this.url_base}weather?q=Tomsk&units=metric&APPID=${this.api_key}`)
      .then((response) => {
        this.weather = response.data;
      })
      .catch((err) => console.log(err));
  },

  methods: {
    dateBuilder() {
      let d = new Date();

      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },

    timeBuilder() {
      const d = new Date();
      const hours = d.getHours();
      const minutes = d.getMinutes();
      return `${hours}:${minutes}`;
    },

    getHour() {
      return parseInt(this.timeBuilder().slice(0, 2));
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 450px;
  margin-left: -90px;
}

section.day {
  width: 81%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
  margin: 0px auto;
  padding: 1px;
  background-image: url("../assets/images/day.jpg");
  background-size: center;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.4s;
}

section.night {
  width: 81%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
  margin: 0px auto;
  padding: 1px;
  background-image: url("../assets/images/R.jpg");
  background-size: center;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.4s;
}
</style>
