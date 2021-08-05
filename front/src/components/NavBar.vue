<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <b-img src="logo.png" fluid alt="Nicolas Jin" :width="48"></b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>