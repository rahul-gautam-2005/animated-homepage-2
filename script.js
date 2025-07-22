function callAnimation(){
    var tl = gsap.timeline();

tl.from(".nav .nav-part1 h3",{
    opacity:0,
    y:-50,
    delay:0.3,
    duration:0.4,
})
tl.from(".nav .nav-part1 div",{
    opacity:0,
    y:-50,
    duration:0.4,
})
tl.from(".nav .nav-part2 h1",{
    opacity:0,
    y:-50,
    duration:0.4,
})
tl.from(".nav .nav-part3 button",{
    opacity:0,
    y:-50,
    duration:0.4,
    stagger:0.5
})
tl.from(".nav .nav-part2 div",{
    opacity:0,
    y:-30,
    duration:0.7,
})
tl.from("#heading",{
    scale:0,
    opacity:0,
    duration:0.5,
})
tl.from("#img1",{
    x:-100,
    opacity:0,
    duration:0.5,
})
tl.from("#img2",{
    x:100,
    opacity:0,
    duration:0.5,
})
tl.from("#img3",{
    y:-100,
    opacity:0,
    duration:0.5,
})
tl.from("#img4",{
    y:100,
    opacity:0,
    duration:0.5,
})
tl.from("h5",{
    y:50,
    opacity:0,
    duration:0.5,
})
tl.from(".copyright",{
    y:50,
    opacity:0,
    duration:0.5,
})
tl.from(".icons div",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.3,
})
tl.from("h4",{
    y:50,
    opacity:0,
    duration:0.5,
})
}
callAnimation();