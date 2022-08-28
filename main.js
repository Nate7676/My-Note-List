window.addEventListener('load', () => {
  const form = document.querySelector('#new-todo-form');
  const input = document.querySelector('#new-todo-input');
  const list_el = document.querySelector('#todos');
  const more_fc = document.querySelector('#top_header');

  /*สร้างปุ้มยืนยันผ่านการเรียกใช้ el */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    /*สร้างตัวแปร todo ขึ้นมาเพื่อรับค่า inputของการยืนยันต่างๆ*/
    const todo = input.value;

    if (!todo) {
      alert("โอ๊ะ ดูเหมือนว่าจะมีคนว่างงาน ลองเพิ่มงานอะไรสักหน่อยสิ");
      return;
      }
      
      /*สร้างกลุ่ม div มารับ class todo*/
      const todo_el = document.createElement("div");
      todo_el.classList.add("todo");
      
      /*สร้างกลุ่ม div มารับ class content*/
      const todo_content_el = document.createElement("div");
      todo_content_el.classList.add("content");
      
      todo_el.appendChild(todo_content_el);
      
      const todo_input_el = document.createElement("input");
      todo_input_el.classList.add("text");
      todo_input_el.type = "text";
      todo_input_el.value = todo;
      todo_input_el.setAttribute("readonly", "readonly");
      
      todo_content_el.appendChild(todo_input_el);
      
      /*เพิ่มปุ่มใน List*/
      const todo_actions_el = document.createElement("div");
      todo_actions_el.classList.add("actions");
      
      const todo_edit_el = document.createElement("button");
      todo_edit_el.classList.add("edit");
      /*เพิ่มปุ่มแก้ไขภายใน List*/
      todo_edit_el.innerHTML = "แก้ไข";
      
      const todo_delete_el = document.createElement("button");
      todo_delete_el.classList.add("delete");
      /*เพิ่มปุ่มลบภายใน List*/
      todo_delete_el.innerHTML = "ลบทิ้ง";
      
      todo_actions_el.appendChild(todo_edit_el);
      todo_actions_el.appendChild(todo_delete_el);
      
      todo_el.appendChild(todo_actions_el);
      
      list_el.appendChild(todo_el);
      
      input.value = "";
      
      todo_edit_el.addEventListener('click', () => {
          if(todo_edit_el.innerText == "แก้ไข") {
              todo_input_el.removeAttribute("readonly");
              todo_input_el.focus();
              todo_edit_el.innerText = "บันทึก";
          }
          else {
              todo_input_el.setAttribute("readonly",                  "readonly");
              todo_edit_el.innerText = "แก้ไข";
          }
      })
      
      todo_delete_el.addEventListener('click', () => {
          list_el.removeChild(todo_el);
      })
      
   })
})

const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', function() {
    for (var i = 0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');
});