"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("The form is ready, but submission is not connected yet. Please email ravalvraj3000@gmail.com for now.");
  }

  return (
    <div className="contact-form-wrap">
      <p className="eyebrow">Send an inquiry</p>
      <p className="contact-form-note">Form submission will be enabled when the API endpoint is configured. In the meantime, you can reach me at <a href="mailto:ravalvraj3000@gmail.com">ravalvraj3000@gmail.com</a>.</p>
      <form className="contact-form" onSubmit={handleSubmit} onInput={() => setNotice("")}>
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="contact-field contact-field-inquiry">
          <label htmlFor="contact-inquiry">Inquiry</label>
          <textarea id="contact-inquiry" name="inquiry" rows={5} required />
        </div>
        <div className="contact-form-actions">
          <button className="action-link" type="submit">Submit inquiry <span aria-hidden="true">↗</span></button>
          {notice && <p className="contact-form-notice" role="status">{notice}</p>}
        </div>
      </form>
    </div>
  );
}
