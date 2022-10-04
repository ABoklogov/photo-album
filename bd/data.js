const data = {
  id: '13h5h3h2ge',
  nameUser: 'Natali Romanova',
  emailUser: 'email@example.com',
  avatarUser: require('assets/images/avatars/avatar1.jpg'),
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
          idUser: 'qwerty123456',
          text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
          date: '09 июня, 2020',
          time: '08:40',
        },
        {
          id: 'dk348nfgeri',
          idUser: '13h5h3h2ge',
          text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
          date: '09 июня, 2020',
          time: '09:14',
        },
        {
          id: 'flwp489fhui',
          idUser: 'sasweqefcd342',
          text: 'Thank you! That was very helpful!',
          date: '09 июня, 2020',
          time: '09:20',
        },
        {
          id: 'ngaklirnerg734',
          idUser: 'pppppp4444p4p4',
          text: 'Thank you!',
          date: '44 июня, 2020',
          time: '44:20',
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
          idUser: 'fdfdfdf21212',
          text: 'Cool)))',
          date: '11 июня, 2021',
          time: '03:40',
        },
        {
          id: '423234gdflhn',
          idUser: '13h5h3h2ge',
          text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
          date: '11 июня, 2024',
          time: '13:14',
        },
        {
          id: 'ksjfkk9342jfk',
          idUser: 'kdkdkdjfjfjhghg',
          text: 'Fuck you!!!',
          date: '11 июня, 2021',
          time: '03:40',
        },
        {
          id: 'vbnmklkghff5',
          idUser: 'sasweqefcd342',
          text: 'Pidor...........))) Cool!!!',
          date: '07 июня, 2021',
          time: '03:43',
        },
        {
          id: 'cftgbhuy54',
          idUser: '13h5h3h2ge',
          text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images. Fuck you all you fucking bastards',
          date: '15 июня, 2027',
          time: '13:14',
        },
        {
          id: '5423hfgdopui',
          idUser: 'kdkdkdjfjfjhghg',
          text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
          date: '11 июня, 2029',
          time: '13:14',
        },
      ]
    },
  ]
};

export default data;