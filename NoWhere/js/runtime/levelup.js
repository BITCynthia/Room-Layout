import DataBus from '../databus'
import Button from '../base/button'

let databus = new DataBus()

//菜单背景
const IMG_MENU_BG = 'images/menu1.png'
const IMG_MENU_WIDTH = 800
const IMG_MENU_HEIGHT = 1000

//下一关按钮
const IMG_NEXT_SRC = 'images/nextlevel.png'
const IMG_NEXT_WIDTH = 400
const IMG_NEXT_HEIGHT = 200

//重玩本关按钮
const IMG_RETHIS_SRC = 'images/rethis.png'
const IMG_RETHIS_WIDTH = 400
const IMG_RETHIS_HEIGHT = 200

//重玩本游戏按钮
const IMG_REGAME_SRC = 'images/regame.png'
const IMG_REGAME_WIDTH = 400
const IMG_REGAME_HEIGHT = 200

let instance

export default class LevelUp {
  constructor(){
    if (instance)
      return instance
    instance = this

    // 菜单背景
    let imgMenuRatio = (databus.screenWidth * 0.8) / IMG_MENU_WIDTH
    this.imgMenu = new Button(
      IMG_MENU_BG,
      (databus.screenWidth - imgMenuRatio * IMG_MENU_WIDTH) / 2,
      (databus.screenHeight - imgMenuRatio * IMG_MENU_HEIGHT) / 2,
      imgMenuRatio * IMG_MENU_WIDTH,
      imgMenuRatio * IMG_MENU_HEIGHT
    )

    let btnRatio = (databus.screenWidth * 0.4) / IMG_NEXT_WIDTH

    //下一关按钮  
    this.btnNext = new Button(
      IMG_NEXT_SRC,
      (databus.screenWidth - btnRatio * IMG_NEXT_WIDTH) / 2,
      (databus.screenHeight - btnRatio * IMG_NEXT_HEIGHT) / 2 - btnRatio * IMG_NEXT_HEIGHT * 1.5,
      btnRatio * IMG_NEXT_WIDTH,
      btnRatio * IMG_NEXT_HEIGHT
    )

    //重玩本关按钮  
    this.btnRethis = new Button(
      IMG_RETHIS_SRC,
      (databus.screenWidth - btnRatio * IMG_RETHIS_WIDTH) / 2,
      (databus.screenHeight - btnRatio * IMG_RETHIS_HEIGHT) / 2 ,
      btnRatio * IMG_RETHIS_WIDTH,
      btnRatio * IMG_RETHIS_HEIGHT
    )

    //重开游戏按钮  
    this.btnRegame = new Button(
      IMG_REGAME_SRC,
      (databus.screenWidth - btnRatio * IMG_REGAME_WIDTH) / 2,
      (databus.screenHeight - btnRatio * IMG_REGAME_HEIGHT) / 2 + btnRatio * IMG_REGAME_HEIGHT * 1.5,
      btnRatio * IMG_REGAME_WIDTH,
      btnRatio * IMG_REGAME_HEIGHT
    )

  }

  tap(event){
    //databus.overtime = Date.now()
    if (databus.levelUp) {
      return this.tapLevelUp(event)
    }
  }
  
  tapLevelUp(event){
    //console.log(databus.overtime)
    //下一关
    if (this.btnNext.isTapped(event.x, event.y)) {
      databus.gameLevel ++
      databus.levelUp = false
      databus.startTime = Date.now()
    }
    //重玩本关
    else if (this.btnRethis.isTapped(event.x, event.y)){
      databus.levelUp = false
      databus.levelagain=true
      databus.startTime = Date.now()
    }
    //重开游戏
    else if (this.btnRegame.isTapped(event.x, event.y)){
      databus.startTime = Date.now()
      databus.reset()
    }
  }

  render(ctx){
    if (databus.levelUp) {
      return this.renderLevelUp(ctx)
    }
  }

  renderLevelUp(ctx){
    // 绘制半透明背景
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 0, databus.screenWidth, databus.screenHeight);
    ctx.globalAlpha = 1;

    ctx.fillStyle = "#50F0F0"
    ctx.font = "bold 25px arial"
    //let score = 100 * (Math.floor( (databus.gameLevel-1) / 5) + 1)-databus.cost
    let score = 500- databus.cost
    ctx.fillText(
      "本关得分："+score,
      databus.contentPadding + databus.screenWidth / 2 - 8 * 15,
      databus.contentPaddingTop/3,
    )
    //console.log(databus.gameLevel, databus.gameLevel / 5, databus.gameLevel / 5 + 1 )

    this.imgMenu.render(ctx)
    this.btnNext.render(ctx)
    this.btnRethis.render(ctx)
    this.btnRegame.render(ctx)

    //console.log(databus.getCurrentTime())
  }

}