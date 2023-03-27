function validateform(){ 
var uname=document.myform.uname.value;  
var upassword=document.myform.pwd.value; 
 

if (uname=="hello" && upassword=="hello"){  
    document.getElementById("msg").innerHTML = "Login Successful!";   
window.location="addressBookApp.html";
 
}
else if(uname=="" && upassword==""){
   document.getElementById("msg").innerHTML = "Enter Username and Password";    
}
else if(uname==""){
   document.getElementById("msg").innerHTML = "Enter Username";    
}
else if(upassword==""){
   document.getElementById("msg").innerHTML = "Enter Password";    
}
else{  
    document.getElementById("msg").innerHTML = "Incorrect Username or Password";    
  }  
}


//-------------------------------------

function hideForm(){
  document.getElementById("employee-form").style.display="none";
   UI.clearFields();
}

function displayForm(){
  document.getElementById("employee-form").style.display="block";
}

var selectedRow=null;
 class Employee{
   constructor(fname,lname,address,city,region,country,postalCode,phone,email,age){
    this.fname=fname;
    this.lname=lname;
    this.address=address;
    this.city=city;
    this.region=region;
    this.country=country;
    this.postalCode=postalCode;
    this.phone=phone;
    this.email=email;
    this.age=age;
  }
 }

 class UI{
     static displayemployee(){
        const StoreEmp=[
          {
              fname: 'Joe',
              lname: 'Smith',
              address:'123 Fake St.',
              city: 'New York',
              region: 'Brooklyn',
              country: 'United States',
              postalCode: '34545',
              phone:'4378443432',
              email:'apps@jauyeung.net',
              age:'22'
            }, 
              {
              fname: 'Jane',
              lname: 'Smith',
              address:'222 Fake St.',
              city: 'New York',
              region: 'Manhattan',
              country: 'United States',
              postalCode: '54563',
              phone:'3426566542',
              email:'apps@jauyeung.net',
              age:'22'
            }, 
            {
              fname: 'May',
              lname: 'Smith',
              address:'555 A St.',
              city: 'San Francisco',
              region: 'Queens',
              country: 'United States',
              postalCode: '23345',
              phone:'4347667242',
              email:'apps@jauyeung.net',
              age:'45'
            }, 
        ];

        const employee= StoreEmp;
        employee.forEach((book)=> UI.AddEmployeeToList(book));
    }


     static AddEmployeeToList(employee){
         const list=document.querySelector("#employee-list");
         const row=document.createElement("tr");
         row.innerHTML=`
           <td>${employee.fname}</td>
           <td>${employee.lname}</td>
            <td>${employee.address}</td>
            <td>${employee.city}</td>
            <td>${employee.country}</td>
           <td>${employee.postalCode}</td>
           <td>${employee.phone}</td>
           <td>${employee.email}</td>
           <td>${employee.age}</td>
         <td><a href="#" class="btn btn-primary btn-sm edit">Edit</a></td>
         <td><a href="#" class="btn btn-primary btn-sm delete">Delete</a></td>
         `
         list.appendChild(row);
     }

     static editEmployeeToList(employee){
         selectedRow.children[0].textContent= employee.fname;
         selectedRow.children[1].textContent= employee.lname;
         selectedRow.children[2].textContent= employee.address;
            selectedRow.children[3].textContent= employee.city;
         // selectedRow.children[4].textContent= employee.region;
         selectedRow.children[4].textContent= employee.country;
            selectedRow.children[5].textContent= employee.postalCode;
         selectedRow.children[6].textContent= employee.phone;
         selectedRow.children[7].textContent= employee.email;
            selectedRow.children[8].textContent= employee.age;
     


         document.querySelector(".submit_btn").value="Submit";
             document.querySelector(".submit_btn").classList="btn btn-primary btn-block submit_btn";
     }
     static deleteEmpyee(el){
         if(el.classList.contains("delete")){
             el.parentElement.parentElement.remove();
        
         }else{
             null;
         }
     }

     static editEmployee(el){
         if(el.classList.contains('edit')){
           displayForm();
             selectedRow= el.parentElement.parentElement;
             document.querySelector("#fname").value= selectedRow.children[0].textContent;
             document.querySelector("#lname").value= selectedRow.children[1].textContent;
             document.querySelector("#address").value= selectedRow.children[2].textContent;
               document.querySelector("#city").value= selectedRow.children[3].textContent;
             // document.querySelector("#region").value= selectedRow.children[4].textContent;
             document.querySelector("#country").value= selectedRow.children[4].textContent;
               document.querySelector("#postalCode").value= selectedRow.children[5].textContent;
             document.querySelector("#phone").value= selectedRow.children[6].textContent;
             document.querySelector("#email").value= selectedRow.children[7].textContent;
               document.querySelector("#age").value= selectedRow.children[8].textContent;
          

             document.querySelector(".submit_btn").value="Submit";
             document.querySelector(".submit_btn").classList="btn btn-primary btn-block submit_btn";
         }else{null}
     }


  static clearFields() {
    document.querySelector('#fname').value="";
    document.querySelector('#lname').value="";
    document.querySelector('#address').value="";
    document.querySelector('#city').value="";
    document.querySelector('#region').value="";
    document.querySelector('#country').value="";
    document.querySelector('#postalCode').value="";
    document.querySelector('#phone').value="";
    document.querySelector('#email').value="";
    document.querySelector('#age').value="";
  }

 

 }

