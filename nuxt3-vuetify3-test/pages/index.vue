<template>
    <v-app>
      <v-container>

        <p v-if="variable === 1">
        <v-btn @click="toggleTheme">ボタンA</v-btn>
        </p>

        <p v-if="variable !== 1">
        <v-btn @click="toggleTheme">ボタンB</v-btn>
        </p>

        <p>
        <v-btn @click="addNum">add BTN</v-btn>
        </p>

        <p>
        <v-btn @click="resetNum">Reset</v-btn>
        </p>

      </v-container>
    </v-app>
  </template>
  
  <script setup lang="ts">
    import { useTheme } from 'vuetify'
  
    const theme = useTheme()

    const variable = ref(1)
  
    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }

    // variable をリセットする
    function addNum() {
        variable.value += 1;
    }

    // variable 1にする
    function resetNum() {
        variable.value = 1;
    }
  </script>
  
  