document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("proposalForm");
const hint = document.getElementById("formHint");

function val(v){ return (v || "").trim(); }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = val(data.get("name"));
  const company = val(data.get("company"));
  const email = val(data.get("email"));
  const type = val(data.get("type"));
  const timeline = val(data.get("timeline"));
  const budget = val(data.get("budget"));
  const message = val(data.get("message"));

  if(!name || !email || !type || !timeline || !budget || !message){
    hint.textContent = "Please complete all required fields.";
    return;
  }

  hint.textContent = "";

  const subject = encodeURIComponent(`SpiryIT Proposal Request — ${type}`);
  const body = encodeURIComponent(
`Hi Martial,

Name: ${name}
Company: ${company || "-"}
Email: ${email}

Request type: ${type}
Timeline: ${timeline}
Budget: ${budget}

Message:
${message}

Best regards,
${name}`
  );

  window.location.href = `mailto:martial@spiryit.com?subject=${subject}&body=${body}`;
});