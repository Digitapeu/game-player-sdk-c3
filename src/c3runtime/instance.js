"use strict";

{
  C3.Plugins.DIGITAP_SDK.Instance = class SingleGlobalInstance extends C3.SDKInstanceBase {
    constructor(inst, properties) {
      super(inst);

      // Initialise object properties
      this._gameID = "";
      this._adPlaying = false;
      this._continueWithScore = false;

      // note properties may be null in some cases
      if (properties) {
        this._gameID = properties[0];
      }

      window.digitapSDK=window.digitapSDK||function(){(digitapSDK.q=digitapSDK.q||[]).push(arguments)};digitapSDK.l=+new Date;

      // Init the SDK
      digitapSDK('init', true, true);

      // Handle the events from our GameBox
      let sdk = this
      digitapSDK('setCallback', 'afterStartGameFromZero', function () {
        // start the game fresh, from zero
        sdk._continueWithScore = false;
      });

      digitapSDK('setCallback', 'afterContinueWithCurrentScore', function (score) {
        // user paid for extra live, continue game from last score
        sdk._continueWithScore = true;
      });

      digitapSDK('setCallback', 'afterStartGame', function () {
        // advertisement done, resume game logic and unmute audio
        sdk._adPlaying = false;
      });

      digitapSDK('setCallback', 'afterPauseGame', function () {
        // pause game logic / mute audio
        sdk._adPlaying = true;
      });

      // Load the SDK from the CDN
      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//files.digitap.eu/sdk/main.min.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "digitap-jssdk");
    }

    Release() {
      super.Release();
    }

    SaveToJson() {
      return {
        // data to be saved for savegames
      };
    }

    LoadFromJson(o) {
      // load state for savegames
    }

    SetProgress(state, score, level) {
      digitapSDK('setProgress', state, score, level);
    }

    SetLevelUp(newLevel) {
      digitapSDK('setLevelUp', newLevel);
    }

    SetPlayerFailed(state) {
      digitapSDK('setPlayerFailed', state);
    }
  };
}
