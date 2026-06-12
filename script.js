let menus = document.querySelector(".menu-p");
let overlay = document.querySelector(".overlay");
let video = document.querySelector(".video-container");
let hero = document.querySelector(".hero");
let header = document.querySelector(".header");
let flag = 1;
let blueFollower = document.querySelector(".blue-follower");

menus.addEventListener("click", () => {
    if (flag) {
        overlay.style.top = "0%";
        overlay.style.rotate = "5deg";
        overlay.style.overflowY = "hidden";
        // document.style.display = "none"
        menus.textContent = "CLOSE";

        flag = 0;
    } else {
        overlay.style.top = "-170%";
        overlay.style.rotate = "-5deg";
        menus.textContent = "MENU";
        flag = 1;
    }
});

let highlights = document.querySelectorAll(".highlight");

highlights.forEach((highlight) => {
    let images = highlight.querySelectorAll("img");
    if (!images.length) return;

    let idx = 0;
    let zIndex = images.length;
    let interval = null;

    highlight.addEventListener("mouseenter", () => {
        if (interval) return;
        interval = setInterval(() => {
            const current = images[idx % images.length];

            if (idx < images.length) {
                current.classList.add("show");
                current.style.zIndex = ++zIndex;
            } else {
                current.classList.remove("show");
                requestAnimationFrame(() => {
                    current.style.zIndex = ++zIndex;
                    requestAnimationFrame(() => {
                        current.classList.add("show");
                    });
                });
            }
            idx++;
        }, 300);
    });

    highlight.addEventListener("mouseleave", () => {
        clearInterval(interval);
        interval = null;
        images.forEach((img) => {
            img.classList.remove("show");
            img.style.zIndex = "";
        });
        idx = 0;
        zIndex = images.length;
    });
});
let prevX = 0;
let prevY = 0;

let timeout;
let topMain = document.querySelector(".top-main")
topMain.addEventListener("mouseleave",()=>{
    video.style.display = "none"
})
topMain.addEventListener("mousemove", (e) => {
    video.style.display = "block";
    video.style.left = e.clientX + "px";
    video.style.top = e.clientY + "px";
    video.style.transition = "linear 0.3s"
    const deltaX = e.clientX - prevX;
    const deltaY = e.clientY - prevY;

    prevX = e.clientX;
    prevY = e.clientY;

    // Adjust sensitivity and clamp values
    const rotateY = Math.max(-30, Math.min(90, deltaX *5));
    const rotateX = Math.max(-30, Math.min(90, -deltaY *5));

    video.style.transition = "all 0.3s linear";
    video.style.transform = `
        translate(5%, 5%)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
    `;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
        video.style.transition = "all 0.3s ease";
        video.style.transform = `
            translate(5%, 5%)
            rotateX(0deg)
            rotateY(0deg)
        `;
    }, 100);
});
// hero.addEventListener("mouseenter", () => {
//     blueFollower.style.opacity = "0";
//     blueFollower.style.visibility = "hidden";
// });
header.addEventListener("mouseenter",()=>{
    blueFollower.style.opacity = "1"
})
document.addEventListener("mousemove",(e)=>{
    // blueFollower.style.opacity = "1"

    blueFollower.style.left = e.clientX + "px";
    blueFollower.style.top = e.clientY + "px";

});

// hero.addEventListener("mouseleave", (e) => {
//     blueFollower.style.visibility = "visible";
//     blueFollower.style.display = "block";
//     blueFollower.style.opacity = "1";
//     blueFollower.style.transition = "linear 0.3s"
//     blueFollower.style.transform = "translate(70%, 70%)"
// });

hero.addEventListener("mouseenter", () => {
    blueFollower.style.opacity = "0";
});

hero.addEventListener("mouseleave", () => {
    blueFollower.style.opacity = "1";
});
let secondVideo = document.querySelector(".video-second");
// secondVideo.addEventListener("mouseenter",(e)=>{
//     video.style.display = "none"
//     blueFollower.style.display = "block";
//         blueFollower.style.opacity = "1";
//         blueFollower.style.transition = "linear 0.3s"
//         blueFollower.style.transform = "translate(70%, 70%)"
// })

secondVideo.addEventListener("mouseenter",()=>{
    video.style.display = "none";
    blueFollower.style.opacity = "1";
});
let a = (div)=>{
    div.addEventListener("mousemove",(e)=>{
        blueFollower.style.display = "block";
        blueFollower.style.opacity = "1";
        blueFollower.style.left = e.x + "px";
        blueFollower.style.top = e.y + "px";
        blueFollower.style.transition = "linear 0.3s"
        blueFollower.style.transform = "translate(70%, 70%)"
    })
}

