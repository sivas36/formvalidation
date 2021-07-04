

var div=document.createElement('div');

div.className="table-responsive-lg";

var table=document.createElement('table');

    
table.className ="table";

table.style.border='2px solid black';
table.style.textAlign='center';

table.style.position="absolute";
table.style.bottom="600px";
table.style.left="600px";


table.style.width="40%";



thead= document.createElement('thead');
thead.className="thead-dark";


var tr=document.createElement('tr');

var th1=createth('th','FirstName');
var th2=createth('th','LastName');
var th3=createth('th','Address');
var th4=createth('th','pincode');
var th5=createth('th','food1');

var th7=createth('th','gender');

var th8=createth('th','state');
var th9=createth('th','country');


var form=document.createElement('form');
console.log(form);
tr.append(th1,th2,th3,th4,th5,th7,th8,th9);
thead.append(tr);
var tbody=document.createElement('tbody');

table.append(thead,tbody);
div.append(table);
form.append(div);
document.body.append(form);


function createth(elementname,value=" "){
    var td=document.createElement(elementname);
    td.innerHTML=value;
    return td;
}


let tableers =() =>{

tbody=document.createElement('tbody');
    
var tr=document.createElement('tr');
var FirstName = document.getElementById("FirstName").value;
var lastname= document.getElementById("LastName").value;
var address = document.getElementById("inputAddress").value;
var zip = document.getElementById("inputZip").value


var td1=createth('td',FirstName);
var td2=createth('td',lastname);
var td3=createth('td',address);
var td4=createth('td',zip);

   



var option=function(name){
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
    
        values.push(checkbox.value);
    });
    if(values.length>=2){
    return values;
    }
    else{
     alert("choose atleas 2 food")
    }
}
var td6=option('color');



var option2=function(){
    var select = document.getElementById('gender');
    var selected = [...select.selectedOptions]
                    .map(option => option.value);
    return selected;
}
var td7= createth('td',option2());



var state=document.getElementById('validationDefault04').value;
var td8=createth('td',state);


var country=document.getElementById('validationDefault05').value;
var td9=createth('td',country);


 





    
    
    /*https://docs.google.com/document/d/1O8yVCwB_GaY5rZK1_mNkZ9GeYJLeom_dYmcVN3Mb2ws/edit
    https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json
    https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md*/
  
    if(!td1.innerHTML||!td2.innerHTML||!td3.innerHTML||!td4.innerHTML||!td7.innerHTML||!td8.innerHTML||!td9.innerHTML){
        alert("fill all the values");
        return false;
    }
    
   
    
    tr.append(td1,td2,td3,td4,td6,td7,td8,td9);
    tbody.append(tr);
    table.append(tbody)
    div.append(table);
    form.append(div);
    document.body.append(form);

    document.getElementById("valid").reset();



}








    
   
  

    

    
    


    
  
    









