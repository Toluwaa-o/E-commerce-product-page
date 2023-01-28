let hamMenu = document.querySelector('.menu')
let hamClose = document.querySelector('.ham-close')
let navBar = document.querySelector('.navbar')
let cartDetails = document.querySelector('.cartdetails')
let cartIcon = document.getElementById('cart-icon')

hamMenu.addEventListener('click', function(){
    navBar.style.display = 'flex'
    cartDetails.style.display = 'none'
})

hamClose.addEventListener('click', function(){
    navBar.style.display = 'none'
})

let x = window.matchMedia('(min-width: 768px)')
cartIcon.addEventListener('click', function(){
    cartDetails.style.display = cartDetails.style.display === 'none' ? 'unset' : 'none';
    if(!x.matches){
        navBar.style.display = 'none'
    }else {
        navBar.style.display = 'flex'
    }
})

let previousButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let slidingImage = document.getElementById('slidingImage')
let photos = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg']
let gallery = document.querySelectorAll('.gallery')

let a = 0;
nextButton.addEventListener('click', function(){
    if(a < photos.length){
        slidingImage.setAttribute("src", `${photos[a++]}`)
    }else {
        a = 0;
    };
    forHoverSlide()
})

previousButton.addEventListener('click', function(){
    if(a >= 0){
        slidingImage.setAttribute("src", `${photos[a--]}`)
    }else {
        a = photos.length-1
    };
    forHoverSlide()
})

gallery[0].addEventListener('click', function(){
    slidingImage.setAttribute('src', 'images/image-product-1.jpg')
    forHoverSlide()
})

gallery[1].addEventListener('click', function(){
    slidingImage.setAttribute('src', 'images/image-product-2.jpg')
    forHoverSlide()
})

gallery[2].addEventListener('click', function(){
    slidingImage.setAttribute('src', 'images/image-product-3.jpg')
    forHoverSlide()
})

gallery[3].addEventListener('click', function(){
    slidingImage.setAttribute('src', 'images/image-product-4.jpg')
    forHoverSlide()
})

function forHoverSlide(){
    if (slidingImage.getAttribute('src') === 'images/image-product-1.jpg'){
        gallery[0].style.border = '3px solid hsl(26, 100%, 55%)'
        gallery[0].style.opacity = '0.5'
    
        gallery[1].style.border = 'none'
        gallery[1].style.opacity = '1'
        gallery[2].style.border = 'none'
        gallery[2].style.opacity = '1'
        gallery[3].style.border = 'none'
        gallery[3].style.opacity = '1'
        } else if (slidingImage.getAttribute('src') === 'images/image-product-2.jpg'){
            gallery[1].style.border = '3px solid hsl(26, 100%, 55%)'
            gallery[1].style.opacity = '0.5'
        
            gallery[0].style.border = 'none'
            gallery[0].style.opacity = '1'
            gallery[2].style.border = 'none'
            gallery[2].style.opacity = '1'
            gallery[3].style.border = 'none'
            gallery[3].style.opacity = '1'
        } else if (slidingImage.getAttribute('src') === 'images/image-product-3.jpg'){
            gallery[2].style.border = '3px solid hsl(26, 100%, 55%)'
            gallery[2].style.opacity = '0.5'
        
            gallery[0].style.border = 'none'
            gallery[0].style.opacity = '1'
            gallery[1].style.border = 'none'
            gallery[1].style.opacity = '1'
            gallery[3].style.border = 'none'
            gallery[3].style.opacity = '1'
        } else {
            gallery[3].style.border = '3px solid hsl(26, 100%, 55%)'
            gallery[3].style.opacity = '0.5'
        
            gallery[0].style.border = 'none'
            gallery[0].style.opacity = '1'
            gallery[2].style.border = 'none'
            gallery[2].style.opacity = '1'
            gallery[1].style.border = 'none'
            gallery[1].style.opacity = '1'
        }
}

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let number = document.getElementById('number')


plus.addEventListener('click', function(){
    number.textContent++;
})

minus.addEventListener('click', function(){
    if(number.textContent < 1){
        number.textContent = 0
    }else {
        number.textContent--;
    }
})

let numSelected = document.getElementById('num-selected')
let numNotif = document.getElementById('num-notif')
let addToCart = document.querySelector('.add')
let content = document.querySelector('.content')
let empty = document.querySelector('.empty')
let total = document.getElementById('total')
let deleteBtn = document.getElementById('delete')

addToCart.addEventListener('click', function(){
    num = number.textContent;
    numSelected.textContent = num;
    if(num > 0){
        numNotif.textContent = num;
        empty.style.display = 'none'
        content.style.display = 'unset'
        numNotif.style.display = 'unset';
        number.textContent = 0;
        totalPrice = num * 125;
        total.textContent = `$${totalPrice}.00`
        
    }else {
        numNotif.style.display = 'none';
        content.style.display = 'none'
        number.textContent = 0;
    }
})

deleteBtn.addEventListener('click', function(){
    content.style.display = 'none'
    empty.style.display = 'grid'
    numNotif.style.display = 'none';
})

let picSelector = document.querySelectorAll('.picThumb')
let staticImage = document.getElementById('staticImg')
let slideCover = document.querySelector('.image-slide')

staticImage.addEventListener('click', function(){
    srcFile = staticImage.getAttribute('src')
    slideCover.style.display = 'flex';
    slidingImage.setAttribute('src', `${srcFile}`)
    forHoverSlide()
})

picSelector[0].addEventListener('click', function(){
    staticImage.setAttribute('src', `images/image-product-1.jpg`)
    picSelector[0].style.border = '3px solid hsl(26, 100%, 55%)'
    picSelector[0].style.opacity = '0.5'

    picSelector[1].style.border = 'none'
    picSelector[1].style.opacity = '1'
    picSelector[2].style.border = 'none'
    picSelector[2].style.opacity = '1'
    picSelector[3].style.border = 'none'
    picSelector[3].style.opacity = '1'
})

picSelector[1].addEventListener('click', function(){
    staticImage.setAttribute('src', `images/image-product-2.jpg`)
    picSelector[1].style.border = '3px solid hsl(26, 100%, 55%)'
    picSelector[1].style.opacity = '0.5'

    picSelector[0].style.border = 'none'
    picSelector[0].style.opacity = '1'
    picSelector[2].style.border = 'none'
    picSelector[2].style.opacity = '1'
    picSelector[3].style.border = 'none'
    picSelector[3].style.opacity = '1'
})

picSelector[2].addEventListener('click', function(){
    staticImage.setAttribute('src', `images/image-product-3.jpg`)
    picSelector[2].style.border = '3px solid hsl(26, 100%, 55%)'
    picSelector[2].style.opacity = '0.5'

    picSelector[1].style.border = 'none'
    picSelector[1].style.opacity = '1'
    picSelector[0].style.border = 'none'
    picSelector[0].style.opacity = '1'
    picSelector[3].style.border = 'none'
    picSelector[3].style.opacity = '1'
})

picSelector[3].addEventListener('click', function(){
    staticImage.setAttribute('src', `images/image-product-4.jpg`)
    picSelector[3].style.border = '3px solid hsl(26, 100%, 55%)'
    picSelector[3].style.opacity = '0.5'

    picSelector[1].style.border = 'none'
    picSelector[1].style.opacity = '1'
    picSelector[2].style.border = 'none'
    picSelector[2].style.opacity = '1'
    picSelector[0].style.border = 'none'
    picSelector[0].style.opacity = '1'
})

let closeSlide = document.querySelector('.close')

closeSlide.addEventListener('click', function(){
    slideCover.style.display = 'none';
})