window.onload=function () {
  let btn=document.getElementById("btn");
  let result=document.getElementById("result");
  let input=document.getElementById("inp");
  // let value="";
   let todolist=[];
    btn.onclick=function () {
      // value ="<li>"+input.value+"</li>";
        value =`<li>
          <input type="hidden">
          <span onclick="changeType(this)" >${input.value}</span>
             <button onclick="update(this)">update</button>
          </li>
           `;
      // // console.log(value);

        todolist.push(value);
        display(todolist);
  }
  function display() {
        let value=""
      todolist.forEach(function (todo) {
          value +=todo;
      })
      result.innerHTML=value;

  }

};
function update(element) {
    let eleParent = element.previousElementSibling
    let val = eleParent.previousElementSibling.value;
    if (val) {
        eleParent.textContent = val;
        eleParent.previousElementSibling.type = "hidden";
    }
}
function changeType(element) {
    element.previousElementSibling.type="text";
    element.previousElementSibling.value="";

}