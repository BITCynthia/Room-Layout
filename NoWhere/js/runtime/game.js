import DataBus from '../databus'
import Button from '../base/button'

let databus = new DataBus()

//计时背景
const IMG_TIME_SRC = 'images/time_bg.png'
const IMG_TIME_WIDTH = 400
const IMG_TIME_HEIGHT = 200

const helpButtonPadding = 22

//重玩按钮
const IMG_REPLAY_SRC = 'images/replay.png'
const IMG_REPLAY_WIDTH = 300
const IMG_REPLAY_HEIGHT = 200

export default class Game {
  constructor() {
    // 时间块
    let timeRatio = (databus.screenWidth * 0.16) / IMG_TIME_WIDTH
    this.timeBanner = new Button(
      IMG_TIME_SRC,
      databus.contentPadding,
      databus.contentPaddingTop - (timeRatio * IMG_TIME_HEIGHT + helpButtonPadding),
      timeRatio * IMG_TIME_WIDTH,
      timeRatio * IMG_TIME_HEIGHT
    )

    // 重玩按钮
    let replayRatio = (databus.screenWidth * 0.12) / IMG_REPLAY_WIDTH
    this.btnReplay = new Button(
      IMG_REPLAY_SRC,
      (databus.contentPadding + databus.contentWidth) - replayRatio * IMG_REPLAY_WIDTH,
      databus.contentPaddingTop - (replayRatio * IMG_REPLAY_HEIGHT + helpButtonPadding),
      replayRatio * IMG_REPLAY_WIDTH,
      replayRatio * IMG_REPLAY_HEIGHT
    )
}

  tap(event) {
    if (databus.gameStart&&!databus.gameOver) {
        return this.tapGamePlaying(event)
    }
  }

  tapGamePlaying(event) {

    //重玩本轮
    if (this.btnReplay.isTapped(event.x, event.y)) {
      //return databus.reset()
      databus.levelagain=true
      //console.log("levelagain",databus.levelagain)
    }
  }

  //绘制
  render(ctx) {
    if (databus.gameStart) {
      if (!databus.gameOver) {
        return this.renderGamePlaying(ctx)
      }
    }
  }

  //绘制游戏中的界面
  renderGamePlaying(ctx) {
    // 绘制时间
    this.timeBanner.render(ctx)
    ctx.fillStyle = "#ffffff"
    ctx.font = "15px Arial"
    ctx.fillText(
      databus.getCurrentTime(),
      this.timeBanner.x + (this.timeBanner.width / 2 - 18),
      this.timeBanner.y + (this.timeBanner.height / 2 + 5)
    )

    //绘制重玩按钮
    this.btnReplay.render(ctx)

  }

}