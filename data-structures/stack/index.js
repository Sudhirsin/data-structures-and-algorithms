
// Stack data strutures is a sequential collention of elements that follow the principle of Last in First Out 
// LIFO
// The last inserted into the stack is first element to be removed
// Stack is an abstract data type. It is defined by its behaviour rather that being a mathematical.
// support to two main operation
// 1. push
// 2. pop
// will implement some other methods also peek, isEmpty, size and print

// Stack implementation with array.

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    // it will give top element from stack
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.size(), 'size');
stack.print();
console.log(stack.pop(), 'pop');
console.log(stack.peek(), 'peek');
stack.print();
