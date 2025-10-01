document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const car = document.getElementById("car").value.trim();
    const service = document.getElementById("services").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !date || !time) {
      alert("Please fill in all required fields.");
      return;
    }
    
    const confirmation = `
      Appointment Confirmed!
      Name: ${name}
      Car Type: ${car || "Not specified"}
      Service: ${service}
      Date: ${date}
      Time: ${time}
      `;

    alert(confirmation);
    form.reset();
  });
});
