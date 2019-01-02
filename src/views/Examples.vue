<template>
  <div>
    <v-container grid-list-md>
      <v-layout layout row wrap>
        <v-flex xs6>
          <h1>DOM Interaction</h1>
          <p>Basic Binding: {{title}}</p>
          <p>Function Binding: {{sayHello()}}</p>
          <p>
            Bind an attribute:
            <a :href="link" target="_blank">Google</a>
          </p>
          <p>Shorthand: : for v-bind, @ for v-on</p>
          <p>
            Only render once
            <span v-once>Cant change</span>
          </p>
          <p>
            Rendering HTML
            <span v-html="htmlLink"></span>
          </p>
        </v-flex>

        <v-flex xs6>
          <h1>Listening To Events</h1>
          <p>
            Pass an argument
            <button @click="increaseCounter(2, $event)">Increase</button>
            {{counter}}
          </p>
          <p v-on:mousemove="updateCoordinates">Event binding - Coordinates:{{x}} / {{y}}</p>
          <p v-on:mousemove="updateCoordinates">
            Stop propagation to parent elements
            Event binding - Coordinates:{{x}} / {{y}} -
            <span
              v-on:mousemove.stop
            >DEAD SPOT</span>
          </p>
          <p>
            Keyboard Events
            <input type="text" v-on:keyup.enter.space="alertMe">
          </p>
          <p>
            Javascript in the template
            <button type="button" v-on:click="counter++">Click Me</button>
            <span>{{counter}} | {{counter * 2 > 10 ? 'Greater than 10' : 'Less than 10'}}</span>
          </p>
          <p>
            2 Way Binding
            <input type="text" v-model="name">
            <span>{{name}}</span>
          </p>
          <p>
            Computed vs. Methods
            <br>
            <button type="button" v-on:click="counter2++">Increase Method</button>
            <button type="button" v-on:click="counter++">Increase Computed</button>
          </p>
          <p>Counter: {{counter}} Counter2: {{counter2}}</p>
          <p>Result: {{result() }} | {{computedOutput}}</p>
          <br>
          <br>
          <p>Watch for changes - runs whenever a property changes</p>
        </v-flex>

        <v-flex xs6>
          <h1>Dynamic Classes & Styling</h1>
          <div class="demo" @click="attachRed = !attachRed" :class="{'red': attachRed}"></div>
          <div class="demo" :class="divClasses"></div>
          <div class="demo" :class="[color, {'red': attachRed}]"></div>
          <div class="demo" :style="{backgroundColor: color}"></div>
          <div class="demo" :style="myStyle"></div>
          <div class="demo" :style="[myStyle, {height: width + 'px'}]"></div>
          <input type="text" v-model="color">
          <input type="text" v-model="width">
          <p></p>
          <br>
          <br>V-if: Conditional Rendering
          <p v-if="show">You can see me</p>
          <p v-else-if="show2"></p>
          <p v-else>Now you see me</p>
          <button @click="show = !show">Toggle</button>
          <p>Use templates go group v-if
            <template v-if="show">Inside template</template>
          </p>
          <p>V-show will hide element instead of remove it like v-if does</p>
          <button @click="show = !show">Toggle</button>
          <p v-show="show">You can see me</p>
        </v-flex>
        <v-flex xs6>
          <h1>Rendering Lists - v-for</h1>
          <p>Looping through Arrays with index</p>
          <ul>
            <li v-for="(ingredient, i) in ingredients" :key="i">{{ ingredient }} {{i}}</li>
          </ul>
          <p>Use a template instead of repeating a loop</p>
          <template v-for="(ingredient, i) in ingredients">
            <h4 :key="i">{{ingredient}}</h4>
            <p :key="i">{{i}}</p>
          </template>
          <button @click="ingredients.push('spices')">Add new</button>
          <hr>
          <p>Looping through objects</p>
          <li v-for="person in persons" :key="person">
            <div
              v-for="(value, key, index) in person"
              :key="index"
            >{{ key }} : {{ value }} ({{ index }})</div>
          </li>
          <p>Looping through list of numbers</p>
          <span v-for="n in 10" :key="n">{{ n }}</span>
          <h1>Using ref</h1>
          <button ref="myButton" type="button" @click="refs">Ref Button</button>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello World",
      link: "https://www.google.com",
      htmlLink: "<a href='https://www.google.com'>Google</a>",
      counter: 0,
      x: 0,
      y: 0,
      name: "Randy",
      counter2: 0,
      attachRed: false,
      attachBlue: false,
      color: "green",
      width: 100,
      show: true,
      show2: false,
      ingredients: ["meat", "fruit", "cookies"],
      persons: [
        { name: "Bob", age: 27, color: "red" },
        { name: "Richard", age: 43, color: "blue" }
      ]
    };
  },
  methods: {
    sayHello: function() {
      return "Hello!!";
    },
    increaseCounter: function(step) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert("Alert!");
    },
    result: function() {
      return this.counter2 > 5 ? "Greater than 5" : "Less than 5";
    },
    refs: function() {
      this.$refs.myButton.innerText = "Test";
    }
  },
  computed: {
    computedOutput: function() {
      return this.counter2 > 5 ? "Greater than 5" : "Less than 5";
    },
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + "px"
      };
    }
  },
  watch: {
    counter: function(value) {
      this.counter > 10 ? alert("Greater than 10") : "";
    }
  }
};
</script>


<style>
.demo {
  width: 100px;
  height: 100px;
  display: inline-block;
  background-color: darkcyan;
  margin: 10px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}

.green {
  background-color: green;
}
</style>