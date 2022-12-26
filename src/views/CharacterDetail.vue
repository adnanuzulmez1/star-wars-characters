<template>
  <router-link :to="{ path: `/` }" class="backButton"> Back </router-link>
  <div class="details">
    <h1>{{ getDetail.name }}</h1>
    <div class="detailContainer">
      <div class="detailContainer__image">
        <img :src="getDetail.image" alt="" />
      </div>
      <div class="detailContainer__content">
        <div class="detailedContainer__content-info">
          <h3>Name: {{ getDetail.name }}</h3>
          <h3>HomeWorld: {{ getDetail.homeworld }}</h3>
          <h3>Height: {{ getDetail.height }}</h3>
          <h3>Species: {{ getDetail.species }}</h3>
        </div>
        <div class="detailedContainer__content-affiliations">
          <h2 style="margin-bottom: 10px">Affiliations:</h2>
          <p v-for="item in getDetail.affiliations" :key="item">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const getDetail = ref([]);
    const router = useRoute();
    const id = router.params.id;
    axios
      .get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${id}.json`)
      .then((res) => {
        getDetail.value = res.data;
        console.log(getDetail.value.image);
      })
      .catch((err) => {
        console.error(err);
      });
    return {
      getDetail,
    };
  },
};
</script>

<style>
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  margin-top: 15%;
  background-color: rgba(255, 240, 240, 0.769);
  background: linear-gradient(45deg, rgba(248, 78, 78, 0.864), rgba(0, 115, 255, 0.848));
  border-radius: 30px;
  box-shadow: rgba(222, 125, 125, 0.391) 0px 28px 800px 10px;
  animation: fade-anim 1.1s 1;
}
.details h1 {
  color: rgb(206, 206, 206);
  margin-top: 20px;
}
.detailContainer {
  display: flex;
  min-height: 100%;
  justify-content: center;
  width: 1000px;
  padding: 50px;
  color: rgb(221, 212, 212);
}
.detailContainer__image {
  display: flex;

  background-color: rgba(255, 255, 255, 0.447);
  border-radius: 20px;
}
.detailContainer__image img {
  width: 300px;
  height: 400px;
  border-radius: 20px;
  border: 5px solid rgb(92, 92, 92);
  box-shadow: rgba(102, 132, 202, 0.616) 0px 10px 200px 10px;
}
.detailContainer__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.detailedContainer__content-info {
  padding: 0 60px 0 40px;
}
.detailedContainer__content-info h3 {
  padding: 3px 0;
}
.detailedContainer__content-affiliations p {
  padding: 3px 0;
}
.backButton {
  position: relative;
  top: 215px;
  left: 25px;
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 20px;
  color: rgb(255, 255, 255);
  background-color: rgba(218, 160, 160, 0.571);
  animation: fade-anim 1s 1;
}
@media only screen and (max-width: 1100px) {
  .backButton {
    top: 70px;
  }
  .details {
    margin-top: 20px;
  }
  .detailContainer {
    flex-direction: column;
    width: 500px;
  }
  .detailContainer__image {
    background-color: transparent;
    margin-bottom: 20px;
    justify-content: center;
  }
}
@media only screen and (max-width: 550px) {
  .detailContainer {
    flex-direction: column;
    width: 350px !important;
    padding: 0;
  }
  .detailContainer__image img {
    width: 150px;
    height: 200px;
  }
  .detailContainer__content {
    flex-direction: column;
    margin: 10px 0;
  }
  .details {
    width: 350px;
  }

  .backButton {
    top: 130px;
  }
}
</style>
