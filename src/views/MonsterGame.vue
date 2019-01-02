<template>
  <div>
    <v-container grid-list-md>
      <v-layout layout row wrap>
        <v-flex flex xs6>
          <div class="text-xs-center">
            <h1>YOU</h1>
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="playerHealth"
              color="teal"
            >{{ playerHealth }}</v-progress-circular>
          </div>
        </v-flex>
        <v-flex flex xs6>
          <div class="text-xs-center">
            <h1>MONSTER</h1>
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="monsterHealth"
              color="teal"
            >{{ monsterHealth }}</v-progress-circular>
          </div>
        </v-flex>
        <v-flex flex xs12>
          <v-card>
            <v-card-text class="text-xs-center">
              <v-btn
                v-if="!gameisRunning"
                outline
                color="success"
                @click="startNewGame"
                id="start-game"
              >Start New Game</v-btn>
              <div v-else>
                <v-btn color="error" @click="attack()">Attack</v-btn>
                <v-btn color="warning" @click="specialAttack()">Special Attack</v-btn>
                <v-btn color="success" @click="heal()">Heal</v-btn>
                <v-btn color="info" @click="giveUp()">Give Up</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex flex xs12 v-if="battleLog.length > 0">
          <v-card>
            <v-card-title>
              <h1 class="text-xs-center">Battle Log</h1>
            </v-card-title>
            <v-card-text>
              <ul>
                <li
                  v-for="(item, i) in battleLog"
                  :key="i"
                  :class="{'player-turn': item.isPlayer, 'monster-turn': !item.isPlayer}"
                >{{ item.text }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      gameisRunning: false,
      playerHealth: 100,
      monsterHealth: 100,
      battleLog: [],
      gameOver: false
    };
  },
  methods: {
    startNewGame: function() {
      this.gameisRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.battleLog = [];
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.battleLog.unshift({
        isPlayer: true,
        text: "Player hits Monster for " + damage
      });
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    specialAttack: function() {
      var damage = this.calculateDamage(5, 12);
      this.monsterHealth -= damage;
      this.battleLog.unshift({
        isPlayer: true,
        text: "Player hits Monster hard for " + damage
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    monsterAttacks: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.battleLog.unshift({
        isPlayer: false,
        text: "Monster hits Player for " + damage
      });
      this.checkWin();
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.battleLog.unshift({
        isPlayer: true,
        text: "Player heals for " + 10
      });
      this.monsterAttacks();
    },
    giveUp: function() {
      this.gameisRunning = false;
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! Play again?")) {
          this.startNewGame();
        } else {
          this.gameisRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost. Play again?")) {
          this.startNewGame();
        } else {
          this.gameisRunning = false;
        }
        return true;
      }
      return false;
    }
  }
};
</script>



<style>
.bar {
  height: 40px;
  width: 100%;
  background-color: #999;
}
.healthBar {
  height: 40px;
  background-color: mediumseagreen;
  width: 0px;
}
ul li {
  list-style: none;
  display: block;
  text-align: center;
}
ul .player-turn {
  color: blue;
  background-color: #e4e8ff;
}

ul .monster-turn {
  color: red;
  background-color: #ffc0c1;
}
</style>


