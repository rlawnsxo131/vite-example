import { useEffect, useState } from 'react';

export default function Page1() {
  const [state, setState] = useState(false);

  useEffect(() => {
    // if (state) return;
    console.log('state is:', state);

    return () => {
      console.log('clean up state is:', state);
    };
  }, [state]);

  return (
    <div>
      page1
      <button onClick={() => setState((prev) => !prev)}>click</button>
    </div>
  );
}
