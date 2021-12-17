<template>
  <div id="user-units" ref="UserUnits" class="container">
    <div class="card">
      <div class="card-body">
        <h5 v-if="units.name" class="card-title fw-bold">{{ units.name }}</h5>
        <p v-if="units.description" class="card-text">
          {{ units.description }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li
          v-if="units.build_time"
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <div class="ms-2">Build Time</div>
          <span class="badge bg-primary rounded-pill">
            {{ units.build_time }}
          </span>
        </li>
        <li
          v-if="units.line_of_sight"
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <div class="ms-2">Line Of Sight</div>
          <span class="badge bg-primary rounded-pill">
            {{ units.line_of_sight }}
          </span>
        </li>
        <li
          v-if="units.hit_points"
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <div class="ms-2">Hit Points</div>
          <span class="badge bg-primary rounded-pill">
            {{ units.hit_points }}
          </span>
        </li>
        <li
          v-if="units.range"
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <div class="ms-2">Range</div>
          <span class="badge bg-primary rounded-pill">
            {{ units.range }}
          </span>
        </li>
        <li
          v-if="units.attack"
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <div class="ms-2">Attack</div>
          <span class="badge bg-primary rounded-pill">
            {{ units.attack }}
          </span>
        </li>
        <li
          v-if="units.cost && units.cost.Wood"
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <div class="ms-2">Wood Cost</div>
          <span class="badge bg-primary rounded-pill">
            {{ units.cost.Wood }}
          </span>
        </li>
        <li
          v-if="units.cost && units.cost.Gold"
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-start
          "
        >
          <div class="ms-2">Cost Of Gold</div>
          <span class="badge bg-primary rounded-pill">
            {{ units.cost.Gold }}
          </span>
        </li>
      </ul>
      <div v-if="units.expansion" class="card-footer text-muted text-center">
        {{ units.expansion }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "units-component",
  async mounted() {
    const headers = {
      accept: "application/json",
    };

    const unitId =
      typeof this.$route.params.id !== "undefined"
        ? this.$route.params.id
        : this.$store.getters.getPreviousId;

    const { data } = await axios.get(
      "https://intense-tundra-98386.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/" +
        unitId,
      { headers }
    );
    this.units = data;
  },
  data() {
    return {
      units: {},
    };
  },
};
</script>
