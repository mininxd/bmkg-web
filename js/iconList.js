import * as icon from './icon.js';

var iconList = document.getElementById('iconList')
if(!iconList) {
  console.log("")
} else {
iconList.classList.add('grid');
iconList.innerHTML = `
${icon.CloudSunIcon()}
${icon.SunIcon()}
${icon.SunMediumIcon()}
${icon.CloudIcon()}
${icon.CloudFogIcon()}
${icon.CloudRainIcon()}
${icon.CloudDrizzleIcon()}
${icon.CloudMoonIcon()}
${icon.CloudMoonRainIcon()}
${icon.HeavyCloudIcon()}
${icon.WindIcon()}
${icon.FogIcon()}
`
}