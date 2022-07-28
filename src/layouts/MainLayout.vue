<template>
  <q-layout :class="$q.dark.isActive ? 'background_dark' : 'background'" view="hHh Lpr lff">
    <q-header :class="$q.dark.isActive ? 'header_dark' : 'header_normal'" elevated reveal>
      <q-toolbar class="shadow-5 toolbar">

        <q-item to="/">
          <img :ratio="323/54" alt="header" src="~assets/header.webp" width="250">
        </q-item>

<!--        <a href="" rel="noreferrer noopener" target="_blank">
          <q-btn flat stretch to="/">
            <span class="has-inline-color" style="color:#c0ffee">Home</span>
          </q-btn>
        </a>-->

        <q-toolbar-title></q-toolbar-title>

        <a href="https://blog.griefed.de" rel="noreferrer noopener" target="_blank">
          <q-btn flat stretch>
            <span class="has-inline-color" style="color:#c0ffee">News</span>
          </q-btn>
        </a>

        <a href="" rel="noreferrer noopener" target="_blank">
          <q-btn flat stretch to="/serverpackcreator">
            <span class="has-inline-color" style="color:#c0ffee">ServerPackCreator</span>
          </q-btn>
        </a>

        <a href="" rel="noreferrer noopener" target="_blank">
          <q-btn flat stretch to="/Minecraft">
            <span class="has-inline-color" style="color:#c0ffee">Minecraft</span>
          </q-btn>
        </a>

        <a href="https://github.com/Griefed" rel="noreferrer noopener" target="_blank">
          <q-btn flat stretch>
            <span class="has-inline-color" style="color:#c0ffee">GitHub</span>
          </q-btn>
        </a>

        <a href="https://hub.docker.com/u/griefed" rel="noreferrer noopener" target="_blank">
          <q-btn flat stretch>
            <span class="has-inline-color" style="color:#c0ffee">DockerHub</span>
          </q-btn>
        </a>

        <a href="https://wiki.griefed.de/" rel="noreferrer noopener" target="_blank">
          <q-btn flat stretch>
            <span class="has-inline-color" style="color:#c0ffee">Wiki</span>
          </q-btn>
        </a>

        <q-btn
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          class="q-mr-xs"
          dense
          flat
          round
          @click="$q.fullscreen.toggle()">
          <q-tooltip
            v-close-popup
            :disable="$q.platform.is.mobile">
            {{ $q.fullscreen.isActive ? 'Exit Fullscreen' : 'Toggle Fullscreen' }}
          </q-tooltip>
        </q-btn>

        <!--        <q-btn
                  :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
                  class="q-mr-xs"
                  flat
                  round
                  @click="$q.dark.toggle()">
                  <q-tooltip
                    v-close-popup
                    :disable="$q.platform.is.mobile">
                    {{ $q.dark.isActive ? 'Disable Dark mode' : 'Enable Dark mode' }}
                  </q-tooltip>
                </q-btn>-->

      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height full-width">
            <q-scroll-area class="full-height full-width page">
              <div
                id="particles-js"
              />
              <router-view/>
            </q-scroll-area>
          </div>
        </div>
      </q-page>
    </q-page-container>

    <q-footer class="footer shadow-5" elevated height-hint="50">
      <q-toolbar>
        <q-item
          v-ripple
          clickable
          style="color: #c0ffee;"
          to="/about">
          <q-item-section>
            <b>Site Notice & About</b>
          </q-item-section>
        </q-item>
        <q-item
          v-ripple
          clickable
          style="color: #c0ffee;"
          to="/privacy">
          <q-item-section>
            <b>Privacy</b>
          </q-item-section>
        </q-item>
        <q-toolbar-title></q-toolbar-title>
        Copyright © {{year}} Griefed.de
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import {tsParticles} from 'tsparticles';

export default {
  name: 'MainLayout',
  setup() {

    let year = new Date().getFullYear();

    let options = {
      "fpsLimit": 30,
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#325358", "#C0FFEE", "#31CCEC", "#6A1A78"]
        },
        "shape": {
          "type": ["circle", "triangle", "edge", "polygon"],
          "stroke": {
            "width": 0,
            "color": ["#325358", "#C0FFEE", "#31CCEC", "#6A1A78"]
          },
          "polygon": {
            "nb_sides": 6
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "size_min": 0.1,
            "sync": false
          }
        },
        "links": {
          "enable": true,
          "distance": 150,
          "color": "#C0FFEE",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "right",
          "random": true,
          "straight": false,
          "outModes": {
            "default": "out",
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "bounce": false
        },
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": ["bubble", "grab"]
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 200,
            "size": 4,
            "duration": 5,
            "opacity": 1,
            "speed": 0.1
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    };

    return {
      year,
      options
    }
  },
  mounted() {
    tsParticles.load("particles-js", this.options);
  }
}
</script>

<!--suppress CssReplaceWithShorthandSafely -->
<style>
.toolbar {
  border-bottom: #c0ffee 1px solid;
}

.page {
  background-image: url("~assets/background.webp");
  background-repeat: repeat;
  background-attachment: fixed;
}

.background {
  background: #fff8eb;
}

.background_dark {
  background: #a1a1a1;
}

.header_normal {
  background: url("~assets/tile.webp");
  background-repeat: repeat-x;
  background-color: linear-gradient(
    150deg,
    rgb(50, 83, 88) 15%,
    #76cead 70%);
}

.header_dark {
  background: url("~assets/tile.webp");
  background-repeat: repeat-x;
  background-color: linear-gradient(
    200deg,
    rgb(26, 44, 39) 15%,
    #0b3c6a 70%);
}

.footer {
  border-top: #c0ffee 1px solid;
  background: url("~assets/tile.webp");
  background-repeat: repeat-x;
  background-color: linear-gradient(
    150deg,
    rgb(50, 83, 88) 15%,
    #76cead 70%);
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>
