<template>
  <div id="empires" class="container">
    <v-client-table
      ref="EmpiresTable"
      :data="tableData"
      :columns="columns"
      :options="options"
      class="container"
      @row-click="showUnit"
    />
  </div>
</template>

<script>
import { ClientTable } from "vue-tables-2";

Vue.use(ClientTable);

export default {
  name: "empires-component",
  async mounted() {
    this.$refs.EmpiresTable.setLoadingState(true);
    const headers = {
      accept: "application/json",
    };
    const { data } = await axios.get(
      "https://intense-tundra-98386.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/units",
      { headers }
    );
    this.tableData = data.units;
    this.$refs.EmpiresTable.setLoadingState(false);
  },
  data() {
    return {
      columns: ["name", "hit_points", "attack", "build_time"],
      sortable: ["name", "hit_points", "attack", "build_time"],
      tableData: [],
      options: {
        perPageValues: [10, 20, 50],
      },
    };
  },
  methods: {
    showUnit(selected) {
      this.$store.commit("setSelectedId", selected.row.id);
      this.$router.push({ name: "units", params: { id: selected.row.id } });
    },
  },
};
</script>
