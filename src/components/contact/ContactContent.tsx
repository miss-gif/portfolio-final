// ContactContent.js (Main component)
import axios from "axios";
import { useEffect, useState } from "react";
import "./ContactContent.scss";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ThankYouMessage from "./ThankYouMessage";

const ContactContent = () => {
  const [complete, setComplete] = useState(false);
  const [profile, setProfile] = useState({
    contact: "",
    email: "",
    github: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/json/profile.json");
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmitSuccess = () => {
    setComplete(true);
  };

  const handleReset = () => {
    setComplete(false);
  };

  return (
    <div className="contact-content">
      <ContactInfo profile={profile} />
      <div className="contact-content__form">
        {!complete ? (
          <ContactForm onSubmitSuccess={handleSubmitSuccess} />
        ) : (
          <ThankYouMessage onReset={handleReset} />
        )}
      </div>
    </div>
  );
};

export default ContactContent;
