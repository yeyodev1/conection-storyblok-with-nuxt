import StoryblokClient from 'storyblok-js-client';

const baseURL = ''

const Storyblok = new StoryblokClient({
  accessToken: 'JQtGnDO7nT8lhDiCdxHzGwtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  },
  endpoint: baseURL
});

export default Storyblok;