<template>
  <q-layout view="lHh lpr lFf">
    <q-carousel
      animated
      v-model="slide"
      arrows
      swipeable
      navigation
      infinite
      autoplay
      control-color="white"
      transition-prev="slide-right"
      transition-next="slide-left"
      height="500px">
      <q-carousel-slide class="q-pa-none" :name="1" img-src="~assets/serverpackcreator/powershell.webp">
        <div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.68) !important;">
          <div class="custom-caption">
            <div class="text-h2 main_line animation_2">SERVER PACKS <span
              :style="'color:'+accentColour">MADE EASY</span></div>
            <br><br><br>
            <div class="text-h4 animation_1">Quick and easy generation of server packs<br>of your favourite
              Minecraft modpacks.
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="q-pa-none" :name="2" img-src="~assets/serverpackcreator/linux.webp">
        <div class="full-height full-width flex flex-center"
             style="background-color: rgba(0, 0, 0, 0.68) !important;">
          <div class="custom-caption">
            <div class="text-h2 main_line animation_2" style="font-size:65px;">POPULAR <span
              :style="'color:'+accentColour">MODLOADERS</span> SUPPORTED
            </div>
            <br><br><br>
            <div class="text-h4 animation_1">Forge, Fabric, Quilt and LegacyFabric<br>modloaders are supported.
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="q-pa-none" :name="3" img-src="~assets/serverpackcreator/macos.webp">
        <div class="full-height full-width flex flex-center"
             style="background-color: rgba(0, 0, 0, 0.68) !important;">
          <div class="custom-caption">
            <div class="text-h2 main_line animation_2" style="font-size:65px;">HIGHLY <span
              :style="'color:'+accentColour">CUSTOMIZABLE</span></div>
            <br><br><br>
            <div class="text-h4 animation_1">Configure the most important aspects of a server pack<br>for your users
              convenience.
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row" style="background: #f7f7f7">
      <q-img src="~assets/serverpackcreator.webp" alt=""/>
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">
          <q-card-section>
            <q-icon size="110px" name="ballot" :style="'color:'+primaryColour"/>
            <div class="text-h6">GUI</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Use the graphical user interface for quick and easy configuration of your server pack.
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">
          <q-card-section>
            <q-icon size="110px" name="terminal" :style="'color:'+primaryColour"/>
            <div class="text-h6">CLI</div>

          </q-card-section>

          <q-card-section class="q-pt-none">
            Generate server packs right on your headless system using the CLI mode.
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">
          <q-card-section>
            <q-icon size="110px" name="web" :style="'color:'+primaryColour"/>
            <div class="text-h6">WEB</div>

          </q-card-section>

          <q-card-section class="q-pt-none">
            Upload your modpack and download an automatically generated server pack.
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
        <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;">
          <q-card-section>
            <q-icon size="110px" name="mdi-puzzle" :style="'color:'+primaryColour"/>
            <div class="text-h6">PLUGINS</div>

          </q-card-section>

          <q-card-section class="q-pt-none">
            Add features and functionality with third-party plugins, or write your own.
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="quote">
      <div class="q-pt-xl full-width full-height flex flex-center" style="background-color: #000000ad !important;">
        <h3 class="text-white text-center">
          Working on an update to your modpack?<br>
          Want to play your favourite modpack with your friends?<br>
          Run ServerPackCreator and BAM!<br>
          You've got a server pack for your modpack.
          <br>
          <br>
          <q-btn type="a" href="https://github.com/Griefed/ServerPackCreator/releases/latest" size="lg"
                 :style="'background:'+ primaryColour +'; color: white'" label="Get The Latest Version"/>
        </h3>
      </div>
    </div>
    <div class="pricing" id="id_pricing">
      <div class="" style="background: #f7f7f7">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center text-grey-9"><strong>Features Excerpt</strong>
              <br>
              <span
                class="text-center text-grey text-h6">The most important features in a quick overview</span>
            </h5>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-px-xl">
          <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
            <q-card @mouseover="hoverOver(3)" @mouseout="hoverOutTimeout(3)"
                    class="my-other-card text-center box-shadow" flat bordered>
              <q-card-section class="text-white" style="background: #ec982f">
                <div class="text-h6 text-center">
                  FILES
                </div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <q-list dense padding style="border-bottom: 1px solid lightgrey;">
                  <q-item>
                    Exclude clientside-only mods
                  </q-item>
                  <q-item>
                    Add any files and/or directories
                  </q-item>
                  <q-item>
                    Custom, automatically scaled, server icon
                  </q-item>
                  <q-item>
                    Custom server.properties
                  </q-item>
                </q-list>
              </q-card-section>
              <q-card-section>
                <div class="text-center q-mt-xs">
                  Fully customize which files and directories get added to your server pack.
                  Automatically, or manually, exclude mods which could break the server. Let ServerPackCreator scale
                  the server icon for your server. The GUI provides a preview of the server icon for you.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
            <q-card @mouseover="hoverOver(3)" @mouseout="hoverOutTimeout(3)"
                    class="my-other-card text-center box-shadow" flat bordered>
              <q-card-section class="text-white" style="background: #f4655f">
                <div class="text-h6 text-center">
                  MODLOADERS
                </div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <q-list dense padding style="border-bottom: 1px solid lightgrey;">
                  <q-item>
                    Forge
                  </q-item>
                  <q-item>
                    Fabric
                  </q-item>
                  <q-item>
                    Quilt
                  </q-item>
                  <q-item>
                    Legacy Fabric
                  </q-item>
                </q-list>
              </q-card-section>
              <q-card-section>
                <div class="text-center q-mt-xs">
                  The most commonly used modloaders for Minecraft are supported. Start scripts shipped with every
                  generated
                  server pack take care of the modloader server installation. Let ServerPackCreator install the
                  modloader
                  server for immediate testing.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
            <q-card @mouseover="hoverOver(3)" @mouseout="hoverOutTimeout(3)"
                    class="my-other-card text-center box-shadow" flat bordered>
              <q-card-section class="text-white q-pa-md" style="background: #8b3bbd">
                <div class="text-h6 text-center">
                  ADVANCED
                </div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <q-list dense padding style="border-bottom: 1px solid lightgrey;">
                  <q-item>
                    Java Arguments / JVM flags
                  </q-item>
                  <q-item>
                    Start script templating
                  </q-item>
                  <q-item>
                    Minecraft Pre-releases and Snapshots
                  </q-item>
                  <q-item>
                    Aikars Flags
                  </q-item>
                </q-list>
              </q-card-section>
              <q-card-section>
                <div class="text-center q-mt-xs">
                  Customize the JVM flags, or use Aikars flags, to run your server with. Create your own start
                  script
                  templates and use your own placeholders for script generation for maximum customization. Use
                  Minecraft
                  snapshots or pre-releases if you like living on the edge.
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
            <q-card @mouseover="hoverOver(3)" @mouseout="hoverOutTimeout(3)"
                    class="my-other-card text-center box-shadow" flat bordered>
              <q-card-section class="text-white" style="background: #3b97d1">
                <div class="text-h6 text-center">
                  PLUGINS
                </div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <q-list dense padding style="border-bottom: 1px solid lightgrey;">
                  <q-item>
                    Configuration checks
                  </q-item>
                  <q-item>
                    Server pack generation tasks
                  </q-item>
                  <q-item>
                    Per server pack configurations and UIs
                  </q-item>
                  <q-item>
                    Program wide configurations and UIs
                  </q-item>
                </q-list>
              </q-card-section>
              <q-card-section>
                <div class="text-center q-mt-xs">
                  Use plugins to add new features in various places. Custom actions to run before, during and after
                  server pack generation. Custom configuration checks and UI elements on a per server pack basis,
                  and ServerPackCreator wide settings and UI elements.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <br>
        <br>
        <br>
      </div>
    </div>
    <div class="row" style="background-color: #000000ad !important;" id="id_about_us">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <h5 class="text-center text-white"><strong>About Us</strong>
          <br><br>
          <span class="text-center text-grey text-h6">
            <p>
                ServerPackCreator is a passion project on which I am working in my spare time. It is also the main
                reason for why I got into programming in the first place.
            </p>
            <p>
                I started getting into Java programming in february 2021, when I was working on an update for one of my
                Minecraft modpacks,
                Survive Create Prosper 4, and got tired and bored with manually creating a server pack everytime I
                wanted to update and
                test something, or just release a new server pack for the new modpack version.
            </p>
            <p>
                The thought <br><strong><code><i>There must be a way to automate this, or at least make it less
                tedious...</i></code></strong><br>was the spark which sent me off
                into the world of programming.
            </p>
            <p>
                And here we are.
            </p>
          </span>
        </h5>
      </div>
    </div>
    <div class="row text-center flex flex-center" style="background-color: #000000ad !important;">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
        <h5 class="text-center text-grey">ServerPackCreator would not be where or what it is today without these
          wonderful companies and their products:</h5>
      </div>
      <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md flex flex-center">
        <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
          <q-card @mouseover="hoverOver(1)" @mouseout="hoverOutTimeout(1)" style="border: none;"
                  class="my-card text-center box-shadow" flat bordered>
            <q-img src="~assets/jprofiler.webp" alt=""/>

            <q-card-section>
              <div class="text-overline text-orange-9">EJ TECHNOLOGIES</div>
              <div :class="about_heading_1" :style="'color: ' + about_heading_color_1"
                   class="about_heading_1 text-h6 q-mt-sm q-mb-xs">JPROFILER
              </div>
              <div :class="about_heading_1" :style="'color: ' + about_heading_color_1"
                   class="about_heading_1 q-mt-sm q-mb-xs">
                <code><strong>
                  JProfiler's intuitive UI helps you resolve performance bottlenecks, pin down memory leaks and
                  understand threading issues.
                </strong></code>
              </div>
              <div class="text-caption text-grey-6">
                JProfiler and ej-technologies logos property of ej-technologies GmbH
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
          <q-card @mouseover="hoverOver(2)" @mouseout="hoverOutTimeout(2)"
                  :style="'color: ' + about_heading_color_2" style="border: none;"
                  class="my-card text-center box-shadow" flat bordered>
            <q-img src="~assets/idea.webp" alt=""/>

            <q-card-section>
              <div class="text-overline text-orange-9">JETBRAINS</div>
              <div :class="about_heading_2" :style="'color: ' + about_heading_color_2"
                   class="text-h6 q-mt-sm q-mb-xs">INTELLIJ IDEA
              </div>
              <div :class="about_heading_2" :style="'color: ' + about_heading_color_2"
                   class="about_heading_1 q-mt-sm q-mb-xs">
                <code><strong>
                  IntelliJ IDEA is used to develop the backend and Swing-GUI of ServerPackCreator. It's an
                  incredibly capable and ergonomic IDE for JVM.
                </strong></code>
              </div>
              <div class="text-caption text-grey-6">
                IntelliJ IDEA and WebStorm logos property of JetBrains s.r.o.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
          <q-card @mouseover="hoverOver(3)" @mouseout="hoverOutTimeout(3)" style="border: none;"
                  class="my-card text-center box-shadow" flat bordered>
            <q-img src="~assets/webstorm.webp" alt=""/>

            <q-card-section>
              <div class="text-overline text-orange-9">JETBRAINS</div>
              <div :class="about_heading_3" :style="'color: ' + about_heading_color_3"
                   class="text-h6 q-mt-sm q-mb-xs">WEBSTORM
              </div>
              <div :class="about_heading_3" :style="'color: ' + about_heading_color_3"
                   class="about_heading_1 q-mt-sm q-mb-xs">
                <code><strong>
                  WebStorm is used for the development of the webservice-portion of ServerPackCreator. It's an
                  integrated development environment for JavaScript and related technologies.
                </strong></code>
              </div>
              <div class="text-caption text-grey-6">
                IntelliJ IDEA and WebStorm logos property of JetBrains s.r.o.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div style="background: #f7f7f7" id="id_portfolio">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
          <h5 class="text-center"><strong>Platform Support</strong>
            <br>
            <span class="text-center text-grey text-h6">
                  Windows, Ubuntu and MacOS are officially supported via installers.<br>
                For other platforms, try the JAR-file!
                </span>
          </h5>
        </div>
      </div>
      <br>
      <div class="row text-center" style="padding-bottom: 99px">
        <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
          <div style="line-height:0">
                <span v-for="index in 6" :key="index">
                  <q-flashcard :no-hover="hover" :style="style">
                    <q-flashcard-section transition="nudge-in" :active="active">
                      <img :src="require(`src/statics/serverpackcreator/cards/${index}.png`)" width=340 height=263
                           alt="">
                    </q-flashcard-section>
                    <q-flashcard-section transition="fade-in" class="fit" :active="active">
                      <div class="fit" :style="background_style"></div>
                      <q-flashcard-section v-if="index < 4" transition="drop-down" class="text-center my-header"
                                           :active="active">
                        CLI Mode
                      </q-flashcard-section>
                      <q-flashcard-section v-else transition="drop-down" class="text-center my-header" :active="active">
                        GUI Mode
                      </q-flashcard-section>
                      <q-flashcard-section v-if="index < 4" transition="slide-up-in" class="my-text" :active="active">
                        Generating server packs right from the commandline.
                      </q-flashcard-section>
                      <q-flashcard-section v-else transition="slide-up-in" class="my-text" :active="active">
                        Convenient, extensive and quick to configure and generate.
                      </q-flashcard-section>
                    </q-flashcard-section>
                  </q-flashcard>
                  <br v-if="index===3"/>
                  </span>
          </div>
        </div>
      </div>
    </div>
    <div class="quote" id="id_testimonial">
      <div style="background-color: #000000ad !important;">
        <q-carousel
          v-model="review_slide"
          swipeable
          animated
          infinite
          autoplay
          arrows
          navigation
          padding
          navigation-position="bottom"
          class="text-white full-height bg-transparent q-mx-xl"
        >
          <q-carousel-slide style="padding-bottom: 140px" name="style" class="column no-wrap flex-center">
            <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + primaryColour"
                 src="/statics/images/team_1.jpg" width=150 height=150>
            <div class="q-mt-md text-h6 text-center">
              <span :style="'color:'+primaryColour">John Doe</span><br><span
              class="text-overline">Organization Founder</span>
            </div>
            <div class="q-mt-md text-h6 text-center">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut<br>
              labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut<br>
              labore et dolore magna aliqua.
            </div>
          </q-carousel-slide>
          <q-carousel-slide style="padding-bottom: 140px" name="tv" class="column no-wrap flex-center">
            <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + primaryColour"
                 src="/statics/images/team_2.jpg" width=150 height=150>
            <div class="q-mt-md text-h6 text-center">
              <span :style="'color:'+primaryColour">John Doe</span><br><span
              class="text-overline">Lead Developer</span>
            </div>
            <div class="q-mt-md text-h6 text-center">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut<br>
              labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut<br>
              labore et dolore magna aliqua.
            </div>
          </q-carousel-slide>
          <q-carousel-slide style="padding-bottom: 140px" name="layers" class="column no-wrap flex-center">
            <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + primaryColour"
                 src="/statics/images/team_3.jpg" width=150 height=150>
            <div class="q-mt-md text-h6 text-center">
              <span :style="'color:'+primaryColour">John Doe</span><br><span
              class="text-overline">Product Owner</span>
            </div>
            <div class="q-mt-md text-h6 text-center">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut<br>
              labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut<br>
              labore et dolore magna aliqua.
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <div style="background: #f7f7f7" id="id_services">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
          <h5 class="text-center"><strong>Help - Support - Contributing</strong></h5>
        </div>
      </div>
      <div class="q-pa-xl">
        <div class="row q-col-gutter-sm ">
          <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs ">
              <q-item-section side :style="'background-color:' + primaryColour"
                              class="q-pa-sm q-mr-none text-white">
                <q-icon name="compare_arrows" size="65px"></q-icon>
              </q-item-section>
              <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">Contributing</q-item-label>
                <q-item-label class="text-grey-8">Want to contribute to ServerPackCreator? Check out the <br>
                  <strong>
                    <a href="https://github.com/Griefed/ServerPackCreator/blob/main/CONTRIBUTING.md"
                       rel="noreferrer noopener"
                       target="_blank">Contributing-Guidelines</a>
                  </strong>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs">
              <q-item-section side :style="'background-color:' + primaryColour"
                              class="q-pa-sm q-mr-none text-white">
                <q-icon name="far fa-life-ring" size="65px"></q-icon>
              </q-item-section>
              <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">Support</q-item-label>
                <q-item-label class="text-grey-8">Encountered a bug in ServerPackCreator?<br>
                  <strong>
                    <a href="https://github.com/Griefed/ServerPackCreator/issues"
                       rel="noreferrer noopener"
                       target="_blank">Report issues on GitHub.</a>
                  </strong>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
              <q-item-section side :style="'background-color:' + primaryColour"
                              class="q-pa-sm q-mr-none text-white">
                <q-icon name="fas fa-book" size="65px"></q-icon>
              </q-item-section>
              <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">Wiki</q-item-label>
                <q-item-label class="text-grey-8">Need help or details about ServerPackCreators features?<br>
                  <strong>
                    <a href="https://wiki.griefed.de/en/Documentation/ServerPackCreator/ServerPackCreator-Help"
                       rel="noreferrer noopener"
                       target="_blank">Check out the official Wiki</a>
                  </strong>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-mt-lg">
          <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs ">
              <q-item-section side :style="'background-color:' + primaryColour"
                              class="q-pa-sm q-mr-none text-white">
                <q-icon name="fas fa-code-branch" size="65px"></q-icon>
              </q-item-section>
              <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">Sources</q-item-label>
                <q-item-label class="text-grey-8">Intereseted in the source code of ServerPackCreator?<br>
                  <strong>
                    <a href="https://github.com/Griefed/ServerPackCreator"
                       rel="noreferrer noopener"
                       target="_blank">See the publicly available GitHub-Repository</a>
                  </strong>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs">
              <q-item-section side :style="'background-color:' + primaryColour"
                              class="q-pa-sm q-mr-none text-white">
                <q-icon name="fas fa-paper-plane" size="65px"></q-icon>
              </q-item-section>
              <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">Community</q-item-label>
                <q-item-label class="text-grey-8">Want to talk to other users of ServerPackCreator, or the team?<br>
                  <strong>
                    <a href="https://discord.griefed.de/"
                       rel="noreferrer noopener"
                       target="_blank">Join the Discord server!</a>
                  </strong>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
              <q-item-section side :style="'background-color:' + primaryColour"
                              class="q-pa-sm q-mr-none text-white">
                <q-icon name="fab fa-wordpress" size="65px"></q-icon>
              </q-item-section>
              <q-item-section class="q-pa-md q-ml-none">
                <q-item-label class="text-h6 text-grey-9 text-uppercase">News</q-item-label>
                <q-item-label class="text-grey-8">I occasionally write blog-posts, sometimes Minecraft-related.<br>
                  <strong>
                    <a href="https://blog.griefed.de/"
                       rel="noreferrer noopener"
                       target="_blank">Check out the blog.</a>
                  </strong>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import {ref} from "vue";
