const tweets = [
  {
    user: {
      id: 1,
      name: 'oguz',
      username: 'oguz',
    },
    text: 'Merhaba Dünya',
    stats: { like: 12, comment: 3, retweet: 5 },
  },

  {
    user: {
      id: 1,
      name: 'oguz',
      username: 'oguz',
    },
    text: 'Lorem ipsum',
    stats: { like: 7, comment: 4, retweet: 3 },
  },

  {
    user: {
      id: 1,
      name: 'oguz',
      username: 'oguz',
    },
    text: 'Ragnar was here',
    stats: { like: 0, comment: 0, retweet: 0 },
  },

  {
    user: {
      id: 1,
      name: 'oguz',
      username: 'oguz',
    },
    text: 'Deneme 1 2 3 ',
    stats: { like: 0, comment: 0, retweet: 1 },
  },
];

export async function getTweets() {
  return await tweets;
}

export async function createTweet(text) {
  const payload = {
    user: {
      id: 1,
      name: 'oguz',
      username: 'oguz',
    },
    text: text,
    stats: { like: 0, comment: 0, retweet: 0 },
  };
  console.log('-------', payload);
  return await payload;
}
