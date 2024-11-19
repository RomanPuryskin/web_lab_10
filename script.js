let lampIsOff = true;
let isRabbit = true;

function getUp()
{
    document.querySelector("#curtans").style.cssText = `transition: 2s; bottom:100%; `
}

function downSwitcher()
{
    document.querySelector("#switcher").style.cssText = `top: 40px; transition: 0.5s;`
}

function lightOn()
{
    if(lampIsOff){
        lampIsOff = false;
        document.querySelector(".focus").style.cssText = `opacity: 1;`
        document.querySelector(".light").style.cssText = `opacity: 0.5;`
        document.querySelector("#switcher").style.cssText = `top: 20px; transition: 0.5s;`
    }
    else {
        lampIsOff = true;
        document.querySelector(".focus").style.cssText = `opacity: 0;`
        document.querySelector(".light").style.cssText = `opacity: 0;`
        document.querySelector("#switcher").style.cssText = `top: 20px; transition: 0.5s;`
    }
}

function makeFocus()
{
    if(isRabbit){
        isRabbit = false;
        document.querySelector("#rabbit").style.cssText = `bottom: 90px; transition: 1s;`
        document.querySelector("#bird").style.cssText = `bottom: 220px; transition: 1s;`
    }
    else{
        isRabbit = true;
        document.querySelector("#bird").style.cssText = `bottom: 90px; transition: 1s;`
        document.querySelector("#rabbit").style.cssText = `bottom: 220px; transition: 1s;`
    }
}
