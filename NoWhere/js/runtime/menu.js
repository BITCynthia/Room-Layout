import DataBus from '../databus'
import Button from '../base/button'

let databus = new DataBus()

//开始菜单背景
const IMG_MENU_BG = 'images/menu.png'
const IMG_MENU_WIDTH = 800
const IMG_MENU_HEIGHT = 1000

//开始游戏按钮
const IMG_START_SRC = 'images/startgame.png'
const IMG_START_WIDTH = 400
const IMG_START_HEIGHT = 200

wx.cloud.init()
//const db = wx.cloud.database({
//  env:'test'
//})
const db = wx.cloud.database()

export default class Menu {
  constructor() {
    // 开始菜单背景
    let imgMenuRatio = (databus.screenWidth * 0.8) / IMG_MENU_WIDTH
    this.imgMenu = new Button(
      IMG_MENU_BG,
      (databus.screenWidth - imgMenuRatio * IMG_MENU_WIDTH) / 2,
      (databus.screenHeight - imgMenuRatio * IMG_MENU_HEIGHT) / 2,
      imgMenuRatio * IMG_MENU_WIDTH,
      imgMenuRatio * IMG_MENU_HEIGHT
    )

    let btnRatio = (databus.screenWidth * 0.5) / IMG_START_WIDTH

    //开始游戏按钮  
    this.btnStart = new Button(
      IMG_START_SRC,
      (databus.screenWidth - btnRatio * IMG_START_WIDTH) / 2,
      (databus.screenHeight - btnRatio * IMG_START_HEIGHT) / 2 + btnRatio * IMG_START_HEIGHT * 0.7,
      btnRatio * IMG_START_WIDTH,
      btnRatio * IMG_START_HEIGHT
    )

  }

  tap(event) {
    if (!databus.gameStart&&databus.guidefinished) {
      return this.tapGameStart(event)
    }
  }

  //开始游戏
  tapGameStart(event) {
    if (this.btnStart.isTapped(event.x, event.y)) {
      databus.gameLevel = 1
      databus.gameStart = true
      databus.startTime = Date.now()
      
      //此处写入数据库
      db.collection('2round').add({
        data: {
        },
        success: res => {
          databus.round = res._id
        }
      })

    }
  }

  //绘制菜单界面
  render(ctx) {
    if (!databus.gameStart && databus.guidefinished) {
      return this.renderGameMenu(ctx)
    }
  }

  renderGameMenu(ctx) {
    // 绘制半透明背景
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 0, databus.screenWidth, databus.screenHeight);
    ctx.globalAlpha = 1;

    this.imgMenu.render(ctx)
    this.btnStart.render(ctx)
  }

}