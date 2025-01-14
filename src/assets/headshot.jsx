import React from "react";

const Headshot = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQHrwvzTR2gXvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694022587832?e=1742428800&v=beta&t=bF0XH_o_2tys-z1VFVb3lMf_Tx9ym1LHNAxNxNy8ZCE"
          alt="Your Headshot"
          style={styles.image}
        />
        <h1 style={styles.name}>Parker Speares</h1>
        <p style={styles.description}>Fullstack Developer | DevOps Enthusiast | DND Game Designer</p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  container: {
    display: "inline-block",
    textAlign: "center",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #007BFF",
  },
  name: {
    fontSize: "1.5rem",
    marginTop: "1rem",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    marginTop: "0.5rem",
  },
};

export default Headshot;