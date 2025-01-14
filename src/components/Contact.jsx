import "../App.css";

export default function Contact() {
    const handleSubmit = (event) => {
        const user = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const error = document.getElementById("error");
        event.preventDefault();

        const validEmail = (email) => {
            const realEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return realEmail.test(String(email).toLowerCase());
        };

        if (!user.value) {
            error.innerHTML = "Name is required";
            error.style.color = "red";
            error.style.textAlign = "center";
        } else if (!email.value || !validEmail(email.value)) {
            error.innerHTML = "Email is required";
            error.style.color = "red";
            error.style.textAlign = "center";
        } else if (!message.value) {
            error.innerHTML = "Message is required";
            error.style.color = "red";
            error.style.textAlign = "center";
        } else {
            user.value = "";
            email.value = "";
            message.value = "";
            error.innerHTML = "";
            alert("Message sent successfully");
        }
    }

    return (
        <div className="contact">
            <h1>Contact</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" rows="5"></textarea>
                <button type="submit">Submit</button>
            </form>
            <p id="error"></p>
        </div>
    );
}