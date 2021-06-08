<template>
  <q-card class="my-card text-center text-white">

    <q-intersection class="my-intersection" once transition="scale">
      <q-card-section>
        <div class="justify-center items-center">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener"
             target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/serverpackcreator.webp" width="60%"/>
            </span></a>
          <h6><strong>
            ServerPackCreator is a Java-program which creates a server pack from any given Forge or Fabric modpack.<br>
            Customize the configuration to your liking and off you go.
          </strong></h6>
          <h6><strong>
            Whenever you are working on an update to your modpack, you simply run ServerPackCreator and BAM!<br>
            You’ve got yourself a server pack for your new modpack version.
          </strong></h6>
        </div>
        <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener"
           target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/screenshot.webp" width="60%"/>
            </span></a>
      </q-card-section>
    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">
      <q-card-section class="justify-center">
        <div class="justify-center text-left list">
          <h3><strong>
            Features
          </strong></h3>
          <h6><strong>
            <p class="my-list">1. Generate a config step-by-step by running with argument -cgen</p>
            <p class="my-list">2. Download a modpack and create a server pack from it</p>
            <p class="my-list">3. Install a Forge of Fabric modloader server in your server pack</p>
            <p class="my-list">4. Configurable list of clientside-only mods to not include in your server pack</p>
            <p class="my-list">5. Configurable list of directories from your modpack to include in your server pack</p>
            <p class="sub-list">5.1. Copying worlds from saves/world will result in the world being copied to
              server_pack/world</p>
            <p class="my-list">6. Include Forge or Fabric start scripts in your server pack</p>
            <p class="my-list">7. Include a server-icon.png in your server pack</p>
            <p class="my-list">8. Include a server.properties in your server pack</p>
            <p class="my-list">9. Create a ZIP-archive of your server pack</p>
            <p class="my-list">10. GUI to fully configure and run ServerPackCreator</p>
            <p class="sub-list">10.1. Load an existing config</p>
            <p class="sub-list">10.2. Browse local filesystem to select modpack directory, clientside-only mods,</p>
            <p class="subsection">directories to include in your server pack, select the Java executable/binary</p>
            <p class="sub-list">10.3. Separate tabs to check the latest log entries</p>
            <p class="sub-list">10.4. About-tab with links to create HasteBins of your log and config file to start
              sharing,</p>
            <p class="subsection">link to the GitHub issues page, link to Griefed’s Discord server for support and chit
              chat.</p>
          </strong></h6>
        </div>
      </q-card-section>
    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">
      <q-card-section>
        <div class="justify-center items-center">
          <h6><strong>
            For more information on how to run ServerPackCreator (GUI, CLI, Docker), how to configure
            ServerPackCreator<br>
            and what other possibilities ServerPackCreator holds, please visit the GitHub page over at
            <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              Griefed/ServerPackCreator.
            </span></a>
          </strong></h6>
          <h6><strong>
            If you wish to learn about the technical side of things, the JavaDocs are available thanks to GitHub
            pages,<br>
            over at <a href="https://griefed.github.io/ServerPackCreator/" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              griefed.github.io/ServerPackCreator
            </span></a>
            . Make sure to check
            <a href="https://github.com/Griefed/ServerPackCreator/blob/main/CONTRIBUTING.md" rel="noreferrer noopener"
               target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              CONTRIBUTING
            </span></a>
            in the GitHub Repository if you wish<br>
            to make a contribution to ServerPackCreator.
          </strong></h6>
        </div>
      </q-card-section>
    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">
      <q-card-section>
        <div class="row justify-center items-center">
          <div class="col-5">
            <div class="col-4 offset-md-0 sm-12">
              <a href="https://www.jetbrains.com/" rel="noreferrer noopener"
                 target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/jetbrains.webp" width="70%"/>
            </span></a>
            </div>
          </div>

          <div class="col-5">
            <div class="col-4 offset-md-0 sm-12">
              <a href="https://www.jetbrains.com/" rel="noreferrer noopener" target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-carousel v-model="slide" :autoplay="6000" animated class="shadow-1" height="700px" infinite
                          style="background-color: transparent;" transition-next="fade">
                <q-carousel-slide :name="1" img-src="~assets/idea.webp"/>
                <q-carousel-slide :name="2" img-src="~assets/webstorm.webp"/>
              </q-carousel>
            </span></a>
            </div>
          </div>
        </div>
      </q-card-section>
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
  background-image: url("/images/background.webp");
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
