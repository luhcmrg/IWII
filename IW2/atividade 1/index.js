function calculateTotalHours() {
  const name = document.getElementById('name').value;
  const hoursPerClass = parseFloat(document.getElementById('hoursPerClass').value);
  const classesPerWeek = parseFloat(document.getElementById('classesPerWeek').value);

  if (isNaN(hoursPerClass) || isNaN(classesPerWeek)) {
      alert('Por favor, insira valores válidos.')
  }
  const totalHours = hoursPerClass * classesPerWeek;
  document.getElementById('result').innerText = `O professor ${name} dá um total de ${totalHours.toFixed(2)} horas de aula por semana.`;
}
