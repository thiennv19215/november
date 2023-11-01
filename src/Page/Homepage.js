import { data } from "../api/Api";

export default function Homepage() {
    return (
    /* html */
        `<div class ="max-w-5xl mx-auto">
    <div class = "banner">
        <img src = "https://picsum.photos/1200/250"/></div>
    <div class = "news">
        <h2 class ="text-3xl">tin tuc hop tap</h2>

        <div class = "grid grid-cols-3 gap-4 text-center rounded-s-none">
          ${data
            .map(
                (item) => `  <div class = "border py-4 ">
          <a class="flex justify-center" href = "/">
              <img  src= ${item.img} />
          </a>
          <h3 class="text-2xl">tiêu đề ${item.id}</h3>
          <span><a href = "/new/${item.id}">${item.title}</a></span>
          </div>

    `,
            )
            .join("")}
        </div>
    </div>
    </div>`
    );
}