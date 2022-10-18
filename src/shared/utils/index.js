export const objectToParametrs = (obj) => {
  if (JSON.stringify(obj) === '{}' || obj === null || Array.isArray(obj) || obj === undefined) {
    return '';
  } else {
    let query = '?';
    for (const [key, value] of Object.entries(obj)) {
      query += String(key) + '=' + String(value) + '&';
    }
    return query.slice(0, -1);
  }
};
