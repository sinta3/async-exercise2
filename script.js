let endpoint = `https://restcountries.eu/rest/v2/all`;
let options = {
    method: "GET",
};

const container = document.getElementById("container");
fetch(endpoint, options)
    .then((response) => response.json())
    .then((results) => {
        results.forEach((result) => {
            let div = document.createElement("div");
            let name = document.createElement(`h3`);
            name.innerHTML = `${result.name}`;
            container.appendChild(div);
            div.appendChild(name);

            let img = document.createElement("img");
            img.setAttribute("src", `${result.flag}`);
            img.style.width = "100px";

            console.log(result.flag);
            div.appendChild(img);
        });
    })
    .catch((error) => console.log(error));