let playground = document.querySelector(".play-lower-center p");
let portfolioText = document.querySelector(".blue-follower .portfolio");
let materaText = document.querySelector(".blue-follower .matera");
let chanceText = document.querySelector(".blue-follower .chance");
let silvrText = document.querySelector(".blue-follower .silvr");
let intramurosText = document.querySelector(".blue-follower .intramuros");
playground.addEventListener("mouseenter",()=>{
    blueFollower.style.opacity = "1"
    blueFollower.style.width = "160px";
    blueFollower.style.height = "55px";
    portfolioText.style.display = "block";
    blueFollower.style.transform = "skew(0deg,-8deg) translate(10%,10%)"
});
playground.addEventListener("mouseleave",()=>{
    
    blueFollower.style.width = "20px";
    blueFollower.style.height = "20px";
    blueFollower.style.transform = "translate(70%,70%)"
    blueFollower.style.borderRadius = "50%";

    portfolioText.style.display = "none";
});
playground.addEventListener("mouseenter",()=>{
    blueFollower.style.opacity = "1"
    blueFollower.style.width = "160px";
    blueFollower.style.height = "55px";

    blueFollower.style.borderRadius = "12px";

    setFollowerText("portfolio");
});
function setFollowerText(className){

    document
    .querySelectorAll(".blue-follower div")
    .forEach(div=>{
        div.style.display = "none";
    });

    const target =
    document.querySelector(`.blue-follower .${className}`);

    if(target){
        target.style.display = "block";
    }
}

document.querySelectorAll(".box").forEach((box) => {

    const video = box.querySelector("video");
    const cursorText = box.dataset.cursor;

    box.addEventListener("mouseenter", () => {
        blueFollower.style.width = "180px";
        blueFollower.style.height = "60px";
        blueFollower.style.borderRadius = "12px";
        blueFollower.style.opacity = "1"
        setFollowerText(cursorText);

        if(video){
            video.currentTime = 0;
            video.play().catch(()=>{});
        }

    });

    box.addEventListener("mouseleave", () => {

        blueFollower.style.width = "20px";
        blueFollower.style.height = "20px";
        blueFollower.style.borderRadius = "50%";

        document
        .querySelectorAll(".blue-follower div")
        .forEach(div=>{
            div.style.display = "none";
        });

        if(video){
            video.pause();
        }

    });

});

let materaCard = document.querySelector('.box[data-cursor="matera"]');
let chanceCard = document.querySelector('.box[data-cursor="chance"]');
let silvrCard = document.querySelector('.box[data-cursor="silvr"]');
let intramurosCard = document.querySelector('.box[data-cursor="intramuros"]');

materaCard.addEventListener("mouseenter",()=>{
    blueFollower.style.width = "120px";
    blueFollower.style.height = "55px";
    blueFollower.style.transform = "skew(0deg,-8deg) translate(20%,20%)"
    materaText.style.display = "block";
});

materaCard.addEventListener("mouseleave",()=>{

    blueFollower.style.width = "20px";
    blueFollower.style.height = "20px";
    blueFollower.style.transform = "translate(70%,70%)"
    blueFollower.style.borderRadius = "50%";

    materaText.style.display = "none";
});

chanceCard.addEventListener("mouseenter",()=>{

    blueFollower.style.width = "120px";
    blueFollower.style.height = "55px";
    blueFollower.style.transform = "skew(0deg,-8deg) translate(20%,20%)"
    chanceText.style.display = "block";
});

chanceCard.addEventListener("mouseleave",()=>{

    blueFollower.style.width = "20px";
    blueFollower.style.height = "20px";
    blueFollower.style.transform = "translate(70%,70%)"
    blueFollower.style.borderRadius = "50%";

    chanceText.style.display = "none";
});

silvrCard.addEventListener("mouseenter",()=>{

    blueFollower.style.width = "90px";
    blueFollower.style.height = "55px";
    blueFollower.style.transform = "skew(0deg,-8deg) translate(20%,20%)"
    silvrText.style.display = "block";
});

silvrCard.addEventListener("mouseleave",()=>{

    blueFollower.style.width = "20px";
    blueFollower.style.height = "20px";
    blueFollower.style.transform = "translate(70%,70%)"
    blueFollower.style.borderRadius = "50%";

    silvrText.style.display = "none";
});

intramurosCard.addEventListener("mouseenter",()=>{

    blueFollower.style.width = "190px";
    blueFollower.style.height = "55px";
    blueFollower.style.transform = "skew(0deg,-8deg) translate(20%,20%)"
    intramurosText.style.display = "block";
});

