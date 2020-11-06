const emailSignForm = document.forms["form"];

emailSignForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const fullName = emailSignForm.querySelector("#fullName").value;
  const title = emailSignForm.querySelector("#title").value;
  const email = emailSignForm.querySelector("#email").value;
  const phone = emailSignForm.querySelector("#phone").value;
  const web = emailSignForm.querySelector("#web").value;
  const department = emailSignForm.querySelector("#department").value;

  const container = document.querySelector(".container");
  const signEl = document.createElement("div");

  if (signEl !== "") {
    signEl.remove();
  }
  signEl.innerHTML = `
  <div class="name">${fullName}</div>
  <div class="title">${title}</div>
  <p class="contact">Email: 
    <a href="mailto:${email}">${email}</a>
    <br /> Phone: ${phone}
    <br /> Web: 
    <a href="${web}">${web}</a>
  </p>
  <div class="address">Wofford College 
    <br /> ${department} 
    <br /> 121 College St. Spartanburg, S.C. 29303
  </div>
  `;
  container.appendChild(signEl);
});