import {getCssVar, scroll} from "quasar"

const {getScrollTarget, setScrollPosition} = scroll
import {QFlashcard, QFlashcardSection} from '@quasar/quasar-ui-qflashcard'

export default {
  name: "ServerPackCreator",
  components: {
    QFlashcard,
    QFlashcardSection
  },
  data() {
    return {
      slide: 1,
      review_slide: 'style',
      bg_color: 'rgb(0, 163, 82)',
      hover: false,
      active: false,
      primaryColour: getCssVar('primary'),
      secondaryColour: getCssVar('secondary'),
      warningColour: getCssVar('warning'),
      accentColour: getCssVar('accent'),
      darkColour: getCssVar('dark '),
      positiveColour: getCssVar('positive'),
      negativeColour: getCssVar('negative'),
      infoColour: getCssVar('info  '),
      background_style: 'background-color:rgba(0, 163, 82, 0.7);',
      about_heading_1: [],
      about_heading_2: [],
      about_heading_3: [],
      about_heading_color_1: '#696969',
      about_heading_color_2: '#696969',
      about_heading_color_3: '#696969'
    }
  },
  setup() {
    return {}
  },
  computed: {
    style() {
      return {
        width: '340px',
        height: '263px',
        textAlign: 'center',
        boxShadow: '1px 1px 2px #e6e6e6',
        display: 'inline-block'
      }
    }
  },
  methods: {
    hoverOver: function (index) {
      this['about_heading_color_' + index] = this.secondaryColour;
      this['about_heading_' + index] = ['animated', 'bounceIn'];
    },
    hoverOutTimeout: function (index) {
      this['about_heading_color_' + index] = '#696969';
      setTimeout(() => {
        this['about_heading_' + index] = [];
      }, 1000);
    },
  },
  mounted() {
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

.my-other-card {
  /*noinspection CssUnknownTarget*/
  /*background-image: url("~assets/background.webp");*/
  background: #EEEEEE repeat fixed;
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

.main_line {
  font-size: 75px;
  letter-spacing: 5px;
  line-height: 60px;
  font-weight: 600;
}

.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
}

.animation_1 {
  -webkit-animation: bounceIn 1s ease-in 800ms both;
  animation: bounceIn 1s ease-in 800ms both;
}

.animation_2 {
  -webkit-animation: flipInX 2s ease-in-out 800ms both;
  animation: flipInX 1s ease-in-out 800ms both;
}

.animation_3 {
  -webkit-animation: lightSpeedIn 1s ease-in 800ms both;
  animation: lightSpeedIn 1s ease-in 800ms both;
}

.description {
  padding: 10px;
  background-color: black;
  color: white;
  box-shadow: 1px 1px 2px #e6e6e6;
}

.my-header {
  width: 200px;
  top: 0;
  height: 45px;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  text-align: center;
  font-size: 17px;
  margin: 20px 0 0 68px;
  padding: 25px;
}

.my-text {
  width: 100%;
  top: 0;
  height: 90px;
  color: white;
  text-align: center;
  font-size: 15px;
  margin: 79px 0 0 0;
  padding: 20px;
  line-height: normal;
  font-family: Georgia, serif;
  font-style: italic;
}

.my-button-container {
  width: 100%;
}

.my-button {
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  text-align: center;
  padding: 7px 14px;
  background-color: #000;
  color: #fff;
  box-shadow: 0 0 1px #000;
  transition-delay: 0.2s;
}

.my-button:hover {
  box-shadow: 0 0 5px #000;
}

.box-shadow:hover {
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important;
}

.my-card {
  width: 350px;
  max-width: 350px;
  margin-top: 10px;
}

.team-header {
  width: 100%;
  top: 0;
  height: 45px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 17px;
  margin: 60px 0 0 0;
  padding: 12px;
}

.team-text {
  width: 100%;
  top: 0;
  height: 90px;
  color: white;
  text-align: center;
  font-size: 15px;
  margin: 100px 0 0 0;
  padding: 20px;
  line-height: normal;
  font-family: Georgia, serif;
  font-style: italic;
}

.custom_tab {
  width: 130px;
}
</style>
