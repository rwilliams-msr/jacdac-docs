/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-6bab61da07a612fde3d4.js"
  },
  {
    "url": "framework-c0143a60828cff4b65c7.js"
  },
  {
    "url": "styles.70142e700204666b4874.css"
  },
  {
    "url": "styles-7397beb73600ab396bcd.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "16f713f3439704cf369d2f5b95b113f2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ed69e37097cc5629aac4.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "06d6460dcc554287800119c0780dac97"
  },
  {
    "url": "page-data/sq/d/2307937736.json",
    "revision": "bdffa1d5836031e55f315c882d122ad6"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "8354193822b6563805fa1522749e95ab"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "a473f08a2efdd3180cf807ac4862b0e6"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "744839af34bc83b2beaa07313a386ed5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "05a42726f7bf2a7b7cfa683b37ebc2e9"
  },
  {
    "url": "polyfill-4d20de916cfd43037bf4.js"
  },
  {
    "url": "component---src-pages-404-mdx-02b5a6178b24079484aa.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "5474865ff78ae09a14a8b41d65b79ebe"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "94d36396f99319c72fcc1b40a9774bdb"
  },
  {
    "url": "component---src-pages-clients-mdx-a3f2594e2f33991001b6.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "ea5d3a294803bc963607eef37b1638d5"
  },
  {
    "url": "cf039e4a1888f993f5c39f8ccfebea4b4ae1f9d4-4baaf4f16793c8a543ee.js"
  },
  {
    "url": "750afc85268fb08a1306f22a14f8a4cc1fdef2cf-14781b1bee56ea887155.js"
  },
  {
    "url": "6d34b895327c613204f980a2eb016d78c146288f-551804a08e5c62abe0af.js"
  },
  {
    "url": "44cd98ac582e8fb66251de1276e3fde754ed2d6e-3cbec76081a27ea28bfb.js"
  },
  {
    "url": "cbb6730da01939fadbb8c08fb45fbb242f5bf44f-8497131e9d8dfa22e47a.js"
  },
  {
    "url": "3119b7aee26fbc7d62565b2cb0d044711be15815-de0714815badcf3e5afd.js"
  },
  {
    "url": "a7fde601a2cae358984fcd1b193ded45e0dc63d7-fcbaaefbf7a5d3aaa34b.js"
  },
  {
    "url": "74493c31a6571423b4de02ce9ddf127887738210-0e98c7bfd1771f70ea24.js"
  },
  {
    "url": "e577ed790312093c60d6f42a2eefa9c8fa2c70c1-32de081b7936de64cba7.js"
  },
  {
    "url": "ecc66d45a30f170d6a1d7c210a0a1cebd03a3b5e-d52f4f0e06b62e3f87c9.js"
  },
  {
    "url": "02e38aa8e5d6b10d1b45e05692733ade4c651bf6-6643d10c5ee30afc3a22.js"
  },
  {
    "url": "bc1de39814113fdab2fbefae2ee854f0842f6be1-b551ba75c518bfba9eb4.js"
  },
  {
    "url": "f45028b77642bb06a1e26ecfd1b9356bfb549ad6-562847399288dccbe84a.js"
  },
  {
    "url": "component---src-pages-dashboard-tsx-1c18e0f479370e3490dc.js"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "213904b37cb7592cd6f13ee2c4f86fd1"
  },
  {
    "url": "d826a5e9160ce731340c6bf51b832ddd133ac24c-e3bdc146b602e5dae520.js"
  },
  {
    "url": "component---src-pages-devices-tsx-d80c37a8ee3a9bf2b89f.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "dcdb17db02b3f08fe77f88fbd516ec58"
  },
  {
    "url": "component---src-pages-dtmi-mdx-d1af6b63fea9464d39a8.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "922c06ce22fbafe23ffbe902872f7bea"
  },
  {
    "url": "component---src-pages-github-tsx-f0585f50dae833400061.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "7adc12c94f43568d4bdb0cc62f1e94c6"
  },
  {
    "url": "component---src-pages-index-mdx-cb87360fc9a23b963487.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "cd8ef10d6d8e0249c0b35ed3ebac5862"
  },
  {
    "url": "component---src-components-spec-tsx-2c30d0977956d23b4376.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "7118df1f90f6c103d3e407e3e0012315"
  },
  {
    "url": "component---src-pages-services-tsx-21160b56c17897ccb25b.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "82cbdb525dcf8c1ef73ee046171969c3"
  },
  {
    "url": "component---src-pages-tools-mdx-59aaa55cbebe7b28264a.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "f700e95b86abf2c15c9c99c61f937cd8"
  },
  {
    "url": "component---src-pages-traces-mdx-88257bd5c627c0f727ca.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "d377cde3089a20cb9d7647e5a72ea207"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "3b8acbab75bf7a2d883f9ae9f3fe97c0"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "680208e088b78a6c6733767569ea8b31"
  },
  {
    "url": "page-data/reference/led-status/page-data.json",
    "revision": "b26ad55c1525fdb553d077c196955839"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "ea7d3d3f8a61324d3ae229ce5b960fc5"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "31837a1f28cc1d24335b2f1722b123f3"
  },
  {
    "url": "page-data/reference/service-tests/page-data.json",
    "revision": "31b651e82ef4d684d5e960208690e8e2"
  },
  {
    "url": "component---src-templates-service-tsx-3f75bce32dba62c11e3a.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "ffff192c0c89b5ccfbd4863df8a123c6"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "37d702c8b0338211b3ff7423d52ceb5f"
  },
  {
    "url": "page-data/services/_system/page-data.json",
    "revision": "c5cb6360d1de4aad21da0d646c87124f"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "a4a3ba4132f45c7352fb5e6d30840f95"
  },
  {
    "url": "page-data/services/analogbutton/page-data.json",
    "revision": "5bdaf8eb6c7aa631e71c2a707e40aa21"
  },
  {
    "url": "page-data/services/arcadegamepad/page-data.json",
    "revision": "1e6c3b6818b548c38e61dddb04c4b3fe"
  },
  {
    "url": "page-data/services/arcadesound/page-data.json",
    "revision": "4dde1df0f1e3918cc9dfe344f33a779c"
  },
  {
    "url": "page-data/services/barcodereader/page-data.json",
    "revision": "2c9f51735549f89d63d6604f379c0ba2"
  },
  {
    "url": "page-data/services/barometer/page-data.json",
    "revision": "182e8bc84ab243b8eb84fef91edbc873"
  },
  {
    "url": "page-data/services/bitradio/page-data.json",
    "revision": "7aa5e79a2bba283d7ebe883f7618c0b3"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "846384e7e6d475cfd9fc346d24cd40ab"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "7dc9eae0c436a6727e1dbde0f234d38c"
  },
  {
    "url": "page-data/services/buzzer/page-data.json",
    "revision": "8a5a7b771f2d612f90d2249cad51b34d"
  },
  {
    "url": "page-data/services/characterscreen/page-data.json",
    "revision": "291afc7c7ff06b4104d29cd70290e9b1"
  },
  {
    "url": "page-data/services/color/page-data.json",
    "revision": "050c0c2b451681190d71043e16b6f16b"
  },
  {
    "url": "page-data/services/compass/page-data.json",
    "revision": "ab712f747c4ccb5bfc2152324c0be124"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "b604e63e4c0214ab28e3645f0afbd643"
  },
  {
    "url": "page-data/services/distance/page-data.json",
    "revision": "bfd6da306679a6def86ccdbf354dff66"
  },
  {
    "url": "page-data/services/dmx/page-data.json",
    "revision": "027e701ab13d5e6adef3ff32ce75bb3a"
  },
  {
    "url": "page-data/services/eco2/page-data.json",
    "revision": "ca05d76d3ab5b76d946fc74f87e6b021"
  },
  {
    "url": "page-data/services/gyroscope/page-data.json",
    "revision": "b09565fc6856700c443532c8f14b8d57"
  },
  {
    "url": "page-data/services/heartrate/page-data.json",
    "revision": "6608b388649922e09fcb38de398baed9"
  },
  {
    "url": "page-data/services/hidkeyboard/page-data.json",
    "revision": "3936b5afe5c9520ef137ff1bdf3e2733"
  },
  {
    "url": "page-data/services/hidmouse/page-data.json",
    "revision": "a5d93f8fcd90a52a2d750595d5497806"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "c6f3f51980d9ccf2770610e9d78f8258"
  },
  {
    "url": "page-data/services/illuminance/page-data.json",
    "revision": "1b26ede9816c814c5dcd23724965fd8c"
  },
  {
    "url": "page-data/services/indexedscreen/page-data.json",
    "revision": "f856c69b00ef98ab97865566a7e5d515"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "714dde10928c843803ac52e497a73f86"
  },
  {
    "url": "page-data/services/joystick/page-data.json",
    "revision": "3f37d2410b3fd99da0d5f9c5ea32e6e6"
  },
  {
    "url": "page-data/services/led/page-data.json",
    "revision": "9dfbbb16ac6ad48d8b80d61d3f04188f"
  },
  {
    "url": "page-data/services/ledmatrix/page-data.json",
    "revision": "a4df90edcc04c0d0f704453c12e5f40e"
  },
  {
    "url": "page-data/services/ledpixel/page-data.json",
    "revision": "5c71a83ddf4d525f10efda4cd1d3aeac"
  },
  {
    "url": "page-data/services/lightlevel/page-data.json",
    "revision": "70e88aa82b754e1026a2b36861fe593b"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "25bc6d125ec6e98a2ac74b046c145eba"
  },
  {
    "url": "page-data/services/magnetomer/page-data.json",
    "revision": "32e557e4843b3be7e44ff8695b7491ec"
  },
  {
    "url": "page-data/services/matrixkeypad/page-data.json",
    "revision": "efa68afdf8bb19b5e251fc4861d10e4e"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "80e69175b4a5d05a319192305dc4445b"
  },
  {
    "url": "page-data/services/midioutput/page-data.json",
    "revision": "856bdc9a3cf8d87e3f017fe2e56be683"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "5239a551898f8e88d619653b1b8da2f1"
  },
  {
    "url": "page-data/services/motion/page-data.json",
    "revision": "a601d93e895694fe1de9896622e40392"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "2b9a7556fac30587c28061311f41e9a4"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "74ccb7c343916281bd121a9a8ea34ad6"
  },
  {
    "url": "page-data/services/potentiometer/page-data.json",
    "revision": "10bc1e03c84a35213f9421c20e8e006b"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "ce2d34e477115c765a38f9105f59fba6"
  },
  {
    "url": "page-data/services/prototest/page-data.json",
    "revision": "f24f1c67e3d41628bac73f171b503416"
  },
  {
    "url": "page-data/services/pulseoximeter/page-data.json",
    "revision": "3d68d78549fe6ab8fbee36be16c7b3ae"
  },
  {
    "url": "page-data/services/raingauge/page-data.json",
    "revision": "087e7fcab3b91842c02a75f4255628bc"
  },
  {
    "url": "page-data/services/realtimeclock/page-data.json",
    "revision": "5a4338c8f43e5d9a2e998a3979620463"
  },
  {
    "url": "page-data/services/reflectedlight/page-data.json",
    "revision": "94f32389decf53886804da24871cb14e"
  },
  {
    "url": "page-data/services/relay/page-data.json",
    "revision": "d743ed842943a8e25e31389312b82258"
  },
  {
    "url": "page-data/services/rng/page-data.json",
    "revision": "3b3dd4a229cc176f0ad5afbf61d74b27"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "a5f1e90ffcb5b36124d0edf75a3fc0af"
  },
  {
    "url": "page-data/services/rotaryencoder/page-data.json",
    "revision": "f112aa82bc6ce3dbb458cc16852d0097"
  },
  {
    "url": "page-data/services/rover/page-data.json",
    "revision": "614ffe902450035a6940b495d490b2f3"
  },
  {
    "url": "page-data/services/sensoraggregator/page-data.json",
    "revision": "a2baac0887e57eb5a48a859b15ad327c"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "85ab54e241cbe6149d8164cf39a6e17b"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "bdd9a38470ebba8182433a44dc493fa4"
  },
  {
    "url": "page-data/services/sevensegmentdisplay/page-data.json",
    "revision": "7ba7adbbb3e9502298e9fcf8eccce618"
  },
  {
    "url": "page-data/services/soilmoisture/page-data.json",
    "revision": "a463f84f90946e7e4c515816d5581c80"
  },
  {
    "url": "page-data/services/solenoid/page-data.json",
    "revision": "2ed8afb8c2b305dd544055b8aba31233"
  },
  {
    "url": "page-data/services/soundlevel/page-data.json",
    "revision": "28cf094857896b02b83d57ed28b00795"
  },
  {
    "url": "page-data/services/soundplayer/page-data.json",
    "revision": "ecbe712e063290215319c09bb9d74144"
  },
  {
    "url": "page-data/services/soundspectrum/page-data.json",
    "revision": "8674e66a64dad490d7305dc3ea61551c"
  },
  {
    "url": "page-data/services/speechsynthesis/page-data.json",
    "revision": "de1bb7130283253426fd87885808110a"
  },
  {
    "url": "page-data/services/switch/page-data.json",
    "revision": "b9742e5d99c7d6e32cdeae577a5eac96"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "27fb8c93ecffc0e6c3f7afbfdff5fdda"
  },
  {
    "url": "page-data/services/thermocouple/page-data.json",
    "revision": "0caf2bd20671338e8f23d05bbaf9e84b"
  },
  {
    "url": "page-data/services/thermometer/page-data.json",
    "revision": "e31d2da13d9a083dbc14fb1d7b1c117b"
  },
  {
    "url": "page-data/services/trafficlight/page-data.json",
    "revision": "a28d2e8002175e7359fb6a83fea6a638"
  },
  {
    "url": "page-data/services/tvoc/page-data.json",
    "revision": "1808fafb9d0bc22a85793e417ff9fe3d"
  },
  {
    "url": "page-data/services/uvindex/page-data.json",
    "revision": "396ef70696d87b133fddcddabd50fc81"
  },
  {
    "url": "page-data/services/vibration/page-data.json",
    "revision": "f9dc256d8122a4e7b64035620d825b64"
  },
  {
    "url": "page-data/services/waterlevel/page-data.json",
    "revision": "80d13e96de298cb3eb86bb0cbb7d7ef1"
  },
  {
    "url": "page-data/services/weightscale/page-data.json",
    "revision": "f0868f702ea31ffc580ac5108dbcfa11"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "716d0ccbb9d65fc9bac04b92a913bd5c"
  },
  {
    "url": "page-data/services/winddirection/page-data.json",
    "revision": "399b378caa4864f0e9655d203be0aea3"
  },
  {
    "url": "page-data/services/windspeed/page-data.json",
    "revision": "4082716ad0ee7c29a56ac8b0339bcf14"
  },
  {
    "url": "249e61df663732c1f3cdba48aa110188c27a96f5-077ca69c95bee5d233b1.js"
  },
  {
    "url": "3dea66e397e61651ff0223cf2e83518e5e7f09c3-47c293e707058d3504c5.js"
  },
  {
    "url": "4aea166918f41f904ef6a7d90a3550790846eead-7b29881be1133581c524.js"
  },
  {
    "url": "component---src-pages-tools-azure-device-twin-designer-tsx-5398c11824bbab6059c5.js"
  },
  {
    "url": "page-data/tools/azure-device-twin-designer/page-data.json",
    "revision": "4a3a3db5ad8008a0e50a73f66cbdfeea"
  },
  {
    "url": "c733f1ab5716866b4fcee22f30b87eb4d89562eb-b20406ac8187b3437abe.js"
  },
  {
    "url": "component---src-pages-tools-collector-tsx-3fe84228e8936c0273de.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "740b8be8955088435bedfff205ccd1db"
  },
  {
    "url": "5cb7c78286c5fcecf4d3c60360196e55585b6a15-4017e3b139909113a311.js"
  },
  {
    "url": "component---src-pages-tools-device-registration-tsx-c9bdb1c56413a20c937b.js"
  },
  {
    "url": "page-data/tools/device-registration/page-data.json",
    "revision": "b75fc9ebf275129bb02372ae4ad3deea"
  },
  {
    "url": "component---src-pages-tools-model-uploader-tsx-14d13f819e6406e715c0.js"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-tsx-8f07b4e359467dd3bfad.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "81af322bae0cecb0e77527dd8a8b0b2e"
  },
  {
    "url": "component---src-pages-tools-flood-test-tsx-b717ecfd487439917b7f.js"
  },
  {
    "url": "page-data/tools/flood-test/page-data.json",
    "revision": "8c2893d243c8e082f3097affa2a61423"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-77f33519c4d7f36bdc44.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "537cd8f4ac8e0a6a3acac3ec1624aebb"
  },
  {
    "url": "component---src-pages-tools-led-animation-designer-tsx-44f2fbc5302285b84b6a.js"
  },
  {
    "url": "page-data/tools/led-animation-designer/page-data.json",
    "revision": "33c002dadc02f97189dcfdbb9d6a4154"
  },
  {
    "url": "component---src-pages-tools-makecode-mdx-58702c71bedd3d2c7e33.js"
  },
  {
    "url": "page-data/tools/makecode/page-data.json",
    "revision": "dc554b5a7b3bba043dc9096b8a2927b6"
  },
  {
    "url": "component---src-pages-tools-makecode-editor-extension-tsx-9e468104e21a16286cd9.js"
  },
  {
    "url": "page-data/tools/makecode-editor-extension/page-data.json",
    "revision": "fff97a63d7d76d0afb3e023b1d340b17"
  },
  {
    "url": "component---src-pages-tools-makecode-sim-tsx-1321f1c76892faa7b77e.js"
  },
  {
    "url": "page-data/tools/makecode-sim/page-data.json",
    "revision": "61e9dde0235718f6fc9c6b7209855630"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "a838dbf6f2db4c39cdcfc7a5c3a17004"
  },
  {
    "url": "de590f55fa2f17e49ed8680dc5a022fe834f3017-e9b129ccbc9e77d89f2c.js"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-tsx-e62c93c03ccaaec5bdce.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "88be1c3c5dcb00498e66a7bcf786752c"
  },
  {
    "url": "component---src-pages-tools-player-mdx-f305e12c24d290750ecb.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "e92e52f3a9625a37299f7173dd8afda8"
  },
  {
    "url": "component---src-pages-tools-prototest-tsx-face09b7f5bd44e8f93a.js"
  },
  {
    "url": "page-data/tools/prototest/page-data.json",
    "revision": "3df7a168968ae7ae4a28fc1f91316022"
  },
  {
    "url": "component---src-pages-tools-role-manager-tsx-b10035caadefbd01a4aa.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "e114583f0593e01b5e1c864f600d00d7"
  },
  {
    "url": "component---src-pages-tools-service-editor-tsx-11866db2b0f9e2f4bf03.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "74d24c010c1994eeb355234e8c489853"
  },
  {
    "url": "859a83de993caea7524bf57c2975f3be6812c8c3-af5cdffabe65f82b5292.js"
  },
  {
    "url": "component---src-pages-tools-service-test-tsx-589739aa0136575d1732.js"
  },
  {
    "url": "page-data/tools/service-test/page-data.json",
    "revision": "77e8979ad6aa9d38e005a705806733dc"
  },
  {
    "url": "component---src-pages-tools-service-test-editor-tsx-e5be0bd80df99392dda7.js"
  },
  {
    "url": "page-data/tools/service-test-editor/page-data.json",
    "revision": "a1216ffbe4732ada616c66d63a8c48f1"
  },
  {
    "url": "component---src-pages-tools-settings-manager-tsx-9928a9dae9ade725407c.js"
  },
  {
    "url": "page-data/tools/settings-manager/page-data.json",
    "revision": "969e038c1e6a37c17233d6e56ae3eed1"
  },
  {
    "url": "component---src-pages-tools-updater-tsx-14e2101a730db6257a4c.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "c886a85ca1c107b2a26076b89433ebc8"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a4531b6021f7244d01b003572b8f90d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/jacdac-docs`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/jacdac-docs/app-2cb1ba42d1525f3b8192.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/jacdac-docs/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
