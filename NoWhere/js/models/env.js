import DataBus from '../databus'
import LevelMap from './levelmap'
import Priorityqueue from './priority'

let databus = new DataBus()
let levelmap = new LevelMap()

let levelin = new Array(5)
for (let i = 0; i < 5; i++) {
  levelin[i] = false
}
let cost=0

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let result1 = []
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let result2 = []
let arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let result3 = []
let arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let result4 = []

const BG_BORDER_WIDTH = 1020*1.08
const BG_CONTENT_WIDTH = 1000
let puzzleWidth = databus.contentWidth * (BG_BORDER_WIDTH / BG_CONTENT_WIDTH)
let puzzlePadding = (databus.screenWidth - puzzleWidth) / 2
let puzzlePaddingTop = databus.screenHeight - puzzleWidth - puzzlePadding;
let RectRatio = puzzleWidth / 35

const vx = [-1, 1, 0, 0]
const vy = [0, 0, -1, 1]

wx.cloud.init()
const db = wx.cloud.database()
var level
var op

export default class ENV_scene_new_action_pre_state_penalty_conflict_heuristic {
  constructor(size = [35, 35]) {
    this.map_size = [].concat(size)

    this.map = new Array(this.map_size[0])
    for (let i = 0; i < this.map_size[0]; i++) {
      this.map[i] = new Array(this.map_size[1]);
    }

    this.target_map = new Array(this.map_size[0])
    for (let i = 0; i < this.map_size[0]; i++) {
      this.target_map[i] = new Array(this.map_size[1]);
    }

    this.num = 0
    this.pos
    this.target
    this.size

    this.tapped = []

    this.route = []
    this.finished = []
  }

  setmap(num, pos, target, size) {
    this.num = num
    this.pos = [].concat(pos)
    this.target = [].concat(target)
    this.size = [].concat(size)
    // for (let i = 0; i < num; i++) {
    //   this.tapped[i] = false
    // }

    //zero the map and the target_map
    for (let m = 0; m < this.map_size[0]; m++) {
      for (let n = 0; n < this.map_size[1]; n++) {
        this.map[m][n] = 0
        this.target_map[m][n] = 0
      }
    }

    let dx, dy, px, py, tx, ty
    for (let i = 0; i < this.num; i++) {
      //length width
      dx = this.size[i][0]
      dy = this.size[i][1]
      //current position
      px = this.pos[i][0]
      py = this.pos[i][1]
      //target location
      tx = this.target[i][0]
      ty = this.target[i][1]

      for (let m = px; m < px + dx; m++)
        for (let n = py; n < py + dy; n++) {
          this.map[m][n] = i + 2
        }
      for (let m = tx; m < tx + dx; m++)
        for (let n = ty; n < ty + dy; n++) {
          this.target_map[m][n] = i + 2
        }

    }//set the map and the targetmap

  }

