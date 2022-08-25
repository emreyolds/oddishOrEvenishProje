sap.ui.define(
  [
    "customActivity/controls/MessageBox",
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/library",
    "sap/ui/core/Core",
  ],
  function (MessageBox, Controller, coreLibrary, Core) {
    return Controller.extend(
      "customActivity.controller.AnaVeri",

      {
        onInit: function () {
          this.oddishOrEvenish();
        },

        oddishOrEvenish: function (value) {
          if (value % 2 == 0) {
            return "even";
          } else {
            return "odd";
          }
        },
      }
    );
  }
);
