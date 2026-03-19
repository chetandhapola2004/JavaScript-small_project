let p = document.querySelector("p");
let btn = document.querySelector("button");

let url = "https://icanhazdadjoke.com/";

async function rendom_Dad_joke(){
    const config = {headers :{Accept :"application/json"}};
    let resolve = await axios.get(url,config);
    p.innerText = resolve.data.joke;
}

btn.addEventListener("click" , rendom_Dad_joke);
