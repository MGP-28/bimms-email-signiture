// const data = await getData();
// injectData(data);

// async function getData() {
//   return fetch("config.json").then((data) => data.json());
// }

const formEl = document.getElementById("form");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  handleForm();
});

function handleForm() {
  if (
    !document.getElementById("name").value ||
    !document.getElementById("job").value ||
    !document.getElementById("email").value ||
    !document.getElementById("phone").value ||
    !document.getElementById("prefix").value
  )
    window.alert("Fill all fields!")

  const data = {};

  data.name = document.getElementById("name").value + ",";

  data.job = document.getElementById("job").value;

  data.email = document.getElementById("email").value;

  const phoneEl = document.getElementById("phone").value;
  const prefix = document.getElementById("prefix").value;
  data.phone = {};
  data.phone.ref = `${prefix}${phoneEl}`;
  const phoneNumberFormatted = phoneEl.match(/.{1,3}/g).join(" ");
  data.phone.display = `(${prefix}) ${phoneNumberFormatted}`;

  renderSignature(data);
}

function renderSignature(data) {
  document.body.innerHTML = `
  <table
      style="
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        border-collapse: collapse;
        border-spacing: 0;
        text-decoration: none;
        font-weight: 400;
        font-size: 11px;
        color: #323232;
        font-family: Gadugi, Arial, Helvetica, sans-serif;
        overflow: hidden;
        padding: 8px;
        background-color: #ffffff;
        height: auto;
      "
    >
      <tr
        style="
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          border-collapse: collapse;
          border-spacing: 0;
          text-decoration: none;
          display: flex;
          margin-bottom: 10px;
        "
      >
        <td
          style="
            margin: 0;
            padding: 0;
            border: 0;
            box-sizing: border-box;
            vertical-align: baseline;
            border-collapse: collapse;
            border-spacing: 0;
            margin-top: 2px;
          "
        >
          <p
            id="bimms-name"
            style="
              margin: 0;
              padding: 0;
              border: 0;
              line-height: 18px;
              mso-line-height-alt: exactly;
              font-weight: 100;
              font-size: 13pt;
            "
          >
            ${data.name}
          </p>
          <p
            id="bimms-job"
            style="
              margin: 0;
              padding: 0;
              border: 0;
              line-height: 19px;
              mso-line-height-alt: exactly;
              font-weight: 700;
              font-size: 10pt;
            "
          >
          ${data.job}
          </p>
          <p
            style="
              margin: 0;
              padding: 0;
              border: 0;
              line-height: 14px;
              mso-line-height-alt: exactly;
              font-weight: 400;
              font-size: 9pt;
            "
          >
            <a id="bimms-email" style="text-decoration: none; color: #323232" href="mailto:${data.email}">${data.email}</a> |
            <a id="bimms-phone" style="text-decoration: none; color: #323232" href="tel:${data.phone.ref}" cm_dontconvertlink>${data.phone.display}</a>
          </p>
        </td>
        <td
          style="
            margin: 0;
            padding: 0;
            border: 0;
            box-sizing: border-box;
            vertical-align: baseline;
            border-collapse: collapse;
            border-spacing: 0;
            margin: 0 15px;
          "
        >
          <p
            style="
              margin: 0;
              padding: 0;
              border: 0;
              box-sizing: border-box;
              vertical-align: baseline;
              border-collapse: collapse;
              border-spacing: 0;
              font-weight: 900;
              letter-spacing: -2px;
              display: inline-block;
              font-size: 30pt;
              font-family: 'Arial Black', Arial, sans-serif;
              line-height: 39px;
              height: 40px;
            "
          >
            <span
              style="
                margin: 0;
                padding: 0;
                border: 0;
                box-sizing: border-box;
                vertical-align: baseline;
                border-collapse: collapse;
                border-spacing: 0;
                font-weight: 900;
                letter-spacing: -2px;
                display: inline-block;
                font-size: 30pt;
                font-family: 'Arial Black', Arial, sans-serif;
                line-height: 39px;
                height: 40px;
              "
              >BIM</span
            ><span
              style="
                color: #6fc3c0;
                margin: 0;
                padding: 0;
                border: 0;
                box-sizing: border-box;
                vertical-align: baseline;
                border-collapse: collapse;
                border-spacing: 0;
                font-weight: 900;
                font-size: 30pt;
                letter-spacing: -2px;
                display: inline-block;
                font-size: 30pt;
                font-family: 'Arial Black', Arial, sans-serif;
                line-height: 39px;
                height: 40px;
              "
              >MS</span
            >
          </p>
          <p
            style="
              margin: 0;
              padding: 0;
              border: 0;
              box-sizing: border-box;
              vertical-align: baseline;
              border-collapse: collapse;
              border-spacing: 0;
              line-height: 10px;
              font-size: 10.5pt;
              font-weight: 500;
              font-family: Arial, sans-serif;
              margin-left: 2px;
            "
          >
            integrated <span style="font-size: inherit; font-weight: inherit; color: #6fc3c0">engineer</span>ing
          </p>
        </td>
        <td
          id="company"
          style="
            display: block;
            margin: 0;
            padding: 0;
            border: 0;
            box-sizing: border-box;
            vertical-align: baseline;
            border-collapse: collapse;
            border-spacing: 0;
            margin-top: 2px;
          "
        >
          <p style="margin: 0; padding: 0; border: 0; line-height: 13px; mso-line-height-alt: exactly">
            <a
              style="
                margin: 0;
                padding: 0;
                border: 0;
                border: 0;
                line-height: 12px;
                font-weight: 400;
                font-size: 11.3px;
                text-decoration: none;
                color: #323232;
              "
              href="tel:+351220982222"
              cm_dontconvertlink
            >
              (+351) 220 982 222
            </a>
          </p>
          <p style="margin: 0; padding: 0; border: 0; line-height: 13px; mso-line-height-alt: exactly">
            <a
              style="
                margin: 0;
                padding: 0;
                border: 0;
                border: 0;
                line-height: 12px;
                font-weight: 400;
                font-size: 11.3px;
                text-decoration: none;
                color: #323232;
              "
              href="https://www.google.com/maps/place/BIMMS/@41.1524229,-8.6401866,16.12z/data=!4m12!1m6!3m5!1s0x0:0x11e14ef0fa42a3f9!2s8CHp937%2B3C!8m2!3d41.1526875!4d-8.6364375!3m4!1s0xd2465494a912b91:0xa2d9cb708f4dcdc3!8m2!3d41.1527286!4d-8.6364247"
              target="_blank"
            >
              5937+3C Porto
            </a>
          </p>
          <p style="margin: 0; padding: 0; border: 0; line-height: 13px; mso-line-height-alt: exactly">
            <a
              style="
                margin: 0;
                padding: 0;
                border: 0;
                border: 0;
                line-height: 12px;
                font-weight: 400;
                font-size: 11.3px;
                text-decoration: none;
                color: #323232;
              "
              href="https://www.bimms.net"
              target="_blank"
            >
              www.bimms.net
            </a>
          </p>
          <p style="margin: 0; padding: 0; border: 0; line-height: 13px; mso-line-height-alt: exactly">
            <a
              style="
                margin: 0;
                padding: 0;
                border: 0;
                border: 0;
                line-height: 12px;
                font-weight: 400;
                font-size: 11.3px;
                text-decoration: none;
                color: #323232;
              "
              href="https://www.linkedin.com/company/bimms"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </td>
      </tr>
      <tr
        style="
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          border-collapse: collapse;
          border-spacing: 0;
          text-decoration: none;
          margin-top: 40px;
        "
      >
        <td
          colspan="3"
          style="
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            border-collapse: collapse;
            border-spacing: 0;
            text-decoration: none;
            max-width: 500px;
          "
        >
          <img src="https://bimms.net/wp-content/uploads/2023/01/signature.png" alt="" />
        </td>
      </tr>
    </table>
    `;
}