  check(index) {
    let flag = true
    let target = [].concat(this.target[index])
    let start = [].concat(this.pos[index])
    let size = [].concat(this.size[index])

    let dis = new Array(this.map_size[0])
    for (let i = 0; i < this.map_size[0]; i++) {
      dis[i] = new Array(this.map_size[1])
    }

    for (let i = 0; i < this.map_size[0]; i++)
      for (let j = 0; j < this.map_size[1]; j++) {
        dis[i][j] = -1
      }

    var Q = new Priorityqueue()

    var fa = new Array(this.map_size[0])
    for (let i = 0; i < this.map_size[0]; i++) {
      fa[i] = new Array(this.map_size[1])
    }

    for (let m = start[0]; m < start[0] + size[0]; m++)
      for (let n = start[1]; n < start[1] + size[1]; n++) {
        this.map[m][n] = 0
      }

    var sum_ = new Array(this.map_size[0])
    for (let i = 0; i < this.map_size[0]; i++) {
      sum_[i] = new Array(this.map_size[1])
    }

    for (let m = 0; m < this.map_size[0]; m++) {
      for (let n = 0; n < this.map_size[1]; n++) {
        sum_[m][n] = 0
      }
    }
    //console.log(sum_)
    for (let i = 1; i < this.map_size[0]; i++) {
      sum_[i][0] = sum_[i - 1][0] + this.map[i][0]
    }
    for (let i = 1; i < this.map_size[1]; i++) {
      sum_[0][i] = sum_[0][i - 1] + this.map[0][i]
    }

    for (let i = 1; i < this.map_size[0]; i++) {
      for (let j = 1; j < this.map_size[1]; j++) {
        sum_[i][j] = sum_[i][j - 1] + sum_[i - 1][j] - sum_[i - 1][j - 1] + this.map[i][j]
      }
    }
    //console.log(sum_)

    let l = true
    for (let m = 0; m < size[0]; m++) {
      for (let n = 0; n < size[1]; n++) {
        if (this.map[start[0] + m][start[1] + n] != 0) {
          l = false
          break
        }
      }
      if (!l) {
        break
      }
    }

    var f
    if (l) {
      f = 0 + Math.abs(start[0] - target[0]) + Math.abs(start[1] - target[1])
      Q.enqueue(start, 0, f)
      //Q.print()
      dis[start[0]][start[1]] = f
    }

    while (!Q.isEmpty()) {
      var a = Q.dequeue()
      //Q.print()
      //console.log(a.element,a.depth,a.priority)
      let x = a.element[0]
      let y = a.element[1]
      let d = a.depth
      let p = a.priority

      if (x == target[0] && y == target[1]) {
        break
      }

      for (let i = 0; i < 4; i++) {
        let dx = vx[i]
        let dy = vy[i]
        let tx = x + dx
        let ty = y + dy

        if (tx + size[0] <= this.map_size[0] &&
          tx >= 0 &&
          ty + size[1] <= this.map_size[1] &&
          ty >= 0) {
          var aa = sum_[tx + size[0] - 1][ty + size[1] - 1]
          var ab = 0
          var ba = 0
          var bb = 0

          if (tx != 0) {
            ba = sum_[tx - 1][ty + size[1] - 1]
          }
          if (ty != 0) {
            ab = sum_[tx + size[0] - 1][ty - 1]
          }
          if (tx != 0 && ty != 0) {
            bb = sum_[tx - 1][ty - 1]
          }

          let res = aa - ab - ba + bb

          if (res == 0) {
            let f_ = d + 1 + Math.abs(tx - target[0]) + Math.abs(ty - target[1])

            if (dis[tx][ty] == -1 || dis[tx][ty] > f_) {
              dis[tx][ty] = f_
              Q.enqueue([tx, ty], d + 1, f_)
              fa[tx][ty] = [x, y]
            }
          }
        }
      }//for

    }//while
    for (let m = start[0]; m < start[0] + size[0]; m++)
      for (let n = start[1]; n < start[1] + size[1]; n++) {
        this.map[m][n] = index + 2
      }
    this.route = []

    if (dis[target[0]][target[1]] == -1) {
      flag = false
    }

    if (flag) {
      var cur_p = [].concat(target)

      while (!(cur_p[0] == start[0] && cur_p[1] == start[1])) {
        this.route.push(cur_p);
        cur_p = [].concat(fa[cur_p[0]][cur_p[1]])
        //console.log(cur_p, start)
      }
      return 1

    }
    return 0
  }

