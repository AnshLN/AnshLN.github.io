function ChangeParagraphContent(){
    if(document.getElementById('p-content-Change').innerHTML == "Before Button Click")
    {
        document.getElementById('p-content-Change').innerHTML = "After Button Click!";
    }
    else{
        document.getElementById('p-content-Change').innerHTML = "Before Button Click";
    }
}

function BulbOn(){
    document.getElementById('Bulb').src = "images-container/bulb-on.png";
}
function BulbOff(){
    document.getElementById('Bulb').src = "images-container/bulb-off.png";
}

function TextColorChange(){
    document.getElementById('color-change').style.color = 'red';
}

function DisplayNone(){
    document.getElementById('display-n').style.display = "none";
}

function DeleteAllHtmlDoc(){
    document.write('All Data From html Are Deleted')
}

function WindowAlert(){
    window.alert('I Am Alert');
}
function ConsoleNotification(){
    console.log("I am Currently Displaying in Console!")
}

function PrintPage(){
    window.print();
}

function AdditionFunction(){
    let x = document.getElementById('iAmX').value;
    let y = document.getElementById('iAmY').value;
    document.getElementById('iAmXadditionY').innerHTML = parseFloat(x) + parseFloat(y);
}

 document.getElementById('calculate').onclick = function() {
    var square = document.getElementById('square').value;
    square = parseFloat(square);
    square *= square;
    document.getElementById('square-d').value = square;
}

document.getElementById('n-power-n').oninput = function() {
    var nToPowern = document.getElementById('n-power-n').value;
    nToPowern = parseFloat(nToPowern);
    nToPowern **= nToPowern;
    document.getElementById('n-power-n-answer').value = nToPowern;
}

document.getElementById('string-number').oninput = function(){
    var StringNumber = document.getElementById('string-number').value;
   if(Number.isInteger(Number(StringNumber)) == true)
   {
    document.getElementById('string-number-output').innerHTML = "Number : " + parseFloat(StringNumber);
   }
   else if(StringNumber == "")
   {
    document.getElementById('string-number-output').innerHTML = "";
   }
   else
   {
    document.getElementById('string-number-output').innerHTML = "String : " + StringNumber;
   }
}

document.getElementById('temprature').onchange = function(){
   
    if(document.getElementById('t1').selected == true){
        var te3 = document.getElementById('t3');
        te3.selected = true;
        document.getElementById('Temp-input').placeholder = "Enter Value in Celcius";
    } 
   else if(document.getElementById('t2').selected == true){
        var te4 = document.getElementById('t4');
        te4.selected = true;
        document.getElementById('Temp-input').placeholder = "Enter Value in Fahrenheit";
    } 
    else{}
    InputFunction();
}

document.getElementById('temprature-inverse').onchange = function(){
if(document.getElementById('t3').selected == true){
    var te1 = document.getElementById('t1');
    te1.selected = true;
    document.getElementById('Temp-input').placeholder = "Enter Value in Celcius";
} 
else if(document.getElementById('t4').selected == true){
    var te2 = document.getElementById('t2');
    te2.selected = true;
    document.getElementById('Temp-input').placeholder = "Enter Value in Fahrenheit";
} 

else{}
 InputFunction();
}

function InputFunction(){
    var temppp = document.getElementById('Temp-input').value;
    if(document.getElementById('t3').selected == true && temppp !== ""){
        document.getElementById('output-temp-celcius').innerHTML = temppp + "&#176;C";
        document.getElementById('output-temp-fahrenheit').innerHTML = (parseFloat(temppp)*(9/5) + 32) + "F";
    }
    else if(document.getElementById('t2').selected == true && temppp !== ""){
        document.getElementById('output-temp-fahrenheit').innerHTML = temppp + "F";
        document.getElementById('output-temp-celcius').innerHTML = ((parseFloat(temppp) - 32)*5/9) + "&#176;C";
    }
    else if(temppp == ""){
        document.getElementById('output-temp-celcius').innerHTML = "";
        document.getElementById('output-temp-fahrenheit').innerHTML = "";
    }
}

