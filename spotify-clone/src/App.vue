<template>
  <div class="bg-neutral-800 h-screen">
    <div class="flex" style="height: 90%">
      <div class="flex-none bg-black h-full" style="width: 15%">
        <div class="p-6">
          <img src="./assets/spotify-logo.png" alt="" class="h-10">
        </div>
        <div class="mx-2 mb-5">
          <button v-for="page in pages" :key="page.name" @click="setID = page.id" :class="`flex items-center font-semibold rounded justify-start px-3 py-2 text-xs w-full ${setID === page.id ? 'bg-neutral-800 text-white' : 'text-neutral-300'}` " >
            <i class="material-icons"> {{page.icon}} </i>   
            <p>{{page.name}}</p>
          </button>
        </div>
        <div class="mx-5">
          <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-3">
            <img src="./assets/add-new.png" alt="" class="bg-white h-8 w-8 mr-3">
            <p class="text-sm text-white font-semibold">Create Playlist</p>
          </button>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-3">
            <img src="./assets/favorite.jpeg" alt="" class="h-8 w-8 mr-3">
            <p class="text-sm text-white font-semibold">Liked Songs</p>
          </button>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100">
            <img src="./assets/favorite.jpeg" alt="" class="h-8 w-8 mr-3">
            <p class="text-sm text-white font-semibold">Liked Songs</p>
          </button>
          <div class="h-px w-full bg-neutral-800 my-3"></div>
        </div>
        <div class="mx-5 flex-col content-between">
          <div class="w-full h-52 overflow-y-scroll mb-6">
            <p v-for="album in albums" :key="album.name" class="text-neutral-400 hover:text-white text-sm py-1 mb-1"> {{album.name}} </p>
          </div>
          <button class="flex items-center justify-start text-neutral-400 hover:text-white">
            <i class="material-icons border-2 border-neutral-400 rounded-full px-1 text-sm mr-3">get_app</i>
            <p class="text-sm font-semibold">Install App</p>
          </button>
          
        </div>
      </div>
      <div class="w-full h-full relative">
        <div class="w-full sticky top-0 p-2 flex items-center justify-between">
          <div class="flex items-center">
            <button class="rounded-full bg-black w-8 h-8 text-white">
              <i class="material-icons text-3xl">chevron_left</i>
            </button>
            <button class="rounded-full bg-black w-8 h-8 text-white">
              <i class="material-icons text-3xl">chevron_right</i>
            </button>
          </div>
          <div class="relative">
            <button @click="showDropdown = true" class="bg-neutral-600 rounded-full py-1 px-2 flex items-center">
              <i class="material-icons mr-2">account_circle</i>
              <p class="text-white font-semibold text-xs mr-3">Stephanie Dietz</p>
              <i v-if="showDropdown === false" class="material-icons">arrow_drop_down</i>
              <i  v-else class="material-icons">arrow_drop_up</i>
            </button>
            <div v-if="showDropdown ===true" class="absolute bg-neutral-700 rounded-md ">
              <button @click="showDropdown = false" class="focus:outline-none w-full text-sm py-2 text-neutral-300 hover:text-white">Cuenta</button>
              <button @click="showDropdown = false" class="focus:outline-none w-full text-sm py-2 text-neutral-300 hover:text-white">Perfil</button>
              <button @click="showDropdown = false" class="focus:outline-none w-full text-sm py-2 text-neutral-300 hover:text-white">Cerrar Sesión</button>
            </div>
          </div>
        </div>
        <!-- cards -->
        <div class="px-6 py-3">
          <div class="flex items-center justify-between">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Episodios para tí</h1>
            <h2 class="pr-8 pt-4 text-xs text-neutral-300 uppercase tracking-wider hover:underline mb-3">Ver todo</h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="recent in recents" :key="recent" class="p-2 w-52">
              <div class="bg-neutral-700 w-full h-auto p-5">
                <img src=" $`{recent.src}` " alt="" class="h-24 w-full shadow mb-2">
                <h1 class="text-sm font-semibold text-white tracking-wide"> {{recent.title}} </h1>
                <h2 class="text-xs text-neutral-300 tracking-wide"> {{recent.artist}} </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6 py-3">
          <div class="flex items-center justify-between">
            <h1 class="pl-2 text-2xl font-semibold text-white tracking-wider hover:underline">Tus artistas favoritos</h1>
            <h2 class="pr-8 pt-4 text-xs text-neutral-300 uppercase tracking-wider hover:underline mb-3">Ver todo</h2>
          </div>
          <div class="w-full flex flex-wrap">
            <div v-for="custom in customs" :key="custom" class="p-2 w-52">
              <div class="bg-neutral-700 w-full h-auto p-5">
                <img src=" {{recent.src}} " alt="" class="h-24 w-full shadow mb-2">
                <h1 class="text-sm font-semibold text-white tracking-wide"> {{custom.title}} </h1>
                <h2 class="text-xs text-neutral-300 tracking-wide"> {{custom.artist}} </h2>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </div>
    <!-- footer list -->
    <div class="w-full bg-neutral-700 flex items-center justify-between px-3" style="height: 10%">
      <div class="flex items-center">
        <div>
          <h1 class="text-sm text-white tracking-wide">Sumer in the city - Remastered</h1>
          <h2 class="text-xs text-neutral-300 tracking-wide">The Lovin' Spoonfull</h2>
        </div>
        <i class="material-icons text-xl text-neutral-400">favorite_border</i>
        <i class="material-icons text-xl text-neutral-400">picture_in_picture_alt</i>
      </div>
      <div class="flex flex-col justify-center w-2/4 items-center">
        <div class="flex items-center">
          <button class="mx-5 text-neutral-300 hover:text-white"><i class="material-icons">shuffle</i></button>
          <button class="text-neutral-300 hover:text-white"><i class="material-icons">skip_previous</i></button>
          <button @click.prevent="playSong('song.mp3'), pause = true" class="rounded-full h-8 w-8 flex items-center justify-center mx-5 border-neutral-300 border  text-neutral-300 hover:text-white"><i v-if="pause === false" class="material-icons">play_arrow</i><i v-if="pause === true" class="material-icons">pause</i></button>
          <button class="text-neutral-300 hover:text-white"><i class="material-icons">skip_next</i></button>
          <button class="mx-5 text-neutral-300 hover:text-white"><i class="material-icons">repeat</i></button>
        </div>
        <div class="w-3/4 flex items-center justify-center">
          <p class="text-xs text-neutral-300 mr-1">0:28</p>
          <div class="w-full h-1 bg-neutral-800 rounded-full mt-4 flex items-center">
            <div class="h-1 rounded-full bg-green-600" style="width: 18%">
            </div>
            <div class="h-3 w-3 bg-white rounded-full -ml-1 shadow">
            </div>
            
          </div>
          <p class="text-xs text-neutral-200 ml-1">2:40</p>
        </div>
      </div>
      <div class="flex items-center">
        <i class="material-icons text-neutral-300 hover:text-white">playlist_play</i>
        <i class="material-icons text-xl mx-3 text-neutral-300 hover:text-white">important_devices</i>
        <i class="material-icons text-xl text-neutral-300 hover:text-white">volume_up</i>
        <div class="w-20 ml-1 bg-neutral-300 rounded-full h-1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      pages: [
        {
          id: 'home',
          name: 'Home',
          icon: 'home'
        },
        {
          id: 'search',
          name: 'Search',
          icon: 'search'
        },
        {
          id: 'library',
          name: 'Your Library',
          icon: 'bar_chart'
        },
      ],
      setID: 'home',
      albums: [
        { name: 'Mi playlist n. 6'},
        { name: 'Alejo'},
        { name: 'Adele'},
        { name: 'Shaki'},
        { name: 'Pop'},
        { name: 'Salsas'},
        { name: 'Latin Pop'},
        { name: 'Latin Pop'},
        { name: 'Latin Pop'},
        { name: 'Latin Pop'},
        { name: 'Latin Pop'},
        { name: 'Latin Pop'},
        { name: 'Latin Pop'},
        { name: 'Latin Pop'},

      ],
      showDropdown: false,
      recents: [
        {src: require('./assets/25.jpeg'), 
        title: '25', 
        artist: 'Adele'},
        {src: require('./assets/30.jpeg'), 
        title: '30', 
        artist: 'Adele'},
        {src: require('./assets/bohemiam.jpeg'), 
        title: 'Bohemian Rhapsody', 
        artist: 'Queen'},
        {src: require('./assets/crazy.jpeg'), 
        title: 'Crazy', 
        artist: 'Aerosmith'},
        {src: require('./assets/mas.jpeg'), 
        title: 'Mas', 
        artist: 'Alejandro Sanz'},
        {src: require('./assets/Sirope.jpeg'), 
        title: 'Sirope', 
        artist: 'Alejandro Sanz'}
      ],
      customs: [
        {src: require('./assets/25.jpeg'), 
        title: '25', 
        artist: 'Adele'},
        {src: require('./assets/30.jpeg'), 
        title: '30', 
        artist: 'Adele'},
        {src: require('./assets/bohemiam.jpeg'), 
        title: 'Bohemian Rhapsody', 
        artist: 'Queen'},
        {src: require('./assets/crazy.jpeg'), 
        title: 'Crazy', 
        artist: 'Aerosmith'},
        {src: require('./assets/mas.jpeg'), 
        title: 'Mas', 
        artist: 'Alejandro Sanz'},
        {src: require('./assets/Sirope.jpeg'), 
        title: 'Sirope', 
        artist: 'Alejandro Sanz'}
      ],
      pause: false
    }
  },
  methods: {
    playSong(song) {
      if(song) {
        var audio = new Audio(song);
        audio.play();
      }
    }
  }
}
</script>

<style>
</style>
