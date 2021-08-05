<template>
  <b-container>
    <input-tweet></input-tweet>
    <tweet-table></tweet-table>
  </b-container>
</template>
<script>
import InputTweet from "../components/InputTweet";
import TweetTable from "../components/TweetTable.vue";

export default {
  name: "HomePage",
  components: {
    InputTweet,
    TweetTable,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>