import axios from "axios";

// eslint-disable-next-line consistent-return
const Infopage = async ({ id }) => {
    try {
        const { data } = await axios.get("https://654347ec01b5e279de201e8f.mockapi.io/ask/users");

        const newdata = data.filter((item) => item.id === id);
        return `<div class = "max-w-5xl mx-auto">
            ${newdata.map((item) => `<div>
                <div class = "border py-4 ">
                <a class="flex justify-center" href = "/">
                    <img  src= ${item.avatar} />
                </a>
                <h3 class="text-2xl">tiêu đề ${item.id}</h3>
                <span><a href="/new/${item.id}">${item.title}</a></span>
                </div>
                </div>`)}
        </div>`;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};

export default Infopage;
