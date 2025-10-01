
// WINDOW ONLOAD
let currentWork = 'artwork-title';
let prevScroll = 0;
let prevBall = "home";

window.onload = init;

function init() {
  let main = document.getElementById("main");

  let loadScreen = document.getElementById("load")
  loadScreen.style.transition = "all 0.4s";
  loadScreen.style.opacity = "0";

  setTimeout(function () {
    loadScreen.style.display = "none";
    main.style.opacity = "1"
  }, 400)

  scrollToTop();
  // handle scroll event
  $(window).scroll(function () {
    let scrollingPos = window.pageYOffset;
    // when scroll to bottom
    if (scrollingPos > prevScroll) {
      divAppear(scrollingPos, "quote");
      divAppear(scrollingPos, "work");
      divAppear(scrollingPos, "about");
      divAppear(scrollingPos, "contact");
    }

    // when scroll to top
    if (scrollingPos <= prevScroll) {
      divDisappear(scrollingPos, "quote");
      divDisappear(scrollingPos, "work");
      divDisappear(scrollingPos, "about");
      divDisappear(scrollingPos, "contact");
    }

    // get prevScroll => compare to scroll position
    //=> in order to check scroll direction
    prevScroll = scrollingPos;
  });

  cursorBall("soundcloud-link", "soundcloud-ball");
  cursorBall("hec-link", "hec-ball");
}

// TODO: Implement language
function chooseLanguage(text) {

}

// make div appear on scroll to bottom
function divAppear(scrollingPos, id) {
  let section = document.getElementById(id)
  if (section.offsetTop - scrollingPos < window.innerHeight) {
    switch (id) {
      case 'quote':
        chooseNav('home');
        document.getElementById("quote-doublequotes").style.animation = "doublequotes 10s cubic-bezier(.3,.6,.7,.9) infinite"
        document.getElementById("quote-hand-img").style.animation = "handOut 5s cubic-bezier(.3,.6,.7,.9) infinite";
        break;
      case 'work':
        chooseNav('work');
        break;
      case 'about':
        chooseNav('about');
        break;
      case 'contact':
        chooseNav('contact');
        document.getElementById("link-cv").innerHTML = 'see my CV (pdf)';
        break;
      default:
        console.log('scroll error')
        break;
    }

    let list = section.getElementsByTagName("div")
    for (let ele of list) {
      if (ele.offsetTop - scrollingPos <= window.innerHeight * 0.8 && !ele.classList.contains("skip")) { // can not scroll further than bottom of page
        ele.style.animation = "appear 0.7s cubic-bezier(0.25,0.75,0.5,1) forwards"
      }
    }

  }
}

// make div disappear on scroll to top
function divDisappear(scrollingPos, id) {

  let section = document.getElementById(id);

  if (section.offsetTop - scrollingPos > window.innerHeight && section.offsetTop - scrollingPos < window.innerHeight + section.offsetHeight) {

    switch (id) {
      case 'quote':
        chooseNav('home');
        break;
      case 'work':
        chooseNav('home');
        break;
      case 'about':
        chooseNav('work');
        break;
      case 'contact':
        chooseNav('about');
        document.getElementById("link-cv").innerHTML = 'my CV';
        break;

      default:
        console.log('scroll error')
        break;
    }
    let list = section.getElementsByTagName("div")
    for (let ele of list) {
      // the elements in "skip" class will not be affected.
      if (!ele.classList.contains("skip")) {
        ele.style.animation = "disappear 0.7s ease-out forwards"
      }
    }

  }
}

function chooseNav(nav) {
  document.getElementById("nav-ball-" + prevBall).style.opacity = "0";
  document.getElementById("nav-ball-" + nav).style.opacity = "1";

  prevBall = nav;
}

function workBlockOnhover(id) {
  if (id != currentWork) {
    document.getElementById(id).style.backgroundPosition = '-100%';
  }
}

function workBlockOuthover(id) {
  if (id != currentWork) {
    document.getElementById(id).style.backgroundPosition = '0';
  }
}

