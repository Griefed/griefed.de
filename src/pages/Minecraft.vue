<template>
  <q-card class="my-card text-center text-white">
    <q-intersection class="my-intersection" once transition="scale">
      <q-card-section>
        <div class="row justify-center items-center">
          <div class="col-5 scp_banner">
            <a href="https://www.curseforge.com/minecraft/modpacks/scp-survive-create-prosper" rel="noreferrer noopener"
               target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/scp3.webp" width="100%"/>
            </span></a>

            <div class="col-4 offset-md-0 sm-12">
              <a href="https://www.curseforge.com/minecraft/modpacks/scp-survive-create-prosper"
                 rel="noreferrer noopener"
                 target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/scp_logo.webp" width="70%"/>
            </span></a>
            </div>

            <div class="col-4 offset-md-0 sm-12">
              <a href="https://www.curseforge.com/minecraft/modpacks/scp-survive-create-prosper"
                 rel="noreferrer noopener"
                 target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/1-12-2.webp" width="30%"/>
            </span></a>
            </div>
          </div>

          <div class="col-5 scp_banner">
            <a href="https://www.curseforge.com/minecraft/modpacks/survive-create-prosper-4" rel="noreferrer noopener"
               target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/scp4.webp" width="100%"/>
            </span></a>

            <div class="col-4 offset-md-0 sm-12">
              <a href="https://www.curseforge.com/minecraft/modpacks/survive-create-prosper-4" rel="noreferrer noopener"
                 target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/scp_logo.webp" width="70%"/>
            </span></a>
            </div>

            <div class="col-4 offset-md-0 sm-12">
              <a href="https://www.curseforge.com/minecraft/modpacks/survive-create-prosper-4" rel="noreferrer noopener"
                 target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/1-16-5.webp" width="30%"/>
            </span></a>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-intersection>

    <q-intersection class="my-intersection" once transition="scale">
      <q-card-section>
        <div class="has-text-align-center"><h6><strong>
          Survive in a world filled with magic and wonder. Create powerful weapons and tools to vanquish your
          enemies.<br>
          Prosper into a powerfull leader and ruler of all the realms there be!
        </strong></h6></div>
      </q-card-section>
    </q-intersection>

    <q-separator color="transparent" size="50px"/>

    <q-intersection class="my-intersection" once transition="scale">
      <q-card-section align="center">
        <a href="https://www.bisecthosting.com/griefed" rel="noreferrer noopener"
           target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/bisect.webp" width="30%"/>
            </span></a>
        <div class="has-text-align-center"><h6><strong>
          Proudly sponsored by BisectHosting! Click the banner below to get 25% off of your first month when ordering a
          Minecraft Server!
        </strong></h6></div>
        <div class="col-4 offset-md-0 sm-12">
          <a href="https://www.bisecthosting.com/griefed" rel="noreferrer noopener"
             target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
                <q-carousel v-model="slide" :autoplay="6000" animated class="shadow-1" height="142px" infinite row
                            style="max-width: 900px; background-color: transparent;" transition-next="fade">
                  <q-carousel-slide :name="1" img-src="~assets/banner-1.webp"/>
                  <q-carousel-slide :name="2" img-src="~assets/banner-2.webp"/>
                  <q-carousel-slide :name="3" img-src="~assets/banner-3.webp"/>
                  <q-carousel-slide :name="4" img-src="~assets/banner-4.webp"/>
                  <q-carousel-slide :name="5" img-src="~assets/banner-5.webp"/>
                </q-carousel>
              <!--              <q-img src="~assets/banner.webp" width="30%"/>-->
            </span></a>
        </div>
      </q-card-section>
    </q-intersection>

    <q-separator color="transparent" size="100px"/>

    <q-intersection class="my-intersection" once transition="scale">
      <q-card-section>
        <div class="justify-center items-center">
          <h6><strong>
            You’re a modpack developer yourself? Then go give ServerPackCreator a try.
          </strong></h6>
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener"
             target="_blank">
            <span class="has-inline-color" style="color:#c0ffee">
              <q-img src="~assets/serverpackcreator.webp" width="60%"/>
            </span></a>
          <h6><strong>
            ServerPackCreator is a Java-program which creates a server pack from any given Forge or Fabric modpack.<br>
            Customize the configuration to your liking and off you go. Whenever you are working on an update to your<br>
            modpack, you simply run ServerPackCreator and BAM! You've got yourself a server pack for your new modpack
            version.
          </strong></h6>
        </div>
      </q-card-section>
    </q-intersection>

  </q-card>
</template>

<script>
import {ref} from "vue";

export default {
  name: "minecraft",
  setup() {
    return {
      slide: ref(1),
    }
  }
}
</script>

<style scoped>

.bisect-carousel {
  width: 900px;
}

.my-card {
  /*noinspection CssUnknownTarget*/
  background-image: url("/images/background.webp");
  background-repeat: repeat;
  background-attachment: fixed;
}

.bisect-carousel {
  padding-left: 15%;
  padding-right: 15%;
}

.scp_banner {
  padding-left: 4em;
  padding-right: 4em;
}

</style>
