import "./Project.scss";

import Button from "../Button/Button";


const projectData = {
  one: {
    name: "Transformer Health Prediction",
    imageUrl: "/images/intution.webp",
    externalLink: "https://github.com/Rudraprosad/Transformer-Health-prediction-AI",
    content: [
      {
        header: "About the Project",
        paragraphs: [
          "Models: Random Forest, XGBoost, AdaBoost, LightGBM",
          "Ensemble: Weighted Soft Voting and Stacking with Logistic Regression meta-learner",
          "Preprocessing: StandardScaler, Label Encoding, Median Imputation, SMOTE",
          "Evaluation: Accuracy, Classification Report, Prediction Confidence"
        ],
      },
    ],
  },
  two: {
    name: "nexora",
    imageUrl: "/images/develop-plan.webp",
    externalLink: "https://github.com/Rudraprosad/cloudPoint-",
    content: [
      {
        header: "About the Project",
        paragraphs: [
          "built a full-stack social platform using Next.js 16 with the experimental React Compiler, React 19, RTK createAsyncThunk for state, Express 5, MongoDB Atlas, with features like social connection graphs, media uploads via Multer, and dynamic PDF resume generation via PDFKit",
          "reactCompiler: true, This is an experimental Meta compiler that automatically memoizes component tree. And used Redux for state management",
          "Using PDFKit + Node.js streams + crypto, Nexora generates unique resume PDFs dynamically from DB data — this is a real, non-trivial feature most portfolio apps don't have",
        ],
      },
    ],
  },
  three: {
    name: "wired",
    imageUrl: "/images/multiplayer-game.webp",
    externalLink: "https://github.com/Rudraprosad/DBMS-based-Health-care-portal-using-Mysql",
    content: [
      {
        header: "About the Project",
        paragraphs: [
          "built a full-stack video conferencing platform similar to Zoom — without any third-party video SDK. I implemented WebRTC peer-to-peer connections manually, including the ICE/SDP signaling pipeline, STUN/TURN relay configuration, and dynamic stream renegotiation. The backend uses Socket.IO on Express 5 to relay signals and persist chat history, with MongoDB for user auth and meeting history. I use bcrypt for password security and Node's crypto module for token generation. Both the frontend and backend are on the absolute latest versions — React 19, Vite 8, Express 5, and MUI 9",
        ],
      },
      {
        header: "Tech featured in project",
        paragraphs: [
          " 🎥 Raw WebRTC Implementation (No SDK — Pure Browser API)", 
          " - RTCPeerConnection — creates peer-to-peer mesh connections between all participants", 
          " - ICE (Interactive Connectivity Establishment) — handles NAT traversal so users behind different networks can connect", 
          " - SDP (Session Description Protocol) — offer/answer exchange for codec negotiation",
          " - STUN + TURN servers — configured with fallback relay servers (metered.ca) across UDP/TCP and TLS ports",
          " - When a user disables their camera/mic, instead of dropping the stream (which breaks the peer connection), the app substitutes a blank canvas video + silent audio oscillator. This keeps the WebRTC connection alive. This is the same pattern used by production video conferencing tools",
          " - Replaces the local stream in all peer connections simultaneously, Re-negotiates offers with every connected peer, On screen share end — automatically falls back to camera stream via getUserMedia()"
        ],
      },
    ],
  },
  four: {
    name: "chatbot",
    imageUrl: "/images/immersive-world.webp",
    externalLink: "https://github.com/Rudraprosad/Mine-Crafted-Portfolio",
    content: [
      {
        header: "About the Project",
        paragraphs: [
          "built a full-stack AI chat application from scratch — a ChatGPT clone — using React 19 with Vite 8 on the frontend, and Express 5 (the brand-new major release) with MongoDB on the backend. The AI layer is provider-agnostic: it targets the Groq inference API using an OpenAI-compatible protocol, meaning I can switch between GPT-4, Llama, or any other model just by changing an environment variable. Each conversation is persisted as a threaded document in MongoDB with full CRUD — create, read, delete — sorted by activity. On the UI side, I implemented a character-by-character typewriter animation to replicate the streaming feel of ChatGPT, and all AI responses are rendered as rich Markdown with syntax-highlighted code blocks",
        ],
      },
      {
        header: "Tech featured in project",
        paragraphs: [
          " The app uses the Groq API with an OpenAI-compatible interface but models it with the OpenAI SDK, it can swap between providers (OpenAI, Groq, Ollama) by just changing the base URL and API key. This is vendor-agnostic AI integration exactly what senior engineers design", 
          " - Each conversation is a Thread document with embedded Message sub-documents", 
          " - Threads have unique IDs (UUID v1 — time-based, for ordering), title auto-generated from first message, createdAt/updatedAt timestamps", 
          " - CRUD operations: Create, Read (all threads + specific thread), Delete — full lifecycle management",
          " - Sorted by updatedAt: -1 — most recently active conversations surface first, just like ChatGPT",
          " - the AI reply is animated using setInterval at 20ms intervals, building the response string character-by-character. This is the same streaming-style UX that makes ChatGPT feel alive — implemented cleanly with React state + cleanup via clearInterval",
          " - AI responses are rendered via ReactMarkdown + rehype-highlight + highlight.js github-dark theme — code blocks are syntax-highlighted automatically, making responses look professional"
        ],
      },
    ],
  },
};

const Project = ({ projectID }) => {
  const project = projectData[projectID];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="project-image"
        />
      </div>

      <Button href={project.externalLink} type={"link"}>
        github repo
      </Button>

      {project.content.map((section, index) => (
        <div key={index} className="project-section">
          <h2 className="project-section-header">{section.header}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${index}-${pIndex}`} className="section-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

    
    </div>
  );
};

export default Project;