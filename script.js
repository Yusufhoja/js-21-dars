let a=document.querySelector("input");
let b=document.querySelector("button");
let c=document.querySelector("p")

b.addEventListener("click",()=>{
if(a.value === ''){
    alert("write something");
}
else{
let li=document.createElement("p");
li.textContent=a.value
c.appendChild(li, imageElement)
a.value="";
}
})

  let ab="https://www.google.com/imgres?q=%D0%BA%D1%80%D1%83%D0%B6%D0%BE%D0%BA&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F192%2F339%2Fpng-transparent-coffee-circle-white-circle-black-barista-software-repository.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fru%2Fsearch%3Fq%3D%25D0%25BA%25D1%2580%25D1%2583%25D0%25B6%25D0%25BE%25D0%25BA&docid=NH_yJIShLo9tdM&tbnid=g9haOhmJ0rkT0M&vet=12ahUKEwiH_oyXp8mFAxXxBxAIHQYlBOUQM3oECBgQAA..i&w=920&h=920&hcb=2&ved=2ahUKEwiH_oyXp8mFAxXxBxAIHQYlBOUQM3oECBgQAA"
  var imageElement = document.createElement("img");
  imageElement.src = ab;
  displayElement.appendChild(imageElement);