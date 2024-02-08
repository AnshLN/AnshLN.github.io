function DateUpdateFunction(){
    // new date
   var date = new Date();

    // for full date

    var dateCount = date.getDate();
    var dateToString = dateCount.toString();
    if(dateToString.length < 2){
        document.getElementById('date').innerHTML = '0' + dateCount;
    }
    else{
        document.getElementById('date').innerHTML = dateCount;
    }

    // for full month

    var dateMonthCount = date.getMonth();
    var dateMonthToString = dateCount.toString();
    if(dateMonthToString.length < 2){
        document.getElementById('dateMonth').innerHTML = '0' + (dateMonthCount + 1);    //JavaScript Month Index Starts from 0 and end at 11
    }
    else{
        document.getElementById('dateMonth').innerHTML = (dateMonthCount + 1);          //JavaScript Month Index Starts from 0 and end at 11
    } 

    // for full year

    document.getElementById('dateYear').innerHTML = date.getFullYear();

    // for day

    const AllDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var WeekDay = AllDays[date.getDay()];
    document.getElementById('dateDay').innerHTML = WeekDay;

    //for Hour

    var hours = date.getHours();
    var hoursToString = hours.toString();
    if(hoursToString.length < 2){
        document.getElementById('Hours').innerHTML = '0' + hours;
    }
    else{
        document.getElementById('Hours').innerHTML = hours;
    }

    //for Minutes 

    var Minutes = date.getMinutes();
    var MinutesToString = Minutes.toString();
    if(MinutesToString.length < 2){
        document.getElementById('Minutes').innerHTML = '0' + Minutes;
    }
    else{
        document.getElementById('Minutes').innerHTML = Minutes;
    }

    //for seconds

    var Seconds = date.getSeconds();
    var SecondsToString = Seconds.toString();
    if(SecondsToString.length < 2){
        document.getElementById('Seconds').innerHTML = '0' + Seconds;
    }
    else{
        document.getElementById('Seconds').innerHTML = Seconds;
    }
}
setInterval(DateUpdateFunction,1000);


// for add btn 
    var SavedDataInLocalStorage = {
        task : [],
        dateModified : {
            dateOutputArray : [],
            monthOutputArray : [],
            yearOutputArray : [],
            dayOutputArray : [],
            hourOutputArray : [],
            minutesOutputArray : [],
            secondsOutputArray : []
        }
    }
    // Retriving Previously Saved Data from Chrome into Saved Data in localstorage
    document.addEventListener('DOMContentLoaded', function() {
        var ReceivedFromServer = localStorage.getItem('savedTasks');

        // printing when page reloads 
        if(ReceivedFromServer != null){
        SavedDataInLocalStorage = JSON.parse(ReceivedFromServer);
        printingCommonFunction();
    }
    });
    
    var Addbtn = document.getElementById('AddBtn');
    var AddTask = document.getElementById('AddTask');
Addbtn.onclick = function(){
    var AddTaskStartTrim = ((AddTask.value).toString()).trimStart();
    if(AddTask.value == ''|| AddTask.value == null){
        window.alert('Please Enter The Task in Input Below!...');
    }
    else if(((AddTask.value).toString()).trim() == "" || ((AddTask.value).toString()).trim() == null){
        window.alert('Only space is not allowed! Enter Any Text to Add Tasks...');
        AddTask.value = '';
    }
    else{
        // saved task
        SavedDataInLocalStorage.task[SavedDataInLocalStorage.task.length] = AddTaskStartTrim;
        
        // saved time
        var CurrentDate = new Date();
        var DateSave = SavedDataInLocalStorage.dateModified;
        DateSave.dateOutputArray[DateSave.dateOutputArray.length] = (CurrentDate.getDate()).toString();
        DateSave.monthOutputArray[DateSave.monthOutputArray.length] = (CurrentDate.getMonth()).toString();
        DateSave.yearOutputArray[DateSave.yearOutputArray.length] = (CurrentDate.getFullYear()).toString();
        DateSave.dayOutputArray[DateSave.dayOutputArray.length] = (CurrentDate.getDay()).toString();
        DateSave.hourOutputArray[DateSave.hourOutputArray.length] = (CurrentDate.getHours()).toString();
        DateSave.minutesOutputArray[DateSave.minutesOutputArray.length] = (CurrentDate.getMinutes()).toString();
        DateSave.secondsOutputArray[DateSave.secondsOutputArray.length] = (CurrentDate.getSeconds()).toString();


      

        // Uploading to Localstorage

        var SavedDataInLocalStorageString = JSON.stringify(SavedDataInLocalStorage);
        localStorage.setItem('savedTasks',SavedDataInLocalStorageString);

          
        
        // Printing
        document.getElementById('OutputBox').innerHTML = '';
        printingCommonFunction();

        AddTask.value = '';

        // reassigning Delete Values
        deleteFunction();
        toRecallOnnewItems();
    }
}

