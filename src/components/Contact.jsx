import "../App.css";

const Contact = () => {
  return (
    <section className="contact-section" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            style={styles.textarea}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
    </section>
  );
};

const styles = {
  section: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputGroup: {
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: ".5rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: ".5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    width: "100%",
    padding: ".5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Contact;