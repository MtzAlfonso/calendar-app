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
