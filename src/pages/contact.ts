export const contact_page = () => {
  return  /*html*/`
        <form>
            <label>First Name
                <input type="text" placeholder = "Friedrich" ></input>
            </label>
            <label>Last Name
                <input type="text" placeholder = "Schäffer"></input>
            </label>
            <label>Email
                <input type="email" placeholder = "myemail@mail.com"></input>
            </label>
            <label>Message
                <textarea>Please, your message here</textarea>
            </label>
        </form>
    `;
};
