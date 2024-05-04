import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Massive Scale',
    text: 'GPT-3 boasts an unprecedented scale with 175 billion parameters, allowing it to comprehend and generate human-like text across a wide range of topics and styles.',
  },
  {
    title: 'Contextual Understanding',
    text: 'With its transformer architecture and attention mechanisms, GPT-3 demonstrates an advanced understanding of context within text, enabling it to generate coherent and contextually relevant responses.',
  },
  {
    title: 'Versatility',
    text: 'It can perform a multitude of natural language processing tasks, including text completion, text generation, translation, summarization, and more, making it a versatile tool for various applications.',
  },
  {
    title: 'Continual Improvement',
    text: 'GPT-3 represents a milestone in natural language processing, but ongoing research and development aim to enhance its capabilities further, promising even more powerful and refined iterations in the future.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
