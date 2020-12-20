<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(item, index) of arrayOrdena"
        :key="index"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ item.nombre }}
        <span class="badge bg-primary rounded-pill">{{ item.cantidad }}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-lg mt-3" @click="reiniciar">Reiniciar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"]),
    arrayOrdena() {
      return this.frutas.sort((a, b) => b.cantidad - a.cantidad);
    },
  },
  methods: {
    ...mapMutations(["aumentar", "reiniciar"]),
  },
};
</script>
