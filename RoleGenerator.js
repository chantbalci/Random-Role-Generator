window.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    document.querySelector("#generate").addEventListener("click", evt => submitGenerate(evt))
}

function submitGenerate(evt) {
    evt.preventDefault();
    const generatedContainer = document.querySelector("#generated-names");
    generatedContainer.innerHTML = ""; // Clear the previous names

    const roles = ["Top", "Jungle", "Mid", "Adc", "Support"];

    const Name1 = document.querySelector("#Name1").value;
    const Name2 = document.querySelector("#Name2").value;
    const Name3 = document.querySelector("#Name3").value;
    const Name4 = document.querySelector("#Name4").value;
    const Name5 = document.querySelector("#Name5").value;

    const names = [Name1, Name2, Name3, Name4, Name5];
    const assignedRoles = [];

    if (
        Name1 == null ||
        Name1 === "" ||
        Name2 == null ||
        Name2 === "" ||
        Name3 == null ||
        Name3 === "" ||
        Name4 == null ||
        Name4 === "" ||
        Name5 == null ||
        Name5 === ""
    ) {
        alert("Name can't be blank");
    } else {
        for (let i = 0; i < names.length; i++) {
            const randomIndex = Math.floor(Math.random() * roles.length);
            const randomRole = roles[randomIndex];
            assignedRoles.push({ name: names[i], role: randomRole });
            roles.splice(randomIndex, 1);

            const ul = document.createElement("ul");
            ul.classList.add("namesUl");
            generatedContainer.appendChild(ul);

            const listElement = document.createElement("li");
            listElement.classList.add("namesLi");
            const textNode = document.createTextNode(names[i] + ": " + randomRole);
            listElement.appendChild(textNode);
            ul.appendChild(listElement);
        }
        console.log("Assigned Roles:", assignedRoles);
        // You can do something with the assigned roles here, like displaying them on the page
    }
}
