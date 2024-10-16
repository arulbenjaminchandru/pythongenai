"use client";
import React, { useState } from 'react';
import { Linkedin, ChevronDown, ChevronUp, ExternalLink,PlayCircle } from 'lucide-react';

interface SyllabusSectionProps {
  title: string;
  topics: string[];
}
interface DemoVideoProps {
  title: string;
  videoId: string;
}
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 font-sans">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">Python & Generative AI: 15-Day Course</h1>
        <p className="text-2xl mb-2">Instructor-led Live Classes</p>
        <p className="mb-6">Duration: 15 days (Classes can be extended based on learner's need)</p>
        <div className="mb-8">
          <span className="text-4xl font-bold line-through text-red-300 mr-4">₹50,000</span>
          <span className="text-5xl font-bold text-green-300">₹5,000</span>
        </div>
        <a 
          href="#register"
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-xl font-bold hover:bg-blue-100 transition duration-300 animate-bounce"
        >
          Register Now
        </a>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">About the Instructor</h2>
          <p className="text-xl">
            <a 
              href="https://www.linkedin.com/in/arulbenjamin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center justify-center"
            >
              Arul Benjamin <Linkedin className="inline ml-2" size={24} />
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Course Syllabus</h2>
          <div className="space-y-6">
            <SyllabusSection 
              title="Day 1-4: Python Fundamentals"
              topics={[
                "Introduction to programming and Python",
                "Overview of Google Colab and Github",
                "Basic syntax, variables, and data types",
                "Control structures (if, elif, else, while loops)",
                "Lists, tuples, sets, and dictionaries"
              ]}
            />
            <SyllabusSection 
              title="Day 5-8: Advanced Python and Project"
              topics={[
                "Functions, modules, and packages",
                "File operations and string manipulation",
                "Simple project: Creating a basic Python project",
                "Review of all Python topics covered"
              ]}
            />
            <SyllabusSection 
              title="Day 9-10: Introduction to Generative AI"
              topics={[
                "Overview of text generation tools and LLMs",
                "Introduction to ChatGPT, Gemini, and Claude",
                "Code generation and prompt engineering",
                "Practical exercises with AI tools"
              ]}
            />
            <SyllabusSection 
              title="Day 11-14: Advanced Generative AI Concepts"
              topics={[
                "Image generation and recognition",
                "Running large language models (LLMs) locally",
                "Retrieval Augmented Generation (RAG)",
                "Langchain and LlamaIndex frameworks",
                "Building question-answering systems"
              ]}
            />
            <SyllabusSection 
              title="Day 15: Building Real AI Projects"
              topics={[
                "Chat with SQL using Langchain",
                "Open Source world of AI",
                "Next steps in AI learning"
              ]}
            />
          </div>
        </section>
        {/* New Demo Videos Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Course Demo Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DemoVideo 
              title="Introduction to Python and Gen AI" 
              videoId="s2TLFp4j9Ec"
            />
            <DemoVideo 
              title="Generative AI and LLMs - Deep Dive" 
              videoId="tfuYIHOUa3w"
            />
            <DemoVideo 
              title="Introduction to Python Programming" 
              videoId="01vH9YERF6o"
            />
            <DemoVideo 
              title="Long-Context AI with 2M-Token Retrieval" 
              videoId="oRSvVde1ONQ"
            />
          </div>
        </section>
        <section id="register" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Registration</h2>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="mb-6 text-lg">Ready to embark on your Python and Generative AI journey? Click the button below to access our registration form!</p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6B7-_3x63k1aTDwNmTqBXsqzwYWJzA2ibWb-N4ZEdavoh0g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition duration-300"
            >
              Open Registration Form
              <ExternalLink className="ml-2" size={24} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
        <p>&copy; 2024 Python & Generative AI Course. All rights reserved.</p>
        <div className="mt-4">
          <a 
            href="https://www.linkedin.com/in/arulbenjamin/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline mr-4"
          >
            Instructor LinkedIn
          </a>
          <a 
            href="#" 
            className="text-blue-300 hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

const SyllabusSection : React.FC<SyllabusSectionProps> = ({ title, topics }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full p-4 text-left font-bold text-lg flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && (
        <ul className="p-4 space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-blue-500">•</span>
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const DemoVideo : React.FC<DemoVideoProps> = ({ title, videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h3 className="text-xl font-semibold p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">{title}</h3>
      <div className="relative" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
        {isPlaying ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <PlayCircle size={64} className="text-blue-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;