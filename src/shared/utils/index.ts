export const objectToParametrs = (obj: any) => {
  if (JSON.stringify(obj) === '{}' || obj === null || Array.isArray(obj) || obj === undefined) {
    return '';
  } else {
    let query = '?';
    for (const [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          query += String(key) + '[]=' + String(item) + '&';
        });
      } else {
        query += String(key) + '=' + String(value) + '&';
      }
    }
    return query.slice(0, -1);
  }
};
