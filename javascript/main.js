/**
 *  Social share links:
 * 
 *  Whatsapp:https://api.whatsapp.com/send?text=[post-title] [post-url]
 *  Twitter:https://twitter.com/share?url=[post-url]&text=[post-title]&hashtags=[hashtags]
 *  Facebook:https://www.facebook.com/sharer.php?u=[post-url]
 * 
 * */ 

const facebookBtn = document.querySelector(".facebookButton");
const twitterBtn = document.querySelector(".twitterButton");
const whatsappBtn = document.querySelector(".whatsappButton");

function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Me and My passion");
    let hashtags = encodeURI("cars, driving");
    facebookBtn.setAttribute("href",`https://www.facebook.com/sharer.php?u=${postUrl}`);
    twitterBtn.setAttribute("href",`https://twitter.com/share?url=${postUrl}&text=${postTitle}&hashtags=${hashtags}`);
    whatsappBtn.setAttribute("href",`https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);

}

init();