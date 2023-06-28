function addNewWEField()
{
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("weField");
    newnode.classList.add("mt-2")
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter here")
    let weOb=document.getElementById("we");
    let weAddButtonob=document.getElementById("weAddButton");

    weOb.insertBefore(newnode,weAddButtonob);
    

}

function addNewAQField()
{
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("eqField");
    newnode.classList.add("mt-2")
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter here")
    let aqOb=document.getElementById("aq");
    let aqAddButtonob=document.getElementById("aqAddButton");

    aqOb.insertBefore(newnode,aqAddButtonob);
    

}


// Generating CV
function generateCV()
{
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    //direct
    document.getElementById("nameT2").innerHTML=nameField;

    let contactField=document.getElementById("contactField").value;
    let contactT=document.getElementById("contactT");
    contactT.innerHTML=contactField;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    let wes=document.getElementsByClassName("weField");
    let str='';
    for(let e of wes)
    {
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    
 
    let aqs=document.getElementsByClassName("eqField");
    let str1=''
    for(let f of aqs)
    {
        str1=str1+`<li> ${f.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;  
    
    //code for setting image

    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    //set the image to template
    reader.onloadend = function(){
        document.getElementById("imgTemplate").src=reader.result;
    };

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
    
}

//print cv

function printCV()
{
    window.print();
}