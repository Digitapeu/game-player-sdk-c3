"use strict";

{
  C3.Plugins.DIGITAP_SDK.Cnds = {
    ResumeGame() {
      return !this._adPlaying;
    },
    PauseGame() {
      return this._adPlaying;
    },
    StartFromZero() {
      return !this._continueWithScore;
    },
    ContinueWithScore() {
      return this._continueWithScore;
    }
  };
}
