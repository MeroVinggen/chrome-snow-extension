"use strict";

const initValues = {
	enable: true,
	count: 100,
	color: "#000000",
	onTop: true,
	dynamicColor: "static",
};

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.storage.local.set({ 'snowfallColor': initValues.color });
    chrome.storage.local.set({ 'snowfallEnable': initValues.enable });
    chrome.storage.local.set({ 'snowfallCount': initValues.count });
    chrome.storage.local.set({ 'snowfallZtop': initValues.onTop });
    chrome.storage.local.set({ 'snowfallColorMode': initValues.dynamicColor });
  }
});
