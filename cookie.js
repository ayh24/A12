function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(value1 => {
        if (val.indexOf(name) == 0) value = val.substring(name.length);
    })
}

document.querySelector("#bttn").addEventListener("click",()=> {
    document.querySelector("#cookies").style.display="none";
    setCookie("cookie",true,30);
})

function cookieMessage() {
    if(!getCookie("cookie"))
        document.querySelector("#cookies").style.display = "block";
}

window.addEventListener("load", cookieMessage);