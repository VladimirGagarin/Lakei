import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const whatsappMessage = "Hello Moses Lakei, I saw your portfolio and I'd love to connect!";
const whatsappURL = `https://wa.me/254794949856?text=${encodeURIComponent(whatsappMessage)}`;

const links = {
  whatsapp: whatsappURL,
  instagram: "https://www.instagram.com/musa.lakei.lenana/",
  facebook: "https://www.facebook.com/profile.php?id=61550804163923"
};

const breakpoints = {
  sm: '600px', // Mobile breakpoint
  md: '768px', // Tablet breakpoint
  lg: '1024px', // Laptop breakpoint
};

// Styled components for layout and design
const Section = styled.section`
  text-align: center;
  padding: 2rem;
  background-color: #111827;
  color: white;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 70px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem;
    margin-bottom: 70px;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #14b8a6;  /* teal color */
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.md}) {
    width: 250px;
    height: 250px;
    margin-bottom: 1.5rem;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const SocialIconLink = styled.a`
  color: #14b8a6; /* teal color */
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;
  border: 2px solid ##14b8a6;

  &:hover {
    color: #2dd4bf; /* teal-400 on hover */
    transform: scale(1.2); /* Slightly increase the size to indicate clickability */
  }

  &:active {
    transform: scale(1); /* Return to original size when clicked */
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.9rem; /* Adjust icon size for smaller screens */
  }
`;


const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    margin-top: 0.5rem;
  }
`;

const QRCodeWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    margin: 0.5rem 0;
  }
`;

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Section>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ContactImage src="/assets/moses3.png" alt="Contact" />
        </motion.div>

        <Heading>Get in Touch | Mettiti in contatto</Heading>

        {/* Social Icons with QR */}
        <SocialIconsContainer>
          {Object.entries(links).map(([key, url]) => (
            <QRCodeWrapper key={key}>
              {/* Icon */}
              <SocialIconLink
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {key === "whatsapp" && <FaWhatsapp />}
                  {key === "instagram" && <FaInstagram />}
                  {key === "facebook" && <FaFacebook />}
                </SocialIconLink>

              {/* QR Code */}
              <QRCodeContainer>
                <QRCodeSVG value={url} size={200} fgColor="#ffffff" bgColor="#1f2937" />
              </QRCodeContainer>

              <Heading>Scan {key === "whatsapp" ? "WhatsApp" : key === "instagram" ? "Instagram" : "Facebook"} | Scansionare {key === "whatsapp" ? "WhatsApp" : key === "instagram" ? "Instagram" : "Facebook"}</Heading>

              <motion.button
                  style={{
                    background: "linear-gradient(to right, #7c3aed, #ec4899, #ef4444)", 
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize:" 20px",
                    cursor: "pointer",
                    border:"none ",
                    cursor: "pointer", 
                    marginTop: "1rem",
                  }}
                  onClick={() => window.open(url, "_blank")}
                >
                  Visit | Visita {key === "whatsapp" ? "WhatsApp" : key === "instagram" ? "Instagram" : "Facebook"}
                </motion.button>
            </QRCodeWrapper>

          ))}
        </SocialIconsContainer>
      </Section>
    </motion.section>
  );
}

export default Contact;
