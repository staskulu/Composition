'use strict';

const pipe = (...fns) => x => {
  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== 'function') {
      throw Error('It is not function');
    }
  }

  let res = x;
  for (let i = 0; i < fns.length; i++) {
    res = fns[i](res);
  }
  return res;
};

module.exports = { pipe };
