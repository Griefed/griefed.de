<template>
  <a hidden rel="me" href="https://mastodon.griefed.de/@griefed">Mastodon</a>
  <q-layout :class="$q.dark.isActive ? 'background_dark' : 'background'" view="hHh Lpr lff">
    <q-header :class="$q.dark.isActive ? 'header_dark' : 'header_normal'" elevated reveal>
      <q-toolbar class="shadow-5 toolbar">
        <q-item to="/">
          <!--suppress CheckImageSize, HtmlUnknownAttribute -->
          <img :ratio="323/54" alt="header" src="~assets/header.webp" width="250">
        </q-item>

        <q-space></q-space>

        <q-tabs shrink dense indicator-color="white">
          <q-tab>
            <a href="https://blog.griefed.de" rel="noreferrer noopener" target="_blank">
              <q-btn flat stretch>
                <span class="has-inline-color" style="color:#c0ffee">News</span>
              </q-btn>
            </a>
          </q-tab>
          <q-tab>
            <a href="https://serverpackcreator.de" rel="noreferrer noopener" target="_blank">
              <q-btn flat stretch>
                <span class="has-inline-color" style="color:#c0ffee">ServerPackCreator</span>
              </q-btn>
            </a>
          </q-tab>
          <q-tab>
            <a href="" rel="noreferrer noopener" target="_blank">
              <q-btn flat stretch to="/Minecraft">
                <span class="has-inline-color" style="color:#c0ffee">Minecraft</span>
              </q-btn>
            </a>
          </q-tab>
          <q-tab>
            <a href="https://github.com/Griefed" rel="noreferrer noopener" target="_blank">
              <q-btn flat stretch>
                <span class="has-inline-color" style="color:#c0ffee">GitHub</span>
              </q-btn>
            </a>
          </q-tab>
          <q-tab>
            <a href="https://hub.docker.com/u/griefed" rel="noreferrer noopener" target="_blank">
              <q-btn flat stretch>
                <span class="has-inline-color" style="color:#c0ffee">DockerHub</span>
              </q-btn>
            </a>
          </q-tab>
          <q-tab>
            <a href="https://wiki.griefed.de/" rel="noreferrer noopener" target="_blank">
              <q-btn flat stretch>
                <span class="has-inline-color" style="color:#c0ffee">Wiki</span>
              </q-btn>
            </a>
          </q-tab>
          <q-tab>
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
          </q-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="row no-wrap">
        <div class="col">
          <div class="full-height full-width">
            <q-scroll-area class="full-height full-width page">
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
        Copyright © {{ year }} Griefed.de
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  setup() {
    let year = new Date().getFullYear();
    return {
      year
    }
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
