<template>
<v-container>
    <v-row class="text-center">
    <v-col class="mb-4">
    <h1 class="display-2 font-weight-bold mb-3">
        Dossier Medical
    </h1>
    </v-col>
    </v-row>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nom
          </th>
          <th class="text-left">
            Prenom
          </th>
          <th class="text-left">
            Age
          </th>
          <th class="text-left">
            Histoire maladie
          </th>
          <th class="text-left">
            Modifier
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.name }}</td>
          <td><v-icon>mdi-wrench</v-icon></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</v-container>
</template>

<script>
  export default {
    name: 'Center',
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
    
  }
</script>
