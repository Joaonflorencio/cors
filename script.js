async function searchCharacter() {
    const name = document.getElementById('characterName').value;
    try {
      const response = await fetch(`http://localhost:3000/characters/${name}`);
      const data = await response.json();
      document.getElementById('characterInfo').innerHTML = `
        <p>Nombre: ${data.results[0].name}</p>
        <p>Estado: ${data.results[0].status}</p>
        <p>Especie: ${data.results[0].species}</p>
        <p>Género: ${data.results[0].gender}</p>
        <p>Origen: ${data.results[0].origin.name}</p>
        <img src="${data.results[0].image}" alt="Imagen de ${data.results[0].name}">
      `;
    } catch (error) {
      document.getElementById('characterInfo').innerHTML = 'Personaje no encontrado';
    }
  }