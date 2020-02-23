<template>
  <div id="app">
     <header>
      <!-- Fixed navbar -->
      <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
        <b-navbar-brand href="/">Bootstrap Vue Form Builder</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" >Home</b-nav-item>
            <b-nav-item to="/builder" >The Builder</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://github.com/hallindavid/BootstrapVueFormBuilder"><font-awesome-icon :icon="['fab','github']" /> github</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main role="main">
        <router-view/>
    </main>
    <b-navbar type="light" variant="light" fixed="bottom">
       <b-nav-text>created by david hallin 2020</b-nav-text>
          <b-navbar-nav>
            <b-link class="mx-3 footer-link" href="https://twitter.com/david_hallin" target="_blank()"><font-awesome-icon :icon="['fab','twitter']"/> david's twitter</b-link>
            <b-link class="mx-3 footer-link" href="https://github.com/hallindavid" target="_blank()"><font-awesome-icon :icon="['fab','github']"/> david's github</b-link>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-text>Built with <b-link href="https://getbootstrap.com" target="_blank()">Bootstrap</b-link>, <b-link href="https://bootstrap-vue.js.org" target="_blank()">Bootstrap-Vue</b-link>, <b-link href="https://vuejs.org" target="_blank()">Vue.js</b-link></b-nav-text>
          </b-navbar-nav>
    </b-navbar>

  </div>
</template>

<style>
.curses {
cursor: pointer;
}
.footer-link {
  color:black;
}
#app {
  font-family: 'Source Code Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size:12px;
}

.card-body {
  padding:1rem !important;;
}

.list-group-item {
  font-size:16px;
}

main {
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left:15px;
  padding-right:15px;  
}

.footer > .container {
  padding-right: 15px;
  padding-left: 15px;
}

.list-group-item > a {
  color:black !important;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
