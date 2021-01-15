"use strict";
{
  const PLUGIN_CLASS = SDK.Plugins.DIGITAP_SDK;

  PLUGIN_CLASS.Type = class DIGITAP_SDK_Type extends SDK.ITypeBase {
    constructor(sdkPlugin, iObjectType) {
      super(sdkPlugin, iObjectType);
    }
  };
}
