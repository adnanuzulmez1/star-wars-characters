<template>
  <div class="container">
    <AllCharacters />
  </div>
</template>

<script>
// @ is an alias to /src
import AllCharacters from "@/components/AllCharacters.vue";

export default {
  name: "HomeView",
  components: {
    AllCharacters,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 5% 5%;
  justify-content: center;
}
</style>
