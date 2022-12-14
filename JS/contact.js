const form = document.getElementById("sendMessage");
const nameForm = document.getElementById("fname");
const emailForm = document.getElementById("email");
const subjectForm = document.getElementById("subject");
const messageForm = document.getElementById("message");

const productsCartNumber = document.querySelector("nav a span");
productsCartNumber.textContent = localStorage.getItem("productsNumber")?localStorage.getItem("productsNumber"):0

const urlContact = "https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us"

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const data = {
    
    "name": nameForm.value,
    "email": emailForm.value,
    "subject": subjectForm.value,
    "message": messageForm.value
    
    
  }
  const xhr = new XMLHttpRequest();
  xhr.open("POST",urlContact);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onload = ()=>{
    form.reset();
}
})