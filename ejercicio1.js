para Joan <3
const getData = async () => {
    let images;
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?size=full");
        if (response.ok) {
            const jsonResponse = await response.json();
            images = jsonResponse[0].url;
            return images;
        }
    }
    catch (error) {
        console.log(error);
    }
}

let div = document.getElementsByTagName('div')[4];
document.getElementsByTagName('button')[0].addEventListener('click', async () => {
    let im = await getData();
    console.log("imagen?" + im);
    div.style.backgroundImage = "url("+im+")";

}


);
