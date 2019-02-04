function computerLetterPicker() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 1; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
   let guess = computerLetterPicker();
  
    if (guess === "k") {
      console.log("It was " + computerLetterPicker() + "! You win!");
  }
    else {
      console.log("It was " + computerLetterPicker() + "! You lose!");
  }
  