const navLists = document.querySelectorAll(".nav-store");
const navDropdown = document.querySelector(".nav-dropdown");
const store = document.querySelector(".store");

const navDropDownAnimationBind = (
  trigger,
  target,
  inAnimation,
  outOutAnimation
) => {
  let isHovering = false;
  const trigger_element = document.querySelector(trigger);
  const target_element = document.querySelector(target);
  const links = trigger_element.getElementsByTagName("a");
  const navDropdown = document.querySelector(".nav-dropdown");
  for (let link of links) {
    link.addEventListener("mouseenter", function () {
      isHovering = true;
      target_element.classList.remove(outOutAnimation);
      target_element.classList.add(inAnimation);
      navDropdown.style.display = "block";
      store.style.display = "flex";
      console.log("Hovering");
    });
    link.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!isHovering) {
          target_element.classList.remove(inAnimation);
          target_element.classList.add(outOutAnimation);
          setTimeout(() => {
            target_element.style.display = "none";
            navDropdown.style.display = "none";
          }, 200);
        }
      }, 200);
    });
  }

  navDropdown.addEventListener("mouseenter", () => {
    isHovering = true;
  });
  store.addEventListener("mouseleave", () => {
    isHovering = false;
    target_element.classList.remove(inAnimation);
    target_element.classList.add(outOutAnimation);
    setTimeout(() => {
      target_element.style.display = "none";
      navDropdown.style.display = "none";
    }, 200);
  });
};

navDropDownAnimationBind(
  ".nav-store",
  ".store",
  "animate-dropdown",
  "animate-dropdown-reverse"
);
navDropDownAnimationBind(
  ".nav-mac",
  ".store",
  "animate-dropdown",
  "animate-dropdown-reverse"
);
navDropDownAnimationBind(
  ".nav-ipad",
  ".store",
  "animate-dropdown",
  "animate-dropdown-reverse"
);

const openMobileDropDown = (target) => {
  console.log("Open");
  const target_element = document.querySelector(target);
  target_element.classList.remove("animate-dropdown-reverse-mobile");
  target_element.classList.add("animate-dropdown-mobile");
  target_element.classList.add("open-mobile-dropdown");
};

const closeMobileDropDown = (target) => {
  const target_element = document.querySelector(target);
  target_element.classList.add("animate-dropdown-reverse-mobile");
  target_element.classList.remove("animate-dropdown-mobile");
  setTimeout(() => {
    target_element.classList.remove("open-mobile-dropdown");
  }, 200);
};
const openButton = document.querySelector(".nav-dropdown-mobile-open");
openButton.addEventListener("click", () => {
  openMobileDropDown(".nav-dropdown-mobile");
});

const closeButton = document.querySelector(".nav-dropdown-mobile-close");
closeButton.addEventListener("click", () => {
  closeMobileDropDown(".nav-dropdown-mobile");
});


const toggleFooter = (elementId)=>{
  const element = document.getElementsByClassName("footer-list-" + elementId)[0] ;
  const icon = document.getElementsByClassName('footer-dropdowns-icon-'+elementId)[0];
  if(element.classList.contains('f-expand')){  
    element.classList.remove('f-expand')
    icon.classList.remove('f-reverse-icon');
    icon.classList.add('f-reverse-icon-back');
  }
  else{
    element.classList.add('f-expand');
    element.classList.add('f-expand-animation');
    icon.classList.remove('f-reverse-icon-back');
    icon.classList.add('f-reverse-icon')
  }
}


const footerHeaders = document.querySelectorAll('.footer-list-title');
footerHeaders.forEach(element => {
  element.addEventListener('click', (e)=>{
    toggleFooter(e.target.id);
  })  
});
