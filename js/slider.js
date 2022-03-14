const images = [
  'images/asset-6.jpeg',
  'images/asset-7.jpeg',
  'images/asset-8.jpeg',
  'images/asset-9.jpeg',
  'images/asset-10.jpeg'
];
let imgIndex = 0; 
const imgElement = document.getElementById('slider-image')
setInterval(() =>{
    if(imgIndex>=images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]; 
     imgElement.setAttribute('src', imgUrl)
    console.log(imgUrl);
    imgIndex++;
    
},1000)