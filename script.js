

var tl = gsap.timeline();
// setTimeout - some kind of delay
// setIntervel - some kind of Loop

tl.from(".line h1" , {
  y: 150,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.25,
})

tl.from("#line1-part1" ,{
  opacity:0,
  onStart:function(){
    var h5timer = document.querySelector("#line1-part1 h5")
    var grow = 0;
    setInterval(function(){
      if(grow<100){
        h5timer.innerHTML = grow++;
      }
      else{
        h5timer.innerHTML = grow;
      }
    },20)
      }
  })

tl.to(".line h2" , {
  opacity:1,
  animationName: "textanime"
})

tl.to("#loader", {
  opacity:0,
  duration:0.4,
  delay:2,
})

tl.from("#page1" , {
  y:1200,
  opacity:0,
  ease:Power4,
})

tl.to("#loader" , {
  display:"none",
})