<template>
  <!-- App.vue -->

    <v-app>
      <v-app-bar
          app
          color="primary"
          dark
          to="/"
        >
        <router-link to="/">
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />

            <v-img
              alt="Vuetify Name"
              class="shrink mt-1 hidden-sm-and-down"
              contain
              min-width="100"
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
              width="100"
            />
          </div>
        </router-link>

          <v-spacer></v-spacer>

          
        </v-app-bar>
      <v-navigation-drawer v-if="$router.currentRoute.fullPath !== '/'" color="primary" dark app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
            the center
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            dark
          >
            <router-link :to="item.to">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              </router-link>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- Sizes your content based upon application components -->
      <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>

          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
</template>

<script>

export default {
  name: 'App',

   data () {
      return {
        items: [
          { title: 'Stock', icon: 'mdi-help-box', to: "/center" },
          { title: 'Titre??', icon: 'mdi-help-box', to: "/center" },
          { title: 'Evenmentiel', icon: 'mdi-help-box', to: "/center" },
          { title: 'Agenda Director', icon: 'mdi-help-box', to: "/center" },
          { title: 'Dossier Medical', icon: 'mdi-help-box', to: "/dossier_medical" },
        ],
        right: null,
        router: this.$router.currentRoute.fullPath
      }
    },
};
</script>
