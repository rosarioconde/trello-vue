<template>
  <router-link class="board-card" :to="{ name: 'board', params: { name, id } }">
    <!--se le puede psar una ruta o parametros, le voy a pasar un objeto---->
    <span class="board-card-title">{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  name: "board-card",
  props: {
    id: String,
    name: String,
  },
};
</script>


<style  scoped>
.board-card {
  background-color: #546e7a;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 5px;
  color: #fafafa;
  margin: 0.5rem 1.5rem;
  padding: 1rem;
  text-align: left;
  text-decoration: none;
  transition: all 600ms ease;
  width: 100%;
  height: 100px;
}

.board-card-title {
  font-size: 1.2rem;
}
.board-card-title:hover {
  background-color: #90a4ae;
  font-weight: bold;
}
@media screen and (min-width: 600px) {
  width: 33%;
}
@media screen and (min-width: 1024px) {
  width: 250px;
}
</style>