<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container id="nav" style="margin: 0 auto">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/examples">Examples</router-link>|
        <router-link to="/Lifecycle">Lifecycle</router-link>|
        <router-link to="/MonsterGame">Monster Game</router-link>
      </v-container>

      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
