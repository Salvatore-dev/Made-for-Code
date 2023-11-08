import { memo } from 'react';

function Hello({ value }) {
  console.log('ciao ' + value);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default memo(Hello);
