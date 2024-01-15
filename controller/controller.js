// Controlador
var controller = {
  appendToDisplay: function(value) {
    model.displayValue += value;
    view.updateDisplay();
  },
  clearDisplay: function() {
    model.displayValue = '';
    view.updateDisplay();
  },
  calculateResult: function() {
    try {
      model.displayValue = eval(model.displayValue);
      view.updateDisplay();
    } catch (error) {
      model.displayValue = 'Error';
      view.updateDisplay();
    }
  },
};
