const wrapper = document.querySelector(".sliderWrapper")
const menuItems= document.querySelectorAll(".menuItem")

const product=[
    {
        id: 1,
        title: "Air Force",
        price: 11895,
        colors: [
            {
                code: "black",
                img: "./images/watch.project/nike1_1.png",
            },
            {
                code: "white",
                img: "./images/watch.project/nike1_2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 12795,
        colors: [
            {
                code: "black",
                img: "./images/watch.project/nike2_1.png",
            },
            {
                code: "grey",
                img: "./images/watch.project/nike2_2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 10795,
        colors: [
            {
                code: "burlywood",
                img: "./images/watch.project/nike3_1.png",
            },
            {
                code: "pink",
                img: "./images/watch.project/nike3_2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 8124,
        colors: [
            {
                code: "black",
                img: "./images/watch.project/nike4_1.png",
            },
            {
                code: "maroon",
                img: "./images/watch.project/nike4_3.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 5895,
        colors: [
            {
                code: "white",
                img: "./images/watch.project/nike5_1.png",
            },
            {
                code: "black",
                img: "./images/watch.project/nike5_2.png",
            },
        ],
    },
];

let choosenProduct= product[0]

const currentProductImg= document.querySelector(".productImg");
const currentProductTitle= document.querySelector(".productTitle");
const currentProductPrice= document.querySelector(".productPrice");
const currentProductColors= document.querySelectorAll(".color");
const currentProductSize= document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct= product[index]

        //change text of current product
        currentProductTitle.textContent= choosenProduct.title
        currentProductPrice.textContent="₹"+choosenProduct.price
        currentProductImg.src= choosenProduct.colors[0].img

        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src= choosenProduct.colors[index].img
    });
});

currentProductSize.forEach((size,index)=> {
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})