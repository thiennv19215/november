import Navigo from "navigo";
import Aboutpage from "./Page/Aboutpage";
import Homepage from "./Page/Homepage";
import display from "./reuniliti/Index";
import Infopage from "./Page/Infopage";

const router = new Navigo("/", { linksSelector: "a" });

router.on({
    "/": () => display(Homepage()),

    "/new/:id": (id) => {
        const { data } = id;
        display(Infopage(data));
    },
    "/About": () => display(Aboutpage()),
});

router.resolve();
