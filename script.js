document.querySelector("#push").addEventListener("click", function  (){
    if(document.querySelector("#newtask input").value.length == 0){
        swal("Please Enter a Task");
    }else{
        var val = document.querySelector("#newtask input").value;
        document.querySelector("#tasks").innerHTML+= `
        <div class="task">
        <span id="taskname">
        ${val}
        </span>
        <button class="delete">
            <i class="fa fa-trash-o"></i>
        </button>
        </div>
        `;

        var currentTask = document.querySelectorAll(".delete");
        for(var i = 0;i < currentTask.length; i++){
            currentTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i = 0;i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";


    }
});