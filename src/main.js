import Navigo from "navigo";
import Aboutpage from "./Page/Aboutpage";
import Homepage from "./Page/Homepage";
import display from "./reuniliti/Index";
import Infopage from "./Page/Infopage";
import Dashboad from "./Page/Admin/Dashboad";

const router = new Navigo("/", { linksSelector: "a", hash: true });

router.on({
    "/": () => display(Homepage()),
    "/new/:id": (id) => {
        const { data } = id;
        display(Infopage(data));

        // đang lỗi k nhận css và navigo khong loading
    },
    "/About": () => display(Aboutpage()),
    "/admin/doash": () => display(Dashboad()),
});

router.resolve();
