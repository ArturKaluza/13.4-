const os = require('os');

function upTime() {
  let upTime = os.uptime();
  let seconds = (upTime%60).toFixed(0); 
  let minutes = ((upTime/60).toFixed(0))%60;
  let hour = Math.floor((upTime/3600)); 

  console.log('Uptime: ' + hour + 'h ' + minutes + 'min ' + seconds + 's');
}

exports.timeRun = upTime;