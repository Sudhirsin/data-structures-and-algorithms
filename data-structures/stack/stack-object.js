class Stack {
  constructor() {
    this.items = {};
    this.head = 0;
  }

  push(value) {
    this.items[this.head] = value;
    this.head++;
  }

  pop() {
    const removeItem = this.items[this.head - 1]
    delete this.items[this.head - 1];
    this.head--;
    return removeItem;
  }

  peek() {
    return this.items[this.head - 1];
  }

  size() {
    return this.head;
  }

  isEmpty() {
    return this.head === 0;
  }

  print() {
    console.log(this.items);
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
