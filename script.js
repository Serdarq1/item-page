const cart = document.getElementById("cart")
const activeCart = document.querySelector(".active-cart")
const addToCartBtn = document.querySelector(".add-to-cart")
const selectedPic = document.getElementById("selected-pic")
const thumbs = document.querySelectorAll(".thumb")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const value = document.querySelector(".value")
const addToCart = document.querySelector(".add-to-cart")
const warning = document.getElementById("warning")
const menu = document.querySelector(".menu")
const menuList = document.querySelector(".menu-list")
const close = document.getElementById("close")
const scaledContainer = document.querySelector(".scaled-img-container")
const changeIMG = document.querySelector(".change-img")
const pre = document.querySelector(".pre")
const next = document.querySelector(".next")
const closeBtn = document.getElementById("close-btn")
const body = document.body

const numberOfItems = document.createElement("div")
let startingValue = 1


cart.addEventListener("click", () =>{
    toggleCart()
})

addToCartBtn.addEventListener("mouseover", () => {
    cartStyle()
})

addToCartBtn.addEventListener("mouseleave", () => {
    cartStyle()
})

menu.addEventListener("click", () => {
    toggleMenu()
})

selectedPic.addEventListener("click", () => {
    scaledImg()
})


thumbs.forEach((thumb) => thumb.addEventListener("click" , () => {
    
    thumbs.forEach((previousThumb) => {
        if(previousThumb !== thumb){
            previousThumb.classList.remove("thumb-styles")
        }
    })
    
    selectedPic.setAttribute("src", thumb.src)

    thumb.classList.add("thumb-styles")
}))



function toggleCart(){
    activeCart.classList.toggle("d-none")
}

function cartStyle(){
    addToCartBtn.classList.toggle("shadow-lg")
    addToCartBtn.classList.toggle("opacity")
}

addToCartBtn.addEventListener("click", () => {
    addingToCart()

const deleteItem = document.getElementById("delete")

    deleteItem.addEventListener("click", () => {
        removeFromCart()
    })
})


function setNumber(){
    minus.addEventListener("click", () => {
        startingValue--
        value.innerHTML = startingValue
        if(startingValue < 1){
            warning.classList.remove("d-none")

            setTimeout(() => {
                warning.classList.add("d-none")
            }, 850);

            startingValue = 1
            value.innerHTML = 1
        }
    })

    plus.addEventListener("click", () => {
        startingValue++
        value.innerHTML = startingValue

        if(!warning.classList.contains("d-none")){
            warning.classList.add("d-none")
        }
    })

    value.innerHTML = startingValue

}
setNumber()


function addingToCart(){
        activeCart.innerHTML = `
            <div class="fw-bold ms-3">
            Cart
            </div>
            <hr class="cart-hr text-secondary">
            <div class="d-flex justify-content-between container align-items-center mt-4">
            <div>
            <img src="./images/image-product-1.jpg" width="50px" class="rounded-3">
            </div>
            <div class="text-secondary">
            Fall Limited Edition Sneakers
            <div>
                $125 X ${startingValue} <span class="fw-bold text-black">$${125 * startingValue}</span> 
            </div>
            </div>
            <div>
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="delete"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </div>
            </div>
        `

    numberOfItems.classList.remove("d-none")
    numberOfItems.classList.add("number-of-items", "text-center")
    numberOfItems.innerHTML = startingValue

    cart.appendChild(numberOfItems)
}

function removeFromCart(){
    activeCart.innerHTML = `
    <div class="fw-bold ms-3">
    Cart
    </div>
    <hr class="cart-hr text-secondary">
    <div class="text-center mt-5 text-secondary fw-bold">
    Your cart is empty.
    </div>
`

numberOfItems.classList.add("d-none")

}


function toggleMenu(){
    menuList.classList.toggle("d-none")
}

function scaledImg() {
   
    let currentIndex = 0;

    scaledContainer.classList.remove("d-none");
    body.classList.add("darken");

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            thumbs.forEach((previousThumb) => {
                if (previousThumb !== thumb) {
                    previousThumb.classList.remove("thumb-styles");
                }
            });

            changeIMG.setAttribute("src", thumb.src);
            thumb.classList.add("thumb-styles");

            currentIndex = index;
        });
    });


    pre.addEventListener("click", () => {

        if (currentIndex > 0) {
            currentIndex--;
            changeIMG.setAttribute("src", thumbs[currentIndex].src);
            thumbs.forEach((thumb, index) => {
                thumb.classList.toggle("thumb-styles", index === currentIndex);
            });
        }
    });


    next.addEventListener("click", () => {
        if (currentIndex < thumbs.length - 1) {
            currentIndex++;
            changeIMG.setAttribute("src", thumbs[currentIndex].src);
            thumbs.forEach((thumb, index) => {
                thumb.classList.toggle("thumb-styles", index === currentIndex);
            });
        }
    });

    closeBtn.addEventListener("click", () => {
        scaledContainer.classList.add("d-none")
        body.classList.remove("darken")
    })
}
