import { Nav } from "./Nav";

export const Header = () => (/* html */
    `<div class= "max-w-5xl mx-auto">
    <header>
        <div class ="bg-green-700 px-4 py-4">
          <img src = "https://picsum.photos/100/100"  class ="mx-auto rounded-full" />
        </div>
        <div >
          ${Nav()}
        </div>
    </header>
    </div>`
);
