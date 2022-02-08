<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Our App
        </h1>

        <p class="subheading font-weight-regular">
          Please Choose your center
        </p>
      </v-col>

      <template>
      <v-carousel v-model="model">
        <v-carousel-item>
          <v-sheet
            :color="color"
            height="100%"
            
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
               <v-img
                  contain
                  lazy-src="../assets/Screen Shot 2022-02-07 at 5.42.52 PM.png"
                  src="../assets/Screen Shot 2022-02-07 at 5.42.52 PM.png"
                ></v-img>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
          <v-sheet
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              
                <v-img
                  contain
                  lazy-src="../assets/Screen Shot 2022-02-07 at 5.41.38 PM.png"
                  src="../assets/Screen Shot 2022-02-07 at 5.41.38 PM.png"
                ></v-img>
              
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
      <v-col
        class="mb-5"
        cols="12"
      >
      <router-link to="/center">
       <v-btn
        rounded
        x-large
        color="primary"
        dark
      >
        RBT
      </v-btn>
      </router-link>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
         <router-link to="/center">
          <v-btn
            rounded
            x-large
            color="primary"
            dark
          >
            KHG
          </v-btn>
        </router-link>

        
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
         <router-link to="/center">
          <v-btn
            rounded
            x-large
            color="primary"
            dark
          >
            BNG
          </v-btn>
      </router-link>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

     data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  }
</script>
