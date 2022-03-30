function ContactForm() {
  return (
    <div className="container contact_container main_slider">
      {/* <!-- Contact Us --> */}

      <div className="row">
        <div className="col-lg-6 contact_col">
          <div className="contact_contents">
            <h1>Contacter nous</h1>
            <p>
              Il existe de nombreuses façons de nous contacter. Vous pouvez nous
              écrire, nous appeler ou nous envoyer un e-mail, choisissez ce qui
              vous convient le mieux.
            </p>
            <div>
              <p>(800) 686-6688</p>
              <p>jeart.shop@gmail.com</p>
            </div>
            <div>
              <p>Horaires d'ouverture: 8H00-21H00 Lundi-Vendrredi</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>

          {/* <!-- Follow Us --> */}
        </div>

        <div className="col-lg-6 get_in_touch_col">
          <div className="get_in_touch_contents">
            <h1>Replissez</h1>
            <p>
              Remplissez le formulaire ci-dessous pour recevoir une réponse
              gratuite et confidentielle.
            </p>
            <form>
              <div>
                <input
                  id="input_name"
                  className="form_input input_name input_ph"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                  data-error="Name is required."
                />
                <input
                  id="input_email"
                  className="form_input input_email input_ph"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                  data-error="Valid email is required."
                />
                <textarea
                  id="input_message"
                  className="input_ph input_message"
                  name="message"
                  placeholder="Message"
                  rows="3"
                  required
                  data-error="Please, write us a message."
                ></textarea>
              </div>
              <div>
                <button
                  id="review_submit"
                  type="submit"
                  className="red_button message_submit_btn trans_300"
                  value="Submit"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
