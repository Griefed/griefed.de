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
            modpack, you simply run ServerPackCreator and BAM! You've got yourself a server pack for your new modpack
            version.
          </strong>
        </h5>
        <h6>
          ServerPackCreator is a passion project on which I am working in my spare time. It is also the main reason for
          why I got<br>
          into programming in the first place. I started getting into Java programming in february 2021,<br>
          when I was working on an update for one of my Minecraft modpacks, Survive Create Prosper 4, and got tired and
          bored of<br>
          manually creating a server pack everytime I wanted to update and test something, or just release a new server
          pack<br>
          for the new modpack version. The thought "There must be a way to automate this, or at least make it less
          tedious..." was<br>
          the spark which sent me off into the world of programming in Java.<br>
          <br>
          And here we are.
          <br>
        </h6>

      </div>
    </q-intersection>

    <div class="row flex-center no-wrap">
      <q-intersection class="my-intersection" once transition="scale">
        <q-chip color="secondary" size="xl" text-color="white">
          <q-avatar color="primary" icon="mdi-github"/>
          <b>Downloads: {{ downloads }}</b>
        </q-chip>
      </q-intersection>
      <q-intersection class="my-intersection" once transition="scale">
        <q-chip color="secondary" size="xl" text-color="white">
          <q-avatar color="primary" icon="mdi-docker"/>
          <b>Docker pulls: {{ dockerPulls }}</b>
        </q-chip>
      </q-intersection>
    </div>

    <div class="row no-wrap justify-center items-center">
      <h5><strong>
        ServerPackCreator would not be where or what it is today without these wonderful companies and their products:
      </strong></h5>
    </div>

    <!-- JETBRAINS -->
    <q-intersection
      class="my-intersection"
      once
      transition="scale">
      <q-card-section>
        <div class="row justify-center items-center">
          <q-card-section horizontal>
            <q-card-section class="q-pt-xl">

              <div class="text-h2 text-weight-bolder q-mt-xl q-mb-xl">JetBrains IDEs</div>
              <div class="text-h4 text-weight-bolder text-grey">
                ServerPackCreator wouldn't be what it is today without the excellent IDEs by JetBrains. They have kindly
                provided me with a license for the development of ServerPackCreator under their
                <a href="https://www.jetbrains.com/community/opensource/#support" rel="noreferrer noopener"
                   target="_blank">
                  OpenSource-Program.
                </a>
              </div>

              <q-separator spaced color="accent" inset/>

              <div class="row no-wrap">
                <div class="column flex-center">
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
                    IntelliJ IDEA is used to develop the backend and Swing-GUI of ServerPackCreator. It's an incredibly
                    capable and ergonomic IDE for JVM.
                  </div>
                </div>
              </div>

              <q-card-actions class="flex flex-center">
                <q-btn flat color="info" href="https://www.jetbrains.com/" rel="noreferrer noopener" target="_blank">
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
    </q-intersection>

    <!-- EJ TECHNOLOGIES -->
    <q-intersection
      class="my-intersection"
      once
      transition="scale">
      <q-card-section>
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
                ej-Technologies' JProfiler helps identifying and fixing performance issues in ServerPackCreator. They
                have kindly provided me with a license for the development of ServerPackCreator under their
                <a href="https://www.ej-technologies.com/buy/jprofiler/openSource" rel="noreferrer noopener"
                   target="_blank">
                  OpenSource-Program.
                </a>
              </div>

              <q-separator spaced color="accent" inset/>

              <div class="row no-wrap flex-center">
                <div class="column flex flex-center" style="margin-right: 20px;">
                  <a href="https://www.ej-technologies.com/products/jprofiler/overview.html" rel="noreferrer noopener"
                     target="_blank">
                    <q-img width="250px" src="~assets/jprofiler_banner.webp"/>
                  </a>
                </div>

                <div class="column flex flex-center" style="margin-left: 20px;">
                  <a href="https://www.ej-technologies.com/products/jprofiler/overview.html" rel="noreferrer noopener"
                     target="_blank">
                    <q-img width="150px" src="~assets/jprofiler.webp"/>
                  </a>
                </div>
              </div>

              <div class="text-h6 text-grey">
                JProfiler's intuitive UI helps you resolve performance bottlenecks, pin down memory leaks and understand
                threading issues.
              </div>

              <q-card-actions class="flex flex-center">
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
    </q-intersection>

    <q-intersection class="my-intersection center" once transition="scale">
      <h4><strong>
        Screenshots
      </strong></h4>
      <h6><strong>
        CLI
      </strong></h6>
      <div class="row justify-center items-center">
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/cli_windows.webp" width="100%"/>
          </a>
        </div>
      </div>

      <h6><strong>
        GUI
      </strong></h6>
      <div class="row justify-center items-center">
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/gui_windows_light.webp" width="100%"/>
          </a>
        </div>
        <q-separator vertical inset spaced color="accent"/>
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/gui_windows_dark.webp" width="100%"/>
          </a>
        </div>
      </div>

      <h6><strong>
        WebService
      </strong></h6>
      <div class="row justify-center items-center">
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/web_zip_light.webp" width="100%"/>
          </a>
        </div>
        <q-separator vertical inset spaced color="accent"/>
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/web_zip_dark.webp" width="100%"/>
          </a>
        </div>
      </div>
      <q-separator inset spaced color="accent"/>
      <div class="row justify-center items-center">
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/web_downloads_light.webp" width="100%"/>
          </a>
        </div>
        <q-separator vertical inset spaced color="accent"/>
        <div class="col">
          <a href="https://github.com/Griefed/ServerPackCreator" rel="noreferrer noopener" target="_blank">
            <q-img src="~assets/web_downloads_dark.webp" width="100%"/>
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
            <p class="sub-list">3.1. ServerPackCreator will automatically try and detect as many clientside-only mods as
              possible and exclude them.</p>

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
            <p class="sub-list">11.1. Users can provide addons which will be executed during the generation of a server
              pack.</p>
            <p class="sub-list">11.2. Example addon at <a
              href="https://github.com/Griefed/ServerPackCreatorExampleAddon" rel="noreferrer noopener" target="_blank">ServerPackCreatorExampleAddon</a>
            </p>

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
            If you wish to learn about the technical side of things, the JavaDocs are available thanks to GitHub
            pages,<br>
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
.my-card {
  /*noinspection CssUnknownTarget*/
  /*background-image: url("~assets/background.webp");*/
  background: transparent repeat fixed;
}

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.companies {
  width: 100%;
  background: transparent;
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
