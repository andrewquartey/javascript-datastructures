import React from 'react';

const HT = () => <div>Hash Table</div>;

function hashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function hashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

hashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  return total % this.numBuckets;
};

hashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = new hashNode(key, value);
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    var currentNode = this.buckets[index];

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new hashNode(key, value);
  }
};

hashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    console.log('here');
    return null;
  } else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
};

// var myHT = new hashTable(30);
// myHT.insert('Lobo', 'andrew@gmail.com');
// myHT.insert('Loob', 'kwei@gmail.com');
// myHT.insert('Lobo', 'lobo@gmail.com');
// myHT.insert('Susan', 'Susan@gmail.com');

// console.log(myHT.get('Lobo'));

export default HT;
