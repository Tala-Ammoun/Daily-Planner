setInterval(function () {
    var today = moment();
    document.querySelector("#currentDay").textContent = today.format("D MMM YYYY");
    })

storedTextFun()

    function storedTextFun() {
        for (let i = 0; i < localStorage.length; i++) {
            if (storedText === " "){
            let storedText= JSON.parse(localStorage.getItem(i))
                return}
            else {$("textarea").text(storedText)}
        }}

    $(".saveBtn").click(function (event) {
        let saveBtnIndex = $(event.target).data().index;
        let textareaIndex = $(event.target).siblings().data().index;
        let textArea = $("textarea").eq(textareaIndex).val();
        if (saveBtnIndex = textareaIndex) {
        localStorage.setItem("textArea", JSON.stringify(textArea))}
        storedTextFun()
    })

let present = parseFloat(moment().format("HH"))

Object.keys($(".hour")).forEach((element) => {
    if (element < 10) {
        $($(".hour")[element]).attr("data-index", element)
        $($("textarea")[element]).attr("data-index", element)
        $($(".saveBtn")[element]).attr("data-index", element)
    }
})

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

