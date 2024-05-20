export default function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("sucess!");
      navigator.clipboard.writeText(document.getElementById("result"));
    } else {
      button.innerText = "Copy";
      button.classList.remove("sucess");
    }
};