// COMMON FUNCTION FOR FOR LOOP

function printingCommonFunction(){
    const AllDayss = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    for(let i=0; i < SavedDataInLocalStorage.task.length;i++){
        var Element = document.createElement('li');
        Element.id = i;
        var EditLink = document.createElement('a');
        EditLink.href = "javascript:void(0)";
        EditLink.classList = 'EditButtonParent';
        var imgNodeEdit = document.createElement('img');
        imgNodeEdit.src = 'editIcon.png';
        imgNodeEdit.classList = 'EditButton';
        EditLink.appendChild(imgNodeEdit);
        var DeleteLink = document.createElement('a');
        DeleteLink.href = "javascript:void(0)";
        DeleteLink.classList = 'DeleteButtonParent';
        var imgNodeDelete = document.createElement('img');
        imgNodeDelete.src = 'DeleteIcon.png';
        imgNodeDelete.classList = 'DeleteButton';
        DeleteLink.appendChild(imgNodeDelete);
        var InputNode = document.createElement('input');
        InputNode.readOnly = true;
        var LabelNode = document.createElement('span');
        var TextNode = document.createTextNode('Task : ');
        InputNode.value = SavedDataInLocalStorage.task[i];
        var TextNodeForSpan = document.createTextNode('Date Modified : ' + SavedDataInLocalStorage.dateModified.dateOutputArray[i] + '/' + (Number(SavedDataInLocalStorage.dateModified.monthOutputArray[i]) + 1 ) + '/' + SavedDataInLocalStorage.dateModified.yearOutputArray[i] + ', ' + AllDayss[Number(SavedDataInLocalStorage.dateModified.dayOutputArray[i])] + ' , ' + SavedDataInLocalStorage.dateModified.hourOutputArray[i] + ' : ' + SavedDataInLocalStorage.dateModified.minutesOutputArray[i] + ' : ' + SavedDataInLocalStorage.dateModified.secondsOutputArray[i]);
        LabelNode.appendChild(TextNodeForSpan);
        Element.appendChild(LabelNode);
        
        Element.appendChild(TextNode);
        Element.appendChild(InputNode);
        Element.appendChild(EditLink);
        Element.appendChild(DeleteLink);

        var ParentNode = document.getElementById('OutputBox');
        ParentNode.appendChild(Element);
    }

}


// Edit icon Animation