//As the page Loads
document.addEventListener('DOMContentLoaded', UI.displayemployee);


document.querySelector('#employee-form').addEventListener('submit', (e) => {
  e.preventDefault();

const fname=document.querySelector('#fname').value;
const lname=document.querySelector('#lname').value;                         
const address=document.querySelector('#address').value;                     
const city=document.querySelector('#city').value;
const region=document.querySelector('#region').value;
const country=document.querySelector('#country').value;                     
const postalCode=document.querySelector('#postalCode').value;           
const phone=document.querySelector('#phone').value; 
const email=document.querySelector('#email').value;
const age=document.querySelector('#age').value;   

  
    function ageValidate(check) {
     var ageTab = document.getElementById("age");        
			if (age>=1 && age<=200) {
         document.getElementsByTagName("small")[2].innerHTML="";
				return check;
			}
			else {
				
          document.getElementsByTagName("small")[2].innerHTML="Age must be between 1 to 200";
				return check+1;
			}
		}
  
  
   function postalCodeValidate(check) {
		 var postalCodeTab = document.getElementById("postalCode");

			var postalreg = /^[1-9]{5}$/;
    
			if (postalreg.test(postalCode)) {
         document.getElementsByTagName("small")[0].innerHTML="";
				return check;
			}
			else {
         document.getElementsByTagName("small")[0].innerHTML="Invalid Postal Code";
				return check+1;
			}
		}
  
			function phoneValidate(check) {
			var phoneTab = document.getElementById("phone");
			var phoneInput = document.getElementById("phone").value;
			var phonereg = /^[0-9]{10}$/;
			if (phonereg.test(phoneInput)) {
         document.getElementsByTagName("small")[1].innerHTML="";
				return check;
			}
			else {
         document.getElementsByTagName("small")[1].innerHTML="Invalid phone Number";
				return check+1;
			}
		}
 
  function formInputValidate(){
    var check=0;
      var k1=postalCodeValidate(check);
     var k3=ageValidate(check);
    var k2= phoneValidate(check);
    
   return k1||k2||k3;
  }

  
 if(!formInputValidate()){
    hideForm();
    const employee = new Employee(fname,lname,address,city,region,country,postalCode,phone,email,age);

  if (selectedRow == null) {
    UI.AddEmployeeToList(employee);
    selectedRow = null;
  } else {
    UI.editEmployeeToList(employee);
    selectedRow = null;
  }
    UI.clearFields();
 }
  
}); 

document.querySelector('#employee-list').addEventListener('click', (e) => {
  UI.deleteEmpyee(e.target);
  UI.editEmployee(e.target);
});