# Desafio de JavaScript
Utilizando os conhecimentos já adquiridos em HTML, CSS em conjunto com o 
JavaScript. Desenvolver um aplicativo que exibe a temperatura em tempo real.
Utilizem as referências!
Regras:
O layout é livre use sua criatividade!
Utilizar a fetch API do JS para consultar os dados na api de Clima da 
openweathermap(DOC da API nas referências).
- ENDPOINT a ser utilizado: 
http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=
${longitude}&appid={appKey}
- Necessário Capturar as informações de geolocalização do navegador 
do usuário.
- Para obter a appKey basta criar uma conta no site da openweathermap 
e acessar https://home.openweathermap.org/api_keys.

O que deve ser exibido:
Ícone que representa a condição climática
- A API retorna o nome do ícone, podem utilizar isso em seu favor: 
https://openweathermap.org/weather-conditions#How-to-get-icon-URL
- A temperatura em graus celsius (API devolve essa informação na resposta, mas em 
Kelvin).
- Descrição do Clima Ex: ‘light rain’ (A API também devolve essa informação na 
resposta, podem utilizar a descrição que for devolvida na íntegra).
- O aplicativo deve possuir um botão para salvar as informações do clima atual(ícone, 
temperatura, descrição) e sua  respectiva data e horário(Pode ser a data e horário no 
momento do clique no botão) . Definir qual seria o melhor local para salvar por 
exemplo: cookies ou localstorage.
- O aplicativo deve também listar essas informações salvas anteriormente. Se não 
possuir, não exibir nada.
