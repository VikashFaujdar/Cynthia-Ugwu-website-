// Locomotive CSS script code

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


document.querySelectorAll("a").forEach(function(links){
    links.addEventListener("mouseover", function(){
        document.querySelector("#miniCircle").style.height = "20px"
        document.querySelector("#miniCircle").style.width = "20px"
    })
})



document.querySelectorAll("a").forEach(function(links){
    links.addEventListener("mouseleave", function(){
        document.querySelector("#miniCircle").style.height = "12px"
        document.querySelector("#miniCircle").style.width = "12px"
    })
})





// here is the JS which is change the style of mouse follower

var timer;
function circleChaptaKaro(){
    

    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 0;
    
    
    window.addEventListener("mousemove", function(dets) {
        clearTimeout(timer);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
    
        xprev = dets.clientX;
        yprev = dets.clientY;
    
        circleMouseFollower(xscale, yscale);

        timer = setTimeout(function() {
            document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)scale(1, 1)`;
        }, 100)
    });
}

circleChaptaKaro();


function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)scale(${xscale}, ${yscale})`;
    })
}

circleMouseFollower();


// this JS code for image showing

document.querySelectorAll("#elem").forEach(function(elem){

    var rotate = 0;
    var diffRot = 0;

    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffRot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffRot)
        })

        document.querySelector("#miniCircle").style.backgroundColor = "white";

        // elem.querySelector("img").style.opacity = "1";
        // elem.querySelector("img").style.top = diff+"px";
        // elem.querySelector("img").style.left = dets.clientX+"px";

        document.querySelector("#miniCircle").style.height = "5.5vw"
        document.querySelector("#miniCircle").style.width = "5.5vw"
        document.querySelector("#circleContent").innerHTML = "VIEW";
    });
});

// this JS code for image showing



// this JS code for image hiding

document.querySelectorAll("#elem").forEach(function(elem){
    elem.addEventListener("mouseleave", function(dets){

        gsap.to(elem.querySelector("img"), {
            opacity: 0
        })


        elem.querySelector("img").style.opacity = "0";

        document.querySelector("#miniCircle").style.height = "12px"
        document.querySelector("#miniCircle").style.width = "12px"
        document.querySelector("#circleContent").innerHTML = "";
    })
})

// this JS code for image hiding


document.querySelector("#showMenu").addEventListener("click", function(){
    document.querySelector("#menu").style.top = "0";
    document.querySelector("#showMenu").style.display = "none";
})

function firstPageAnim(){

    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut
    })
        .to(".boundingElem", {
            y: 0,
            ease: Expo.easeInOut,
            delay: -1,
            duration: 1,
            stagger: .2
        })

    document.querySelectorAll(".icons").forEach(function(allIcon){
        allIcon.addEventListener("mouseover", function(){
            gsap.from(allIcon.querySelector("i"), {
                y: -10,
                opacity: 0,
            })
        });
    });


    document.querySelectorAll(".icons").forEach(function(allIcon){
        allIcon.addEventListener("mouseout", function(){
            gsap.to(allIcon.querySelector("i"), {
                y: 0,
                opacity: 1
            })
        });
    });
}


window.addEventListener("load", function(){
    this.document.querySelector(".loader").classList.add("gayab");
})


firstPageAnim();