  move(index, direction) {
    let map_size = [].concat(this.map_size)//35*35

    let pos = [].concat(this.pos[index])//[px,py]
    let target = [].concat(this.target[index])//[tx,ty]
    let size = [].concat(this.size[index])//[length,width]

    if (direction < 4) {
      let xx = pos[0]
      let yy = pos[1]

      let x = 0
      let y = 0

      let steps = 1
      while (true) {
        x = xx + steps * vx[direction]
        y = yy + steps * vy[direction]

        if (x < 0 || x >= map_size[0] ||
          y < 0 || y > map_size[1] ||
          x + size[0] > map_size[0] ||
          y + size[1] > map_size[1]) {
          steps -= 1
          break
        }

        let flag = true
        if (vx[direction] == 1) {
          for (let i = 0; i < size[1]; i++) {
            if (this.map[x + size[0] - 1][y + i] != 0) {
              flag = false
            }
          }
        }
        if (vx[direction] == -1) {
          for (let i = 0; i < size[1]; i++) {
            if (this.map[x][y + i] != 0) {
              flag = false
            }
          }
        }
        if (vy[direction] == 1) {
          for (let i = 0; i < size[0]; i++) {
            if (this.map[x + i][y + size[1] - 1] != 0) {
              flag = false
            }
          }
        }
        if (vy[direction] == -1) {
          for (let i = 0; i < size[0]; i++) {
            if (this.map[x + i][y] != 0) {
              flag = false
            }
          }
        }

        if (!flag) {
          steps -= 1
          break
        }

        steps += 1

      }//while(true)~~~

      x = xx + steps * vx[direction]
      y = yy + steps * vy[direction]
      cost+=steps

      //此处写入数据库
      op++
      db.collection('4playRecord').add({//4playRecord
        data: {
          op:op,
          round: databus.round,
          level: databus.gameLevel,
          block: index,
          direction: direction,
          steps: steps,
          sx: xx,
          sy: yy,
          tx: x,
          ty: y,
          jump: null
        },
        success: res => {
        }
      })

      if (steps == 0) {
        return -1
      }
      else {
        for (let m = xx; m < xx + size[0]; m++)
          for (let n = yy; n < yy + size[1]; n++) {
            this.map[m][n] = 0
          }

        for (let m = x; m < x + size[0]; m++)
          for (let n = y; n < y + size[1]; n++) {
            this.map[m][n] = index + 2
          }

        this.pos[index][0] = x
        this.pos[index][1] = y

        if (x == target[0] && y == target[1]) {
          this.finished[index] = 1
          return 0
        }

        return 0
      }

    }//if(direction<4)

    //no need for jump
    if (pos[0] == target[0] && pos[1] == target[1]) {
      //此处写入数据库
      op++
      db.collection('4playRecord').add({
        data: {
          op:op,
          round: databus.round,
          level: databus.gameLevel,
          block: index,
          direction: direction,
          jump: "Needless",
          sx: pos[0],
          sy: pos[1],
          steps: null,
          tx: null,
          ty: null
        },
        success: res => {
        }
      })
      return -1
    }

    //this.route = route//改成在check里填充吧
    if (this.check(index)) {
      //console.log("flag==1")
      let xx = pos[0]
      let yy = pos[1]
      let x = target[0]
      let y = target[1]

      for (let m = xx; m < xx + size[0]; m++)
        for (let n = yy; n < yy + size[1]; n++) {
          this.map[m][n] = 0
        }

      for (let m = x; m < x + size[0]; m++)
        for (let n = y; n < y + size[1]; n++) {
          this.map[m][n] = index + 2
        }
      //console.log(this.map)

      this.pos[index][0] = target[0]
      this.pos[index][1] = target[1]
      // console.log(this.pos[index], this.pos)
      // console.log(this.map[2])
      // console.log(this.map[7])
      // console.log(this.map[8])

      //此处写入数据库
      op:op++
      db.collection('4playRecord').add({
        data: {
          op:op,
          round: databus.round,
          level: databus.gameLevel,
          block: index,
          direction: direction,
          jump: "success",
          sx: xx,
          sy: yy,
          tx: x,
          ty: y,
          steps: null,
        },
        success: res => {
        }
      })

      let ff = true
      for (let i = 0; i < this.num; i++) {
        let vx = this.pos[i][0]
        let vy = this.pos[i][1]

        let wx = this.target[i][0]
        let wy = this.target[i][1]

        //check is the task is done
        if (vx != wx || vy != wy) {
          ff = false
          break
        }
      }
      if (ff) {
        this.finished[index] = 1
        return 1
      }
      else {
        if (this.finished[index] == 1) {
          return 0
        }
        else {
          this.finished[index] = 1
          return 0
        }
      }
    }//if(flag==1)
    else {
      //此处写入数据库
      cost+=20
      op:op++
      db.collection('4playRecord').add({
        data: {
          op: op,
          round: databus.round,
          level: databus.gameLevel,
          block: index,
          direction: direction,
          jump: "fail",
          sx: pos[0],
          sy: pos[1],
          steps: null,
          tx: null,
          ty: null
        },
        success: res => {
        }
      })
      return -1
    }
  }

