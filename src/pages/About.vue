<template>
  <q-card class="my-card text-left text-white">

    <q-card-section class="my-section">
<!--      <h3><strong>
        Angaben gemaess § 5 TMG
      </strong></h3>-->
      <h5><strong>
        Alle Produktnamen, Logos und Marken sind Eigentum ihrer jeweiligen Inhaber.<br>
        Alle Firmen-, Produkt- und Servicenamen, die auf dieser Website verwendet werden, dienen nur zu
        Identifikationszwecken.<br>
        Die Verwendung dieser Namen, Logos und Marken stellt keine Unterstützung dar.<br>
        <br>
        <br>
        Kontakt/Contact:<br>
        E-Mail: contact@griefed.de<br>
      </strong></h5>
<!--        <br>
        Angaben gemäß § 5 TMG:<br>
        David Hengstmann<br>
        c/o LEADERLY UG (haftungsbeschränkt)<br>
        Amtstraße 22<br>
        44575 Castrop-Rauxel<br>
        Quelle/Source:
        <a href="https://pure4u.de/impressum/" rel="noreferrer noopener" target="_blank">
          <span class="has-inline-color" style="color:#c0ffee">https://pure4u.de/impressum/</span>
        </a>-->
    </q-card-section>

    <q-card-section class="my-section">
      <h3><strong>
        About
      </strong></h3>
      <h5><strong>
        This is my personal website. There will be, obviously, all the content and stuff I've put on the interwebz over
        the last couple of years.<br><br>
        That includes, but is not limited to:<br>
        - GitHub Repositories<br>
        - Docker Hub Repositories<br>
        - Minecraft related things, like my own Modpack<br>
        - Websites & Services I am hosting<br><br>
        Images and photos were created/taken by me, unless otherwise stated or implied.
      </strong></h5>
    </q-card-section>

  </q-card>
</template>

<script>
export default {
  name: "about_page"
}
</script>

<style scoped>
.my-card {
  /*noinspection CssUnknownTarget*/
  background: transparent repeat fixed;
}

.my-section {
  padding-left: 100px;
}
</style>
