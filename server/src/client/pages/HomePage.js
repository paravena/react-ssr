import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>I'm the home good component</div>
      <button onClick={() => console.log('Hi There!')}>Press Me</button>
    </div>
  );
}

export default {
  component: HomePage
};
