<template>
   <div class="container">
     <router-link to="/" class="back-button">Back to document list</router-link>
     <div class="pdf-container" style="width: 100%; height: 100vh"></div>
   </div>
</template>

<script scoped>
import PSPDFKit from "pspdfkit";

/**
 * PSPDFKit for Web example component.
 */
export default {
  name: 'PSPDFKit',
  /**
   * Adding the jwt and document id to data
   */
  data(){
   return{
     jwt:  "",
     documentId: this.$route.params.id || "",
   }
  },
  /**
   * We wait until the template has been rendered to load the document into the library.
   */
  async mounted() {
      //I will fetch the Web token from my backend
      const webtoken = await fetch(`/webtoken/${this.$data.documentId}`);
      this.$data.jwt = await webtoken.text();
      //Loading PSPDFKit
      await this.loadPSPDFKit();
  },

  /**
   * Our component has the `loadPSPDFKit` method. This unloads and cleans up the component and triggers document loading.
   */
  methods: {
    async loadPSPDFKit() {
      PSPDFKit.unload(".pdf-container");
      return PSPDFKit.load({
        documentId: this.$data.documentId,
        authPayload: {jwt: this.$data.jwt},
        instant: true,
        container: ".pdf-container",
        serverUrl: `${window.location.protocol}//${window.location.hostname}:5000/`
      });
    }
  },

  /**
   * Clean up when the component is unmounted so it's ready to load another document (not needed in this example).
   */
  beforeUnmount() {
    PSPDFKit.unload(".pdf-container");
  },
};
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back-button{
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background:#4A8FED;
  padding:10px;
  color:#fff;
  font:inherit;
  font-size: 16px;
  font-weight: bold;
}
</style>
