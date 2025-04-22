import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';

const projects = [
  {
    title: {
      en: "Hair Dressing",
      it: "Acconciatura",
    },
    image: "/assets/proj4.png",
    description: {
      en: "Professional hairstyling services with a creative touch for every occasion.",
      it: "Servizi professionali di acconciatura con un tocco creativo per ogni occasione.",
    },
  },
  {
    title: {
      en: "Nail & Beauty Consultant",
      it: "Consulente di Unghie e Bellezza",
    },
    image: "/assets/proj1.png",
    description: {
      en: "Expert nail care and beauty advice tailored for your style and confidence.",
      it: "Consulenza esperta per la cura delle unghie e della bellezza, su misura per il tuo stile e la tua sicurezza.",
    },
  },
  {
    title: {
      en: "Jack of All Trades",
      it: "Tuttofare",
    },
    image: "/assets/proj3.png",
    description: {
      en: "From fixing things to creative solutions — versatile skills at your service.",
      it: "Dalle riparazioni alle soluzioni creative — competenze versatili al tuo servizio.",
    },
  },
];



const breakpoints = {
  sm: '600px', // Mobile breakpoint
  md: '768px', // Tablet breakpoint
  lg: '1024px', // Laptop breakpoint
};

// Styled components
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  

  @media (max-width: ${breakpoints.md}) {
    padding: 0.2rem;
    margin-bottom: 50px;
    flex-direction: column;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  background-color: #111827;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 1rem;
  margin-bottom: 30px;
  flex-direction: column;

  @media (max-width: ${breakpoints.md}) {
    padding: 0.2rem;
    margin-bottom: 50px;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: #2d2d2d;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  div {
    padding: 1rem;
    color: #fff;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
      color: #bbb;
    }
  }

   /* Mobile breakpoint */
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    height: auto;
    padding:0;
    
    img {
      height: 600px;
    }
    
    div {
      padding: 0.6rem;
      
      h3 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  } 
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #bbb;
`;

const Avatars = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
`;

const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

const LangBtn = styled.button`
  background: linear-gradient(to right, #7c3aed, #ec4899, #ef4444);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  border:none
`;

function Project() {

  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'en' ? 'it' : 'en'));
  };


  return (
    <Section>
      <Avatars src="/assets/moses2.png" alt="Moses Lenana" />
      <Heading>{lang === "en" ? "My Expertise" : "La Mia Esperienza"}</Heading>
      <LangBtn onClick={toggleLanguage}>
            {lang === 'en' ? "Italiano" : "English"}
      </LangBtn>
    <ProjectsContainer>
      {projects.map((proj, index) => (
        <ProjectCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={proj.image} alt={proj.title[lang]} />
          <div>
            <ProjectTitle>{proj.title[lang]}</ProjectTitle>
            <ProjectDescription>
            {proj.description[lang]}
            </ProjectDescription>
          </div>
        </ProjectCard>
      ))}
    </ProjectsContainer>
    </Section>
  );
}

export default Project;
