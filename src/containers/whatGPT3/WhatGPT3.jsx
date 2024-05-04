import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3, is a state-of-the-art language generation model developed by OpenAI. It's the third iteration in the series of transformer-based models, each aiming to push the boundaries of natural language understanding and generation. GPT-3 stands out for its massive scale, boasting 175 billion parameters, which enables it to generate remarkably human-like text across a wide range of tasks, from language translation and summarization to creative writing and code generation." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbots are computer programs designed to simulate conversation with human users, typically through text-based interfaces such as messaging platforms or websites. They use natural language processing (NLP) and artificial intelligence (AI) techniques to understand user input and generate appropriate responses." />
      <Feature title="Knowledgebase" text="A knowledgebaseis a type of artificial intelligence system that leverages structured knowledge representations to facilitate reasoning, decision-making, and problem-solving tasks. Unlike traditional AI systems that rely solely on statistical patterns or machine learning algorithms, knowledgebase AIs encode information in a structured format that allows for more sophisticated reasoning and inference." />
      <Feature title="Education" text="Through personalized learning platforms, AI tailors educational content to individual student needs, catering to diverse learning styles and abilities. Intelligent tutoring systems leverage AI algorithms to provide interactive guidance and feedback, simulating one-on-one tutoring experiences at scale. Additionally, automated assessment and grading systems streamline administrative tasks for educators, allowing for timely feedback and more efficient resource allocation." />
    </div>
  </div>
);

export default WhatGPT3;
