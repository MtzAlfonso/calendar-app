const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;

  return method === 'GET'
    ? fetch(url)
    : fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
};

export const fetchWithToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;

  const token = localStorage.getItem('token') || '';

  return method === 'GET'
    ? fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-token': token,
        },
      })
    : fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-token': token,
        },
        body: JSON.stringify(data),
      });
};
