<template>
  <div v-for="data in datas.value" :key="data.id" class="characters">
    <div class="characters__list">
      <div class="characters__list__image">
        <img :src="data.image" alt="" />
      </div>
      <div class="characters__list_text">
        <h4>{{ data.name }}</h4>
      </div>
      <router-link :to="{ path: `/${data.id}` }" class="character__detailButton">
        Detail
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
//import CharacterDetail from "./components/CharacterDetail.vue";
//import CharacterCard from "./components/CharacterCard.vue";

export default {
  setup() {
    const datas = reactive([]);
    axios
      .get("https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json")
      .then((res) => {
        datas.value = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
    return {
      datas,
    };
  },
  components: {
    // CharacterDetail,
    //CharacterCard,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

html {
  height: 100%;
  background-image: url(https://i.pinimg.com/originals/f3/8e/41/f38e413a04321ed0f6b848568ddc2650.jpg);
  background-size: 100%;
  background-position-y: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  letter-spacing: 0.7px;
  position: relative;
}

.characters {
  display: flex;
  flex-direction: row;
  width: auto;
  height: 100%;
  margin: 40px;
  justify-content: center;
  align-items: center;
  animation: fade-anim 1.1s 1;
}
@keyframes fade-anim {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.characters__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(228, 228, 228, 0.81);
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(151, 184, 209, 0.391) 0px 28px 100px 10px;
  cursor: pointer;
}
.characters__list__image img {
  width: 220px;
  height: 270px;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.186);
  margin-bottom: 10px;
  transition: 0.2s;
  background-color: rgba(228, 228, 228, 0.81);
}

.characters__list__image img:hover {
  transform: scale(1.02);
}

.character__detailButton {
  border: 2px solid rgba(128, 128, 128, 0.535);
  margin-top: 10px;
  cursor: pointer;
  width: 90%;
  height: 25px;
  border-radius: 10px;
  color: white;
  background-color: transparent;
  text-decoration: none;
  text-align: center;
  padding-top: 5px;
}

.character__detailButton:hover {
  background: linear-gradient(90deg, rgba(255, 0, 0, 0.464), rgba(0, 115, 255, 0.448));
}

.characters__list_text {
  color: rgb(55, 55, 55);
}
</style>
