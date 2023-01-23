const data = await getData();
injectData(data);

async function getData() {
  return fetch("config.json").then((data) => data.json());
}

function injectData(data) {
  document.getElementById("bimms-name").textContent = data.name + ",";

  document.getElementById("bimms-job").textContent = data.jobTitle;

  const emailEl = document.getElementById("bimms-email");
  emailEl.textContent = data.email;
  emailEl.href = `mailto:${data.email}`;

  const phoneEl = document.getElementById("bimms-phone");
  const phoneNumberFormatted = data.phoneNumber.match(/.{1,3}/g).join(" ");
  phoneEl.textContent = `(${data.countryPrefix}) ${phoneNumberFormatted}`;
  phoneEl.href = `tel:${data.countryPrefix}${data.phoneNumber}`;
}
