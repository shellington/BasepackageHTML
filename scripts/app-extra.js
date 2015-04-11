require.config({
  baseUrl: "/BasepackageHTML/scripts",
  paths: {
    "smartmenu": "plugins-extra/jquery.smartmenus",
    "smartmenuAddon": "plugins-extra/jquery.smartmenus.bootstrap"
  },
  shim: {
    "smartmenu": {
      "deps": ["jquery"]
    },
    "smartmenuAddon": {
      "deps": ["jquery", "smartmenu"]
    }
  }
});


