function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();
let cr = document.querySelector(".cursor");
function cursor() {
  document.addEventListener("mousemove", function (detail) {
    detail.clientX;
    detail.clientY;
    setTimeout(function () {
      cr.style.top = detail.y + "px";
      cr.style.left = detail.x + "px";
    }, 150);
  });
}
cursor();

function menu() {
  const menu = document.querySelector(".hum");
  const mobileHeader = document.querySelector(".menu");
  const links = document.querySelectorAll(".nav .menu h4");

  menu.addEventListener("click", function () {
    mobileHeader.classList.toggle("active");

    const isActive = mobileHeader.classList.contains("active");

    const iconElement = menu.querySelector("i");
    if (isActive) {
      iconElement.classList.remove("ri-menu-3-line");
      iconElement.classList.add("ri-close-line");
    } else {
      iconElement.classList.remove("ri-close-line");
      iconElement.classList.add("ri-menu-3-line");
    }
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileHeader.classList.remove("active");

      const iconElement = menu.querySelector("i");
      iconElement.classList.remove("ri-close-line");
      iconElement.classList.add("ri-menu-3-line");
    });
  });
}
menu();

gsap.from(".hero h1,.hero h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero h1",
    scroller: ".main",
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".hero h1",
  {
    x: -80,
  },
  "anim"
);
tl.to(
  ".hero h2",
  {
    x: 80,
  },
  "anim"
);
tl.to(
  ".hero video",
  {
    width: "90%",
  },
  "anim"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero h1",
    scroller: ".main",
    start: "top -115%",
    end: "top -120%",
    scrub: 2,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content3 h1",
    scroller: ".main",
    start: "top 100%",
    end: "top -5%",
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "#000",
});
var boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    cr.style.width = "370px";
    cr.style.height = "370px";
    cr.style.borderRadius = "0";
    cr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    cr.style.width = "20px";
    cr.style.height = "20px";
    cr.style.borderRadius = "50%";
    cr.style.backgroundImage = `none`;
  });
});

