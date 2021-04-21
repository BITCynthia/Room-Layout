import DataBus from '../databus'
import Button from '../base/button'
import LevelMap from '../models/levelmap'

let databus = new DataBus()
let levelmap = new LevelMap()

wx.cloud.init()
const db = wx.cloud.database()

const BG_BORDER_WIDTH = 1020 * 1.08
const BG_CONTENT_WIDTH = 1000
let puzzleWidth = databus.contentWidth * (BG_BORDER_WIDTH / BG_CONTENT_WIDTH)
let puzzlePadding = (databus.screenWidth - puzzleWidth) / 2
let puzzlePaddingTop = databus.screenHeight - puzzleWidth - puzzlePadding;
let RectRatio = puzzleWidth / 35

const text = ["~(￣▽￣)／你好呀!  我叫凡凡,是小游戏的引导师。      （点击任意处继续）",
  "  因为HQ学长的逻辑写的比较晦涩，所以他让我写一段入门引导，来告诉你游戏规则。",
  "  你需要留意颜色相同且大小一样，但是透明度不同的矩形对儿。",
  "  其中不透明的矩形是你可以手动操控的。    而半透明矩形则是对应的“目标”位置。",
  "  你可以通过“点击”选中你要操控的矩形。   快试试点击箭头所指的红色矩形！",
  "  Good！        选中之后你可以朝“上、下、左、右”四个方向移动矩形。     现在我们试试向上滑动它吧!",
  "  矩形会朝着你选择的方向滑到障碍处为止，所谓障碍就是网格边缘或者其他的不透明矩形。",
  "  当选中的矩形到目标位置，存在一条无障碍的路径的话，你也可以通过直接点击目标位置将矩形直接传送到它的终点。",
  "  试试直接点击箭头所指的半透明红色区域吧！",
  "  Perfect!   这样你就完成了一个矩形的“回家”任务啦！  现在我们来把绿色和紫色的矩形也传送回家吧！",
  "  啊...对了，游戏中你消耗的操作和矩形们走过的步数越少你的得分越高。",
  "  当前局势紫色矩形挡住了绿色的家门，所以我们先将她传送回去~",
  "  点击箭头所指紫色矩形            点击她的目标",
  "  点击箭头所指绿色矩形            当你想取消当前所选的矩形时，点击它之外的任意区域即可。",
  "  "];

//开始引导按钮
const IMG_GUIDE_SRC = 'images/guide.png'
const IMG_GUIDE_WIDTH = 400
const IMG_GUIDE_HEIGHT = 200

//黑板
const IMG_BLACK_SRC = 'images/blackboard.png'

//箭头
const IMG_ARROW_SRC = 'images/arrow.png'
const IMG_ARROWUP_SRC = 'images/arrow_up.png'

export default class Guide {
  constructor() {
    databus.pleaseguide = true
    this.btnBlack = new Button(
      IMG_BLACK_SRC,
      0,
      0,
      databus.screenWidth,
      puzzlePaddingTop
    )
    this.textno = 0

    this.src = [[9, 17], [14, 22], [20, 10]]
    this.tar = [[15, 4], [10, 16], [14, 21]]
    this.size = [[7, 3], [3, 3], [4, 2]]

    this.big = 0
    this.choose = [false, false, false]

    this.login()
  }

  login() {
    db.collection('rubbish').add({
      data: {
      },
      success: res => {
        var openid=res._openid
        console.log(openid)

        db.collection('1userInfo').where({
          _openid: openid
        }).get({
          success: res => {
            if (res.data.length != 0) {
              // wx.showToast({
              //   icon: 'none',
              //   title: '接受过引导'
              // })
              databus.pleaseguide = false
              databus.guidefinished = true      //引导结束
            }
            else {
              databus.pleaseguide = false
              databus.guidefinished = false
              // wx.showToast({
              //   icon: 'none',
              //   title: '未完成引导'
              // })
            }
          },
          fail: err => {
            databus.pleaseguide = false
            databus.guidefinished = false
            // wx.showToast({
            //   icon: 'none',
            //   title: '查询数据库失败'
            // })
          }
        })
      },
      fail:err=>{
        // wx.showToast({
        //   icon: 'none',
        //   title: '写入rubbish失败'
        // })
      }
    })
  
  }

