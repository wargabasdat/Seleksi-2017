var monthNames = ['january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december'
];

let date = new Date();
let month = monthNames[date.getMonth()];

module.exports = month;
