$(document).ready(function(){
    // .txt
    $('#demoBtn').click(function(){
        $('#demo').load("demo.txt");
    });

    // .json
    $("#demoBtn2").click(function(){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            var recievedText = xhttp.responseText;
            var recievedJson = JSON.parse(recievedText);
            var txt = "<thead><tr><th>Name</th><th>Surname</th><th>Age</th><th>Country</th></tr></thead>";
            for(let i = 0;i<recievedJson.Table.Name.length;i++){
                txt += "<tr><td>" + recievedJson.Table.Name[i] + "</td><td>" + recievedJson.Table.Surname[i] + "</td><td>" + recievedJson.Table.Age[i] + "</td><td>" + recievedJson.Table.Country[i] + "</td></tr>";
            }
            document.getElementById('table').innerHTML = txt;
        }
        xhttp.open("GET","demo.json");
        xhttp.send();
    });

    // .xml
    $("#demoBtn3").click(function(){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            var recievedXML = xhttp.responseXML;
            var x = recievedXML.getElementsByTagName("USERINFO");
            var txt2 = "<thead><tr><th>Name</th><th>Surname</th><th>Age</th><th>Country</th></tr></thead>";
            for(let i=0; i<x.length; i++){
                txt2 += "<tr><td>" +
                x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + 
                "</td><td>"+ x[i].getElementsByTagName("SURNAME")[0].childNodes[0].nodeValue + 
                "</td><td>"+ x[i].getElementsByTagName("AGE")[0].childNodes[0].nodeValue +
                "</td><td>" + x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
                "</td></tr>";   
            }
            document.getElementById('table2').innerHTML = txt2;
        }
        xhttp.open("GET","demo.xml");
        xhttp.send();
    });
});
