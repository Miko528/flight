import React from 'react'
import "./Page6.css";
import emailjs from "emailjs-com";

function Page6() {
    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_65uk43a', 'template_zndeubo', e.target, 'user_2gv3wijqnn1umKrZdD0RM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

    return (
        <form id="Page6"  onSubmit={sendEmail}>
            <input type="text" placeholder="Imie" name="name" />
            <input type="text" placeholder="Temat" name="subject" />
            <input type="email" placeholder="Adres mailowy" name="email" />
            <textarea type="text" placeholder="Wiadomość" rows="8" name="messages" />
            <input className="send" type="submit" value="Send"  style={{cursor: 'pointer'}}/>
        </form>
    )
}

export default Page6