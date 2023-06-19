const form = document.querySelector('form');
const suggestedItemsContainer = document.querySelector('#suggestedItems');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const itemName = document.querySelector('#itemName').value;
  const itemType = document.querySelector('input[name="itemType"]:checked').value;
  try {
    const response = await fetch(`/items/new?type=${itemType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemName }),
    });
    const suggestedItems = await response.json();

    suggestedItemsContainer.innerHTML = '';
    suggestedItems.forEach((item) => {
      const title = document.createElement('h3');
      title.textContent = item.title;

      const poster = document.createElement('img');
      poster.src = `https://image.tmdb.org/t/p/w200${item.poster}`;
      poster.alt = item.title;

      const itemContainer = document.createElement('div');
      itemContainer.appendChild(title);
      itemContainer.appendChild(poster);

      suggestedItemsContainer.appendChild(itemContainer);
    });
  } catch (error) {
    console.error(error);
  }
});
