export const contact_page = () => {
  let formData = { firstName: '', lastName: '', email: '', message: '' };

  const { firstName, lastName, email, message } = formData;

  const handleError = (error) => {
    console.error(error);
    return error;
  };
  const handleFormData = () => {
    if (firstName.length < 2 || lastName.length < 1 || email.length < 1) {
      const error = 'There are empty fields';
      console.error(error);
      alert(error);
      const errorElement = document.createElement('p');
      errorElement.innerText = error;
      const body = document.querySelector('body');
      body?.appendChild(errorElement);
      return error;
    } else if (
      firstName.length > 50 ||
      lastName.length > 50 ||
      email.length > 50 ||
      message.length > 1000
    ) {
      handleError('Your fields are too long');
    } else if (formData.email.includes('@') || formData.email.includes('.')) {
      const error = 'Your email should contain an @ and a .';
      console.error(error);
      return error;
    } else {
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

  return /*html*/ `
        <form>
        </form>
    `;
};