const carObject = {carName:"",carColor:"",carPrice:""};
function objectFunction(){
    carObject.carName = document.getElementById('car-name').value;
    carObject.carColor = document.getElementById('car-color').value;
    carObject.carPrice = document.getElementById('car-price').value;
    document.getElementById('carNameOutputScreenShow').innerHTML = carObject.carName;
    document.getElementById('carColorOutputScreenShow').innerHTML = carObject.carColor;
    document.getElementById('carPriceOutputScreenShow').innerHTML = carObject.carPrice;
}
function ObjectFunctionRun(){
    document.getElementById('car-name-output').innerHTML = carObject.carName;
    document.getElementById('car-color-output').innerHTML = carObject.carColor;
    document.getElementById('car-price-output').innerHTML = carObject.carPrice;
}


document.getElementById('StringCounterInput').oninput = function(){
    var StringCounter = this.value;
    document.getElementById('StringCounterOutput').innerHTML = StringCounter.length;
}

document.getElementById('CharAtInput').oninput = function(){
    var CharAtInput = parseInt(document.getElementById('CharAtInput').value) - 1;
    var charAtExampleText = document.getElementById('CharAtExample').value;
    if(document.getElementById('CharAtInput').value == ""){
        document.getElementById('CharAtOutput').innerHTML = "";
}
else{
    document.getElementById('CharAtOutput').innerHTML = charAtExampleText.charAt(CharAtInput);
}
}

document.getElementById('CharCodeAtInput').oninput = function(){
    var CharCodeAtInput = parseInt(document.getElementById('CharCodeAtInput').value) - 1;
    var charCodeAtExampleText = document.getElementById('CharCodeAtExample').value;
    if(document.getElementById('CharCodeAtInput').value == ""){
        document.getElementById('CharCodeAtOutput').innerHTML = "";
}
else{
    document.getElementById('CharCodeAtOutput').innerHTML = charCodeAtExampleText.charCodeAt(CharCodeAtInput);
}
}

document.getElementById('AtInput').oninput = function(){
    var AtExampleText = document.getElementById('AtExample').value;
    if(parseInt(document.getElementById('AtInput').value) >= 1){
    var AtInput = parseInt(document.getElementById('AtInput').value) - 1;
}
else if(parseInt(document.getElementById('AtInput').value) < 0){
    var AtInput = parseInt(document.getElementById('AtInput').value);
}

else{}
    if(document.getElementById('AtInput').value == ""){
        document.getElementById('AtOutput').innerHTML = "";
    }
    else if(parseInt(document.getElementById('AtInput').value) == 0){
        document.getElementById('AtOutput').innerHTML = "";
    }
    else{
    document.getElementById('AtOutput').innerHTML = AtExampleText.at(AtInput);
    // This Will Also work same,
    //document.getElementById('AtOutput').innerHTML = AtExampleText[AtInput];
}
}


function SliceFunction(){
    var sliceInputText = document.getElementById('slice-input-text').value;
    var sliceInputNumberFrom = parseInt(document.getElementById('slice-input-number-from').value);
    var sliceInputNumberTo = parseInt(document.getElementById('slice-input-number-to').value);
    var sliceOutput = document.getElementById('slice-output-text');
    sliceOutput.innerHTML = sliceInputText.slice(sliceInputNumberFrom,sliceInputNumberTo);
}
document.getElementById('slice-input-number-from').oninput = function(){
    SliceFunction();
}
document.getElementById('slice-input-number-to').oninput = function(){
    SliceFunction();
}

document.getElementById('toUpperCaseInput').oninput = function(){
    document.getElementById('toUpperCaseOutput').innerHTML = this.value.toUpperCase();
}

document.getElementById('toLowerCaseInput').oninput = function(){
    document.getElementById('toLowerCaseOutput').innerHTML = this.value.toLowerCase();
}
document.getElementById('trimInput').oninput = function(){
    document.getElementById('trimOutputWithWhiteSpace').innerHTML = this.value.length;
    document.getElementById('trimOutputWithoutWhiteSpace').innerHTML = this.value.trim().length;
}

document.getElementById('trimStartInput').oninput = function(){
    document.getElementById('trimStartOutputWithWhiteSpace').innerHTML = this.value.length;
    document.getElementById('trimStartOutputWithoutWhiteSpace').innerHTML = this.value.trimStart().length;
}

document.getElementById('trimEndInput').oninput = function(){
    document.getElementById('trimEndOutputWithWhiteSpace').innerHTML = this.value.length;
    document.getElementById('trimEndOutputWithoutWhiteSpace').innerHTML = this.value.trimEnd().length;
}