  tap(event) {
    switch (this.big) {
      case 0:
        this.textno++
        if (this.textno == 4) {
          this.big++
        }
        break;

      case 1:
        let x = puzzlePadding + this.src[0][0] * RectRatio
        let y = puzzlePaddingTop + this.src[0][1] * RectRatio
        if (event.x >= x && event.x <= (x + RectRatio * this.size[0][0])
          && event.y >= y && event.y <= (y + RectRatio * this.size[0][1])) {
          this.choose[0] = true
          this.textno++
          this.big++
        }
        break

      case 3:
        this.textno++
        if (this.textno == 8) {
          this.big++
        }
        break

      case 4:
        x = puzzlePadding + this.tar[0][0] * RectRatio
        y = puzzlePaddingTop + this.tar[0][1] * RectRatio
        if (event.x >= x && event.x <= (x + RectRatio * this.size[0][0])
          && event.y >= y && event.y <= (y + RectRatio * this.size[0][1])) {
          this.src[0][0] = this.tar[0][0]
          this.src[0][1] = this.tar[0][1]
          this.textno++
          this.choose[0] = false
          this.big++
        }
        break

      case 5:
        //console.log("here")
        this.textno++
        if (this.textno == 12) {
          this.big++
        }
        break

      case 6:
        x = puzzlePadding + this.src[1][0] * RectRatio
        y = puzzlePaddingTop + this.src[1][1] * RectRatio
        if (event.x >= x && event.x <= (x + RectRatio * this.size[1][0])
          && event.y >= y && event.y <= (y + RectRatio * this.size[1][1])) {
          this.choose[1] = true
        }
        x = puzzlePadding + this.tar[1][0] * RectRatio
        y = puzzlePaddingTop + this.tar[1][1] * RectRatio
        if (event.x >= x && event.x <= (x + RectRatio * this.size[1][0])
          && event.y >= y && event.y <= (y + RectRatio * this.size[1][1]) && this.choose[1]) {
          this.choose[1] = false
          this.src[1][0] = this.tar[1][0]
          this.src[1][1] = this.tar[1][1]
          this.textno++
          this.big++
        }
        break

      case 7:
        x = puzzlePadding + this.src[2][0] * RectRatio
        y = puzzlePaddingTop + this.src[2][1] * RectRatio
        if (event.x >= x && event.x <= (x + RectRatio * this.size[2][0])
          && event.y >= y && event.y <= (y + RectRatio * this.size[2][1])) {
          this.choose[2] = true
        }
        else if (this.choose[2]) {
          x = puzzlePadding + this.tar[2][0] * RectRatio
          y = puzzlePaddingTop + this.tar[2][1] * RectRatio
          if (event.x >= x && event.x <= (x + RectRatio * this.size[2][0])
            && event.y >= y && event.y <= (y + RectRatio * this.size[2][1])) {
            this.src[2][0] = this.tar[2][0]
            this.src[2][1] = this.tar[2][1]
            this.big++
            this.choose[2] = false
          }
          else {
            this.choose[2] = false
          }

        }
        break

      case 8:
        this.big++
      case 9:
        databus.guidefinished = true
        //完成引导写入数据库
        db.collection('1userInfo').add({
          data: {
          },
          success: res => {
            databus.round = res._id
          }
        })
        this.big++
    }

  }

  move(x, y, direction) {
    switch (this.big) {
      case 2:
        //console.log(x, y,direction)
        let px = puzzlePadding + this.src[0][0] * RectRatio
        let py = puzzlePaddingTop + this.src[0][1] * RectRatio
        if (x >= px && x <= (px + RectRatio * this.size[0][0])
          && y >= py && y <= (py + RectRatio * this.size[0][1])
          && direction == 'up') {
          this.src[0][1] = 0
          this.textno++
          this.big++
        }

    }
  }

  render(ctx) {
    if (!databus.guidefinished && !databus.pleaseguide) {
      this.rendermap(ctx)
      this.rendertext(ctx)
    }

    if (databus.pleaseguide) {
      this.renderGuide(ctx)
    }

    if (this.big == 8) {
      this.renderfinished(ctx)
    }

  }

