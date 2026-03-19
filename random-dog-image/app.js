let url = "https://dog.ceo/api/breeds/image/random";

let button = document.querySelector("#btn");
let image = document.querySelector("#image");
let linkTag = document.querySelector("#link");

button.addEventListener("click", async () => {
    try {
        let response = await axios.get(url);
        let imgUrl = response.data.message;

        image.src = imgUrl;
        linkTag.href = imgUrl;

    } catch (error) {
        console.log("Error fetching image:", error);
        alert("Failed to load image ❌");
    }
});
