
function Node(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
}

var SentinelList = function () {

    this.head = new Node(undefined);
    this.tail = new Node(undefined);

    this.head.next = this.tail;
    this.tail.prev = this.head;


    SentinelList.prototype.pushBack = function (value) {
        // It will create new Node with value of somthing
        let newNode = new Node(value);
        newNode.next = this.tail
        newNode.prev = this.tail.prev;
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
    }

    SentinelList.prototype.pushFront = function (value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        newNode.prev = this.head.prev;
        this.head.prev.next = newNode;
        this.head.prev = newNode;
    }

    SentinelList.prototype.printForword=function (){
        for(let currrent =this.head.next;currrent!=this.tail;currrent=currrent.next){
         console.log(currrent.data)
        }
    }

}


let list=new SentinelList();
list.pushBack(5)

list.pushBack(3)

list.pushBack(4)

list.pushBack(9)
list.printForword();
console.log("add fronnt")
list.pushFront(8)
list.printForword();