  getlastroute() {
    return this.route
  }

  mapchoose() {
    var choosemap=0
    //if (databus.gameLevel >= 1 && databus.gameLevel <= 3) 
    if (databus.gameLevel == 1) {
      let ran1 = Math.floor(Math.random() * (arr1.length - databus.gameLevel+1))
      choosemap = arr1[ran1]
      result1.push(arr1[ran1])
      arr1[ran1] = arr1[arr1.length - databus.gameLevel]
      console.log(arr1, result1, choosemap,ran1)
    }
    //else if (databus.gameLevel <= 6)
    else if (databus.gameLevel==2) {
      let ran2 = Math.floor(Math.random() * (arr2.length - (databus.gameLevel-3)+1))
      choosemap = arr2[ran2] + 20
      result2.push(arr2[ran2])
      arr2[ran2] = arr2[arr2.length - (databus.gameLevel-3)]
      console.log(arr2, result2, choosemap, ran2)
    }
    //else if (databus.gameLevel <= 9)
    else if (databus.gameLevel == 3) {
      let ran3 = Math.floor(Math.random() * (arr3.length - (databus.gameLevel-6)+1))
      choosemap = arr3[ran3] + 40
      result3.push(arr3[ran3])
      arr3[ran3] = arr3[arr3.length - (databus.gameLevel-6)]
      console.log(arr3, result3, choosemap,ran3)
    }
    else {
      let ran4 = Math.floor(Math.random() * (arr4.length - (databus.gameLevel-9)+1))
      choosemap = arr4[ran4] + 60
      result4.push(arr4[ran4])
      arr4[ran4] = arr4[arr4.length - (databus.gameLevel-9)] 
      console.log(arr4, result4,choosemap,ran4)
    }
    this.choosemap=choosemap
    return choosemap
  }

  resultZero(){
    arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    result1 = []
    arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    result2 = []
    arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    result3 = []
    arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    result4 = []

    for (let i = 0; i < 5; i++) {
      levelin[i] = false
    }
  }

  levelagain(){
    //console.log("change the levelin array")
    levelin[databus.gameLevel]=false
    databus.startTime = Date.now()
    this.init()
  }

  init() {
    //var level = databus.gameLevel - 1
    //var level

    if (!levelin[databus.gameLevel]) {
      
      if (databus.levelagain){
        console.log("again")
        databus.levelagain=false
        //console.log(level)
      }
      else{
        console.log("first")
        level = this.mapchoose()
        //console.log(level)
      }
      
      levelin[databus.gameLevel] = true

      let num = levelmap.num[level]
      let pos_list = new Array(num)
      let target_list = new Array(num)
      let size_list = new Array(num)

      // pos_list = [].concat(levelmap.pos[level])
      // target_list = [].concat(levelmap.target[level])
      // size_list = [].concat(levelmap.size[level])

      for (let i = 0; i < num; i++) {
        pos_list[i] = new Array(2)
        target_list[i] = new Array(2)
        size_list[i] = new Array(2)

        pos_list[i][0] = levelmap.pos[level][i][0]
        pos_list[i][1] = levelmap.pos[level][i][1]

        target_list[i][0] = levelmap.target[level][i][0]
        target_list[i][1] = levelmap.target[level][i][1]

        size_list[i][0] = levelmap.size[level][i][0]
        size_list[i][1] = levelmap.size[level][i][1]
      }
      // console.log(pos_list)
      // console.log(target_list)
      // console.log(size_list)
      cost = 0
      op=1
      this.setmap(num, pos_list, target_list, size_list)

    }
    else {
      console.log(">1")
      if (databus.levelUp == true) {
        levelin[databus.gameLevel] = false
      }
    }


  }

