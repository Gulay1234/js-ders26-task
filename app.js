let a = document.querySelectorAll("div");
a.forEach(element => {
    element.style.display = "none";
});

let i = document.querySelectorAll("i");
let section = document.querySelectorAll("section");

i.forEach((element, index) => {
    element.addEventListener("click", () => {
        let n = section[index].nextElementSibling;
        if (n.style.display === "none") {
            n.style.display = "block";
        } else {
            n.style.display = "none";
        }

        if (n.style.display === "none") {
            element.classList.add("fa-angle-down");
            element.classList.remove("fa-angle-up");
        } else {
            element.classList.add("fa-angle-up");
            element.classList.add("fa-angle-down");
        }
    });
});