document.addEventListener('DOMContentLoaded', function() {
   
    toRecallOnnewItems();
  });
  
  function toRecallOnnewItems(){
    const editButtonParents = document.querySelectorAll('.EditButtonParent');
 
    editButtonParents.forEach(function(editButtonParent) {
    
    editButtonParent.addEventListener('mouseover', ImgToGif);
    editButtonParent.addEventListener('mouseout', GifToImg);
      editButtonParent.addEventListener('click',TaskEditFunction);
        
    });
  }
  
  //SSSSS

  function ImgToGif() {
    var EimgElement = $(this).find('img');
    if(EimgElement.attr('src') === 'editIcon.png'|| EimgElement.attr('src') === 'editIcon.gif'){
    this.querySelector('.EditButton').src = 'editIcon.gif';
    }
    else if(EimgElement.attr('src') === 'saveBtn.png'|| EimgElement.attr('src') === 'saveBtn.gif'){
        this.querySelector('.EditButton').src = 'saveBtn.gif';
    }
  }
  
  function GifToImg() {
    EimgElement = $(this).find('img');
    if(EimgElement.attr('src') === 'editIcon.png'|| EimgElement.attr('src') === 'editIcon.gif'){
    this.querySelector('.EditButton').src = 'editIcon.png';
    }
    else if(EimgElement.attr('src') === 'saveBtn.png'|| EimgElement.attr('src') === 'saveBtn.gif'){
        this.querySelector('.EditButton').src = 'saveBtn.png';
    }
  } 
  // SSSS

  function TaskEditFunction(){
    var EItem = $(this).closest('li').attr('id');

    var EimgElement = $(this).find('img');
    var Einput = $(this).prev(); 
    if(EimgElement.attr('src') === 'editIcon.png'|| EimgElement.attr('src') === 'editIcon.gif'){
    Einput.removeAttr('readonly'); 
    Einput.addClass("EditButtonClicked");
    EimgElement.attr('src', 'saveBtn.png');
  }
  else if(EimgElement.attr('src') === 'saveBtn.png'|| EimgElement.attr('src') === 'saveBtn.gif'){
    EimgElement.attr('src', 'editIcon.png');
    Einput.attr('readonly', 'readonly');
    Einput.removeClass("EditButtonClicked");

    var CRDate = new Date();
    SavedDataInLocalStorage.task[EItem] = (Einput.val()).toString();
    SavedDataInLocalStorage.dateModified.dateOutputArray[EItem] = (CRDate.getDate()).toString(); 
    SavedDataInLocalStorage.dateModified.monthOutputArray[EItem] = (CRDate.getMonth()).toString();
    SavedDataInLocalStorage.dateModified.yearOutputArray[EItem] = (CRDate.getFullYear()).toString();
    SavedDataInLocalStorage.dateModified.dayOutputArray[EItem] = (CRDate.getDay()).toString();
    SavedDataInLocalStorage.dateModified.hourOutputArray[EItem] = (CRDate.getHours()).toString();
    SavedDataInLocalStorage.dateModified.minutesOutputArray[EItem] = (CRDate.getMinutes()).toString();
    SavedDataInLocalStorage.dateModified.secondsOutputArray[EItem] = (CRDate.getSeconds()).toString();

    document.getElementById('OutputBox').innerHTML = '';
    printingCommonFunction();
    deleteFunction();
    toRecallOnnewItems();
    var SavedDataInLocalStorageString = JSON.stringify(SavedDataInLocalStorage);
    localStorage.setItem('savedTasks',SavedDataInLocalStorageString);
  }
}
  






//   Delete Icon Animation

document.addEventListener('DOMContentLoaded', function() {
    deleteFunction();
  });
  
  function ImgToGifDel() {
    this.querySelector('.DeleteButton').src = 'DeleteIcon.gif';
  }
  
  function GifToImgDel() {
    this.querySelector('.DeleteButton').src = 'DeleteIcon.png';
  }

  function DeleteArrayItem() {

     var Item = $(this).closest('li').attr('id');
    
    SavedDataInLocalStorage.task.splice(Item,1);
    SavedDataInLocalStorage.dateModified.dateOutputArray.splice(Item,1);
    SavedDataInLocalStorage.dateModified.monthOutputArray.splice(Item,1);
    SavedDataInLocalStorage.dateModified.yearOutputArray.splice(Item,1);
    SavedDataInLocalStorage.dateModified.dayOutputArray.splice(Item,1);
    SavedDataInLocalStorage.dateModified.hourOutputArray.splice(Item,1);
    SavedDataInLocalStorage.dateModified.minutesOutputArray.splice(Item,1);
    SavedDataInLocalStorage.dateModified.secondsOutputArray.splice(Item,1); 

    document.getElementById('OutputBox').innerHTML = '';
    printingCommonFunction();
    deleteFunction();
    toRecallOnnewItems();

    var SavedDataInLocalStorageString = JSON.stringify(SavedDataInLocalStorage);
    localStorage.setItem('savedTasks',SavedDataInLocalStorageString);
  }
function deleteFunction(){
    const deleteButtonParents = document.querySelectorAll('.DeleteButtonParent');
  
    deleteButtonParents.forEach(function(deleteButtonParent) {
      deleteButtonParent.addEventListener('mouseover', ImgToGifDel);
      deleteButtonParent.addEventListener('mouseout', GifToImgDel);
      deleteButtonParent.addEventListener('click',DeleteArrayItem);
    });
}

  

