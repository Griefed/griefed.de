<template>
  <q-card class="my-card text-center text-white">

    <q-intersection class="my-intersection" once transition="scale">
      <div class="justify-center items-center">

        <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener"
           target="_blank">
          <span class="has-inline-color" style="color:#c0ffee">
            <q-img style="margin-top: 40px; margin-bottom: 20px;" src="~assets/serverpackcreator.webp" width="60%"/>
          </span>
        </a>

        <div class="row flex-center no-wrap" style="margin-top: 45px;">
          <q-intersection class="my-intersection" once transition="scale">
            <img alt="GitHub all releases" src="https://img.shields.io/github/downloads/griefed/serverpackcreator/total?label=GitHub%20Downloads&logo=GitHub&style=plastic">
          </q-intersection>

          <q-separator inset vertical color="accent" spaced/>

          <q-intersection class="my-intersection" once transition="scale">
            <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/griefed/serverpackcreator?label=GitHub%20Stars&logo=GitHub&style=plastic">
          </q-intersection>

          <q-separator inset vertical color="accent" spaced/>

          <q-intersection class="my-intersection" once transition="scale">
            <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/griefed/serverpackcreator?label=Docker%20Downloads&logo=Docker&style=plastic">
          </q-intersection>

          <q-separator inset vertical color="accent" spaced/>

          <q-intersection class="my-intersection" once transition="scale">
            <img alt="Docker Stars" src="https://img.shields.io/docker/stars/griefed/serverpackcreator?label=Docker%20Stars&logo=Docker&style=plastic">
          </q-intersection>
        </div>

        <q-card
          class="description"
          style="margin: 80px;text-align: left;"
          bordered
        >
          <q-card-section class="section">
            <h5>
              <p>
                <strong>
                  ServerPackCreator is a Java-program which creates a server pack from any given Forge, Fabric, Quilt or
                  LegacyFabric modpack. Customize the
                  configuration to your liking and off you go.
                </strong>
              </p>
              <p>
                <strong>
                  Whenever you are working on an update to your modpack, you simply run ServerPackCreator and BAM!
                  You've got yourself a
                  server pack for your new modpack version.
                </strong>
              </p>
            </h5>
          </q-card-section>
        </q-card>

        <q-card
          class="description"
          style="margin: 80px;text-align: left;"
          bordered
        >
          <q-card-section class="section-alter">
            <h6>
              <p>
                ServerPackCreator is a passion project on which I am working in my spare time. It is also the main
                reason for why I got into programming in the first place.<br>
              </p>
              <p>
                I started getting into Java programming in february 2021, when I was working on an update for one of my
                Minecraft modpacks,
                Survive Create Prosper 4, and got tired and bored with manually creating a server pack everytime I
                wanted to update and
                test something, or just release a new server pack for the new modpack version.
              </p>
              <p>
                The thought <strong><code><i>There must be a way to automate this, or at least make it less
                tedious...</i></code></strong> was the spark which sent me off
                into the world of programming.
              </p>
              <p>
                And here we are.
              </p>
            </h6>
          </q-card-section>
        </q-card>

        <q-card
          class="description"
          style="margin: 80px;text-align: left;"
          bordered
        >
          <q-card-section class="section">
            <div class="row no-wrap justify-center items-center">
              <h5><strong>
                ServerPackCreator would not be where or what it is today without these wonderful companies and their
                products:
              </strong></h5>
            </div>

            <div class="row justify-center items-center">
              <q-card-section horizontal>
                <q-card-section class="q-pt-xl">

                  <div class="text-h2 text-weight-bolder q-mt-xl q-mb-xl">JetBrains IDEs</div>
                  <div class="text-h4 text-weight-bolder text-grey">
                    ServerPackCreator wouldn't be what it is today without the excellent IDEs by JetBrains. They have
                    kindly
                    provided me with a license for the development of ServerPackCreator under their
                    <a href="https://www.jetbrains.com/community/opensource/#support" rel="noreferrer noopener"
                       target="_blank">
                      OpenSource-Program.
                    </a>
                  </div>

                  <q-separator spaced color="accent" inset/>

                  <div class="row no-wrap section-alter">
                    <div class="column flex-center" style="margin-top: 25px;margin-left:10px;margin-bottom: 20px;">
                      <a href="https://www.jetbrains.com/webstorm/" rel="noreferrer noopener" target="_blank">
                        <q-img width="250px" src="~assets/webstorm.webp"/>
                      </a>
                      <div class="text-h6 text-grey">
                        WebStorm is used for the development of the webservice-portion of ServerPackCreator. It's an
                        integrated development environment for JavaScript and related technologies.
                      </div>
                    </div>

                    <div class="column flex-center">
                      <a href="https://www.jetbrains.com/idea/" rel="noreferrer noopener" target="_blank">
                        <q-img width="250px" src="~assets/idea.webp"/>
                      </a>
                      <div class="text-h6 text-grey">
                        IntelliJ IDEA is used to develop the backend and Swing-GUI of ServerPackCreator. It's an
                        incredibly
                        capable and ergonomic IDE for JVM.
                      </div>
                    </div>
                  </div>

                  <q-card-actions class="flex flex-center section-alter">
                    <q-btn flat color="info" href="https://www.jetbrains.com/" rel="noreferrer noopener"
                           target="_blank">
                      JETBRAINS
                    </q-btn>
                    <q-separator inset vertical color="accent" spaced/>
                    <q-btn flat color="info" href="https://www.jetbrains.com/webstorm/" rel="noreferrer noopener"
                           target="_blank">
                      WEBSTORM
                    </q-btn>
                    <q-separator inset vertical color="accent" spaced/>
                    <q-btn flat color="info" href="https://www.jetbrains.com/idea/" rel="noreferrer noopener"
                           target="_blank">
                      INTELLIJ IDEA
                    </q-btn>
                  </q-card-actions>

                </q-card-section>

                <q-card-section class="col-5 flex flex-center">
                  <a href="https://www.jetbrains.com/" rel="noreferrer noopener" target="_blank">
                    <q-img width="700px" class="rounded-borders" src="~assets/jetbrains.webp"/>
                  </a>
                  <div class="row no-wrap justify-center items-center">
                    <code>JetBrains, IntelliJ IDEA and WebStorm logos property of JetBrains s.r.o.</code>
                  </div>
                </q-card-section>
              </q-card-section>
            </div>
          </q-card-section>
        </q-card>

        <q-card
          class="description"
          style="margin: 80px;text-align: left;"
          bordered
        >
          <q-card-section class="section-alter">
            <div class="row justify-center items-center">
              <q-card-section horizontal>

                <q-card-section class="col-5 flex flex-center">
                  <a href="https://www.jetbrains.com/" rel="noreferrer noopener" target="_blank">
                    <q-img width="700px" class="rounded-borders" src="~assets/ej-technologies.webp"/>
                  </a>
                  <div class="row no-wrap justify-center items-center">
                    <code>JProfiler and ej-technologies logos property of ej-technologies GmbH</code>
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-xl">
                  <div class="text-h2 text-weight-bolder q-mt-xl q-mb-xl">ej-Technologies</div>
                  <div class="text-h4 text-weight-bolder text-grey">
                    ej-Technologies' JProfiler helps identifying and fixing performance issues in ServerPackCreator.
                    They
                    have kindly provided me with a license for the development of ServerPackCreator under their
                    <a href="https://www.ej-technologies.com/buy/jprofiler/openSource" rel="noreferrer noopener"
                       target="_blank">
                      OpenSource-Program.
                    </a>
                  </div>

                  <q-separator spaced color="accent" inset/>

                  <div class="row no-wrap flex-center section">
                    <div class="column flex flex-center" style="margin-right: 20px;">
                      <a href="https://www.ej-technologies.com/products/jprofiler/overview.html"
                         rel="noreferrer noopener"
                         target="_blank">
                        <q-img width="200px" src="~assets/jprofiler_banner.webp"/>
                      </a>
                    </div>

                    <div class="column flex flex-center" style="margin-left: 20px;">
                      <a href="https://www.ej-technologies.com/products/jprofiler/overview.html"
                         rel="noreferrer noopener"
                         target="_blank">
                        <q-img width="150px" src="~assets/jprofiler.webp"/>
                      </a>
                    </div>
                  </div>

                  <div class="text-h6 text-grey section">
                    JProfiler's intuitive UI helps you resolve performance bottlenecks, pin down memory leaks and
                    understand
                    threading issues.
                  </div>

                  <q-card-actions class="flex flex-center section">
                    <q-btn flat color="info" href="https://www.ej-technologies.com/" rel="noreferrer noopener"
                           target="_blank">
                      EJ-TECHNOLOGIES
                    </q-btn>
                    <q-separator inset vertical color="accent" spaced/>
                    <q-btn flat color="info" href="https://www.ej-technologies.com/products/jprofiler/overview.html"
                           rel="noreferrer noopener" target="_blank">
                      JPROFILER
                    </q-btn>
                  </q-card-actions>
                </q-card-section>
              </q-card-section>
            </div>
          </q-card-section>
        </q-card>

        <q-card
          class="description"
          style="margin: 80px;text-align: left;"
          bordered
        >
          <q-card-section class="section">
            <h2 style="text-align: center;margin: -10px;">
              <strong>
                Screenshots
              </strong>
            </h2>
            <h3 style="text-align: center">
              <strong>
                CLI
              </strong>
            </h3>
            <div class="row no-wrap flex-center">
              <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
                <q-img src="~assets/cli_windows.webp" width="1200px"/>
              </a>
            </div>
          </q-card-section>

          <q-card-section>
            <h3 style="text-align: center">
              <strong>
                GUI
              </strong>
            </h3>
            <div class="row no-wrap flex-center">
              <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
                <q-img src="~assets/gui_windows_dark.webp" width="1200px"/>
              </a>
            </div>
          </q-card-section>

          <q-card-section class="section justify-center items-center flex-center">
            <h3 style="text-align: center">
              <strong>
                WebService
              </strong>
            </h3>
            <div class="row no-wrap flex-center">
              <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
                <q-img src="~assets/web_zip_dark.webp" width="1200px"/>
              </a>
            </div>
            <q-separator inset spaced color="accent"/>
            <div class="row no-wrap flex-center">
              <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
                <q-img src="~assets/web_downloads_dark.webp" width="1200px"/>
              </a>
            </div>
          </q-card-section>
        </q-card>

        <q-card
          class="description"
          style="margin: 80px;text-align: left;"
          bordered
        >
          <q-card-section style="text-align: left;" class="section-alter">
            <div class="text-left list">
              <h3 style="text-align: left;">
                <strong>
                  Features
                </strong>
              </h3>
              <h6 style="text-align: left;">
                <p class="my-list">1. Exclude clientside-only mods</p>
                <p class="sub-list"><strong>Automatically</strong> by letting ServerPackCreator scan the mods of your
                  modpack for their sideness</p>
                <p class="sub-list"><strong>Manually</strong> by configuring a list mods which ServerPackCreator will
                  filter out according to your input and the chosen filter.</p>

                <p class="my-list">2. <strong>Add files and directories</strong> in your server pack.</p>
                <p class="sub-list">Files and directories in <strong>your modpack</strong></p>
                <p class="sub-list">Files and directories from <strong>your computer</strong></p>

                <p class="my-list">3. <strong>Add a server icon</strong></p>
                <p class="sub-list">Server icons are <strong>automatically scaled</strong> down, or up, to 64x64!</p>
                <p class="sub-list">Specify a custom one, or use a default provided by ServerPackCreator.</p>

                <p class="my-list">4. <strong>Add a server.properties</strong></p>
                <p class="sub-list">Ship your server pack with default settings!</p>
                <p class="sub-list">Specify a custom one, or use a default provided by ServerPackCreator.</p>
                <p class="sub-list">Change the default to your liking if you intend on using the same icon across
                  multiple server packs!</p>

                <p class="my-list">5. Many <strong>modloaders</strong> supported</p>
                <p class="sub-list"><strong>Forge</strong></p>
                <p class="sub-list"><strong>Fabric</strong></p>
                <p class="sub-list"><strong>LegacyFabric</strong></p>
                <p class="sub-list"><strong>Quilt</strong></p>

                <p class="my-list">6. Use Minecraft <strong>snapshots</strong> and <strong>pre-releases</strong></p>
                <p class="sub-list">Per default, only regular releases enabled</p>

                <p class="my-list">7. Let ServerPackCreator <strong>install the modloader-server</strong> for your
                  server pack, for immediate testing and debugging after generation!</p>

                <p class="my-list">8. Let ServerPackCreator <strong>generate a ZIP-archive</strong>, for immediate
                  upload to places like CurseForge (<strong>after</strong> you've tested your server pack, of course
                  😉)</p>

                <p class="my-list">9. Configure <strong>commandline arguments</strong> with which to
                  <strong>start</strong> the <strong>Minecraft server</strong></p>
                <p class="sub-list">Does your modpack require <strong>a lot of RAM?</strong> Well, tell
                  ServerPackCreator to create the start scripts with `-Xms8G -Xmx8G` or similar values!</p>
                <p class="sub-list"><strong>Aikars flags</strong> are available, too. If you like 'em, use 'em.</p>

                <p class="my-list">10. Create your own <strong>start-script templates</strong></p>
                <p class="sub-list"><strong>Add additional functionality</strong> to your servers start scripts</p>
                <p class="sub-list">Use <strong>placeholders in your templates</strong>, to be <strong>replaced with
                  custom values</strong></p>
                <p class="sub-list">Example: placeholder `SPC_FLYNN_LIVES_SPC` in the templates can be replaced with a
                  value configured on a per-server pack basis, i.e `Now that's a big door`</p>

                <p class="my-list">11. <strong>Addons!</strong></p>
                <p class="sub-list">ServerPackCreator allows you to use addons to add new features in various
                  places.</p>
                <p class="sub-list">An example addon can be found at [the Example Addon
                  Repository](https://github.com/Griefed/ServerPackCreatorExampleAddon). It has simple examples for
                  every possible addon and extension in ServerPackCreator</p>
              </h6>
            </div>
          </q-card-section>
        </q-card>

        <q-card
          class="description"
          style="margin: 80px;"
          bordered
        >
          <q-card-section class="section">
            <div class="row flex-center">
              <h4>
                <strong>
                  <p>For more information and details about the possibilities with ServerPackCreator, check</p>
                  <p>out the README of the project on GitHub,
                    <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
                    <span class="has-inline-color" style="color:#c0ffee">
                      available here
                    </span>
                  </a></p>
                </strong>
              </h4>
            </div>
          </q-card-section>
        </q-card>

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
      downloads: ref('N/A'),
      dockerPulls: ref('N/A')
    }
  },
  mounted() {
    this.$axios.get('https://api.github.com/repos/Griefed/ServerPackCreator/releases?per_page=10000')
      .then(response => {

        this.downloads = 0;

        response.data.forEach(release => {

          release.assets.forEach(asset => {

            this.downloads += asset.download_count;
          })

        })

      })
      .catch(error => {
        this.$q.notify({
          timeout: 3000,
          icon: 'error',
          color: 'negative',
          message: 'Can not communicate with GitHub'
        })
      });

    this.$axios.get('https://fleet.griefed.de/api/v1/images')
      .then(response => {

        this.dockerPulls = 0;

        response.data.data.repositories.griefed.forEach(repository => {

          if (repository.name === 'serverpackcreator') {
            this.dockerPulls = repository.pullCount;
          }

        })

      })
      .catch(error => {
        this.$q.notify({
          timeout: 3000,
          icon: 'error',
          color: 'negative',
          message: 'Can not communicate with Fleet'
        })
      });
  }
}
</script>

<style scoped>
.description {
  background: #32535888;
}

.section {
  background: rgba(64, 94, 99, 0.53);
}

.section-alter {
  background: rgba(32, 59, 63, 0.53);
}

.my-card {
  /*noinspection CssUnknownTarget*/
  /*background-image: url("~assets/background.webp");*/
  background: transparent repeat fixed;
}

.list {
  margin-left: 0;
}

.sub-list {
  margin-left: 45px;
  margin-bottom: 0;
  margin-top: 0;
}

.my-list {
  margin-left: 20px;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
