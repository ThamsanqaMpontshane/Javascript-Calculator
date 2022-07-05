var enteredRegNumber = document.querySelector(".regNumberEntered");
var addButton = document.querySelector(".btn");
var messageBox = document.querySelector(".messagebox");

//the value of the input field is stored in the variable regNumber and it shown in the message box if the value is aleady in the list of reg numbers don't add it again
var regNumbers = [];


addButton.addEventListener("click", function(){
    const newDiv = document.createElement("div");
    newDiv.className = "regNumber";
    newDiv.innerHTML = enteredRegNumber.value;
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.border = "2px solid black";
    newDiv.style.borderRadius = "5px";
    newDiv.style.color = "black";
    newDiv.style.margin = "3px";
    newDiv.style.textAlign = "center";
    newDiv.style.fontSize = "16px";
    newDiv.style.fontWeight = "bold";
    newDiv.style.fontFamily = "Arial";
    newDiv.style.height = "26px";
    newDiv.style.width = "96px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    messageBox.style.display = "flex";
    messageBox.style.flexWrap = "wrap";


    messageBox.appendChild(newDiv);
    regNumbers.push(enteredRegNumber.value);
    //if entered reg number is already in the regNumbers array, don't add it again to the array
    if(regNumbers.indexOf(enteredRegNumber.value) > -1){
        messageBox.innerHTML = "";
    }
}
);


