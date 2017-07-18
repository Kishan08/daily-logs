var h1 = document.getElementById('timer'),
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t,
    // getTimer = document.getElementById('timer').textContent,
    getActivity = document.getElementById('getActivity'),
    fetchVal = document.getElementById('fetchVal'),
    log_form = document.getElementById('log_form');

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
  t = setTimeout(add, 1000);
}
// timer();

/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
  clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
  // clearTimeout(t);
  h1.textContent = "00:00:00";
  seconds = 0; minutes = 0; hours = 0;
}
var i = 1;
function activityArr() {
  if(i > 0){
    var keyVal = 'activity_' + i;
  }
  i++;
  return keyVal;
}
log_form.addEventListener('submit', function(e){
  e.preventDefault();
  // console.log(activityArr());
  // localforage.getItem(activityArr()).
  //   then(function(value) {
  //     console.log(value);
  //   }).catch(function(err) {
  //     console.log(err);
  //   });
  // localforage.iterate(function(value, key, iterationNumber) {
  //     console.log([key, value]);
  //   }).then(function() {
  //     console.log('Iteration has completed');
  //   }).catch(function(err) {
  //     console.log(err);
  //   });
  localforage.setItem(activityArr(), [h1.textContent, getActivity.value])
    .then(function (val) {
      console.log(val[0], val[1]);
    }).catch(function(err){
      console.log(err);
    });
  // localforage.key(2).then(function(keyName) {
  //       console.log(keyName);
  //   }).catch(function(err) {
  //       console.log(err);
  //   });
//   localforage.clear().then(function() {
//     // Run this code once the database has been entirely deleted.
//     console.log('Database is now empty.');
// }).catch(function(err) {
//     // This code runs if there were any errors
//     console.log(err);
// });
});
