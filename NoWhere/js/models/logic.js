import DataBus from '../databus'
import ENV_scene_new_action_pre_state_penalty_conflict_heuristic from '../models/env'

let databus = new DataBus()

//网格大小
const BG_BORDER_WIDTH = 1020
const BG_CONTENT_WIDTH = 1000
let puzzleWidth = databus.contentWidth * (BG_BORDER_WIDTH / BG_CONTENT_WIDTH)
let puzzlePadding = (databus.screenWidth - puzzleWidth) / 2
let puzzlePaddingTop = databus.screenHeight - puzzleWidth - puzzlePadding;
let RectRatio = puzzleWidth / 15

export default class Logic{
  constructor(){
    let size=[35,35]
    this.env = new ENV_scene_new_action_pre_state_penalty_conflict_heuristic(size)
  }

  tap(event){
    if (databus.gameStart && !databus.levelUp) {
      if (!databus.gameOver){
        this.tapGamePlaying(event)
        this.env.init()
      } 
    }

    if(databus.gameStart==false||databus.gameOver==true){
      this.env.resultZero()
    }

    if(databus.levelagain){
      //console.log("To replay this game")
      this.env.levelagain()
    }
  }

  tapGamePlaying(event){
    //选中方块
    this.env.isTapped(event.x,event.y)
  }

  move(x,y,direction){
    this.env.ismove(x,y,direction)
  }
  
  render(ctx){
    if (databus.gameStart && !databus.gameOver && !databus.levelUp && !databus.showHelp){
      this.env.render(ctx)
    }
  }

}