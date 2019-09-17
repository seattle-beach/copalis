function calculate() {
  var result =
    parseInt(document.getElementById("first-number").value) +
    parseInt(document.getElementById("second-number").value);

  document.getElementById("result").innerHTML = result;
}
