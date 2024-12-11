const socket = io('wss://bot-node-7htf.onrender.com/');

socket.on('message', (text) => {
  // Crear elemento para el mensaje del bot
  const botMessage = document.createElement('li');
  botMessage.className = 'text-blue-500'; // Color del texto del bot
  botMessage.innerHTML = text;

  // Agregar el mensaje del bot a la lista
  const ul = document.getElementById('ul');
  ul.appendChild(botMessage);

  // Hacer scroll al final
  ul.scrollTop = ul.scrollHeight;
});

document.getElementById('enviar').onclick = () => {
  const text = document.getElementById('texto').value;
  if (!text) {
    alert('Por favor, ingresa una consulta.');
    return;
  }

  // Crear elemento para el mensaje del usuario
  const userMessage = document.createElement('li');
  userMessage.className = 'text-gray-800'; // Color del texto del usuario
  userMessage.innerHTML = text;

  // Agregar el mensaje del usuario a la lista
  const ul = document.getElementById('ul');
  ul.appendChild(userMessage);

  // Hacer scroll al final
  ul.scrollTop = ul.scrollHeight;

  // Enviar el mensaje al servidor
  socket.emit('message-api', text);

  // Limpiar el campo de texto
  document.getElementById('texto').value = '';
};
