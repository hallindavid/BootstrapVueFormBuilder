<template>
  <div class="home">
    <b-container>
        
            <div class="text-center mt-5">
              <h2>Welcome to the Bootstrap Vue Form Builder</h2>
                <div class="my-5">
                  <h5>What is it?</h5>
                  It is a way to quickly scaffold <b-link href="https://bootstrap-vue.js.org/" target="_blank()">Bootstrap Vue</b-link> forms
                </div>

                <div class="my-5">
                  <h5>The Vision</h5>
                  I think that most of the code for forms is repeatable, <br />
                  so if this does 80% of the work,<br />
                  you use IDE snippets for another 15% <br />
                  and you manually clean up that last 5%<br />
                  I'd call that a win<br />
                </div>

                <div class="my-5">
                  <h5>What is it built with?</h5>
                    <b-list-group class="w-50 mx-auto">
                      <b-list-group-item><b-link href="https://bootstrap-vue.js.org/" target="_blank()">Bootstrap Vue</b-link></b-list-group-item>  
                      <b-list-group-item><b-link href="https://vuejs.org/" target="_blank()"><font-awesome-icon :icon="['fab', 'vuejs']" /> Vue.js</b-link></b-list-group-item>
                      <b-list-group-item><b-link href="https://vuejs.org/" target="_blank()"><font-awesome-icon :icon="['fab', 'bootstrap']" /> Bootstrap</b-link></b-list-group-item>
                      <b-list-group-item><b-link href="https://fontawesome.com/" target="_blank()"><font-awesome-icon :icon="['fab', 'font-awesome-alt']" /> Font Awesome</b-link></b-list-group-item>
                      <b-list-group-item><b-link href="https://github.com/Inndy/vue-clipboard2" target="_blank()">Vue Clipboard 2</b-link><br /><small>for the copy in the import/export section</small></b-list-group-item>
                      <b-list-group-item><b-link href="https://github.com/Jexordexan/vue-slicksort" target="_blank()">vue-slicksort</b-link><br /><small>for sorting the fields within the rows</small></b-list-group-item>                      
                      <b-list-group-item><b-link href="https://github.com/nicolasbeauvais/vue-social-sharing" target="_blank()">vue-social-sharing</b-link><br /><small>for the social sharing buttons</small></b-list-group-item>                      
                    </b-list-group>
                </div>

                <div class="my-5">
                  <h5>Will it steal your forms?</h5>
                  No.  Everything is done in the front-end, there is no backend to this application
                </div>

                <div class="my-5">
                  <h5>License</h5>
                  MIT
                </div>

                <div class="my-5">
                  <h5>Any association with Bootstrap or Bootstrap Vue?</h5>
                  this package uses them, but there is no association at all
                </div>

                <div class="my-5">
                  <h5>Who maintains it?</h5>
                  David Hallin (see footer)
                </div>

                <div class="my-5">
                  <h5>Can I save my forms?</h5>
                  You can!  when in the form builder, you can go to import/export and get a JSON string which can be later imported back into the application and you can resume your work
                </div>

                <div class="my-5">
                  <h5>What kind of form elements are supported?</h5>
                  Right now it just does Select/Dropdown, Form Inputs (email/number/text/search), and checkboxes (with switch option)
                </div>

                <div class="my-5">
                  <h5>Validation?</h5>
                  If check the "Scaffold Validation" box when creating an input or select, it will create a computed method which you can finish up
                </div>

                <div class="my-5">
                  <h5>Want to help maintain/add to this project?</h5>
                  Send me an email at <a href="mailto:hallin.david@gmail.com">hallin.david@gmail.com</a>
                </div>

                <div class="my-5">
                  <h5>Want to support this project?</h5>
                  <br />
                  <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/tDbQ4kg"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:15px;font-size:28px !important;">Buy me a coffee</span></a>
                  <br /><br />
                  or
                  <br /><br />
                      <social-sharing url="https://vuejs.org/"
                      title="Bootstrap Vue Form Builder - A code-generation tool by @david_hallin that generates bootstrap-vue forms of the fly with a live preview"
                      quote="BootstrapVueFormBuilder"
                      hashtags="vuejs,bootstrap"
                      inline-template>
                        <div class="share-buttons mt-2">
                            <network network="facebook">
                              <font-awesome-icon :icon="['fab', 'facebook']"/> Facebook
                            </network>
                            <network network="linkedin">
                              <font-awesome-icon :icon="['fab', 'linkedin']"/> LinkedIn
                            </network>
                            <network network="reddit">
                              <font-awesome-icon :icon="['fab', 'reddit']"/> Reddit
                            </network>
                            <network network="twitter">
                              <font-awesome-icon :icon="['fab', 'twitter']"/> Twitter
                            </network>
                            <network network="whatsapp">
                              <font-awesome-icon :icon="['fab', 'whatsapp']"/> Whatsapp
                            </network>
                        </div>
                      </social-sharing>
                </div>

                <div class="my-5">
                  <h5>Issues?</h5>
                  <br />
                  If you come accross any issues and need support, go to to the GitHub repo and submit an issue report
                </div>



            </div>
    </b-container>
  </div>
</template>

<style>
.bmc-button img{height: 34px !important;width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 10px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#000000 !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 10px 7px 10px !important;font-size: 28px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}

.share-buttons > span {
  cursor: pointer;
  margin-left:10px;
  margin-right:10px;
  border:1px solid #919191;
  padding:3px 8px;
  border-radius: 1.25rem;

}

</style>

<script>

export default {
  name: 'Home',
}
</script>
