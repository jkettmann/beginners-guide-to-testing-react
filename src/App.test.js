import { render, screen } from '@testing-library/react';

import App from './App';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import fetchMock from 'jest-fetch-mock';
import mockResponse from './__mocks__/subreddit-reactjs-response.json';
import userEvent from '@testing-library/user-event';

fetchMock.enableMocks();

function setup() {
  return render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
    );
}

describe('Header', () => {
  test('"How it works" link points to the correct page', () => {
      setup();

      const link = screen.getByRole('link', { name: /how it works/i });
      userEvent.click(link);

      expect(
        screen.getByRole('heading', { name: /how it works/i })
      ).toBeInTheDocument();
  })
})

describe('Logo', () => {
  test('"reddit timer" logo redirects to home page', () => {
    setup();
    
    const link = screen.getByRole('link', { name: /logo/i });
    userEvent.click(link);

    expect(
      screen.getByRole('heading', { name: /Find the top posts on Reddit/i })
    ).toBeInTheDocument();
  })
})

describe('Subreddit form', () => {
  test('loads posts and renders the on the page', async() => {
    fetch.once(JSON.stringify(mockResponse));
    setup();
    const subredditInput = screen.getByLabelText('r /');
    userEvent.type(subredditInput, 'reactjs');

    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);
    
    expect(screen.getByText(/is loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/number of top posts:/i)).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/reactjs/top.json');
  })
})
