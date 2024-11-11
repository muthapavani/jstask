
let cont=document.getElementById("container")
cont.style.display="flex"
cont.style.gap="10px"

function funct(){
    let todo=document.createElement("div")
    todo.style.border="2px solid black"
    todo.style.padding="50px"

     cont.appendChild(todo)
    let name=document.getElementById("title")
    let det=document.getElementById("det")

   

    if(det.value===""|| name.value===""){
        alert("enter todo list")
    }
    else{
       
        let title=document.createElement("h1")
        title.innerText=name.value
        todo.appendChild(title)
        title.style.color="red"
        let details=document.createElement("p")
        details.innerText=det.value
        todo.appendChild(details)
        details.style.color="blue"



        let edit=document.createElement("button")
        edit.innerText="edit"
        todo.appendChild(edit)
        edit.style.color="white"
        edit.style.backgroundColor="yellow"
        edit.style.margin="20px"

        let del=document.createElement("button")
        del.innerText="Delete"
        todo.appendChild(del)
        del.style.color="white"
        del.style.backgroundColor="green"
        del.style.margin="20px"

        let compl=document.createElement("button")
        compl.innerText="complete"
        todo.appendChild(compl)
        compl.style.color="white"
        compl.style.backgroundColor="red"
        compl.style.margin="20px"


        edit.addEventListener("click",function(){
            console.log("edit")
            name.value=title.innerText
            det.value= details.innerText
            cont.removeChild(todo)
        })

        del.addEventListener("click",function(){
            cont.removeChild(todo)
        
        })
        compl.addEventListener("click",function(){
            details.style.textDecoration="line-through"
            details.style.color="yellow"
            let p=document.createElement("h2")
            p.innerText="COMPLETED"
            p.style.color="green"
            todo.appendChild(p)
            todo.style.backgroundColor="gray"

        })


        name.value=""
        det.value=""
        
    }


}

