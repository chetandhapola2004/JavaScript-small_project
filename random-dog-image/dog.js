let url = "https://dog.ceo/api/breeds/image/random";

let button = document.querySelector("#btn");
let image = document.querySelector("#image");
let linkTag = document.querySelector("#link");

button.addEventListener("click", async () => {
    try {
        let response = await fetch(url);
        let data = await response.json();

        let imgUrl = data.message;

        image.src = imgUrl;
        linkTag.href = imgUrl;

    } catch (error) {
        console.log("Error:", error);
        alert("Failed to load image ❌");
    }
});
