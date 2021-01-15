"use strict";
{
  const PLUGIN_CLASS = SDK.Plugins.DIGITAP_SDK;

  PLUGIN_CLASS.Instance = class DIGITAP_SDK_Instance extends SDK.IInstanceBase {
    constructor(sdkType, inst) {
      super(sdkType, inst);
    }

    Release() {}

    OnCreate() {}

    OnPropertyChanged(id, value) {}

    LoadC2Property(name, valueString) {
      return false; // not handled
    }
  };
}
