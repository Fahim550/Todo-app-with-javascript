window.addEventListener('load', () => {
// finding element
const container=document.querySelector(".container")
const Todoform=document.querySelector("#form-input")
const inputel=document.querySelector("#input-el")
const list_el=document.querySelector("#lists")

// const createtodo=(todoid,todovalue)=>{
//      const todoelment=document.createElement("li");
//     todoelment.id=Todoid;
//     todoelment.innerHTML=
// }
// create function
// const addvalue=(e)=> {
//     // e.preventDefault();
    
//     const Todoid=Date.now().toString();
//     createtodo(todoid,todovalue  )
// }
// adding listen
Todoform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Todovalue=inputel.value;

    if (Todovalue== '') {
        alert("Please Add Your Task")
       return;
    }
    

    // create output div
    // parent div
    const output_el=document.createElement('div')
    output_el.classList.add('output')
    // children div
    const output_contant_el=document.createElement('div')
    output_contant_el.classList.add('contant')
    // inject in parent
    output_el.appendChild(output_contant_el)

    const output_input_el=document.createElement('input')
    output_input_el.classList.add('text')
    output_input_el.type='text'
    output_input_el.value=Todovalue
    output_input_el.setAttribute('readonly', 'readonly')
// inject
    output_contant_el.appendChild(output_input_el)
    output_el.appendChild(output_contant_el)
    // step 2
    const output_action_el=document.createElement('div')
    output_action_el.classList.add('action')
    // create edit 
    const output_edit_el=document.createElement('button')
    output_edit_el.classList.add('edit')
    output_edit_el.innerText='Edit'
    // create delete 
    const output_delete_el=document.createElement('button')
    output_delete_el.classList.add('delete')
    output_delete_el.innerText='Delete'
    // inject
    output_action_el.appendChild(output_edit_el)
    output_action_el.appendChild(output_delete_el)

    output_el.appendChild(output_action_el)

    list_el.appendChild(output_el)

    inputel.value=""
    // work edit and delete button

    output_edit_el.addEventListener('click', () => {
        if (output_edit_el.innerText.toLocaleLowerCase() == 'edit') {
            output_edit_el.innerText = 'Save'
            output_input_el.removeAttribute('readonly')
        } else {
            output_edit_el.innerText = 'Edit'
            output_input_el.setAttribute('readonly', 'readonly')
        }
    })

    output_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(output_el)
    })


});

 

})