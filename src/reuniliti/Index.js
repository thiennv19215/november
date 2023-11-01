import { Footer } from "../component/Footer";
import { Header } from "../component/Header";

const app = document.querySelector("#app");

const display = (fn) => {
    document.querySelector("#header").innerHTML = Header();
    app.innerHTML = fn;
    document.querySelector("#footer").innerHTML = Footer();
};
export default display;