intramurosCard.addEventListener("mouseleave",()=>{

    blueFollower.style.width = "20px";
    blueFollower.style.height = "20px";
    blueFollower.style.transform = "translate(70%,70%)"
    blueFollower.style.borderRadius = "50%";

    intramurosText.style.display = "none";
});



const cards = document.querySelectorAll(".text-hover");
const servicesSection = document.querySelector(".services");

let activeCard = null;

// Cache elements once
cards.forEach((card) => {
  card._video = card.querySelector(".text-video");
  card._para = card.querySelector(".text-para");
});

function resetCard(card) {
  if (!card) return;

  card.classList.remove("active");

  if (card._video) {
    card._video.style.opacity = "0";
  }

  if (card._para) {
    card._para.style.opacity = "0";
  }

  card.style.zIndex = "1";

  // Pause video if present
  const videoEl = card.querySelector("video");
  if (videoEl) {
    videoEl.pause();
    videoEl.currentTime = 0;
  }
}

function showCard(card) {
  if (!card) return;

  card.classList.add("active");

  if (card._video) {
    card._video.style.opacity = "1";
  }

  if (card._para) {
    card._para.style.opacity = "1";
  }

  card.style.zIndex = "999";

  // Play video if present
  const videoEl = card.querySelector("video");
  if (videoEl) {
    videoEl.play().catch(() => {});
  }
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Dim all other cards
    cards.forEach((item) => {
      item.style.color = item === card ? "" : "lightgrey";
    });

    // Hide previous active card
    if (activeCard && activeCard !== card) {
      resetCard(activeCard);
    }

    // Show current card
    showCard(card);
    activeCard = card;
  });

  card.addEventListener("mouseleave", () => {
    // Restore text colors
    cards.forEach((item) => {
      item.style.color = "";
    });

    resetCard(card);

    if (activeCard === card) {
      activeCard = null;
    }
  });
});


if (servicesSection) {
  servicesSection.addEventListener("mouseleave", () => {
    cards.forEach((card) => {
      card.style.color = "";
    });

    if (activeCard) {
      resetCard(activeCard);
      activeCard = null;
    }
  });
}



// SERVICES BUTTON
const servicesBtn = document.querySelector(".see-all-btn");

servicesBtn.addEventListener("mouseenter", () => {
    blueFollower.style.width = "140px";
    blueFollower.style.height = "55px";
    blueFollower.style.borderRadius = "12px";
    blueFollower.style.transform =
        "skew(0deg,-8deg) translate(20%,20%)";

    setFollowerText("Services");
});

servicesBtn.addEventListener("mouseleave", () => {
    blueFollower.style.width = "20px";
    blueFollower.style.height = "20px";
    blueFollower.style.borderRadius = "50%";
    blueFollower.style.transform = "translate(70%,70%)";

    setFollowerText("");
});

// LET'S TALK BUTTON
const letsTalkBtn = document.querySelector(".say-hello-btn");

letsTalkBtn.addEventListener("mouseenter", () => {
    blueFollower.style.width = "150px";
    blueFollower.style.height = "55px";
    blueFollower.style.borderRadius = "12px";
    blueFollower.style.transform =
        "skew(0deg,-8deg) translate(20%,20%)";

    setFollowerText("letsTalk");
});

letsTalkBtn.addEventListener("mouseleave", () => {
    blueFollower.style.width = "20px";
    blueFollower.style.height = "20px";
    blueFollower.style.borderRadius = "50%";
    blueFollower.style.transform = "translate(70%,70%)";

    setFollowerText("");
});

// SEND LOVE
const sendLoveBtn = document.querySelector(".footer-text .sendLove");

sendLoveBtn.addEventListener("mouseenter", () => {
    blueFollower.style.width = "155px";
    blueFollower.style.height = "55px";
    blueFollower.style.borderRadius = "12px";
    blueFollower.style.transform =
        "skew(0deg,-8deg) translate(20%,20%)";

    setFollowerText("sendLove");
});

sendLoveBtn.addEventListener("mouseleave", () => {
    blueFollower.style.width = "20px";
    blueFollower.style.height = "20px";
    blueFollower.style.borderRadius = "50%";
    blueFollower.style.transform = "translate(70%,70%)";

    setFollowerText("");
});


function updateClock() {
    const now = new Date();

    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();

    const ampm = hh >= 12 ? "PM" : "AM";

    hh = hh % 12 || 12;

    hh = String(hh).padStart(2, "0");
    mm = String(mm).padStart(2, "0");
    ss = String(ss).padStart(2, "0");

    document.getElementById("HH").textContent = hh;
    document.getElementById("MM").textContent = mm;
    document.getElementById("SS").textContent = ss;
    document.getElementById("ampm").textContent = ampm;
}

updateClock();
setInterval(updateClock, 1000);
