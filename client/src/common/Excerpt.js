const excerpt = (str, delimiter) => {
  delimiter = delimiter || 30;
  if (str.length > delimiter) {
    let cutted = [];
    let i = 0;
    delimiter = delimiter === 'undefined' || delimiter === null ? 25 : delimiter;
    while (i < delimiter) {
      cutted.push(str[i]);
      i++;
    }
    return cutted.join('') + '...';
  } else {
    return str;
  }
};

export default excerpt;
