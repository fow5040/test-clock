import { settingsStorage } from "settings";
import * as messaging from "messaging";
import { me } from "companion";

// Settings have been changed
settingsStorage.onchange = function(evt) {
  sendValue(evt.key, evt.newValue);
}

// Settings were changed while the companion was not running
if (me.launchReasons.settingsChanged) {
  // Send the value of the setting
  sendValue("indicator.color", settingsStorage.getItem("indicator.color"));
  sendValue("hour.fixed", settingsStorage.getItem("hour.fixed"));
  sendValue("indicator.seconds", settingsStorage.getItem("indicator.seconds"));
}

function sendValue(key, val) {
  if (val) {
    sendSettingData({
      key: key,
      value: JSON.parse(val)
    });
  }
}
function sendSettingData(data) {
  // If we have a MessageSocket, send the data to the device
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.log("No peerSocket connection");
  }
}