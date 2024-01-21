const profile_card = document.querySelectorAll('.profile_card');
// console.log(profile_card)
const tl = gsap.timeline();

profile_card.forEach((card)=>{
    card.addEventListener('mouseover' , ()=>{
        gsap.to('.picture',{
            y:-70,
            borderRadius: '2vw',
        })
        tl.to('.profile_card',{
            borderRadius: '2vw',
            duration:0.5
        })
        tl.to('.info',{
            display: 'block',
            opacity: 1,
            duration: 1
        })
        
    })
})
