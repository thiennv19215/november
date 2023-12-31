import axios from "axios";

export default async function Homepage() {
    try {
        const loadingElement = document.getElementById("loading");
        loadingElement.style.display = "block";
        const { data } = await axios.get("https://654347ec01b5e279de201e8f.mockapi.io/ask/users");
        loadingElement.style.display = "none";
        return (
        /* html */
            `<div class ="max-w-5xl mx-auto">
    <div class = "banner">
        <img src = "https://picsum.photos/1200/250"/></div>
    <div class = "news">
        <h2 class ="text-3xl p-4">tin tuc hop tap</h2>

        <div class = "grid grid-cols-3 gap-4 text-center rounded-s-none">
          ${data
                .map(
                    (item) => `  <div class = "border py-4 ">
          <a class="flex justify-center" href = "/">
              <img src= ${item.avatar} />
          </a>
          <h3 class="text-2xl">${item.name}</h3
          <span ><a class = "text-2xl text-fuchsia-800" href="/new/${item.id}">${item.title}</a></span>
          </div>

    `,
                )
                .join("")}
        </div>
    </div>
    </div>`
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error, "lỗi rồi");
    }
}
