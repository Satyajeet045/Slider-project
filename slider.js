const left= document.querySelector(".left")
const right= document.querySelector(".right")
const slider= document.querySelector(".slide")
const images =document.querySelectorAll(".image")
const bottom =document.querySelector(".bottom")


let sliderNumber=1
let length=images.length


for(let i=0;i<length;i++){
    const div = document.createElement("div")
    div.className = "button"
    bottom.appendChild(div) 
}

const buttons = document.querySelectorAll(".button")

buttons[0].style.backgroundColor="white"

const resetBg = () =>{
    buttons.forEach(button=>{
        button.style.backgroundColor="transparent"
    })
}
buttons.forEach((button,i)=>{
    button.addEventListener('click',()=>{
       resetBg()
       slider.style.transform =`translateX(-${i*700}px)`
       sliderNumber=i+1
       button.style.backgroundColor="white"
    })
})     
const nextSlider= ()=>{
    slider.style.transform=`translateX(-${(sliderNumber)*700}px)`
    sliderNumber++
}
const getFirstSlider =() =>{
    slider.style.transform=`translateX(-${(0)*700}px)`
    sliderNumber=1

}

const prevSlider =() =>{
    slider.style.transform=`translate(-${(sliderNumber-2)*700}px)`
    sliderNumber--
}

const lastSlider =() =>{
    slider.style.transform =`translate(-${(length-1)*700}px)`
    sliderNumber=length-1
}

const changeColor =()=>{
    resetBg()
    buttons[sliderNumber-1].style.backgroundColor="white"
}
right.addEventListener("click",()=>{
    sliderNumber<length ? nextSlider() : getFirstSlider()
    changeColor()
})
left.addEventListener("click",()=>{
    sliderNumber>1 ? prevSlider() : lastSlider()
    changeColor()
    
})

