<template>
  <v-app>
    <v-main>
      <item-list></item-list>
    </v-main>
  </v-app>

  <script>
    import ItemList from './components/ItemList.vue';

    export default {
      components: {
        ItemList,
      },
    };

  </script>
</template>