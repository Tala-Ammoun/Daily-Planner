$(function(){


setInterval(function(){
    var today = moment(); //to use the variable today outside the function, we need to pass it as a parameter inside another function, then call that function outside the setInterval function.
    document.querySelector("#currentDay").textContent = today.format("D MMM YYYY");
})

displayStoredText()

Object.keys($(".hour")).forEach((element) =>  
{ 
    if (element <10){
    $($(".hour")[element]).attr("data-index", element)
    $($("textarea")[element]).attr("data-index", element)
    $($(".saveBtn")[element]).attr("data-index", element)
}}
)

// let textArea = $("textarea").val()

$(".saveBtn").click(function(event){
    event.preventDefault();
    let saveBtnIndex = $(event.target).data().index
    let textareaIndex = $(event.target).siblings().data().index
    if (saveBtnIndex === textareaIndex){
        let textArea = $("textarea").val()
        localStorage.setItem("textArea", JSON.stringify({textArea}))
    }
})

// let storedText = localStorage.getItem(textArea)
// $("textarea").text(storedText)

function displayStoredText(){
    let storedText = localStorage.getItem("textArea")
    if (storedText === "")
    {
        return
    }
    else if (storedText === ""){
        $("textarea").text(storedText)
    }}



})