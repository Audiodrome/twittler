$(document).ready(function() {
  var $body = $('body');
  $body.html('');

  var color1 = ['#00b388', '#0084b3', '#002bb3', '#2e00b3', '#8800b3', '#b30084'];
  // var color2 = ['#5a00b3', '#b300b3', '#b30059', '#b30000', '#b35a00', '#b3b300'];

  var index = streams.home.length - 1;
  while(index >= 0){
    // console.log(streams.home[index]);
    var backgroundColor = color1[getRandomInt(0, 6)];
    var tweet = streams.home[index];
    var $tweet = $('<div style="background-color:' + backgroundColor + '" class="alert Josefin"></div>');
    // $('.alert').wrap('<a href="">' + tweet.user + '</a>');
    getTimeDifference(tweet.created_at);
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
    $tweet.appendTo('body');

    index -= 1;
  }

  $('.alert').click(function(){

    var tweet = $(this).text();;
    var re = /^@\w+:/g;

    var twittlerName = re.exec(tweet)[0];
    twittlerName = twittlerName.substring(1, twittlerName.length - 1);
    var $body = $('body');
    $body.html('');

    var index = streams.users[twittlerName].length - 1;
    while(index >= 0){

      var tweet = streams.users[twittlerName][index];
      var $tweet = $('<div class="alert Josefin"></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
      $tweet.appendTo('body');
      index -= 1;
    }
  });

});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getTimeDifference(startDate) {

  var endDate = new Date();

  console.log(startDate.getTime());

  var msec = (endDate.getTime() - startDate.getTime());

  //console.log(msec);

  var hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  var mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  var ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  //console.log(hh + ":" + mm + ":" + ss);

  return hh + ":" + mm + ":" + ss;
}
