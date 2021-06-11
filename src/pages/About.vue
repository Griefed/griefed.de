<template>
  <q-card class="my-card text-left text-white">

    <q-card-section class="my-section">
      <h3><strong>
        Angaben gemaess § 5 TMG / Information according to § 5 TMG
      </strong></h3>
      <h5><strong>
        Alle Produktnamen, Logos und Marken sind Eigentum ihrer jeweiligen Inhaber.<br>
        Alle Firmen-, Produkt- und Servicenamen, die auf dieser Website verwendet werden, dienen nur zu
        Identifikationszwecken.<br>
        Die Verwendung dieser Namen, Logos und Marken stellt keine Unterstützung dar.<br><br>

        All product names, logos and trademarks are the property of their respective owners.<br>
        All company, product and service names used on this website are for identification purposes only.<br>
        The use of these names, logos and trademarks does not constitute endorsement.<br><br>

        Kontakt/Contact:<br>
        E-Mail: kontakt@griefed.de<br>
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV /<br>Responsible for the content according to § 55 para. 2
        RStV:<br>
        David Hengstmann<br>
        Schulenbeksweg 10<br>
        20535 Hamburg<br><br>
        Quelle/Source:
        <a href="https://www.e-recht24.de/impressum-generator.html" rel="noreferrer noopener" target="_blank">
          <span class="has-inline-color" style="color:#c0ffee">https://www.e-recht24.de/impressum-generator.html</span></a>
      </strong></h5>
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
  name: "about"
}
</script>

<style scoped>
.my-card {
  /*noinspection CssUnknownTarget*/
  background-image: url("/images/background.webp");
  background-repeat: repeat;
  background-attachment: fixed;
}

.my-section {
  padding-left: 100px;
}
</style>
