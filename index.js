const dodger = document.getElementById('dodger'); function moveDodgerLeft(){const leftNumbers = dodger.style.left.replace("px",""); const left = parseInt(leftNumbers,10); if(left > 0){dodger.style.left = `${left - 1}px`;} } document.addEventListener("keydown",function (e){if(e.key === 'ArrowLeft'){ moveDodgerLeft(); } });
const Dodger = document.getElementById("dodger");
function moveDodgerRight(e){
    const rightNumber = dodger.style.left.replace("px","");
    const left = parseInt(rightNumber,10);
    if(left < 360){
        Dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener("keydown",function (e){
    if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
});