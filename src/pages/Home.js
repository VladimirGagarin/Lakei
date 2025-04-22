// src/pages/Home.js
import { motion } from 'framer-motion';
import styled from 'styled-components';

const breakpoints = {
  sm: '600px', // Mobile breakpoint
  md: '768px', // Tablet breakpoint
  lg: '1024px', // Laptop breakpoint
};

const Section = styled.section`
  min-height: 100vh;
  background-color: #111827;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 1rem;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.md}) {
    padding: 0.2rem;
    margin-bottom: 70px;
  }
`;

const Card = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  background: linear-gradient(to right, #7c3aed, #ec4899, #ef4444);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;

  @media (max-width: ${breakpoints.md}) {
    padding: 1.5rem;
    width: 100%;
    border-radius: 0.1rem;
  }
`;

const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
`;

const Heading = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;

  @media (max-width: ${breakpoints.md}) {
    font-size: 1.6rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
`;

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Section>
        <Card>
          <Avatar src="/assets/moses.png" alt="Moses Lenana" />
          <Heading>Hi, I'm Moses Lenana Lakei 👋</Heading>
          <Paragraph>
            Designer | Consultant | Visionary
          </Paragraph>
          <hr style={{ margin: '1.5rem 0', borderColor: 'rgba(255,255,255,0.2)' }} />
          <Heading>Ciao, sono Moses Lenana Lakei 👋</Heading>
          <Paragraph>
            Designer | Consulente | Visionario
          </Paragraph>
        </Card>
      </Section>

    </motion.div>
  );
}

export default Home;
