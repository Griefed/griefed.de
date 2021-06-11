<template>
  <q-carousel v-model="slide"
              :autoplay="6000" animated class="shadow-1 my-carousel"
              full-width height="870px" infinite
              row transition-next="fade">
    <q-carousel-slide :name="1" img-src="~assets/carousel_1.webp"/>
    <q-carousel-slide :name="2" img-src="~assets/carousel_2.webp"/>
    <q-carousel-slide :name="3" img-src="~assets/carousel_3.webp"/>
    <q-carousel-slide :name="4" img-src="~assets/carousel_4.webp"/>
  </q-carousel>

  <q-card class="my-card text-center text-white">

    <q-separator color="transparent" size="200px"/>

    <q-intersection
      class="my-intersection"
      once
      transition="scale">
      <q-card-section>
        <h3><strong>
          Welcome to my homepage!
        </strong></h3>
        <br>
        <h4><strong>
          My name's Griefed, I'm from planet Earth, Sol System, Milky Way, Universe.<br>
          (That means it's none of your business where I am from)<br>
          I love to take care of my Minecraft Modpack SCP - Survive Create Prosper,<br>
          I love creating and taking care of my Docker Container Images in my spare time,<br>
          of which the source code can be <a href="https://github.com/Griefed" rel="noreferrer noopener"
                                             target="_blank">viewed on GitHub</a>,<br>
          and I have a strong love for all forms of Retro Hardware &amp; Gaming.
        </strong></h4>
      </q-card-section>
    </q-intersection>

    <q-separator color="transparent" size="240px"/>

    <q-intersection
      class="my-intersection"
      once
      transition="scale">
      <q-card-section>
        <div class="row justify-center items-center">
          <div class="col-4 offset-md-0 sm-12">
            <q-img src="~assets/scp_logo.webp" width="100%"/>
          </div>
          <div class="col sm-12">
            <q-img src="~assets/scp4.webp" width="80%"/>
            <div class="has-text-align-center"><h6><strong>
              The continuation of Survive Create Prosper 3 for Minecraft 1.16.5. Survive Create Prosper 4 offers a
              variety<br>
              of mods which add new content, functionality experiences and enhance the experience you're used to
              from<br>
              vanilla Minecraft.<br><br>

              It aims to expand the world with technology, magic, exploration and adventure without outstaying its
              welcome.<br>
              Biomes O'Plenty, Oh The Biomes You Will Go To, Traverse and more expand the world of Minecraft with<br>
              beautiful new biomes. Applied Energistics, Immersive Engineering / Petroleum / Railroading, Extreme
              Reactors,<br>
              SecurityCraft and more aim to satisfy your technologie needs whilst staying immersive. Botania, Blood
              Magic,<br>
              Psi and other mods aim to quell your hunger for magical prowess. A variety of useful & decorative or cool
              mods<br>
              like Artifacts, Camera Mod, Cooking for Blockheads, Macaw's mods, Paintings++ and loads more add to the
              world,<br>
              so you will always have something to explore, build, decorate or create.<br><br>
              That's just a small example of what's included in SCP<br>
              <strong><a href="https://www.curseforge.com/minecraft/modpacks/survive-create-prosper-4"
                         rel="noreferrer noopener"
                         target="_blank"><span class="has-inline-color" style="color:#c0ffee">
              So go ahead and give it a try!
            </span></a></strong></strong></h6></div>
          </div>
        </div>
      </q-card-section>
    </q-intersection>

    <q-separator color="transparent" size="100px"/>

    <q-intersection
      class="my-intersection"
      once
      transition="scale">
      <q-card-section>
        <div class="row justify-center items-center">
          <div class="col sm-12">
            <div class="has-text-align-center">
              <h4><b>DockerHub and GitHub</b></h4>
              <h6><strong>
                I like to create Docker images for useful things in my spare time. There's a Docker container for the
                web-based IDE
                <a href="https://hub.docker.com/r/griefed/icecoder" rel="noreferrer noopener" target="_blank"><span
                  style="color:#c0ffee">
              ICEcoder
            </span></a>,<br>
                another fun example would be
                <a href="https://hub.docker.com/r/griefed/d-zone" rel="noreferrer noopener" target="_blank"><span
                  style="color:#c0ffee">
              D-Zone
            </span></a>
                , which is "a graphical simulation meant to abstractly represent the activity in your Discord
                server"<br>
                with a very cute style to it. The container I am most proud of though, would be my App-Collection. <a
                href="https://hub.docker.com/r/griefed/app-collection" rel="noreferrer noopener" target="_blank"><span
                class="has-inline-color" style="color:#c0ffee">App-Collection</span></a><br>
                is, as the name implies, a collection of various apps which I have previously released in separate
                Docker
                Containers<br>and am now moving/collecting into one single container.
              </strong></h6>

              <q-chip color="secondary" size="xl" text-color="white">
                <q-avatar color="primary" icon="mdi-docker"/>
                <b>Image Pulls: {{ dockerPulls }}</b>
              </q-chip>
            </div>
          </div>
          <div class="col-4 offset-md-0 sm-12">
            <q-img src="~assets/prosper.webp" width="100%"/>
          </div>
        </div>
      </q-card-section>
    </q-intersection>

    <q-separator color="transparent" size="180px"/>

    <q-intersection
      class="my-intersection"
      once
      transition="scale">
      <q-card-section>
        <div class="row justify-center items-center">
          <div class="col-4 offset-md-0 sm-12">
            <q-img src="~assets/retro.webp" width="100%"/>
          </div>
          <div class="col sm-12">
            <h4><b>I mentioned Retro Hardware and Gaming earlier.</b></h4>
            <h6><strong>
              I've made a <a href="https://github.com/Griefed/LSC64" rel="noreferrer noopener" target="_blank">
              <span class="has-inline-color" style="color:#c0ffee">small addon board for the C64</span></a>
              which boasts multiple features:
              <q-list>
                <q-item>
                  <q-item-section>1. A Larson Scanner which lights up the air gaps on the top of your C64 case in a
                    sweet
                    Knight Rider or Cylon (Battlestar Galactica) way, with RGB LEDs, so you can configure it to your
                    liking!
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>2. An Expansion Port reset circuit. You just need to connect a button and off you go!
                    Reset your C64 with the press of a button!
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>3. A CPU brake: Throttle your CPU and slow down your game during the really tricky
                    bits!
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>4. Mono & Stereo Headphone Amp. Listen to the beautiful SID sounds with your
                    headphones.
                    Either in mono or in stereo, if you have an FPGA SID!
                  </q-item-section>
                </q-item>
              </q-list>
              It is still very much a WIP as I currently lack the funds to procure the PCB, the parts and equipment<br>
              needed to assemble one and test it. That means that the code to adress the LEDs has yet to be implemented
              as
              well.
            </strong></h6>
          </div>
        </div>
      </q-card-section>
    </q-intersection>

    <q-separator color="transparent" size="180px"/>

    <q-intersection
      class="my-intersection"
      once
      transition="scale">
      <q-card-section>
        <div class="row justify-center items-center">

          <div class="col sm-12">
            <h4><b>Want to get in touch with me?</b></h4>
            <h6><strong>
              With all the different services, platforms and social media places going on nowadays, there's enough
              places
              where you can get in touch with me.
              Just do the right thing and don't be a creep, mkay?
            </strong></h6>

            <div class="text-cyan-3 col-4 offset-md-0 sm-12">
              <a href="https://www.twitter.com/Griefed_" rel="noreferrer noopener"
                 style="text-decoration: none !important; color:inherit;" target="_blank"><span
                class="has-inline-color">
              <q-btn icon="mdi-twitter" round size="4em"></q-btn>
            </span></a>

              <a href="https://github.com/Griefed" rel="noreferrer noopener"
                 style="text-decoration: none !important; color:inherit;" target="_blank"><span
                class="has-inline-color">
            <q-btn icon="mdi-github" round size="4em"></q-btn>
            </span></a>

              <a href="https://www.youtube.com/channel/UCTHGcHF0ZU7DKDWiNsnOpPg" rel="noreferrer noopener"
                 style="text-decoration: none !important; color:inherit;" target="_blank"><span
                class="has-inline-color">
            <q-btn icon="mdi-youtube" round size="4em"></q-btn>
            </span></a>

              <a href="https://www.curseforge.com/members/griefed/projects" rel="noreferrer noopener"
                 style="text-decoration: none !important; color:inherit;" target="_blank"><span
                class="has-inline-color">
            <q-btn icon="mdi-cube" round size="4em"></q-btn>
            </span></a>

            </div>
            <h5><b>To catch up with my latest blog posts, visit the blog section of my website:</b></h5>
            <div class="text-cyan-3 col-4 offset-md-0 sm-12">
              <a href="https://blog.griefed.de" rel="noreferrer noopener"
                 style="text-decoration: none !important; color:inherit;" target="_blank"><span
                class="has-inline-color">
            <q-btn icon="mdi-post-outline" round size="8em">
            </q-btn>
            </span></a>

            </div>
          </div>
          <div class="col-4 offset-md-0 sm-12">
            <q-img src="~assets/griefed.webp" width="100%"/>

            <b>With kind permission by @Debbysheen_ to use this picture as my avatar:</b><br>
            <a href="https://twitter.com/Debbysheen_/status/1159173289719341057?s=20" rel="noreferrer noopener"
               target="_blank">
              <b>Link to tweet</b>
              </a>
          </div>
        </div>
      </q-card-section>
    </q-intersection>

    <q-separator color="transparent" size="100px"/>

  </q-card>

</template>

<script>
import {ref} from 'vue'
import axios from "axios";

export default {
  name: 'PageIndex',
  setup() {
    return {
      slide: ref(1),

    }
  },
  data() {
    return {
      dockerPulls: null,
    }
  },
  mounted() {
    axios.get('https://fleet.griefed.de/api/v1/images').then(response => (
      this.dockerPulls = response.data.data.totalPullCount.toLocaleString('en-US')
    ))
  }
}
</script>

<style>
.my-carousel {
  border-bottom: #c0ffee;
  border-style: solid;
  border-bottom-width: 3px;
}

.my-intersection {
  height: 100%;
  width: 100%;
}

.my-card {
  /*noinspection CssUnknownTarget*/
  background-image: url("/images/background.webp");
  background-repeat: repeat;
  background-attachment: fixed;
}
</style>