  getmap() {
    return this.map
  }

  gettargetmap() {
    return this.target_map
  }

  render(ctx) {
    for (let m = 0; m < this.map_size[0]; m++) {
      for (let n = 0; n < this.map_size[1]; n++) {
        let x = puzzlePadding + m * RectRatio
        let y = puzzlePaddingTop + n * RectRatio

        //render the target_map
        if (this.target_map[m][n] > 1) {
          //ctx.fillStyle = "rgba(255,0,0,0.5)";
          // ctx.fillStyle = 'rgba(' +
          //   Math.floor((255 - 3 * this.target_map[m][n]) % 256) + ',' +
          //   Math.floor((255 - 40 * this.target_map[m][n]) % 256) + ',' +
          //   Math.floor((0 + 10 * this.target_map[m][n]) % 256) + ',0.25)'
          ctx.fillStyle = levelmap.color[this.target_map[m][n] - 2] + '0.3)'
          ctx.fillRect(
            x,
            y,
            RectRatio,
            RectRatio)
        }
        
        //render the map
        if (this.map[m][n] > 1) {
          //ctx.fillStyle = "rgba(255,0,0,1.0)";
          // ctx.fillStyle = 'rgba(' +
          //   Math.floor((255 - 3 * this.map[m][n]) % 256) + ',' +
          //   Math.floor((255 - 40 * this.map[m][n]) % 256) + ',' +
          //   Math.floor((0 + 10 * this.map[m][n]) % 256) + ',0.95)'
          ctx.fillStyle = levelmap.color[this.map[m][n]-2] + '0.95)'
          ctx.fillRect(
            x,
            y,
            RectRatio,
            RectRatio)
        }

      }
    }//for over

    for (let i = 0; i < this.num; i++) {
      if (this.tapped[i]) {
        //map
        for (let m = this.pos[i][0]; m < this.pos[i][0] + this.size[i][0]; m++) {
          for (let n = this.pos[i][1]; n < this.pos[i][1] + this.size[i][1]; n++) {
            ctx.fillStyle = "rgba(96,96,96,0.6)";
            ctx.fillRect(
              puzzlePadding + m * RectRatio,
              puzzlePaddingTop + n * RectRatio,
              RectRatio,
              RectRatio)
          }
        }
        
        //target_map
        for (let m = this.target[i][0]; m < this.target[i][0] + this.size[i][0]; m++) {
          for (let n = this.target[i][1]; n < this.target[i][1] + this.size[i][1]; n++) {
            ctx.fillStyle = "rgba(96,96,96,0.2)";
            //console.log(i,ctx.fillStyle)
            ctx.fillRect(
              puzzlePadding + m * RectRatio,
              puzzlePaddingTop + n * RectRatio,
              RectRatio,
              RectRatio)
          }
        }

        //src margin
        ctx.fillStyle = "rgba(96,96,96,1.0)";
        //ctx.fillStyle = levelmap.color[i]+'1.0)'
        ctx.fillRect(
          puzzlePadding + this.pos[i][0] * RectRatio,
          puzzlePaddingTop + this.pos[i][1] * RectRatio,
          this.size[i][0] * RectRatio,
          RectRatio / 6)

        ctx.fillRect(
          puzzlePadding + this.pos[i][0] * RectRatio,
          puzzlePaddingTop + (this.pos[i][1] + this.size[i][1]) * RectRatio,
          this.size[i][0] * RectRatio,
          RectRatio / 6)

        ctx.fillRect(
          puzzlePadding + this.pos[i][0] * RectRatio,
          puzzlePaddingTop + this.pos[i][1] * RectRatio,
          RectRatio / 6,
          this.size[i][1] * RectRatio)

        ctx.fillRect(
          puzzlePadding + (this.pos[i][0] + this.size[i][0]) * RectRatio,
          puzzlePaddingTop + this.pos[i][1] * RectRatio,
          RectRatio / 6,
          this.size[i][1] * RectRatio)
          
          //tar margin
        ctx.fillRect(
          puzzlePadding + this.target[i][0] * RectRatio,
          puzzlePaddingTop + this.target[i][1] * RectRatio,
          this.size[i][0] * RectRatio,
          RectRatio / 6)

        ctx.fillRect(
          puzzlePadding + this.target[i][0] * RectRatio,
          puzzlePaddingTop + (this.target[i][1] + this.size[i][1]) * RectRatio,
          this.size[i][0] * RectRatio,
          RectRatio / 6)

        ctx.fillRect(
          puzzlePadding + this.target[i][0] * RectRatio,
          puzzlePaddingTop + this.target[i][1] * RectRatio,
          RectRatio / 6,
          this.size[i][1] * RectRatio)

        ctx.fillRect(
          puzzlePadding + (this.target[i][0] + this.size[i][0]) * RectRatio,
          puzzlePaddingTop + this.target[i][1] * RectRatio,
          RectRatio / 6,
          this.size[i][1] * RectRatio)
      }

    }//check if tapped

  }//render

