const buttons = document.querySelectorAll("#button-id");
// console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  //   console.log(buttons[i]);
  const btn = buttons[i];
  // console.log(btn)
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    event.target.disabled = true;

    const quantity = parseInt(document.getElementById("quantity").innerText);
    //     console.log(quantity)
    const sum = quantity + 1;
    //     console.log(sum);
    document.getElementById("quantity").innerText = sum;
    const quantity2 = parseInt(document.getElementById("quantity2").innerText);
    const sub = quantity2 - 1;
    if (sub == 0) {
      alert("completed");
    }
    //     console.log(sub);
    document.getElementById("quantity2").innerText = sub;

    // activity log button
    const now = new Date();
    const time = now.toLocaleString();
    const container = document.getElementById("activity-container");
    const p = document.createElement("p");
    p.innerText = `
    You have Completed the task ${title.innerText} at ${time}

    `;
    container.appendChild(p);

    // click kora jokon ses hobe
  });
}

// discover section
document.getElementById("discover").addEventListener("click", function () {
  //   console.log("clickme");
  window.location.href = "./index2.html";
});

const colors = ["red", "blue", "green", "purple", "orange"];
let index = 0;

document
  .getElementById("change-color")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //     console.log('click')
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  });

// clear history

document
  .getElementById("activity-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("activity-container").innerText = "";
  });
