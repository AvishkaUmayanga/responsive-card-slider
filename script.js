const sliderContainer = document.querySelector('.sliderContainer')
let initialPosition = 0;
let pressInside = false;

sliderContainer.addEventListener('mousedown', function(e){
    this.style.cursor = 'grabbing'
    initialPosition = e.clientX
    pressInside = true
})

sliderContainer.addEventListener('mouseup', function(e){
    this.style.cursor = 'grab'
    pressInside = false
})

sliderContainer.addEventListener('mouseleave',function(e){
    pressInside = false
})

sliderContainer.addEventListener('mousemove', function(e){
    if(!pressInside){
        return;
    }
    this.scrollLeft += initialPosition - e.clientX
})