function workBlockOnclick(id) {
  document.getElementById(currentWork).style.backgroundPosition = '0';
  document.getElementById(id).style.backgroundPosition = '-100%';

  currentWork = id;

  let workMain = document.getElementById("work-main")
  $("html, body").stop().animate({ scrollTop: workMain.offsetTop }, 700, 'swing');

  let showcase = document.getElementById("work-showcase");
  showcase.innerHTML = workHTML[currentWork]

  if (currentWork == "webapp-title" || currentWork == "staticweb-title") {
    let imgs = document.getElementsByClassName("work-showcase-webapp-img")
    for (let ele of imgs) {
      let des = ele.getElementsByClassName("work-showcase-webapp-block")[0]
      ele.onmouseover = function () {
        des.style.opacity = 1
        des.style.visibility = "visible"

      }
      des.onmouseleave = function () {
        des.style.opacity = 0;
        setTimeout(function () {
          des.style.display = "hidden"
        }, 400)
      }
    }
  }
}


function copyOnClick(content, com) {
  // create textarea to copy
  let textArea = document.createElement('textarea');
  textArea.opacity = "0";
  textArea.value = content;
  document.body.append(textArea)

  textArea.select();
  textArea.setSelectionRange(0, 100);
  document.execCommand("copy");

  document.body.removeChild(textArea)

  // alert
  let copied = com.parentNode.children[0];

  copied.style.opacity = "1";
  setTimeout(function () { copied.style.opacity = "0" }, 800)
}


// function cursorBall

function cursorBall(secId, ballId) {
  let section = document.getElementById(secId)
  let ballCursor = document.getElementById(ballId)

  section.onmousemove = function (e) {
    if (e.pageY < section.offsetTop + section.offsetHeight + 50 && e.pageY > section.offsetTop - 50) {
      ballCursor.style.display = 'flex';
      ballCursor.style.top = String(e.pageY) + 'px';
      ballCursor.style.left = String(e.pageX) + 'px';
    }
  }

  section.onmouseout = function (e) {
    ballCursor.style.display = 'none';
  }
}


function scrollToTop() {
  $("html, body").stop().animate({ scrollTop: 0 }, 700, 'swing');
}

function navScroll(id) {
  let sectionHeight = document.getElementById(id).offsetTop;
  console.log(sectionHeight)

  $("html, body").stop().animate({ scrollTop: sectionHeight }, 700, 'swing');

  if (window.innerWidth < 812 || window.innerWidth / window.innerHeight < 1.5) {
    setTimeout(() => { toggleNavMobile() }, 500)

  }
}

function textAppearsOnHover(textId) {
  document.getElementById(textId).style.opacity = "1";
}

function textDisappearsOutHover(textId) {
  document.getElementById(textId).style.opacity = "0";
}

// toggle nav mobile

function toggleNavMobile() {
  let nav = document.getElementById("nav-mobile");
  let divs = document.getElementById("nav-mobile").getElementsByTagName('div');


  switch (nav.style.display) {
    case "none":
      nav.style.display = "flex"

      setTimeout(() => {
        nav.style.height = "100vh"
        for (let el of divs) {
          el.style.opacity = "1"
        }
      }, 50)

      break;
    default:
      nav.style.height = "0vh"
      for (let el of divs) {
        el.style.opacity = "0"
      }

      setTimeout(() => {
        nav.style.display = "none"
      }, 400)
      break;
  }
}

// index of the drop
let rainIndex = 1;

function falling() {

  if (rainIndex <= 2000) {
    let left = Math.floor(Math.random() * Math.floor(100)) + 1; // choose between 1 and 100 vw
    let color = Math.floor(Math.random() * Math.floor(4)) + 1 // choose between 1, 2, 3 or 4;

    // add after a random elements
    $('#rain').after('<div id="rain-' + String(rainIndex) + '" class="deco deco-' + String(color) + '" style="left:' + String(left) + 'vw; z-index: 60"></div>')

    let thisIndex = "rain-" + rainIndex;

    setTimeout(function () {
      document.getElementById(thisIndex).remove();
    }, 3000)

    rainIndex += 1;
  }

}

let doublequotesColor = 1
function changeColorOnClick(id, mainClasses) {
  document.getElementById(id).className = mainClasses + " color-" + String(doublequotesColor % 4 + 1)
  doublequotesColor += 1;
}

