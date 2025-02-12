// // Loading
var timeline = gsap.timeline();
timeline.to(".load-2",{
	top: "-100%",
	delay: 0.5,
	duration: 0.5,
	ease: "expo.out"
})
timeline.from(".load-3",{
	top: "100%",
	delay: 0.5,
	duration: 0.5,
	ease: "expo.out"
},"anim")
timeline.to("#loading h1",{
	color: "black",
	duration: 0.5,
	delay: 0.5
},"anim")
timeline.to("#loading",{
    display: "none"
})


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const element = document.querySelectorAll(".element");
const page2 = document.querySelector(".page-2");

element.forEach(function (mz) {
    mz.addEventListener("mouseenter", function () {
    	var bgimg = mz.getAttribute("data-img");
	    page2.style.backgroundImage = `url(${bgimg})` 
    })
})

// scrool to top
document.querySelector(".top i").addEventListener("click",function(){
	scroll.scrollTo(0)
})