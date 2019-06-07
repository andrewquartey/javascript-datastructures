import React from 'react';

const LinkedList = () => {
  return <div>LinkedList</div>;
};

function LL() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LL.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
  return newNode;
};

LL.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LL.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LL.prototype.removeTail = function() {
  if (this.tail) {
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
  }
};

LL.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode;
    currentNode = currentNode.next;
  }
  return null;
};

const ll = new LL();
// ll.addToHead(79);
// ll.addToHead(100);
// ll.addToHead(4000);

ll.addToTail(10);
ll.addToTail(20);
ll.addToTail(30);

ll.addToHead(79);
// ll.removeHead();

// console.log(ll.removeHead());

export default LinkedList;