function StringPadingDunction(){
    var StringPading = document.getElementById('StringPading');
    var padStartInput = parseInt(document.getElementById('padStartInput').value);
    var padStartInputStyle = (document.getElementById('padStartInputStyle').value).toString();
    document.getElementById('padStartOutput').innerHTML = ((StringPading.value).toString()).padStart(padStartInput,padStartInputStyle);
    document.getElementById('strpdi').innerHTML = StringPading.value;
    document.getElementById('padftg').innerHTML = padStartInput;
    document.getElementById('pdastyl').innerHTML = padStartInputStyle;
    document.getElementById('strpdi1').innerHTML = StringPading.value;
    document.getElementById('padftg1').innerHTML = padStartInput;
    document.getElementById('pdastyl1').innerHTML = padStartInputStyle;
    document.getElementById('padEndOutput').innerHTML = ((StringPading.value).toString()).padEnd(padStartInput,padStartInputStyle);
    document.querySelectorAll('.visible-on-input').style.display = 'inline';
}
document.getElementById('padStartInput').oninput = function(){
    StringPadingDunction();
}
document.getElementById('padStartInputStyle').oninput = function(){
    StringPadingDunction();
}


document.getElementById('string-repeat-btn').onclick = function(){
    let StringRepeatText = "i Will repeat,";
    document.getElementById('string-repeat-output').innerHTML = StringRepeatText.repeat(3);
}
function ReplaceFunctionWithDefault() {
    let text = document.getElementById("replace").innerHTML; 
    document.getElementById("replace").innerHTML =
    text.replace("Microsoft","W3Schools");
  }

function ReplaceFunction() {
    let text = document.getElementById("replace1").innerHTML; 
    document.getElementById("replace1").innerHTML =
    text.replace(/Microsoft/g,"W3Schools");
  }

  function ReplaceFunctionWithI() {
    let text = document.getElementById("replace2").innerHTML; 
    document.getElementById("replace2").innerHTML =
    text.replace(/MICROSOFT/i,"W3Schools");
  }

  {
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
document.getElementById("index-of-output").innerHTML = index; 
}
{
    let text = "Please locate where 'locate' occurs!";
    let index = text.lastIndexOf("locate");
    document.getElementById("last-index-of-output").innerHTML = index; 
    }

   document.getElementById('ArrayExample1').onclick = function() {
const carArrayExample = [];
carArrayExample[0] = "BMW";
carArrayExample[1] = 'red';
carArrayExample[2] = '2012';
document.getElementById('ArrayExampleItems').innerHTML = carArrayExample;
}

document.getElementById('ArrayExample2').onclick = function(){
    const carArrayExample = ["Saab", "Volvo", "BMW"];
    carArrayExample[0] = "Opel";
    document.getElementById('ArrayExampleOutput2').innerHTML = carArrayExample[0];
}

document.getElementById('ArrayExample3').onclick = function(){
    const fruitsArrayExample = ["Banana", "Orange", "Apple", "Mango"];
                document.getElementById("ArrayExample3Output").innerHTML = fruitsArrayExample.toString();
}
document.getElementById('LoopingArrayInput').onclick = function(){
const fruitsZ = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruitsZ.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruitsZ[i] + "</li>";
}
text += "</ul>";
document.getElementById('LoopingArrayOutput').innerHTML = text;
}

const fruitsArrayPushExample = ["Banana", "Orange", "Apple"];
document.getElementById('fruitsArrayPushExampleButton').onclick = function(){
    fruitsArrayPushExample.push("Lemon");
    document.getElementById('fruitsArrayPushExampleOutput').innerHTML = fruitsArrayPushExample;
}

document.getElementById('fruitsArrayPushExampleButton2').onclick = function(){
    fruitsArrayPushExample[fruitsArrayPushExample.length] = "Lemon";
    document.getElementById('fruitsArrayPushExampleOutput2').innerHTML = fruitsArrayPushExample;
}

//Chapter 1 Final Script

