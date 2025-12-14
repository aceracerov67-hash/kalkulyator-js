const display = document.getElementById("display");

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calc() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

