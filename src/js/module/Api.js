export default function Api(link, cbSucess = undefined, cbError = undefined) {
  fetch(link)
    .then((response) => {
      if (!response.ok) throw response;
      return response.json();
    })
    .then((dados) => {
      if (!cbSucess) return console.log(dados);
      cbSucess(dados);
      return;
    })
    .catch((erro) => {
      if (!cbError) return console.log(erro);
      cbError(erro);
    });
}
