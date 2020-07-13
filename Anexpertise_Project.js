

let file = document.getElementById("myfiles");
let columns = document.querySelectorAll(".column");

file.onchange = () =>{
  console.log(file.files);
}
