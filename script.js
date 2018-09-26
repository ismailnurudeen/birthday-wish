const wishView = document.querySelector(".live-wish p");
let wish_html='Happy birthday to youWinfred Aideyan Iwinosa.<br/>I wish you <span class="w1">long life</span>,<span class="w2">prosperity</span> and <span class="w3">happiness.</span><br/>Thank you for your words of encouragement and advice.<br/>I am glad to have come across you in my life.<br/>Enjoy your day and i wish you bug free codes.<br/><br/><span class="from"> - From someone who cares</span>'
let wish="Happy birthday to you Winfred Aideyan Iwinosa. I wish you long life,prosperity and happiness.Thank you for your words of encouragement and advice.I am glad to have come across you in my life.Enjoy your day and i wish you bug free codes. - From someone who cares";
var pos = 0;
var speed = 135;
var writeNote;
function write(text) {
    if (pos < text.length) {
        wishView.innerHTML += (text.charAt(pos));
        pos++;
    }
    if(pos == text.length){
        clearInterval(writeNote);
        wishView.innerHTML=wish_html;
        for(var i=0;i<=5;i++){
            cornify_add();
        }
   }
}
function playWish(words) {
    writeNote = setInterval(() => {
        write(words);
    }, speed);
}
playWish(wish);
        