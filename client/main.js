let submit = document.querySelector('#submit');


function addTask(){
    if (document.querySelector('#newcourse input').value.length == 0){
        alert('Enter a new course');
    } else {
        document.querySelector('#courses').innerHTML += `<div class="task"> <span id="taskn">
        ${document.querySelector('#newcourse input').value}</span><button class="delete">X</button></div>`

        let current_tasks = document.querySelectorAll('.delete');

        for(let i =0; i <current_tasks.length; i++){
            current_tasks[i].onclick = function (){
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll('#taskn');
        for(let i = 0; i < tasks.length; i++){
            tasks[i].onclick = function (){
                this.classList.toggle('completed');
            }
        }

        document.querySelector('#newcourse input').value ="";

    }
}
/*Axios*/
document.getElementById("list").onclick = function() {
    axios
    .get("http://localhost:5500/api/task")
    .then(function (res){
        const data = res.data;
        document.getElementById("courses").innerHTML = data
        .map(function(courses){
            return '<li class="row">' + courses;
        })
        .join("");
    })
    .catch(function (err){
        document.getElementById("courses").innerHTML =
              '<li class="text-danger">' + err.message + "</li>";
    });
};
submit.addEventListener("click", addTask);