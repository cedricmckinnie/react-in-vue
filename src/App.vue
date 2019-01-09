<template>
  <div id="app">
      <my-dashboard/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyDashboard from "./components/MyDashboard";

@Component({
    components: {
        'my-dashboard': MyDashboard
    }
})
export default class App extends Vue {}
</script>

<style>
</style>
