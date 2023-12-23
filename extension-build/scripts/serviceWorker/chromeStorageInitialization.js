"use strict";

/**
 * copy from initValues.js
 */
const initValues = {
  snowfallEnable: true,
  snowfallCount: 100,
  snowfallColor: "#cd4c4c",
  snowfallZtop: true,
  snowfallColorMode: "static",
  snowfallMelting: true,
  snowfallDirectionMode: "dynamic",
  snowfallDirectionStaticAngle: 0,
};

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason !== chrome.runtime.OnInstalledReason.INSTALL) { return; }

  chrome.storage.local.set({ 'snowfallColor': initValues.snowfallColor });
  chrome.storage.local.set({ 'snowfallEnable': initValues.snowfallEnable });
  chrome.storage.local.set({ 'snowfallCount': initValues.snowfallCount });
  chrome.storage.local.set({ 'snowfallZtop': initValues.snowfallZtop });
  chrome.storage.local.set({ 'snowfallColorMode': initValues.snowfallColorMode });
  chrome.storage.local.set({ 'snowfallMelting': initValues.snowfallMelting });
  chrome.storage.local.set({ 'snowfallDirectionMode': initValues.snowfallDirectionMode });
  chrome.storage.local.set({ 'snowfallDirectionStaticAngle': initValues.snowfallDirectionStaticAngle });
});
