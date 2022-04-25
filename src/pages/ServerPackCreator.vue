<template>
  <q-card class="my-card text-center text-white">

    <q-intersection class="my-intersection" once transition="scale">
      <div class="justify-center items-center">

        <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener"
           target="_blank">
          <span class="has-inline-color" style="color:#c0ffee">
            <q-img src="~assets/serverpackcreator.webp" width="60%"/>
          </span>
        </a>

        <h5>
          <strong>
          ServerPackCreator is a Java-program which creates a server pack from any given Forge or Fabric modpack.<br>
          Customize the configuration to your liking and off you go. Whenever you are working on an update to your<br>
          modpack, you simply run ServerPackCreator and BAM! You've got yourself a server pack for your new modpack version.
          </strong>
        </h5>
        <h6>
          ServerPackCreator is a passion project on which I am working in my spare time. It is also the main reason for why I got<br>
          into programming in the first place. I started getting into Java programming in february 2021,<br>
          when I was working on an update for one of my Minecraft modpacks, Survive Create Prosper 4, and got tired and bored of<br>
          manually creating a server pack everytime I wanted to update and test something, or just release a new server pack<br>
          for the new modpack version. The thought "There must be a way to automate this, or at least make it less tedious..." was<br>
          the spark which sent me off into the world of programming in Java.<br>
          <br>
          And here we are.
        </h6>

      </div>
    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">
      <div class="row no-wrap justify-center items-center">
        <h5><strong>
          ServerPackCreator would not be where or what it is today without these wonderful companies and their products:
        </strong></h5>
      </div>

      <div class="row justify-center items-center">

        <div class="col">
          <a href="https://www.jetbrains.com/" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/jetbrains.webp" width="100%"/>
          </a>
        </div>

        <div class="col">
          <a href="https://www.jetbrains.com/" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/idea.webp" width="85%"/>
          </a>
        </div>

        <div class="col">
          <a href="https://www.jetbrains.com/" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/webstorm.webp" width="85%"/>
          </a>
        </div>

        <div class="col">
          <a href="https://www.ej-technologies.com/products/jprofiler/overview.html" rel="noreferrer noopener" target="_blank">
            <div class="row flex-center">
              <q-img src="~assets/jprofiler.webp" width="70%"/>
            </div>

            <div class="row flex-center">
              <q-img src="~assets/ej-technologies.webp" width="100%"/>
            </div>
          </a>
        </div>

        <div class="col">
          <a href="https://www.bisecthosting.com/griefed" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/bisect_logo.webp" width="85%"/>
          </a>
        </div>

      </div>

      <div class="row no-wrap justify-center items-center">
        <code>JetBrains, IntelliJ IDEA and WebStorm logos property of JetBrains s.r.o.</code>
      </div>
      <div class="row no-wrap justify-center items-center">
        <code>JProfiler and ej-technologies logos property of ej-technologies GmbH</code>
      </div>
      <div class="row no-wrap justify-center items-center">
        <code>BisectHosting logo property of BisectHosting</code>
      </div>
    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">
      <h4><strong>
        Screenshots
      </strong></h4>
      <h6><strong>
        CLI
      </strong></h6>
      <div class="row justify-center items-center">
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/cli_windows.webp" width="60%"/>
          </a>
        </div>
      </div>

      <h6><strong>
        GUI
      </strong></h6>
      <div class="row justify-center items-center">
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/gui_windows_light.webp" width="80%"/>
          </a>
        </div>

        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/gui_windows_dark.webp" width="80%"/>
          </a>
        </div>
      </div>

      <h6><strong>
        WebService
      </strong></h6>
      <div class="row justify-center items-center">
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/web_zip_light.webp" width="90%"/>
          </a>
        </div>
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/web_zip_dark.webp" width="90%"/>
          </a>
        </div>
      </div>
      <div class="row justify-center items-center">
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/web_downloads_light.webp" width="90%"/>
          </a>
        </div>
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/web_downloads_dark.webp" width="90%"/>
          </a>
        </div>
      </div>
    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">
      <div class="justify-center text-left list">
        <h3>
          <strong>
          Features
          </strong>
        </h3>
        <h6>
          <strong>
            <p class="my-list">1. Generate a config step-by-step by running with argument <code>-cgen</code></p>

            <p class="my-list">2. Install a Forge or Fabric modloader server in your server pack</p>

            <p class="my-list">3. Configurable list of clientside-only mods to exclude from your server pack</p>
              <p class="sub-list">3.1. ServerPackCreator will automatically try and detect as many clientside-only mods as possible and exclude them.</p>

            <p class="my-list">4. Configurable list of directories from your modpack to include in your server pack.</p>
              <p class="sub-list">4.1. Copy saves to your server pack.</p>
              <p class="sub-list">4.2. Add modpack external files or folders to your server pack.</p>
              <p class="sub-list">4.3. Exclude files or folders from your server pack.</p>

            <p class="my-list">5. Generate Forge or Fabric start-scripts in your server pack.</p>
              <p class="sub-list">5.1. Specify JVM flags / Java Args for your start scripts!</p>

            <p class="my-list">6. Include a server-icon.png-file in your server pack.</p>

            <p class="my-list">7. Include a server.properties-file in your server pack.</p>

            <p class="my-list">8. Create a ZIP-archive of your server pack</p>

            <p class="my-list">9. GUI to fully configure, run and use ServerPackCreator</p>

            <p class="my-list">10. Webservice</p>
              <p class="sub-list">10.1. Generate a server pack from zipped up modpacks.</p>
              <p class="sub-list">10.2. All generated server packs available for download to everyone.</p>

            <p class="my-list">11. Addons!</p>
              <p class="sub-list">11.1. Users can provide addons which will be executed during the generation of a server pack.</p>
              <p class="sub-list">11.2. Example addon at <a href="https://github.com/Griefed/ServerPackCreatorExampleAddon" rel="noreferrer noopener" target="_blank">ServerPackCreatorExampleAddon</a></p>

          </strong>
        </h6>
      </div>
    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">
      <div class="justify-center items-center">
        <h6>
          <strong>
          For more information on how to run ServerPackCreator (GUI, CLI, Docker), how to configure
          ServerPackCreator<br>
          and what other possibilities ServerPackCreator holds, please visit the GitHub page over at
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              Griefed/ServerPackCreator.
            </span>
          </a>
          </strong>
        </h6>
        <h6>
          <strong>
          If you wish to learn about the technical side of things, the JavaDocs are available thanks to GitHub pages,<br>
          over at
          <a href="https://griefed.github.io/ServerPackCreator/" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
            griefed.github.io/ServerPackCreator
            </span>
          </a>
          . Make sure to check
          <a href="https://github.com/Griefed/ServerPackCreator/blob/main/CONTRIBUTING.md" rel="noreferrer noopener"
             target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
            CONTRIBUTING
            </span>
          </a>
          in the GitHub Repository if you wish<br>
          to make a contribution to ServerPackCreator.
          </strong>
        </h6>
      </div>
    </q-intersection>

  </q-card>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ServerPackCreator",
  setup() {
    return {
      slide: ref(1),
    }
  }
}
</script>

<style scoped>
.my-card {
  /*noinspection CssUnknownTarget*/
  background-image: url("~assets/background.webp");
  background-repeat: repeat;
  background-attachment: fixed;
}

.list {
  margin-left: 25%;
}

.sub-list {
  margin-left: 50px;
  margin-bottom: 0;
  margin-top: 0;
}

.my-list {
  margin-left: 25px;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
