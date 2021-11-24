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
          I am making this in my spare time, therefore progress is slow. I started getting into Java programming in february 2021,<br>
          and I'm using ServerPackCreator as a way to teach myself Java, but also to create something useful for the Minecraft community.
        </h6>

      </div>
    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">

      <h5>
        <strong>
        None of this would have been possible without the excellent IDEs by JetBrains. They have kindly provided this open source project with an All Products Pack license.
        </strong>
      </h5>

      <div class="row justify-center items-center">
        <div class="col-5">
          <a href="https://www.jetbrains.com/" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/jetbrains.webp" width="70%"/>
            </span>
          </a>
        </div>

        <div class="col-5">
          <a href="https://www.jetbrains.com/" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-carousel v-model="slide" :autoplay="6000" animated class="shadow-1" height="700px" infinite style="background-color: transparent;" transition-next="fade">
                <q-carousel-slide :name="1" img-src="~assets/idea.webp"/>
                <q-carousel-slide :name="2" img-src="~assets/webstorm.webp"/>
              </q-carousel>
            </span>
          </a>
        </div>
      </div>

      <div class="row no-wrap justify-center items-center">
        JetBrains, IntelliJ IDEA and WebStorm logos property of JetBrains s.r.o.
      </div>

      <h5>
        <strong>
        Additionally, ej-Technologies has provided an open-source license for JProfiler for ServerPackCreator, which allows me to resolve performance bottlenecks, pin down memory leaks and understand threading issues.
        Huge shoutout and thank you!
        </strong>
      </h5>

      <div class="row justify-center items-center">
        <div class="col-5">
          <a href="https://www.ej-technologies.com/products/jprofiler/overview.html" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/jprofiler_large.webp" width="40%"/>
              <q-img style="margin-left: 20px;" src="~assets/ej-technologies.webp" width="40%"/>
            </span>
          </a>
        </div>
      </div>

      <div class="row no-wrap justify-center items-center">
        JProfiler and ej-Technologies logos property of ej-technologies GmbH.
      </div>

    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">

      <h4>
        <strong>
        Screenshots
        </strong>
      </h4>
      <h6>
        <strong>
        CLI
        </strong>
      </h6>
      Left to right: Windows, Linux, Mac
      <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener"
         target="_blank">
        <span class="has-inline-color row no-wrap flex-center" style="color:#c0ffee">
          <q-img src="~assets/cli_windows.webp"/>
          <q-img src="~assets/cli_linux.webp"/>
          <q-img src="~assets/cli_mac.webp"/>
        </span>
      </a><br>
      <h6>
        <strong>
        GUI
        </strong>
      </h6>
      Left to right: Windows, Linux, Mac
      <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
        <span class="has-inline-color row no-wrap flex-center" style="color:#c0ffee">
          <q-img src="~assets/gui_windows_light.webp"/>
          <q-img src="~assets/gui_linux_light.webp"/>
          <q-img src="~assets/gui_mac_light.webp"/>
        </span>
        <span class="has-inline-color row no-wrap flex-center" style="color:#c0ffee">
          <q-img src="~assets/gui_windows_dark.webp"/>
          <q-img src="~assets/gui_linux_dark.webp"/>
          <q-img src="~assets/gui_mac_dark.webp"/>
        </span>
      </a><br>
      <h6>
        <strong>
        Web
        </strong>
      </h6>
      <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
        <span class="has-inline-color row no-wrap flex-center" style="color:#c0ffee">
          <q-img src="~assets/web_configuration_light.webp"/>
          <q-img src="~assets/web_configuration_dark.webp"/>
        </span>
        <span class="has-inline-color row no-wrap flex-center" style="color:#c0ffee">
          <q-img src="~assets/web_downloads_light.webp"/>
          <q-img src="~assets/web_downloads_dark.webp"/>
        </span>
      </a><br>
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
            <p class="my-list">1. Generate a config step-by-step by running with argument.</p>
            <p class="my-list">2. Download a modpack and create a server pack from it.</p>
              <p class="sub-list">2.1. Enter a CurseForge projectID;FileID-combination as the modpack directory.</p>
            <p class="my-list">3. Install a Forge or Fabric modloader server in your server pack.</p>
            <p class="my-list">4. Configurable list of clientside-only mods to not include your server pack.</p>
              <p class="sub-list">4.1. Allow ServerPackCreator to automatically detect clientside-only mods by setting `de.griefed.serverpackcreator.serverpack.autodiscoverenabled=true` in `serverpackcreator.properties`.</p>
            <p class="my-list">5. Configurable list of directories from your modpack to include in your server pack.</p>
              <p class="sub-list">5.1. Copying worlds from `saves/world` will result in the world being copied to `server_pack/world`.</p>
              <p class="sub-list">5.2. Specify extra files to include in server pack like follows `source/path/to/file;server_pack/destination_file`.</p>
              <p class="sub-list">5.3. Exclude files/directories by prefixing an entry with `!` or adding it to `de.griefed.serverpackcreator.configuration.copydirs.exclude=` in `serverpackcreator.properties`.</p>
            <p class="my-list">6. Generate Forge or Fabric start-scripts in your server pack.</p>
              <p class="sub-list">6.1. Specify JVM flags / Java Args for your start scripts!</p>
            <p class="my-list">7. Include a server-icon.png-file in your server pack.</p>
              <p class="sub-list">7.1. Replace the file in `server-files` with your own!</p>
            <p class="my-list">8. Include a server.properties-file in your server pack</p>
              <p class="sub-list">8.1. Replace the file in `server-files` with your own!</p>
            <p class="my-list">9. Create a ZIP-archive of your server pack.</p>
            <p class="my-list">10. GUI to fully configure and run ServerPackCreator</p>
              <p class="sub-list">10.1. Load existing config...</p>
              <p class="sub-list">10.2. Browse local filesystem to select modpack directory, clientside-only mods, directories to include in server pack, Java executable/binary</p>
              <p class="sub-list">10.3. Logs from last run in separate tabs</p>
              <p class="sub-list">10.4. Set a suffix for the server pack to be generated</p>
              <p class="sub-list">10.5. And much more!</p>
            <p class="my-list">11. WIP | Webservice providing a web-frontend to configure, generate and download server packs.</p>
              <p class="sub-list">11.1. Generate a server pack from a projectID and fileID combination.</p>
              <p class="sub-list">11.2. All generated server packs available for download by everyone.</p>
              <p class="sub-list">11.3. Admin-area to edit some configurations, like the list of clientside-only mods, whether regeneration of server packs is allowed, reading the log file(s), enabling/disabling installed addons, etc.</p>
              <p class="sub-list">11.4. Upload an Overwolf modpack export to generate a server pack from it. (Must contain a valid `manifest.json`-file like <a href="https://haste.zneix.eu/cinadiwubi.json" rel="noreferrer noopener" target="_blank">this one</a></p>
            <p class="my-list">12. Addons!</p>
              <p class="sub-list">12.1. Users can provide addons which will be executed after the generation of a server pack. Add them to the `addons`-directory.</p>
              <p class="sub-list">12.2. Example addon at <a href="https://github.com/Griefed/ServerPackCreatorExampleAddon" rel="noreferrer noopener" target="_blank">ServerPackCreatorExampleAddon</a></p>
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

.subsection {
  margin-left: 103px;
  margin-bottom: 0px;
  margin-top: 0px;
}

.sub-list {
  margin-left: 50px;
  margin-bottom: 0px;
  margin-top: 0px;
}

.my-list {
  margin-left: 25px;
  margin-bottom: 0px;
  margin-top: 0px;
}
</style>
