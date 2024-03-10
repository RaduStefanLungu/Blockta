import React from 'react'
import '../styles/contactPage.css'
export default function ContactPage() {
  return (
      <div className='contact_one'>
          <div className='contact_img'>
            <img src='test.png' alt='Contact'/>
          </div>
          <div className='contact'>
              <div className='contact_bis'>
                  <h1>Contact Us</h1>
                  <p>If you have any questions, please feel free to contact us.</p>
              </div>
              <Formulaire />
          </div>
      </div>
  );
}
function Formulaire() {
  return (
    <form id='formulaire'>
        <input type="text" className='name_sub' placeholder="Complete Name" />
        <input type="text" id='phone_sub' placeholder="Phone" />
        <input type="text" id='email_sub' placeholder="Email" />
        <input type="text" id='message_sub' placeholder="Message" />
        <button type="submit" id='button_sub'>Submit</button>
    </form>
  );
}

