import { FormContainer, Input, Label } from './Form.style';
import React, { useState } from 'react';

import Button from '../../components/Button';

function Form({ onSearch }) {
  const [subreddit, setSubreddit] = useState('reactjs');

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(subreddit);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <Label>
        r /
        <Input
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={(event) => setSubreddit(event.target.value)}
        />
      </Label>

      <Button type="submit">
        Search
      </Button>
    </FormContainer>
  );
}

export default Form;
