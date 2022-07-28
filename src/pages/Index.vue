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

  <q-card class="my-card text-justify text-white">

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
          I love creating and taking care of my Docker Images and other odd projects in my spare time,<br>
          of which the source codes can be <a href="https://github.com/Griefed" rel="noreferrer noopener"
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
            <q-img src="~assets/spc.webp" width="100%"/>
          </div>
          <div class="col sm-12">
            <q-img src="~assets/scp4.webp" width="80%"/>
            <div class="has-text-align-center">
              <h6>
                ServerPackCreator is a passion project on which I am working in my spare time. It is also the main
                reason for
                why I got<br>
                into programming in the first place. I started getting into Java programming in february 2021,<br>
                when I was working on an update for one of my Minecraft modpacks, Survive Create Prosper 4, and got
                tired and
                bored of<br>
                manually creating a server pack everytime I wanted to update and test something, or just release a new
                server
                pack<br>
                for the new modpack version. The thought "There must be a way to automate this, or at least make it less
                tedious..." was<br>
                the spark which sent me off into the world of programming in Java.<br>
                <br>
                And here we are. Whenever you are working on an update to your<br>
                modpack, you simply run ServerPackCreator and BAM! You've got yourself a server pack for your new
                modpack
                version.
                <br>
                <br>
                <h3><strong><a
                  href="https://github.com/Griefed/ServerPackCreator"
                  rel="noreferrer noopener"
                  target="_blank">
                  <span class="has-inline-color" style="color:#c0ffee">
                    Available on GitHub!
                  </span>
                </a></strong></h3>
              </h6>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-intersection>

    <q-separator color="transparent" size="240px"/>

    <q-intersection
      class="my-intersection"
      once
      transition="scale">
      <q-card-section>
        <div class="row justify-center items-center">
          <div class="col sm-12">
            <q-img src="~assets/scp3_banner.webp" width="80%"/>
            <div class="has-text-align-center">
              <h6><strong>
                The original Survive Create Prosper 3 for Minecraft 1.12.2.<br><br>
                The reason why I started this modpack, was because I wanted to build the Citadel from Half-Life 2,<br>
                with machines and reactors and lots and lots of automization and technology. A couple of friends
                wanted<br>
                to join in on the fun, started asking for more than just technology, which resulted in me adding a
                couple<br>
                of magic focused mods, then some decorative ones and so on and so forth.<br><br>
                The second reason why I made this modpack was that the german YouTuber and Let's Player "Gronkh" had
                his<br>
                own modpack called "After Humans" which was based on "Life in the Woods". He stoppped working on it
                some<br>
                day, so I finally got around and started making my own modpack.<br>
                <h3><strong><a
                  href="https://www.curseforge.com/minecraft/modpacks/scp-survive-create-prosper"
                  rel="noreferrer noopener"
                  target="_blank">
                  <span class="has-inline-color" style="color:#c0ffee">
                    So go ahead and give it a try!
                  </span>
                </a></strong></h3>
              </strong></h6>
            </div>
          </div>
          <div class="col-4 offset-md-0 sm-12">
            <q-img src="~assets/scp_logo.webp" width="100%"/>
          </div>
        </div>
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
            <div class="has-text-align-center">
              <h6><strong>
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
                Psi and other mods aim to quell your hunger for magical prowess. A variety of useful & decorative or
                cool
                mods<br>
                like Artifacts, Camera Mod, Cooking for Blockheads, Macaw's mods, Paintings++ and loads more add to the
                world,<br>
                so you will always have something to explore, build, decorate or create.<br><br>
                That's just a small example of what's included in SCP
                <br>
                <h3><strong><a
                  href="https://www.curseforge.com/minecraft/modpacks/survive-create-prosper-4"
                  rel="noreferrer noopener"
                  target="_blank">
                  <span class="has-inline-color" style="color:#c0ffee">
                    So go ahead and give it a try!
                  </span>
                </a></strong></h3>
              </strong></h6>
            </div>
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
              <h4><b>Docker and Git</b></h4>
              <h6><strong>
                I enjoy playing around with Docker and the occasional bit of Java and VueJS in my spare time.<br>
                My main project is <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener"
                                      target="_blank"><span style="color:#c0ffee">ServerPackCreator</span></a>, a
                program written in Java, to create server packs from Minecraft Forge or Fabric modpacks.<br>
                Aside from that, I've created a web-based <a href="https://github.com/Griefed/ltt-mapmaker"
                                                             rel="noreferrer noopener" target="_blank"><span
                style="color:#c0ffee">mapeditor</span></a> for the game <a
                href="https://store.steampowered.com/app/1313290/Let_Them_Trade/" rel="noreferrer noopener"
                target="_blank"><span style="color:#c0ffee">Let Them Trade</span></a>, available <a
                href="https://griefed.github.io/ltt-mapmaker/#/" rel="noreferrer noopener" target="_blank"><span
                style="color:#c0ffee">here</span></a>.<br>
                But I've also got a couple of docker images containing some everyday useful stuff,<br>
                like <a href="https://github.com/Griefed/docker-ICEcoder" rel="noreferrer noopener"
                        target="_blank"><span style="color:#c0ffee">ICEcoder</span></a>, a web-based IDE,<br>
                or <a href="https://github.com/Griefed/docker-D-Zone" rel="noreferrer noopener" target="_blank"><span
                style="color:#c0ffee">D-Zone</span></a>, an abstract graphical simulation of Discord server activity<br>
                and last but not least my <a href="https://github.com/Griefed/docker-App-Collection"
                                             rel="noreferrer noopener" target="_blank"><span style="color:#c0ffee">App-Collection</span></a>,
                bundling several useful things into one container.

                <h4><strong>
                  <a href="https://github.com/Griefed?tab=repositories" rel="noreferrer noopener" target="_blank"> <span
                    class="has-inline-color" style="color:#c0ffee">All code available on GitHub</span></a><br>
                  <a href="https://hub.docker.com/u/griefed" rel="noreferrer noopener" target="_blank"> <span
                    class="has-inline-color" style="color:#c0ffee">All images available at DockerHub</span></a>
                </strong></h4>

              </strong></h6>

              <q-chip color="secondary" size="xl" text-color="white">
                <q-avatar color="primary" icon="mdi-docker"/>
                <b>Docker Image Pulls: {{ dockerPulls }}</b>
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
                 style="text-decoration: none !important; color:inherit;" target="_blank">
                <span class="has-inline-color">
                  <q-btn icon="mdi-post-outline" round size="8em"/>
                </span>
              </a>
            </div>
          </div>
          <div class="col-4 offset-md-0 sm-12">
            <q-img src="~assets/sam_icon.webp" width="100%"/>
            <b>In case you are wondering, that's our cat. So, no, I didn't just take this photo from ze interwebz. R.I.P. Sam...</b>
          </div>
        </div>
      </q-card-section>
    </q-intersection>

    <q-separator color="transparent" size="100px"/>

  </q-card>

</template>

<script>
import {ref} from 'vue'

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
    this.$api.get('https://fleet.griefed.de/api/v1/images').then(response => (
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
  text-align: center;
  height: 100%;
  width: 100%;
}

.my-card {
  /*noinspection CssUnknownTarget*/
  /*background-image: url("~assets/background.webp");*/
  background: transparent repeat fixed;
}
</style>
