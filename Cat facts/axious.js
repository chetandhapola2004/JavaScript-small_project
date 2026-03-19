let url = "https://catfact.ninja/fact";

async function getfact(){
    try{
        let res = await axios.get(url);
        let ans = res.data.fact;
        return ans;
        
    }
    catch(error){
        console.log(error);
    }
}

let para = document.querySelector("p");
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
   let answ = await getfact();
   para.innerText = answ;
   
});