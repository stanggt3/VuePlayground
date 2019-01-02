<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="title = 'Changed'">Update Title</button>
    <button @click="destroy">Destroy</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "The VueJS Instance Lifecycle"
    };
  },
  methods: {
    destroy: function() {
      this.$destroy();
    }
  },
  beforeCreate: function() {
    console.log("beforeCreate()");
  },
  created: function() {
    console.log("created()");
  },
  beforeMount: function() {
    console.log("beforeMount()");
  },
  mounted: function() {
    console.log("mounted()");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate()");
  },
  updated: function() {
    console.log("updated()");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy()");
  },
  destroyed: function() {
    console.log("destroyed()");
  }
};
</script>

