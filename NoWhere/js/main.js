import EventUtil from './base/eventUtil'
import BackGround from './runtime/background'
import Guide from './runtime/guide'
import Menu from './runtime/menu'
import Game from './runtime/game'
import LevelUp from './runtime/levelup'
import Logic from './models/logic'
import Over from './runtime/over'
import DataBus from './databus'

let ctx = canvas.getContext('2d')
let databus = new DataBus()

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.bg = new BackGround(ctx)
    this.guide= new Guide()
    this.menu = new Menu()
    this.game = new Game()
    this.levelup = new LevelUp()
    this.logic = new Logic()
    this.over = new Over()

    //引导页
    let eventUtilGuide = new EventUtil(
      ((e) => { this.guide.tap(e) }).bind(this),
        ((e) => { this.guide.move(e.x, e.y, e.direction) }).bind(this)
    )

    //菜单页
    let eventUtilMenu = new EventUtil(
      ((e) => {this.menu.tap(e)}).bind(this)
      )

    //游戏按钮页
    let eventUtilGame = new EventUtil(
      ((e) => {this.game.tap(e)}).bind(this)
    )

    //升级页
    let eventUtilLevelUp = new EventUtil(
      ((e) => {this.levelup.tap(e)}).bind(this)
    )

    //游戏逻辑页
    let eventUtilLogic = new EventUtil(
      ((e) => {this.logic.tap(e)}).bind(this), 
      ((e) => {this.logic.move(e.x,e.y,e.direction)}).bind(this)
      )

    //通关页
    let eventUtilOver = new EventUtil(
      ((e) => {this.over.tap(e)}).bind(this)
      )

    databus.reset()

    window.requestAnimationFrame(
      this.loop.bind(this)
    )
  }

  /**
   * 通关判定
   */
  checkGameOver() {
    if (databus.gameLevel == 5) {
      databus.gameOver = true
    }
    else {
      databus.gameOver = false
    }
  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.bg.render(ctx)
    this.guide.render(ctx)
    this.menu.render(ctx)
    this.game.render(ctx)
    this.levelup.render(ctx)
    this.logic.render(ctx)
    this.over.render(ctx)
  }

  // 游戏逻辑更新主函数
  update() {
    // 统计是否有动画正在播放
    let isAniPlaying = false

    // 如果没有动画正在播放，查看游戏是否结束
    if (!isAniPlaying) {
      this.checkGameOver()
    }
  }

  // 实现游戏帧循环
  loop() {
    this.update()
    this.render()

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
  
}
