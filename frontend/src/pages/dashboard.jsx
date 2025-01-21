import '../styles/dashboard.css';
import { useState } from 'react';
import PromptInput from '../components/promptInput';
import ModelMenu from '../components/modelMenu';
import ModelOutputs from '../components/ModelOutputs';
import OutputStats from '../components/OutputStats';
import GrammarTree from '../components/GrammarTree';

const Dashboard = () => {
  const [outputValue, setOutputValue] = useState(''); // State for output value
  const [stats, setStats] = useState({}); // State for output stats

  const handleGenerate = () => {
    const inputValue = 'Hermione Granger is a character in Harry Potter. Please fill in the following information about this character in JSON format. Name is a string of character name. House is one of Gryffindor, Hufflepuff, Ravenclaw, Slytherin. Blood status is one of Pure-blood, Half-blood, Muggle-born. Occupation is one of Student, Professor, Ministry of Magic, Other. Wand is an object with wood, core, and length. Alive is a boolean. Patronus is a string.'; // Replace with actual input value
    // Simulate generating output (replace with actual logic)
    const generatedOutput = `Generated output for: ${inputValue}`;
    setOutputValue(generatedOutput); // Update the output value
    const generatedStats = {
        DECODER: 'LOGPROB "[-0.48539823]"',
        SEQLOGPROB: '-1.11827393',
        POOL: 'null',
        PROMPT: '"It\'s the last day of June so today is "',
        INTERPRETER: 'VARIABLE "RESPONSE"',
        VALID: '■ var(true) ⊙',
        MASK: '"{eos}"',
        RESPONSE: 'inc("30/06")',
        CONSTRAINTS: '<img1.ops.ops.RegexOp object at 0x11e171ab0>',
      };
    setStats(generatedStats); // Update the stats
  };

  return (
    <div className="dashboard-container">
      <h1>CDTool</h1>
      <div className="columns-container">
        {/* Left Column: PromptInput and ModelOutputs */}
        <div className="left-column">
          <PromptInput onGenerate={handleGenerate} />
          <ModelOutputs outputValue={outputValue} />
          <GrammarTree/>
        </div>

        {/* Right Column: ModelMenu */}
        <div className="right-column">
          <ModelMenu
            prompt="Select a grammar"
            modelOptions={['Llama-3.2', 'Qwen-2.5', 'Phi-3-Mini']}
            libraryOptions={['Guidance', 'XGrammar', 'Outlines']}
            grammarOptions={['JSON', 'SQL', 'Python', 'Custom']}
          />
          <OutputStats stats={stats} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;