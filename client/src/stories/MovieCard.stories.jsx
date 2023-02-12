import React from 'react';

import { MovieCard } from '../components';
import { movies } from './stub'

export default {
  title: 'Card/MovieCard',
  component: MovieCard,
};

const Template = (args) => <MovieCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  movie: movies[0]
};
