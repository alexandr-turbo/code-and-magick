'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_HEIGHT = 16;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgb(1,1,1)';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 10, CLOUD_Y + FONT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 10, CLOUD_Y + FONT_HEIGHT * 2);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    // var a = parseInt(Math.random().toFixed(1), 10);
    // var roundedCloudHeight = Math.round(CLOUD_HEIGHT - GAP - FONT_HEIGHT - GAP - (BAR_HEIGHT * times[i]) / maxTime - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(1);
    }
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP - FONT_HEIGHT - GAP, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = 'rgb(1,1,1)';
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, (CLOUD_HEIGHT - GAP - FONT_HEIGHT - GAP - (BAR_HEIGHT * times[i]) / maxTime - GAP));
  }
};
