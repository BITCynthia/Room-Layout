const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const contentWidth = window.innerWidth * 0.85

let instance

/**
 * 全局状态管理器
 * 
 * @export
 * @class DataBus
 */
export default class DataBus {
  constructor() {
    if (instance)
      return instance

    instance = this

    this.screenWidth = screenWidth
    this.screenHeight = screenHeight
    this.contentWidth = contentWidth
    this.contentPadding = (this.screenWidth - this.contentWidth) / 2
    this.contentPaddingTop = this.screenHeight - this.contentWidth - this.contentPadding;

    this.reset()
  }

  /**
   * 重启游戏，重制数据
   * 
   * @memberof DataBus
   */
  reset() {
    this.startTime = Date.now()
    this.overtime
    this.pleaseguide = false
    this.guidefinished=true      //引导结束
    this.gameStart = false        //false即为预备状态————显示菜单
    this.levelUp = false          //可以升级啦
    this.levelagain=false         //重玩此关
    this.gameLevel = 0            //当前等级
    this.gameOver = false         //游戏结束（通关）
    //this.showHelp = false         //展示规则页
    //this.history = false          //true则显示历史记录(暂时没写)
    //this.ranking = false          //true则显示好友排行（暂时没写）
  }


  /**
   * 返回当前的游戏时间
   * 
   * @returns 
   * @memberof DataBus
   */
  getCurrentTime() {
    let time = Math.floor((Date.now() - this.startTime) / 1000);
    let minute = Math.floor(time / 60)
    if (minute < 10) {
      minute = '0' + minute
    }
    let second = Math.floor(time % 60)
    if (second < 10) {
      second = '0' + second
    }
    return minute + ':' + second
  }
}