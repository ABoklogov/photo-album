const data = {
  nameUser: 'Natali Romanova',
  emailUser: 'email@example.com',
  userAvatar: require('assets/images/avatars/avatar1.jpg'),
  defaultAvatar: require('assets/images/avatars/default-avatar.jpg'),
  posts: [
    {
      id: 111,
      name: 'Лес',
      amountLikes: 123,
      image: require('assets/images/posts/post2.jpg'),
      location: 'Russia',
      comments: [
        {
          id: 'm4kto34o5nm',
          isMaster: false,
          text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
          date: '09 июня, 2020',
          time: '08:40',
        },
        {
          id: 'dk348nfgeri',
          isMaster: true,
          text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
          date: '09 июня, 2020',
          time: '09:14',
        },
        {
          id: 'flwp489fhui',
          isMaster: false,
          text: 'Thank you! That was very helpful!',
          date: '09 июня, 2020',
          time: '09:20',
        },
      ],
    },
    {
      id: 222,
      name: 'Закат на Черном море',
      amountLikes: 24,
      image: require('assets/images/posts/post1.jpg'),
      location: 'USA',
      comments: [],
    },
    {
      id: 333,
      name: 'Старый домик в Венеции',
      amountLikes: 77,
      image: require('assets/images/posts/post3.jpg'),
      location: 'Chine',
      comments: [
        {
          id: '333gfdgf44',
          isMaster: false,
          text: 'Комментарий 1111....',
          date: '11 июня, 2021',
          time: '03:40',
        },
        {
          id: 'ksjfkk9342jfk',
          isMaster: true,
          text: 'Комментарий 5656....',
          date: '11 июня, 2021',
          time: '03:40',
        },
      ]
    },
  ]
};

export default data;