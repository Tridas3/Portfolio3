gsap.registerEase("myCustomEase", myCustomEase);

function myCustomEase(normalizedTime) {
    return Math.sin(normalizedTime * Math.PI / 2);
}

gsap.to("#container", {
    duration: 2.5,
    ease: "myCustomEase",
    y: -500
});
