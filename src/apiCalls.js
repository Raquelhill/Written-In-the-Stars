function fetchSingleMovieData() {
  const URL = `https://aztro.sameerkumar.website/?sign=gemini&day=today`;
  fetch(URL, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((response) => checkResponse(response));
}

function checkResponse(response) {
  if (!response.ok) {
    throw new Error(
      `Status: ${response.status} StatusText: ${response.status.text}`
    );
  }
  return response.json();
}

export { fetchSingleMovieData };
