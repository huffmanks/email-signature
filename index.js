const emailSignForm = document.forms["form"];

// Form submission
emailSignForm.addEventListener("keyup", () => {
  const fullName = emailSignForm.querySelector("#fullName").value;
  const title = emailSignForm
    .querySelector("#title")
    .value.replace(/\n/g, "<br/>");
  const email = emailSignForm.querySelector("#email").value;
  const phone = emailSignForm.querySelector("#phone").value;
  const cell = emailSignForm.querySelector("#cell").value;
  const fax = emailSignForm.querySelector("#fax").value;
  const web = emailSignForm.querySelector("#web").value;
  const department = emailSignForm.querySelector("#department").value;

  // Form results HTML
  const container = document.querySelector(".container");
  const result = document.querySelector("#result");

  result.innerHTML = `
      <div class="name">${fullName}</div>
      <div class="title">${title}</div>
      <p class="contact">
        Email:
        <a href="mailto:${email}">${
    email === ""
      ? ""
      : email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/g
        ) === null
      ? `<span class="invalid">Not a valid email address.</span>`
      : `${email}`
  }</a>
        <br />
        Phone: ${
          phone === ""
            ? ""
            : phone.match(/\d{3}\-\d{3}\-\d{4}/g) === null
            ? `<span class="invalid">Not a valid phone number.</span>`
            : `${phone}`
        } 
        ${
          cell === ""
            ? ""
            : cell.match(/\d{3}\-\d{3}\-\d{4}/g) === null
            ? `<br />
            Cell: <span class="invalid">Not a valid cell number.</span>`
            : `<br />
            Cell: ${cell}`
        }
        ${
          fax === ""
            ? ""
            : fax.match(/\d{3}\-\d{3}\-\d{4}/g) === null
            ? `<br />
            Fax: <span class="invalid">Not a valid fax number.</span>`
            : `<br />
            Fax: ${fax}`
        }
        <br />
        Web:
        <a href="${web}">${web}</a>
      </p>
      <div class="address">
        Wofford College <br />
        ${department} <br />
        121 College St. Spartanburg, S.C. 29303
      </div>
  `;
  container.appendChild(result);
});

// TODO
// 1. Add footer
// 2. Make header/footer responsive (header font isn't an absolute match)
// 3. Add https:// to web href
// 4. Push changes to github