  ismove(x, y, direction) {
    for (let i = 0; i < this.num; i++) {
      if (this.tapped[i]){
        let left = puzzlePadding + this.pos[i][0] * RectRatio
        let top = puzzlePaddingTop + this.pos[i][1] * RectRatio

        if (x >= left && x <= (left + RectRatio * this.size[i][0])
          && y >= top && y <= (top + RectRatio * this.size[i][1])) {
          switch (direction) {
            case 'left':
              this.move(i, 0)
              break
            case 'right':
              this.move(i, 1)
              break
            case 'up':
              this.move(i, 2)
              break
            case 'down':
              this.move(i, 3)
              break
            default:
              break
          }//switch
        }//in the area

      }
      
    }// for(let i=0;i<this.num;i++){
  }//ismove

  isTapped(x, y) {
    var success = false
    for (let i = 0; i < this.num; i++) {
      let left = puzzlePadding + this.pos[i][0] * RectRatio
      let top = puzzlePaddingTop + this.pos[i][1] * RectRatio
      let left_tar = puzzlePadding + this.target[i][0] * RectRatio
      let top_tar = puzzlePaddingTop + this.target[i][1] * RectRatio

      if (x >= left_tar && x <= (left_tar + RectRatio * this.size[i][0])
        && y >= top_tar && y <= (top_tar + RectRatio * this.size[i][1])
        && this.tapped[i]) {
          this.tapped[i] = false
          //console.log(i, ":jump", this.tapped[i])
          success = this.move(i, 4)
      }
      else if (x >= left && x <= (left + RectRatio * this.size[i][0])
        && y >= top && y <= (top + RectRatio * this.size[i][1])) {
        if (!this.tapped[i]) {
          this.tapped[i] = true
        }
      }

      else {
        this.tapped[i] = false
      }
    }//for(this.num)

    // let flag = true
    // for (let i = 0; i < this.num; i++) {
    //   if (this.finished[i] != 0) {
    //     flag = false
    //     break
    //   }
    // }
    // if (flag) {
    //   databus.levelUp = true
    // }

    if (success == 1) {
      databus.levelUp = true
      databus.overtime = Date.now()
      databus.cost=cost
      //console.log(cost)

      //此处加入数据库
      db.collection('3eachLevel').add({//3eachLevel
        data: {
          op:op,
          round: databus.round,
          level: databus.gameLevel,
          map: this.choosemap,
          time: (databus.overtime - databus.startTime) / 1000
        },
        success: res => {
          //databus.round_level=res._id
        }
      })
      
    }
  }
}