const ArrayElementAdd = [];
function ArrayElementAddFunction(){
    if(document.getElementById('ArrayChap1Example').value !== ""){
    var ArrayElementAddValue = (document.getElementById('ArrayChap1Example').value).toString();
    ArrayElementAdd[ArrayElementAdd.length] = ArrayElementAddValue;
    document.getElementById('ArrayChap1Example').value = "";
    document.getElementById('ArrayChap1Example').placeholder = "Add More Values here..."
    document.getElementById('ArrayChap1ExampleButton').style.border = "1px solid green";
    document.getElementById('ArrayChap1ExampleButton').style.color = "white";
    document.getElementById('ArrayChap1ExampleButton').style.backgroundColor = "green";
    document.getElementById('ArrayChap1ExampleButton').innerHTML = "Value Saved!";
    document.getElementById('ArrayChap1ExampleButton').disabled = true;
    var LoopingOutArrayElementInli = "";
    for(i = 0;i < (ArrayElementAdd.length); i++){
        LoopingOutArrayElementInli += `<span href="#">` + i + ". " + ArrayElementAdd[i] + `<a href="#" onclick="return RemoveFunction(this)">X</a></span>`;
    }
    document.getElementById('ArrayChap1ExampleOutput').innerHTML = LoopingOutArrayElementInli;
}
else{
    ElseFunctionForArrayElementAddFnction();
}
}
function ElseFunctionForArrayElementAddFnction(){
    var LoopingOutArrayElementInli = "";
    for(i = 0;i < (ArrayElementAdd.length); i++){
        LoopingOutArrayElementInli += `<span href="#">` + i + ". " + ArrayElementAdd[i] + `<a href="#" onclick="return RemoveFunction(this)">X</a></span>`;
    }
    document.getElementById('ArrayChap1ExampleOutput').innerHTML = LoopingOutArrayElementInli;
}

document.getElementById('ArrayChap1Example').oninput = function(){
    if(document.getElementById('ArrayChap1Example').value == ""){
        document.getElementById('ArrayChap1ExampleButton').disabled = true;
        document.getElementById('ArrayChap1ExampleButton').style.border = "1px solid #6c757d";
        document.getElementById('ArrayChap1ExampleButton').style.color = "white";
        document.getElementById('ArrayChap1ExampleButton').style.backgroundColor = "#6c757d";
        document.getElementById('ArrayChap1ExampleButton').innerHTML = "Enter The Value";
    }
    else{
        document.getElementById('ArrayChap1ExampleButton').disabled = false;
        document.getElementById('ArrayChap1ExampleButton').style.border = "1px solid red";
        document.getElementById('ArrayChap1ExampleButton').style.color = "white";
        document.getElementById('ArrayChap1ExampleButton').style.backgroundColor = "red";
        document.getElementById('ArrayChap1ExampleButton').innerHTML = "Save Value!";
    }
    
}   
function RemoveFunction(link){
    var closestSpan = link.parentElement.closest('span');
    var closestSpanValue = (closestSpan.innerHTML).toString();

    closestSpanValue.split(".");
    var closestSpanValueNumber = Number(closestSpanValue[0]);
    ArrayElementAdd.splice(closestSpanValueNumber, 1); 
    
    ElseFunctionForArrayElementAddFnction();
    // console.log(ArrayElementAdd);
    return false; //Prevents Default behaviour of link
}


const points = [40, 100, 1, 5, 25, 10];
                    
document.getElementById('CompareFunctionOutputBtn').onclick = function() {
   document.getElementById("CompareFunctionOutput1").innerHTML = "//" + points; 
   var SortedViaString = points.toSorted();
   document.getElementById("CompareFunctionOutput2").innerHTML = "//" + SortedViaString; 
   var SortedViaCompareFn = points.toSorted(function(a, b){return a - b});
   document.getElementById("CompareFunctionOutput3").innerHTML = "//" + SortedViaCompareFn; 
 }

document.getElementById('SortArrayRandomOrderBtn').onclick = function(){
    const points2 = [40, 100, 1, 5, 25, 10];
    points2.sort(function(){return 0.5 - Math.random()});
    document.getElementById("SortArrayRandomOrder").innerHTML = '//' + points2;
}

document.getElementById('FisherYatesMethodBtn').onclick = function(){
    const points4 = [40, 100, 1, 5, 25, 10];
    for (let i = points4.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = points4[i];
        points4[i] = points4[j];
        points4[j] = k;
}
document.getElementById("FisherYatesMethod").innerHTML = '//' + points4; 
}


