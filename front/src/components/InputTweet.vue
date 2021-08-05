<template>
  <b-form @submit.prevent="onSubmit" class="p-5 mt-4 mb-5 bg-light">
    <b-form-group label="Name:" description="Please input your name">
      <b-form-input
        v-model="form.name"
        type="text"
        placeholder="Enter your name"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group label="Content:">
      <b-form-textarea
        id="textarea"
        v-model="form.text"
        placeholder="Type the tweet"
        rows="4"
        max-rows="4"
        debounce="500"
        no-resize
        required
      ></b-form-textarea>
      <b-form-invalid-feedback :state="validation">
        Please input at least 50 characters
      </b-form-invalid-feedback>
    </b-form-group>
    <div class="text-right">
      <b-button type="submit" variant="primary">Submit</b-button>
    </div>
  </b-form>
</template>
<script>
export default {
  name: "InputTweet",
  computed: {
    validation() {
      return this.form.text.length >= 50;
    },
  },
  data: () => ({
    form: {
      name: "",
      text: "",
    },
  }),
  methods: {
    onSubmit() {
      if (!this.validation) return;

      this.$store.dispatch("uxModule/setLoaderMsg", "Creating tweet...");
      this.$store.dispatch("homeModule/createTweet", {
        ...this.form,
      });
      this.form = {
        name: "",
        text: "",
      };
      this.$store.dispatch("uxModule/setLoader", false);
    },
  },
};
</script>