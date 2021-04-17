import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../common/button';
import '../../styles/hero/search.scss';

function search() {
  const [input, setInput] = useState('');
  const history = useHistory();

  const doInput = (e) => { setInput(e.target.value); };
  const doKeyPress = (e) => {
    if (e.key === 'Enter') {
      history.push(`/search query?search=${input}`);
    }
  };
  return (
    <div className="search">
      <div className="search-title">find your movie</div>
      <div className="search-input">
        <input value={input} type="text" placeholder="What do you want to watch?" onInput={doInput} onKeyPress={doKeyPress} />
        <Link to={`/search query?search=${input}`}>
          <Button cssClass="search-button" title="search" />
        </Link>
      </div>
    </div>
  );
}

export default React.memo(search);
