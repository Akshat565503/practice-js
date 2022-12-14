//Merged two sorted linked lists

function mergeLists(head1, head2) {
    
    let mergedList = new SinglyLinkedList();
    
    while(head1 && head2){
        if(head1.data < head2.data){
            mergedList.insertNode(head1.data);
            head1 = head1.next;
        } else{
            mergedList.insertNode(head2.data)
            head2 = head2.next;
        }
    }
    
    while(head1) {
         mergedList.insertNode(head1.data);
         head1 = head1.next;
    }
    
    while(head2) {
         mergedList.insertNode(head2.data);
         head2 = head2.next;
    }
    
    return mergedList.head;
}

***********************************************************************************
***********************************************************************************

//Queue using two stacks

  class Queue {
    constructor(){
        this.stackOne = new Array();
        this.stackTwo = new Array();
    }
    
    enqueue(data) {
        this.stackOne.push(data);
    }
    
    dequeue() {
        this.shiftElements();
        this.stackTwo.pop();
    }
    
    print() {
        this.shiftElements();
        console.log(this.stackTwo[this.stackTwo.length - 1])
    }
    
    shiftElements() {
        if(this.stackTwo.length === 0){
            while(this.stackOne.length > 0){
            this.stackTwo.push(this.stackOne.pop());
        }
        }
    }
}  
  
  function processData(input) {
    input = input.split('\n');
    let queue = new Queue();
    let queries = +input[0];
    
    for(let i = 1; i <= queries; i++){
        let q = input[i].split(' ');
        if(q.length > 1){
            // Enqueue Element
            let element = q[1];
            queue.enqueue(element);
        } else{
            if(q[0] == '2'){
                // Dequeue Front Element
                queue.dequeue();
            } else{
                // Print Front Element
                queue.print();
            }
        }
    }
    
}  

****************************************************************************************
****************************************************************************************
Balaced brackets


function isBalanced(s) {
    for(let n; n !== s.length;) {
        n = s.length;
        s = s.replace(/\(\)|\[\]|\{\}/g, '');
    }
    return s.length ? 'NO' : 'YES';
}
