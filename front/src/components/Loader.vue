<template>
  <b-overlay
    :show="show"
    variant="light"
    :opacity="0.85"
    blur="2px"
    rounded="sm"
    no-wrap
  >
    <template #overlay>
      <div class="text-center">
        <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
        <p>{{ message }}</p>
      </div>
    </template>
  </b-overlay>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters({
      show: "uxModule/showLoader",
      message: "uxModule/loaderMsg",
    }),
  },
};
</script>