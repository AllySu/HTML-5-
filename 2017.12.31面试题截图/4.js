function Elem (id) {
  this.elem = document.getElementById(id);
}
Elem.prototype.html = function (val) {
  var elem = this.elem;
  if (val) {
    elem.innerHTML = val;
    return this;
  }else {
    return elem.innerHTML;
  }
}
Elem.prototype.on = function (type,fn) {
  var elem = this.elem;
  elem.addEventListener(type, fn)
  return this
}

var div1 = new Elem('detai-page');
// console.log(div1.html());
div1.html('<p>hell imooc</p>').on('click',function () {
  alert('clicked');
}).html('<p>javascript</p>');
