export const contact_page = () => {
  let formData = { firstName: '', lastName: '', email: '', message: '' };

  const handleFormData = () => {
    if (
      formData.firstName.length < 2 ||
      formData.lastName.length < 1 ||
      formData.email.length < 1
    ) {
      const error = 'There are empty fields';
      console.error(error);
      return error;
    } else if (
      formData.firstName.length > 50 ||
      formData.lastName.length > 50 ||
      formData.email.length > 50 ||
      formData.message.length > 1000
    ) {
      const error = 'Your fields are too long';
      console.error(error);
      return error;
    }else if(formData.email.includes("@") || formData.email.includes(".")) {
        const error = 'Your email should contain an @ and a .';
      console.error(error);
      return error;
    }
    else {
      console.log(formData);
    }
  };

  window.addEventListener('load', () => {
    const form = document.querySelector('form');
    const firstNameLabel = document.createElement('label');
    const lastNameLabel = document.createElement('label');
    const emailLabel = document.createElement('label');
    const firstNameInput = document.createElement('input');
    const lastNameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const messageLabel = document.createElement('label');
    const messageInput = document.createElement('textArea');
    const submitButton = document.createElement('button');
    firstNameLabel.innerText = 'First Name';
    lastNameLabel.innerText = 'Last Name';
    emailLabel.innerText = 'email';
    submitButton.innerText = 'Send';
    submitButton.type = 'button';
    firstNameLabel.appendChild(firstNameInput);
    lastNameLabel.appendChild(lastNameInput);
    emailLabel.appendChild(emailInput);
    messageLabel.appendChild(messageInput);
    form?.appendChild(firstNameLabel);
    form?.appendChild(lastNameLabel);
    form?.appendChild(emailLabel);
    form?.appendChild(messageLabel);
    form?.appendChild(submitButton);
    firstNameInput.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;
      formData.firstName = target.value;
    });
    lastNameInput.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;
      formData.lastName = target.value;
    });
    emailInput.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;
      formData.email = target.value;
    });
    messageInput.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;
      formData.message = target.value;
    });
    submitButton.addEventListener('click', () => handleFormData());
  });

  /* const checkInput = () => {
        const inputValue = input.value
        if(inputValue !== "") {
            return 
        }
    } */

  // const formData = {firstName : "", lastName : "", email : ""}

  // const handleFormData = () => {}

  // const sendFormData = () => {}

  return /*html*/ `
        <form>
        </form>
    `;
};
