<template>
  <div class="bg-light">
    <b-table
      striped
      hover
      bordered
      show-empty
      :items="tweets"
      :fields="columns"
      thead-tr-class="text-center"
    >
      <template #table-colgroup="scope">
        <col
          v-for="field in scope.fields"
          :key="field.key"
          :style="{ width: field.key === 'text' ? '70%' : '15%' }"
        />
      </template>
    </b-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TweetTable",
  computed: {
    ...mapGetters({
      columns: "homeModule/columns",
      tweets: "homeModule/tweets",
    }),
  },
};
</script>