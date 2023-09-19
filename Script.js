const API_KEY = "7a424ace4a564a50978db24de4f3cce6";
const API_url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => {
    fetchNews("India");
})

document.querySelector(".ipl").addEventListener('click', () => {
    fetchNews("IPL");
})

document.querySelector(".finance").addEventListener('click', () => {
    fetchNews("stocks");
})

document.querySelector(".politics").addEventListener('click', () => {
    fetchNews("politics");
})

document.querySelector(".search-button").addEventListener('click', () => {
    let input = document.querySelector(".search-box").value;
    fetchNews(input);
})

document.querySelector(".site-logo").addEventListener('click', () => {
    fetchNews("India");
})

async function fetchNews(query) {
    const res = await fetch(`${API_url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    showData(data.articles);
}

let id = 0;
function showData(articles) {
    const cardContainer = document.querySelector('.container-main');
    cardContainer.innerHTML = "";
    articles.forEach((art) => {

        let div = document.createElement("div");
        div.classList.add('card');

        div.innerHTML = `
        <a href=${art.url} target="_blank">
            <div class="card-header">
            <img src="${art.urlToImage}" alt="" class="news-img"> 
            </div>
            <div class="card-content">
                <h3 class="news-title">${art.title}</h3>
                    
                <h6 class="news-source">${art.source.id}</h6>
                <p class="news-desc">${art.description}</p>
            </div>
        </a>`;
        cardContainer.appendChild(div);
    })
}

const card = document.querySelector(".card");



card.addEventListener('click', () => {

})

