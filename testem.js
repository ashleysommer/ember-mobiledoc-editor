/* eslint-env node */
'use strict';
const testWindowWidth = 1920;
const testWindowHeight = 1080;
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: [
    'Firefox'
  ],
  launch_in_dev: [
    'Firefox'
  ],
  browser_args: {
    Firefox: [
      //'-headless',//comment this line out for debugging purpose
      '--devtools',
      `-width ${testWindowWidth}`,
      `-height ${testWindowHeight}`
    ],
    Chrome: {
      mode: 'ci',
      args: ['--disable-gpu', '--headless', '--remote-debugging-port=0', '--window-size=1440,900']
    }
  }
}
