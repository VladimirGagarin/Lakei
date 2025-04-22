import { useState , useRef} from "react";
import  {motion} from "framer-motion"
import styled from 'styled-components';
import { FaPlay, FaPause } from "react-icons/fa";

const traits = [
    "intelligence",
    "hardworking",
    "creative",
    "honest",
    "motivational",
    "empathetic",
    "resilient",
    "visionaryTrait"
];

const translations = {
    header: {
      en: "Meet the Visionary: Moses Lenana Lakei",
      it: "Incontra il Visionario: Mosè Lenana Lakei",
    },
    intelligence: {
      en: "Moses has a sharp mind, capable of understanding complex ideas and solving problems with clarity and speed.",
      it: "Mosè ha una mente acuta, capace di comprendere idee complesse e risolvere problemi con chiarezza e rapidità.",
      enAudio: "./assets/enIntel.mp3",
      itAudio: "./assets/itIntel.mp3"
    },
    hardworking: {
      en: "Known for his strong work ethic, Moses dedicates himself to excellence and never shies away from a challenge.",
      it: "Conosciuto per la sua forte etica del lavoro, Mosè si dedica all’eccellenza e non si tira mai indietro davanti a una sfida.",
      enAudio: "./assets/enHw.mp3",
      itAudio: "./assets/itHw.mp3"
    },
    creative: {
      en: "From visual design to innovation, his creativity allows him to express unique solutions and artistic visions.",
      it: "Dal design visivo all’innovazione, la sua creatività gli consente di esprimere soluzioni uniche e visioni artistiche.",
      enAudio: "./assets/enCr.mp3",
      itAudio: "./assets/itCr.mp3"
    },
    honest: {
      en: "Integrity defines him. Moses speaks the truth, acts transparently, and builds trust wherever he goes.",
      it: "L'integrità lo definisce. Mosè dice la verità, agisce con trasparenza e costruisce fiducia ovunque vada.",
      enAudio: "./assets/enHon.mp3",
      itAudio: "./assets/itHon.mp3"
    },
    motivational: {
      en: "A natural motivator, Moses inspires others to rise above their limits and believe in their potential.",
      it: "Un motivatore naturale, Mosè ispira gli altri a superare i propri limiti e a credere nel proprio potenziale.",
      enAudio: "./assets/enMotiv.mp3",
      itAudio: "./assets/itMotiv.mp3"
    },
    empathetic: {
      en: "Moses deeply understands others’ emotions and perspectives, making him a compassionate and supportive presence.",
      it: "Mosè comprende profondamente le emozioni e le prospettive degli altri, rendendolo una presenza compassionevole e di supporto.",
      enAudio: "./assets/enEmp.mp3",
      itAudio:  "./assets/itEmp.mp3"
    },
    resilient: {
      en: "In the face of adversity, Moses stands strong. His resilience keeps him moving forward with courage and hope.",
      it: "Di fronte alle avversità, Mosè rimane forte. La sua resilienza lo spinge avanti con coraggio e speranza.",
      enAudio: "./assets/enRes.mp3",
      itAudio: "./assets/itRes.mp3"
    },
    visionaryTrait: {
      en: "More than a dreamer, Moses envisions the future and takes steps to shape it with purpose and direction.",
      it: "Più che un sognatore, Mosè immagina il futuro e prende iniziative per plasmarlo con scopo e direzione.",
      enAudio: "./assets/enVis.mp3",
      itAudio: "./assets/itVis.mp3"
    },      
    toggle: {
      en: "Italiano",
      it: "English",
    }
  };

  const headerstitles = {
    intelligence: {
      en: "Intelligence",
      it: "Intelligenza"
    },
    hardworking: {
      en: "Hardworking",
      it: "Diligente"
    },
    creative: {
      en: "Creative",
      it: "Creativo"
    },
    honest: {
      en: "Honest",
      it: "Onesto"
    },
    motivational: {
      en: "Motivational",
      it: "Motivazionale"
    },
    empathetic: {
      en: "Empathetic",
      it: "Empatico"
    },
    resilient: {
      en: "Resilient",
      it: "Resiliente"
    },
    visionaryTrait: {
      en: "Visionary",
      it: "Visionario"
    }
  };
  

  const avatars = {
    intelligence: "./assets/avatars/intelligence.png",
    hardworking: "./assets/avatars/hardworking.png",
    creative: "./assets/avatars/creative.png",
    honest: "./assets/avatars/honest.png",
    motivational: "./assets/avatars/motivational.png",
    empathetic: "./assets/avatars/empathetic.png",
    resilient: "./assets/avatars/resilient.png",
    visionaryTrait: "./assets/avatars/visionaryTrait.png"
  };

  const icons = {
    intelligence: "💡",
    hardworking: "⚒️",
    creative: "🎨",
    honest: "🤝",
    motivational: "🔥",
    empathetic: "💞",
    resilient: "🛡️",
    visionaryTrait: "🌠"
  };


  function About (){

    const [lang, setLang] = useState("en");
    const [playingTrait, setPlayingTrait] = useState(null);
    const audioRef = useRef(new Audio());
  
    const playAudio = (trait) => {
      const currentAudio = audioRef.current;
  
      // If the same trait is playing, pause it
      if (playingTrait === trait) {
        currentAudio.pause();
        setPlayingTrait(null);
        return;
      }
  
      // Pause current audio if another is playing
      currentAudio.pause();
      const newAudio = new Audio(translations[trait][`${lang}Audio`]);
      audioRef.current = newAudio;
  
      newAudio.play();
      setPlayingTrait(trait);
  
      // When audio ends, reset playingTrait
      newAudio.onended = () => {
        setPlayingTrait(null);
      };
    };

    const breakpoints = {
      sm: '600px', // Mobile breakpoint
      md: '768px', // Tablet breakpoint
      lg: '1024px', // Laptop breakpoint
    };

    const Section = styled.section`
      min-height: 100vh;
      background-color: #111827;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      padding: 2rem;
      margin-bottom:40px;

      @media (max-width: ${breakpoints.md}) {
        padding: 0.2rem;
        margin-bottom: 70px;
      }
    `;

    const CirledLove = styled.div`
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      color: red;
      font-size: 1.25rem;
    `;

    const Heading = styled.h2`
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;

      @media (max-width: ${breakpoints.md}) {
        font-size: 1.8rem;
      }
    `;

    const Card = styled.div`
      margin-bottom: 2rem;
      text-align: center;
    `;

    const Container = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      width: 100%;
    `;

    const TraitCard = styled.div`
      background-color: #1f2937;
      padding: 1rem;
      border-radius: 0.75rem;
      box-shadow: 0 0 10px rgba(94, 234, 212, 0.2);
      position: relative;
      transition: box-shadow 0.3s ease;
      display:flex;
      align-items:center;
      flex-direction: column;
      justify-content:center;

      &:hover {
        box-shadow: 
          0 0 20px rgba(124, 58, 237, 0.5), 
          0 0 25px rgba(236, 72, 153, 0.5),
          0 0 30px rgba(239, 68, 68, 0.5);
      }

      
       &.Playing {
        box-shadow: 0 0 20px rgba( #7c3aed, #ec4899, #ef4444, 0.5);
        box-shadow: 
          0 0 20px rgba(89, 12, 221, 0.9), 
          0 0 25px rgba(140, 49, 95, 0.9),
          0 0 30px rgba(239, 68, 68, 0.9);
      }
    `;

    const Title = styled.h3`
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `;

    const Avatar = styled.img`
      width: 150px;
      height: 150px;
      border-radius: 10%;
      border: 2px solid white;
      margin: 0 auto 1rem;
    `;

    const Paragraph = styled.p`
      color: #d1d5db;
      font-size: 0.875rem;
      margin-bottom: 2rem;
    `;

    const Btns = styled.button`
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
      font-size: 1.25rem;
      color: #2dd4bf;
      background: none;
      border: none;
      cursor: pointer;

      &:hover {
        color: #99f6e4;
      }
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

    const Avatars = styled.img`
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 1rem;
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
    `;

    


    return (
        <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
        >
        <Section>
          <Card>
            <Avatars src="/assets/moses1.png" alt="Moses Lenana" />
            <Heading>{translations.header[lang]}</Heading>
            <LangBtn
              onClick={() => setLang(lang === "en" ? "it" : "en")}
              
            >
              {translations.toggle[lang]}
            </LangBtn>
          </Card>
    
          <Container>
            {traits.map((trait) => (
              <TraitCard 
                key={trait}
                className={playingTrait === trait ? 'Playing' : ''}
              >
                {/* Love Icon */}
                <CirledLove>❤️</CirledLove>
    
                {/* Title */}
                <Title>
                  <span>{icons[trait]}</span>
                  {headerstitles[trait][lang]}
                </Title>
    
                {/* Avatar */}
                <Avatar
                  src={avatars[trait]}
                  alt={trait}
                  onClick={() => playAudio(trait)}
                />
    
                {/* Description */}
                <Paragraph>
                  {translations[trait][lang]}
                </Paragraph>
    
                {/* Play Icon */}
                <Btns
                  onClick={(e) => playAudio(trait)}
                  title={playingTrait === trait ? "Pause" : "Play"}
                >
                  {playingTrait === trait ? <FaPause /> : <FaPlay />}
                </Btns>
              </TraitCard>
            ))}
          </Container>
        </Section>
        </motion.div>
    );
  }

  export default About;
