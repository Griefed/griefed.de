<template>
  <q-layout :class="$q.dark.isActive ? 'background_dark' : 'background'" view="hHh Lpr lff">
    <q-header reveal elevated :class="$q.dark.isActive ? 'header_dark' : 'header_normal'">
      <q-toolbar class="shadow-5 toolbar">

        <img :ratio="323/54" alt="header" src="~assets/header.svg" width="380">
        <q-toolbar-title></q-toolbar-title>

        <q-btn stretch flat>
          <a href="https://blog.griefed.de" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">News</span></a>
        </q-btn>

        <q-btn stretch flat>
          <a href="https://github.com/Griefed" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">GitHub</span></a>
        </q-btn>

        <q-btn stretch flat>
          <a href="https://hub.docker.com/u/griefed" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">DockerHub</span></a>
        </q-btn>

        <q-btn stretch flat label="Wiki">
          <a href="https://wiki.griefed.de/" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">Wiki</span></a>
        </q-btn>

        <q-btn-dropdown stretch flat label="Minecraft" v-model="minecraft"  model-value="false">
          <q-list>

            <q-item-label header>Modpacks</q-item-label>
            <q-item clickable tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Survive Create Prosper 3</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator inset="" spaced=""/>

            <q-item-label header>Software</q-item-label>
            <q-item clickable v-close-popup tabindex="1">
              <q-item-section avatar>
                <q-avatar icon="assignment" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Vacation</q-item-label>
              </q-item-section>

            </q-item>
          </q-list>
        </q-btn-dropdown>

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
      <q-page class="row no-wrap ">

        <div class="col">
          <div class="full-height full-width">

            <q-scroll-area class="full-height full-width">
              <router-view/>
            </q-scroll-area>

          </div>
        </div>
      </q-page>

    </q-page-container>

    <q-footer elevated class="footer shadow-5" height-hint="50">
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
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      minecraft: false,
    }
  }
}
</script>

<style>
.toolbar {
  border-bottom: #c0ffee 1px solid;
}

.background {
  background: #fff8eb !important;
}

.background_dark {
  background: #a1a1a1 !important;
}

.header_normal {
  background: url("/images/tile.webp");
  background-repeat: repeat-x;
  background-color: linear-gradient(
    150deg,
    rgb(50, 83, 88) 15%,
    #76cead 70%);
}

.header_dark {
  background: url("/images/tile.webp");
  background-repeat: repeat-x;
  background-color: linear-gradient(
    200deg,
    rgb(26, 44, 39) 15%,
    #0b3c6a 70%);
}

.footer {
  border-top: #c0ffee 1px solid;
  background: url("/images/tile.webp");
  background-repeat: repeat-x;
  background-color: linear-gradient(
    150deg,
    rgb(50, 83, 88) 15%,
    #76cead 70%);
}
</style>
