import { useState } from 'react';
import Tree from 'react-d3-tree';
import '../styles/dashboard.css';

// Example parse tree data
const parseTree = {
  name: 'expression',
  children: [
    { name: 'term', children: [{ name: 'factor', children: [{ name: '3' }] }] },
    { name: '+' },
    {
      name: 'term',
      children: [
        { name: 'factor', children: [{ name: '(' }] },
        {
          name: 'expression',
          children: [
            {
              name: 'term',
              children: [
                { name: 'factor', children: [{ name: '4' }] },
                { name: '*' },
                { name: 'factor', children: [{ name: '5' }] },
              ],
            },
          ],
        },
        { name: 'factor', children: [{ name: ')' }] },
      ],
    },
  ],
};

function ParseTree() {
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeClick = (nodeData) => {
    setSelectedNode(nodeData);

    console.log('Clicked node:', selectedNode);//THIS just palceholder for slecetdNode ESLint, will probably be incorrect cause react rendering
  };

  return (
    <div className='tile'>
        <h3>Grammar Tree</h3>
        <div style={{ width: '100%', height: '100vh' }}>
        <Tree
            data={parseTree}
            orientation="vertical"
            translate={{ x: 300, y: 100 }}
            onNodeClick={handleNodeClick}
        />
        </div>
    </div>
  );
}

export default ParseTree;