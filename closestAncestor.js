/* 
  In plain JavaScript (not using any libraries),
  write a function that takes two inputs (a DOM element, and a class name)
  and returns the nearest ancestor of the element that has the specified CSS class.
*/

/*
<ul id="one" class="a">
  <li class="b">I</li>
  <li id="ii" class="c">II
    <ul class="a b"> // RETURN
      <li class="a b"></li>
      <li class="c">
        <ul class="d"></ul>
      </li>
      <li id="start">START HERE</li>
    </ul>
  </li>
  <li class="e"></li>
</ul>
*/

function getClassName(element, className) {
  var copy = element;
  while (element.parentElement) {
    element = element.parentElement;
    if (element.classList && element.classList.contains(className)) {
      return element;
    }
  }
  return copy;
}