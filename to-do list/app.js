$(document).ready(function(){
const  originalBox = $("<input>").attr({
    type:"text",
    class:"box",
    value: ""

})

 addBtn= $("#add-button").on("click", function(){
 const newBox = originalBox.clone()
  console.log("new")
  $("#click-add").after(newBox)
  console.log("another new")

})
})
const removeBtn = $("#remove-button").on("click",function(){
    $(".box")[0].remove()
})
