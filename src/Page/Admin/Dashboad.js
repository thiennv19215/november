import axios from "axios";

// eslint-disable-next-line consistent-return
const Dashboad = async () => {
    try {
        const loadingElement = document.getElementById("loading");
        loadingElement.style.display = "block";
        const { data } = await axios.get("https://654347ec01b5e279de201e8f.mockapi.io/ask/users");
        loadingElement.style.display = "none";
        return `<div class ="max-w-5xl mx-auto">
        <h3 class ="p-4">quản ly</h3>
        <div class = "news border ">

            <table class ="w-full">
                <tbody>
                ${data.map((item, index) => /* html */`
                <tr class = "flex items-center justify-between p-4 border ">
                <div>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                </div>
                <div>
                <td >
                <button  class ="btn px-4 bg-orange-600 rounded">
                    xóa
                </button></td>
                </div>
                    </tr>
                `).join("")}
                </tbody>
            </table>
           
        </div>
        </div>`;
    } catch (error) {
        console.log(error);
    }
};

export default Dashboad;
