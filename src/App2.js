import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log('i run all the time'); // re-render마다 불리는데 우리는 맨 처음 로딩될 때만 부르면 됨.

  // const iRunOnlyOnce = () => {
  //   console.log('i run only once');
  // };
  useEffect(() => console.log('i run only once'), []);

  useEffect(() => {
    console.log('keyword changes');
  }, [keyword]);

  useEffect(() => {
    console.log('counter changes');
  }, [counter]);

  useEffect(() => {
    console.log('keyword, counter changes');
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={'continue'} />
    </div>
  );
}

export default App;