  renderGuide(ctx) {
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 0, databus.screenWidth, databus.screenHeight);
    ctx.globalAlpha = 1;
    //this.btnGuide.render(ctx)
  }


  rendermap(ctx) {
    for (let i = 0; i < 3; i++) {
      //src
      ctx.fillStyle = levelmap.color[i] + '0.95)'
      ctx.fillRect(
        puzzlePadding + this.src[i][0] * RectRatio,
        puzzlePaddingTop + this.src[i][1] * RectRatio,
        RectRatio * this.size[i][0],
        RectRatio * this.size[i][1])

      //tar
      ctx.fillStyle = levelmap.color[i] + '0.4)'
      ctx.fillRect(
        puzzlePadding + this.tar[i][0] * RectRatio,
        puzzlePaddingTop + this.tar[i][1] * RectRatio,
        RectRatio * this.size[i][0],
        RectRatio * this.size[i][1])
    }
  }


  rendertext(ctx) {
    this.btnBlack.render(ctx)
    ctx.fillStyle = "#ffffff"
    ctx.font = "small-caps 17px arial"

    let x = databus.screenWidth / 3.5
    let y = puzzlePaddingTop / 2.4
    for (let i = 0; i < text[this.textno].length; i++) {
      if (i % 11 == 0) {
        y += databus.screenWidth / (0.75 * 24)
        x = databus.screenWidth / 3.5
      }
      ctx.fillText(
        text[this.textno][i],
        x,
        y,
      )
      x += databus.screenWidth / (0.75 * 24)
    }

    if (this.textno == 4 && !this.choose[0]) {
      let arrow = new Button(
        IMG_ARROW_SRC,
        puzzlePadding + RectRatio * (this.src[0][0] + this.size[0][0] / 2),
        puzzlePaddingTop + RectRatio * (this.src[0][1] + this.size[0][1] / 2),
        RectRatio * 5,
        RectRatio * 5
      )
      arrow.render(ctx)
    }
    else if (this.textno == 8 && this.choose[0]) {
      let arrow = new Button(
        IMG_ARROW_SRC,
        puzzlePadding + RectRatio * (this.tar[0][0] + this.size[0][0] / 2),
        puzzlePaddingTop + RectRatio * (this.tar[0][1] + this.size[0][1] / 2),
        RectRatio * 5,
        RectRatio * 5
      )
      arrow.render(ctx)
    }
    else if (this.textno == 12 && !this.choose[1]) {
      let arrow = new Button(
        IMG_ARROW_SRC,
        puzzlePadding + RectRatio * (this.src[1][0] + this.size[1][0] / 2),
        puzzlePaddingTop + RectRatio * (this.src[1][1] + this.size[1][1] / 2),
        RectRatio * 5,
        RectRatio * 5
      )
      arrow.render(ctx)
    }
    else if (this.textno == 13 && this.choose[2]) {
      let arrow = new Button(
        IMG_ARROW_SRC,
        puzzlePadding + RectRatio * 20,
        puzzlePaddingTop + RectRatio * 15,
        RectRatio * 5,
        RectRatio * 5
      )
      arrow.render(ctx)
      let arrow2 = new Button(
        IMG_ARROW_SRC,
        puzzlePadding + RectRatio * (this.tar[2][0] + this.size[2][0] / 2),
        puzzlePaddingTop + RectRatio * (this.tar[2][1] + this.size[2][1] / 2),
        RectRatio * 5,
        RectRatio * 5
      )
      arrow2.render(ctx)
      //console.log("here")
    }

    if (this.choose[0]) {
      //src
      ctx.fillStyle = 'rgba(96,96,96,0.8)'
      ctx.fillRect(
        puzzlePadding + this.src[0][0] * RectRatio,
        puzzlePaddingTop + this.src[0][1] * RectRatio,
        RectRatio * this.size[0][0],
        RectRatio * this.size[0][1])

      ctx.fillStyle = 'rgba(96,96,96,0.3)'
      ctx.fillRect(
        puzzlePadding + this.tar[0][0] * RectRatio,
        puzzlePaddingTop + this.tar[0][1] * RectRatio,
        RectRatio * this.size[0][0],
        RectRatio * this.size[0][1])

      let arrow_up = new Button(
        IMG_ARROWUP_SRC,
        puzzlePadding + RectRatio * (this.src[0][0] + this.size[0][1] / 4),
        puzzlePaddingTop + RectRatio * (this.src[0][1] - 8),
        RectRatio * 5,
        RectRatio * 10
      )
      if (this.textno == 5) { arrow_up.render(ctx) }
    }

    for (let m = 1; m < 3; m++) {
      if (this.choose[m]) {
        ctx.fillStyle = 'rgba(96,96,96,0.8)'
        ctx.fillRect(
          puzzlePadding + this.src[m][0] * RectRatio,
          puzzlePaddingTop + this.src[m][1] * RectRatio,
          RectRatio * this.size[m][0],
          RectRatio * this.size[m][1])

        ctx.fillStyle = 'rgba(96,96,96,0.3)'
        ctx.fillRect(
          puzzlePadding + this.tar[m][0] * RectRatio,
          puzzlePaddingTop + this.tar[m][1] * RectRatio,
          RectRatio * this.size[m][0],
          RectRatio * this.size[m][1])
      }
    }


  }

  renderfinished(ctx) {
    // 绘制半透明背景
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 0, databus.screenWidth, databus.screenHeight);
    ctx.globalAlpha = 1;

    ctx.fillStyle = "#ffffff"
    ctx.font = "22px Arial"
    ctx.fillText(
      '恭喜您!完成引导!',
      databus.contentPadding + databus.screenWidth / 5,
      databus.contentPaddingTop - databus.screenHeight / 20,
    )
    ctx.fillText(
      '开始享受游戏吧！',
      databus.contentPadding + databus.screenWidth / 5,
      databus.contentPaddingTop,
    )
    ctx.fillText(
      '务必要完成哦，通关有彩蛋！',
      databus.contentPadding + databus.screenWidth / 22,
      databus.contentPaddingTop + databus.screenHeight / 20,
    )

  }
}
