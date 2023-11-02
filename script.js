let main_container=document.querySelector("main");
let apikey="kVeJ9_FubrJNuP7sxiJx4M9Dc49gg5vSRaZMhr2VTj0";
let loadedimages=0;
let totalimages=0;
let loadmore=false;


async function fetchApi(){
 let response=await fetch(`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=10`);
 let result= await response.json();
return result;
}

window.addEventListener("scroll",()=>{
    if(window.scrollY + window.innerHeight <= document.body.offsetHeight){
        loadedimages=false;
        AppendPhotos();
        console.log("hi");
    }
})

AppendPhotos();

async function AppendPhotos(){
    totalimages+=10;
    let photos= await fetchApi();
    displayimages(photos);
}
function displayimages(images){
    console.log(images)
    // let newContainer=document.createElement("div");
    images.forEach((ele) => {

        let container=document.createElement("div");
        container.setAttribute("class","container")
        container.innerHTML=`<img src="${ele.urls.regular}" alt="">
        <div class="des">${ele.alt_description} </div>
        <div class="likes"><i class="fa fa-heart" aria-hidden="true" style="color:red"></i><span class="like-count">${ele.likes}</span></div>`
       main_container.appendChild(container);
       
    //    container.addEventListener("load",()=>{
    //     loadedimages++;
    //     if(loadedimages==totalimages){
    //         loadmore=true;
    //       }
    //     console.log(totalimages,loadedimages);
    //    });
       
        
    });
   
  
   
}



