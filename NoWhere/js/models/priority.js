//创建一个类来表示优先队列
class QueueEle{
  constructor(e, d, p) {//元素节点，有两个属性
    this.element = e;//值
    this.depth = d;
    this.priority = p;//优先级
    //console.log(this.element, this.depth, this.priority);
  }
}

export default class  Priorityqueue {
  constructor(){
    this.items = [];//保存队列里的元素
  }

  enqueue = function (e,d, p) {//添加一个元素到队列尾部
    var queueEle = new QueueEle(e,d, p);
    var added = false;

    //priority小的优先级高，优先级高的在队头
    if (this.isEmpty()) {
      this.items.push(queueEle);
      //console.log(queueEle.element, queueEle.depth, queueEle.priority);
    } 
    else {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > queueEle.priority) {
          this.items.splice(i, 0, queueEle);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueEle);
      }
    }
  }

  isEmpty = function () {
    return this.items.length == 0;
  }

  dequeue = function () {
    return this.items.shift();
  }

  clear = function () {
    this.items = [];
  }

  print = function () {
    for(var i=0;i<this.mylength();i++){
      console.log(this.items[i]);
    }
  }

  mylength = function () {
    return this.items.length;
  }

}