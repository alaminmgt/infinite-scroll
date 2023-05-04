const container = document.querySelector(".container");

let limit = 4 ;
let pageCount = 1 ;
let postCount = 1 ;

const getPost = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}_page=${pageCount}'`);
    const data = await response.json();
    // console.log(data[0].body);

    data.map( (curreVla,Index) => {
        const html = `
        <div class="posts">
            <p class="post-id">${postCount++}</p>
            <h2 class="title">${curreVla.title}</h2>
            <p class="post-info">${curreVla.body}</p>
        </div>
        `;

        container.insertAdjacentHTML("beforeend",html);
    });
};

getPost();

const showData = () => {
    setTimeout(() => {
        pageCount++;
        getPost();
    }, 300);
};

window.addEventListener("scroll", () => {
    const {scrollHeight,scrollTop,clientHeight} = document.documentElement;

    if (scrollTop+clientHeight <= scrollHeight) {
        console.log("This is bottom");
        showData();
    }
});
