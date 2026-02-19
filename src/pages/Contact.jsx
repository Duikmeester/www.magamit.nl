export default function ContactForm() {
    return (
        <div>
            {/*contact form*/}
            <section>
                <div className="container-fluid text-center">
                    <form className="contact-form">
                        <h3>Contact Us</h3>

                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            required
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Write your message here..."
                            required
                        ></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>

        </div>
    );
}
