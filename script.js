let display = document.getElementById("display");
let lastAnswer = "";

// Add event to all buttons
document.querySelectorAll("button").forEach(btn => {
  if (!btn.onclick) {
    btn.addEventListener("click", () => {
      let value = btn.innerText;

      if (value === "x") value = "*";
      if (value === "÷") value = "/";
      if (value === "√") value = "Math.sqrt(";
      if (value === "+/-") {
        display.value = display.value.startsWith("-")
          ? display.value.slice(1)
          : "-" + display.value;
        return;
      }

      display.value += value;
    });
  }
});

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function delChar() {
  display.value = display.value.slice(0, -1);
}

// Store last answer
function ans() {
  display.value += lastAnswer;
}

// Calculate
function calculate() {
  try {
    lastAnswer = eval(display.value);
    display.value = lastAnswer;
  } catch (e) {
    display.value = "Error";
  }
}
