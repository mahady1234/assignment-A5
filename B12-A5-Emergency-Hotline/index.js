function getElement(id) {
    const result = document.getElementById(id)
    return result;
}

getElement("first-card-section").addEventListener("click", function (e) {
    if (e.target.className.includes("heart-block")) {
        const heartButton = e.target;
        const heartCount = heartButton.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[0].innerText;
        const mainHeartBox = getElement("heart-count").innerText;
        const heartCountTotal = Number(heartCount) + 1;
        getElement("heart-count").innerText = heartCountTotal;
        // console.log(heartCountTotal)
    }


})


// copy counter

getElement("first-card-section").addEventListener("click", function (e) {
    if (e.target.className.includes("copy-number")) {
        const copyBtn = e.target;
        const copyCount = copyBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[2].children[0].innerText;

        const mainCopyBox = getElement("copy-counter").innerText;
        const copyCountTotal = Number(copyCount) + 1;
        getElement("copy-counter").innerText = copyCountTotal;
        // console.log(copyCount)

    }


})
function copyKori(id) {
    var txt = getElement(id).innerText;

    navigator.clipboard.writeText(txt);

}
