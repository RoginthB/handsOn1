document.getElementById("form").addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e);
});
var table=document.getElementById('tableBody');
for (let i=0; i<localStorage.key.length;i++){
var f=localStorage.getItem("First Name"); 
var l= localStorage.getItem("Last Name"); 
var lo=localStorage.getItem("Location"); 
table.innerHTML+=`<tr><td>${f}</td> <td>${l}</td> <td>${lo}</td></tr>`
}
function formSubmit(){
     collectData();
}
function collectData(){
    var data=[];
    data[0]=document.getElementById('fname').value;
    data[1]=document.getElementById('lname').value;
    data[2]=document.getElementById('location').value;
    if (data[0]=="" || data[1]==""||data[2]==""){
        alert("input field cannot be empty")
    }else{
        showdata(data)
    }
    localStorage.setItem("First Name",data[0]);
    localStorage.setItem("Last Name",data[1]);
    localStorage.setItem("Location",data[2]);
    
}
function showdata(data){
    
    table.innerHTML+=`<tr><td>${data[0]}</td> <td>${data[1]}</td> <td>${data[2]}</td></tr>`
    clearData();
}
function clearData(){
    document.forms[0][0].value=null
    document.forms[0][1].value=null
    document.forms[0][2].value=null   
}
console.log(localStorage);





// function onFormSubmit() {
//   // call all the below functions here to use this function in the form while implementing onsubmit.
//   readFormData();
// }

// function readFormData() {
//  // return all the input values from three input fields here.
//     var data=[];
//     data[0]=document.getElementById('fname').value;
//     data[1]=document.getElementById('lname').value;
//     data[2]=document.getElementById('location').value;
// if (data[0]=="" || data[1]==""||data[2]==""){
//         alert("input field cannot be empty")
//     }else{
//         insertNewRecord(data);
//     }
//     
// }

// function insertNewRecord(data) {
//   var table=document.getElementById('tabledata');

// // this function should insert a new row with data in the table.
//     table.innerHTML+=`<tr><td>${data[0]}</td> <td>${data[1]}</td> <td>${data[2]}</td></tr>`
//     resetForm();
// }
// function resetForm() {
//  // this function should reset the form fields.
//   document.forms[0][0].value=null
//     document.forms[0][1].value=null
//     document.forms[0][2].value=null  
// }
// if (typeof exports !== "undefined") {
//   module.exports = {
//     onFormSubmit,
//     readFormData,
//     insertNewRecord,
//     resetForm,
//   };
// }













// it("testing submission", () => {
//     let spy = spyOn(window, "alert");

//     document.getElementById("fname").value = "Vignesh";
//     document.getElementById("lname").value = "Kumar";
//     expect(document.getElementById("lname").value).toBe("Kumar");
//     document.getElementById("location").value = "Chennai";
//     onFormSubmit();
//     expect(document.getElementById("tabledata").innerHTML).toBe(
//       "<tr><td>Vignesh</td><td>Kumar</td><td>Chennai</td></tr>"
//     );
//     document.getElementById("fname").value = "Arjun";
//     document.getElementById("lname").value = "Suravaram";
//     document.getElementById("location").value = "Hyderabad";
//     onFormSubmit();
//     expect(document.getElementById("tabledata").innerHTML).toBe(
//       "<tr><td>Vignesh</td><td>Kumar</td><td>Chennai</td></tr><tr><td>Arjun</td><td>Suravaram</td><td>Hyderabad</td></tr>"
//     );
//     expect(document.getElementById("fname").value).toBe("");
//     expect(document.getElementById("lname").value).toBe("");
//     expect(document.getElementById("location").value).toBe("");
//     document.getElementById("fname").value = "";
//     document.getElementById("lname").value = "";
//     document.getElementById("location").value = "";
//     onFormSubmit();
//     expect(spy).toHaveBeenCalledWith("input field cannot be empty");
//   });
// });