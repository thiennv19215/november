import { Footer } from "../component/Footer";
import { Header } from "../component/Header";

const app = document.querySelector("#app");

const display = async (fn) => {
    document.querySelector("#header").innerHTML = Header();
    app.innerHTML = await fn;
    document.querySelector("#footer").innerHTML = Footer();
};
export default display;
