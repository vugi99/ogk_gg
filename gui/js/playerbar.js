function blink(animIn, animOut) {
    animIn();
    setTimeout(animOut, 200);
    setTimeout(animIn, 400);
    setTimeout(animOut, 600);
    setTimeout(animIn, 800);
    setTimeout(animOut, 1000);
    setTimeout(animIn, 1200);
    setTimeout(animOut, 1400);
    setTimeout(animIn, 1600);
    setTimeout(animOut, 1800);
}

function InitWarnNextLevel() {
    const warnerContainer = document.getElementById("warnContainer");
    warnerContainer.style.display = "none";
}

function Warn(message) {
        const warnerContainer = document.getElementById("warnContainer");
        warnerContainer.style.display = "block";
        warnerContainer.innerHTML = "<b>" + message + "</b>"
        setTimeout(() => {
            warnerContainer.style.display = "none";
        }, 3000);
}

const zeroIsRed = (num) => num === 0 
? '<b style="color: red">' + num + "</b>"
: "<b>" + num + "</b>"

function RefreshPlayerBar(health, ammo) {
    const healthContainer = document.getElementById("health");
    const ammoContainer = document.getElementById("ammo");
    healthContainer.innerHTML = zeroIsRed(health)
    ammoContainer.innerHTML = zeroIsRed(ammo)
}

function ChangePlayerLevel(newLevel) {
    const warnerContainer = document.getElementById("level");

    const animIn = () => {
        warnerContainer.style.padding = "10px";
        warnerContainer.style.backgroundColor = "orange";
    }

    const animOut = () => {
        warnerContainer.style.backgroundColor = "transparent";
    };

    warnerContainer.innerHTML = zeroIsRed(newLevel)
    blink(animIn, animOut);
}
