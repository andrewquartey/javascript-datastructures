import React from 'react';

const BinarySeachTree = () => <div>Binary Search Tree</div>;

function BST(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (this.left) this.left.insert(value);
    else this.left = new BST(value);
  } else {
    if (this.right) this.right.insert(value);
    else this.right = new BST(value);
  }
};

BST.prototype.contains = function(value) {
  if (this.value === value) return true;
  if (value <= this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'preorder') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'inorder') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'postorder') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode.value);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

BST.prototype.getMinVal = function() {
  var newNode = this;
  while (newNode.left) {
    newNode = newNode.left;
  }
  return newNode.value;
};

BST.prototype.getMaxVal = function() {
  var newNode = this;
  while (newNode.right) {
    newNode = newNode.right;
  }
  return newNode.value;
};

BST.prototype.getMaxVal = function() {};
var bst = new BST(100);
bst.insert(200);
bst.insert(300);
bst.insert(400);
bst.insert(30);
bst.insert(60);
bst.insert(50);
bst.insert(150);
bst.insert(10);
bst.insert(20);
bst.insert(80);
bst.insert(90);
bst.insert(70);
bst.insert(500);
bst.insert(550);
bst.insert(250);
bst.insert(950);

// console.log(bst.contains(15));
// bst.depthFirstTraversal(log, 'postorder');
// bst.breadthFirstTraversal(log);

function log(value) {
  console.log(value);
}

export default BinarySeachTree;
