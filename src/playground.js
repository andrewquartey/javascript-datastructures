function indexOf(value) {
  var temp = this.head;
  var index = 0;
  var indexArray = new Array();
  while (temp) {
    if (temp.value === value) indexArray.push(index);
    temp = temp.next;
    index++;
  }
  return indexArray;
}
