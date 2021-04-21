import DataBus from '../databus'

const BG_IMG_SRC = 'images/background.png'

const BG_BORDER_SRC = 'images/border.png'
const BG_BORDER_WIDTH = 1020*1.08
const BG_BORDER_HEIGHT = 1020*1.08
const BG_CONTENT_WIDTH = 1000
const BG_CONTENT_HEIGHT = 1000

const BG_PAPER_SRC = 'images/paper.png'

let databus = new DataBus()

export default class BackGround {
  constructor(ctx) {
    this.img = new Image()
    this.img.src = BG_IMG_SRC

    this.borderImg = new Image()
    this.borderImg.src = BG_BORDER_SRC

    this.paperImg = new Image()
    this.paperImg.src = BG_PAPER_SRC

    // 因为puzzle多一个边框
    // 所以根据contentWidth算出puzzleWidth
    this.puzzleWidth = databus.contentWidth * (BG_BORDER_WIDTH / BG_CONTENT_WIDTH)
    this.puzzlePadding = (databus.screenWidth - this.puzzleWidth) / 2
    this.puzzlePaddingTop = databus.screenHeight - this.puzzleWidth - this.puzzlePadding;

    this.render(ctx)
  }

  render(ctx) {
    ctx.drawImage(
      this.img,
      0,
      0,
      databus.screenWidth,
      databus.screenHeight
    )

    ctx.drawImage(
      this.paperImg,
      this.puzzlePadding,
      this.puzzlePaddingTop,
      this.puzzleWidth,
      this.puzzleWidth
    )

    ctx.drawImage(
      this.borderImg,
      this.puzzlePadding,
      this.puzzlePaddingTop,
      this.puzzleWidth,
      this.puzzleWidth
    )

    //绘制网格
    let RectRatio = this.puzzleWidth / 35
    //RectRatio.toFixed(8)
    //ctx.strokeStyle = "rgba(0,0,0,0.8)";
    ctx.strokeStyle = "rgba(100,100,100,1.0)"
    for (let i = 0; i < 35; i++) {
      for (let j = 0; j < 35; j++) {
        ctx.strokeRect(
          this.puzzlePadding + RectRatio * i,
          this.puzzlePaddingTop + RectRatio * j,
          RectRatio,
          RectRatio)
      }
    }

    ctx.fillStyle = "#50F0F0"
    ctx.font = "bold 25px arial"
    ctx.fillText(
      '当前关卡：' + databus.gameLevel,
      databus.screenWidth/2-6*12,
      this.puzzlePaddingTop-databus.screenHeight/9,
    )

  }
}
