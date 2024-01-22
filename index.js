class LinkedList{
    constructor(){
        this.listHead = null;
        this.length = 0;
     }


    append(value){
        this.length ++;
        if(this.listHead === null){
            this.listHead = new Node(value);
        }else{
            let last = this.listHead;
            while(last.nextNode != null){
                last = last.nextNode;
            }
            last.nextNode = new Node(value);
        }
    };

    prepend(value){
        this.length ++;
        if(this.listHead === null){
            this.listHead = new Node(value);
        }else{  
            let tmp = this.listHead;
            this.listHead = new Node(value);
            this.listHead.nextNode = tmp;
        }
    };

    size(){
        return this.length;
    };

    head(){
        return this.listHead;
    };

    tail(){
        let tmp = this.listHead;
        while(tmp.nextNode != null){
            tmp = tmp.nextNode;
        }
        return tmp;
    };

    at(index){
        //return value at index
        if(index >= this.length || index < 0){
            return "invalid input";
        }
        let tmp = this.listHead;
        for(let i = 0; i < index; i++){
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    valueAt(index){
        if(index >= this.length || index < 0){
            return "invalid input";
        }
        let tmp = this.listHead;
        for(let i = 0; i < index; i++){
            tmp = tmp.nextNode;
        }
        return tmp.value;
    }

    pop(){
        //removes last element from list
        if(this.length <= 1){
            this.listHead = null;
        }
        let prv = this.listHead;
        let tmp = this.listHead.nextNode;
        while(tmp.nextNode != null){
            prv = tmp;
            tmp = tmp.nextNode;
        }
        prv.nextNode = null;
        this.length --;

    }

    contains(value){
        //returns true if the passed value in the list;
        //else return false
        let tmp = this.listHead;
        for(let i = 0; i < this.length; i++){
            if(tmp.value === value){
                return true;
            }
            tmp = tmp.nextNode;
        };
        return false;
    }

    find(value){
        //return index of the node containing the value
        //return false if no match
        let tmp = this.listHead;
        let counter = '';
        for(let i = 0; i < this.length; i++){
            if(tmp.value === value){
                counter = i;
                return counter;
            }
            tmp = tmp.nextNode;
        };
        return false;
    }

    toString(){
        //printout the linkedlist as string
        //format node -> node -> node
        let tmp = this.listHead;
        let string = "";
        while(tmp != null){
            string = string + tmp.value + " -> ";
            tmp = tmp.nextNode;
        }
        return string;
    }

    insertAt(value, index){
        if(index < 0 || index >= this.length){
            console.log("invalid index");
            return;
        }
        this.length ++;
        let og = this.at(index);
        if(index > 0){
        let prv = this.at(index - 1);
        let newNode = new Node(value, og);
        prv.nextNode = newNode;
        }else if(index === 0){
            this.prepend(value);
        }
    }

    removeAt(index){
        if(index < 0 || index >= this.length){
            console.log("invalid index");
            return;
        }
        if(index === this.length - 1){
            this.pop();
            return;
        };
        if(index === 0){
            this.listHead = this.at(1);
            this.length --;
            return;
        }
        let prv = this.at(index - 1);
        let next = this.at(index + 1);
        prv.nextNode = next;
        this.length --;

    }


}

class Node{
    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}
let list = new LinkedList();


list.append("node1");
list.append("node2");
list.append("node3");
list.append("node4")

console.log(list.size())
console.log(list.toString());
console.log(list.tail())
console.log(list.head());
list.removeAt(4);
console.log(list.toString());
console.log(list.length);