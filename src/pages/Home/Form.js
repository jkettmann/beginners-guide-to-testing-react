import React, { useState } from 'react';
import Button from '../../components/Button';
import { FormContainer, Label, Input } from './Form.style';

function Form({ onSearch }) {
  const [subreddit, setSubreddit] = useState('javascript');

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
