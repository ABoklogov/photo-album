const posts = [
  {
    id: 'gfhdryeuiw892374',
    idUser: '13h5h3h2ge',
    name: 'Лес',
    amountLikes: 123,
    image: require('assets/images/posts/post2.jpg'),
    location: {
      coords: {
        latitude: 51.660781,
        longitude: 39.200296,
      },
      title: 'Russia',
    },
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
    id: 'mkjihugytfrde4545',
    idUser: '13h5h3h2ge',
    name: 'Закат на Черном море',
    amountLikes: 24,
    image: require('assets/images/posts/post1.jpg'),
    location: {
      coords: {
        latitude: 38.899513,
        longitude: -77.036527,
      },
      title: 'USA',
    },
    comments: [],
  },
  {
    id: '7652f345675ghf',
    idUser: 'kdkdkdjfjfjhghg',
    name: 'Херня из под ногтей',
    amountLikes: 3,
    image: require('assets/images/posts/test_post.jpg'),
    location: {
      coords: null,
      title: 'LV-426',
    },
    comments: [],
  },
  {
    id: 'ytrewqgfds5432',
    idUser: '13h5h3h2ge',
    name: 'Старый домик в Венеции',
    amountLikes: 77,
    image: require('assets/images/posts/post3.jpg'),
    location: {
      coords: {
        latitude: 39.901849,
        longitude: 116.391441,
      },
      title: 'Chine',
    },
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
  {
    id: '6df67g8h9jjk5k4',
    idUser: 'qwerty123456',
    name: 'Я лечу на задание',
    amountLikes: 432,
    image: require('assets/images/posts/test_post2.jpg'),
    location: {
      coords: null,
      title: 'LV-426',
    },
    comments: [],
  },
  {
    id: '5367gfwuiklkg',
    idUser: 'qwerty123456',
    name: 'Бывший начальник',
    amountLikes: 0,
    image: require('assets/images/posts/test_post3.jpg'),
    location: {
      coords: null,
      title: 'LV-423',
    },
    comments: [{
      id: 'tttttt444444h',
      idUser: 'qwerty123456',
      text: 'Pidor))))',
      date: '11 июня, 2033',
      time: '13:14',
    },],
  },
  {
    id: 'fffff564jjjjlkg',
    idUser: 'fdfdfdf21212',
    name: 'Воюем с автоботами',
    amountLikes: 33,
    image: require('assets/images/posts/test_post4.jpeg'),
    location: {
      coords: null,
      title: 'LV-426',
    },
    comments: [
      {
        id: 'fdsfdfyty76798lk',
        idUser: 'sasweqefcd342',
        text: 'well you fucking give',
        date: '13 июня, 2033',
        time: '13:14',
      },
      {
        id: 'dsfgfgg54097m',
        idUser: 'fdfdfdf21212',
        text: 'yea, that was cool',
        date: '14 июня, 2033',
        time: '13:14',
      },
    ],
  },
];

export default posts;