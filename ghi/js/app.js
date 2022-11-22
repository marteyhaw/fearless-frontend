function createCard(name, description, pictureUrl, starts, ends) {
  return `
      <div class="card shadow p-0 mb-4 bg-white rounded">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
        </div>
        <div class="card-footer text-muted">
            ${starts} - ${ends}
          </div>
      </div>
    `;
}

window.addEventListener("DOMContentLoaded", async () => {
  const url = "http://localhost:8000/api/conferences/";

  try {
    const response = await fetch(url);

    if (!response.ok) {
    } else {
      const data = await response.json();
      let i = 0;
      for (let conference of data.conferences) {
        const detailUrl = `http://localhost:8000${conference.href}`;
        const detailResponse = await fetch(detailUrl);
        if (detailResponse.ok) {
          const details = await detailResponse.json();
          const name = details.conference.name;
          const description = details.conference.description;
          const pictureUrl = details.conference.location.picture_url;
          const starts = new Date(details.conference.starts);
          const ends = new Date(details.conference.ends);
          const html = createCard(name, description, pictureUrl, starts.toLocaleDateString('en-US'), ends.toLocaleDateString('en-US'));
          if (i == 3) {
            i = 0;
          }
          const column = document.querySelectorAll(".col-sm")[i];
          column.innerHTML += html;
          i += 1;
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
});
