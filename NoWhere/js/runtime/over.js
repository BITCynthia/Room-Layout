import DataBus from '../databus'
import Button from '../base/button'

let databus = new DataBus()

const helpButtonPadding = 15

//重玩按钮
const IMG_REPLAY_SRC = 'images/Again.png'
const IMG_REPLAY_WIDTH = 400
const IMG_REPLAY_HEIGHT = 200

//彩蛋
const IMG_EGG_SRC = 'images/egg.png'
const IMG_EGG_WIDTH = 267
const IMG_EGG_HEIGHT = 308

export default class Over {
  constructor() {
    // 重玩按钮
    let replayRatio = (databus.screenWidth * 0.4) / IMG_REPLAY_WIDTH
    this.btnReplay = new Button(
      IMG_REPLAY_SRC,
      (databus.screenWidth - replayRatio * IMG_REPLAY_WIDTH) / 2,
      (databus.screenHeight - replayRatio * IMG_REPLAY_HEIGHT) / 2 + replayRatio * IMG_REPLAY_HEIGHT * 1.5,
      replayRatio * IMG_REPLAY_WIDTH,
      replayRatio * IMG_REPLAY_HEIGHT
    )

    let eggRatio = (databus.screenWidth*0.6) / IMG_EGG_WIDTH
    this.btnEgg = new Button(
      IMG_EGG_SRC,
      (databus.screenWidth - replayRatio * IMG_EGG_WIDTH) / 3.25,
      (databus.screenHeight - replayRatio * IMG_EGG_HEIGHT*5) / 2,
      eggRatio * IMG_EGG_WIDTH,
      eggRatio * IMG_EGG_HEIGHT
    )

  }

  tap(event) {
      if (databus.gameOver) {
        return this.tapGameOver(event)
      }
  }

  //游戏结束
  tapGameOver(event) {
    if (this.btnReplay.isTapped(event.x, event.y)) {
      databus.reset()
      databus.guidefinished = true      //引导结束
    }
  }

  //绘制通关界面
  render(ctx) {
      if (databus.gameOver) {
        return this.renderGameOver(ctx)
      }
  }

  //绘制游戏通关的界面
  renderGameOver(ctx) {
    // 绘制半透明背景
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 0, databus.screenWidth, databus.screenHeight);
    ctx.globalAlpha = 1;

    ctx.fillStyle = "#ffffff"
    ctx.font = "30px Arial"
    ctx.fillText(
      '恭喜您!通关啦！',
      //databus.contentPadding + databus.screenWidth / 6.5,
      this.btnEgg.x,
      //databus.contentPaddingTop*1.15,
      (this.btnEgg.y + this.btnEgg.height) * 1.2
    )

    this.btnReplay.render(ctx)
    this.btnEgg.render(ctx)
  }

}