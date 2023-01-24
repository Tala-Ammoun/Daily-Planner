$(function () {


setInterval(function () {
    var today = moment();
    document.querySelector("#currentDay").textContent = today.format("D MMM YYYY");
    })


    function storedText() {
        let values = []
        keys = Object.keys(localStorage)
        i = keys.length
        while (i--) {
            let storedText = JSON.parse(localStorage.getItem("textArea"))
            values.push(localStorage.getItem(keys[i]))
            $($("textarea")).text = storedText
        }
    }
    storedText()

    // let storedText= JSON.parse(localStorage.getItem("textArea"))
    // console.log(storedText)
    // $($("textarea")).text(storedText.textArea) //display text at the textAreaIndex where the text was entered

    $(".saveBtn").click(function (event) {
        let saveBtnIndex = $(event.target).data().index;
        let textareaIndex = $(event.target).siblings().data().index;
        if (saveBtnIndex = textareaIndex) {
            let textArea = $("textarea").text(); //targets value entered at any textarea where both indexes are equal, but not at a specific textAreaIndex
            localStorage.setItem("textArea", JSON.stringify({textArea: textArea[textareaIndex]}))
        }
        storedText()
    })
    

let present = parseFloat(moment().format("HH"))

Object.keys($(".hour")).forEach((element) => {
    if (element < 10) {
        $($(".hour")[element]).attr("data-index", element)
        $($("textarea")[element]).attr("data-index", element)
        $($(".saveBtn")[element]).attr("data-index", element)
    }
}
)

Object.keys($(".hour")).forEach((element) => {
    if (element < 10) {
        let hourNum = parseFloat($($(".hour")[element]).text(), 2)
        let hourIndex = $($(".hour")[element]).attr("data-index")
        let textareaIndex = $($("textarea")[element]).attr("data-index")

    if (hourNum === present && hourIndex === textareaIndex) {
            $($("textarea")[textareaIndex]).css('background-color', '#73231a')}

    else if (hourNum < present && hourIndex === textareaIndex) {
            $($("textarea")[textareaIndex]).css('background-color', 'lightgrey')}

    else if (hourNum > present && hourIndex === textareaIndex) {
            $($("textarea")[textareaIndex]).css('background-color', 'olive')}
                }
            })

        // function displayStoredText(){
        //     let storedText = localStorage.getItem("textArea")
        //     if (storedText === "")
        //     {
        //         return
        //     }
        //     else if (storedText === ""){
        //         $("textarea").text(storedText)
        //     }}


        //$("textarea").sortable();

    })