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
    "padding-left":"10px",
    'width': "25rem",
    "height": "2rem",
    "border-radius": "5px",
    "border": "2px solid black"
});
$(".one-line button").css({
    "margin-left":"5px",
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
$(".app input[type=text]").on('focus',(e)=>{
    if(e.target.value==="New item...")
    e.target.value="";
})
$(".app input[type=text]").on('blur',(e)=>{
    if(e.target.value==="")
    e.target.value="New item...";
})
//input focus and blur
$(".one-line button").on('click',()=>{
    $(".items").append('<div></div>'); 
    $(".items div").addClass('item');
    $(".item").prepend('<div></div>');
    $(".item div").addClass('left');
    $(".item").append('<div></div>');
    $(".item div:gt(0)").addClass('right');
    $(".item .left").append("<h1></h1>");
    let text=$(".app input[type=text]")[0].value;
    $(".item .left h1").append(text);
    $(".app input[type=text]")[0].value="New item...";
    $(".item .right").append('<h1>X</h1>');
});