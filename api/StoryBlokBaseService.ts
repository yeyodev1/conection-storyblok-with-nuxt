import StoryblokClient from 'storyblok-js-client';

const baseURL = ''

const Storyblok = new StoryblokClient({
  accessToken: 'KVO24tCvt4jCNJwlENx48wtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  },
  endpoint: baseURL
});

export default Storyblok;