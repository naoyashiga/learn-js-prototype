export function unsafeMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (key in target && typeof target[key] === 'object' && typeof source[key] === 'object') {
        unsafeMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

export function safeMerge(target, source) {
  for (const key in source) {
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      continue;
    }
    if (source.hasOwnProperty(key)) {
      if (key in target && typeof target[key] === 'object' && typeof source[key] === 'object') {
        safeMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}
