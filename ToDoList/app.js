// input focus resets its value
//input blur resets its value
//adding item
//deleting item
//CSS
$(".app h2").css({ 'color': "white", "font-size": '3rem' });
$(".app h1:lt(1)").css({ 'color': "#edd051" });
$(".app h1:gt(1)").css({ 'color': "#383838" });
$(".app h1[id=green]").css({ 'color': "#21c259" });
$(".app input[type=text]").css({
    "padding-left": "10px",
    'width': "25rem",
    "height": "2rem",
    "border-radius": "5px",
    "border": "2px solid black"
});
$(".one-line button").css({
    "margin-left": "5px",
    'width': "3rem",
    "height": "2.5rem",
    "border-radius": "5px",
    "border": "2px solid black",
    "background-color": "#2085a7",
    "filter": "brightness(80%)"

});
$(".one-line button img").css({
    "height": "80%",
    'width': "80%",
});
// CSS
//input focus and blur
$(".app input[type=text]").on('focus', (e) => {
    if (e.target.value === "New item...")
        e.target.value = "";
})
$(".app input[type=text]").on('blur', (e) => {
    if (e.target.value === "")
        e.target.value = "New item...";
})
//input focus and blur
//add item button
$(".one-line button").on('click', () => {
    let text = $(".app input[type=text]")[0].value;
    if (text !== "New item..." && text !== "" && text !== " ") {
        $(".items").append("<div class='item'></div>");
        $(".items:last-child .item:last-child").prepend("<div class='left'></div>");
        $(".item:last-child .left").append("<h1>" + text + "</h1>");
        $(".items:last-child .item:last-child").append("<div class='right'></div>");
        $(".item:last-child .right").append('<h1>X</h1>');
        $(".right h1").on('click', (e) => {
            let item = e.target.closest('.item');
            $(item).remove();
        });
    }
});
//add item button
