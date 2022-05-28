BACKEND com o NODEJS

Ferramentas usadas: TYPESCRIPT, EXPRESS, INSOMNIA(POSTMAN), TYPE ORM,

Instalando o NVM
https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/

/_
GET => BUSCAR UMA INFORMAÇÃO
POST => CRIAR/INSERIR UMA INFORMAÇÃO NA NOSSA API
PUT => ALTERAR UMA INFORMAÇÃO DE ALGUM USUÁRIO
PATCH => ALTERAR UMA INFORMAÇÃO ESPECÍFICA
DELETE => REMOVER UM DADO
_/

Tipos de Parâmetros nas requisições REST

Existem três tipos de parâmetros, dois deles comumente utilizados no método GET e um no método no POST.
// Query Params (GET) // Route Params (GET) // Body Params (POST e PUT) // Query & Route Params
✅ Query params
Recebe os dados da requisição como parâmetro na URL. Caso de uso: Filtros para fazer consultas na aplicação, pode conter um ou mais parâmetros
✅ Route params
Recebe os dados da requisição na rota. Caso de uso: Melhor maneira para buscar algo específico, deletar ou atualizar usando o identificador único. por exemplo:
// GET: https://api.github.com/users/tgmarinho // PUT: https://api.github.com/users/tgmarinho // DELETE: https://api.github.com/users/380327
Nesse exemplo acima busco, atualizo e deleto o usuário do GitHub com login: tgmarinho ou id: 380327.
As duas maneiras mudam a forma de escrever o código, veja: \*

- Query params = ?name=Thiago
- Route params = /users/1 \*
  ✅ Body Params
  Recebe os dados da requisição no corpo da requisição, em um objeto em JSON. Sempre utilizando no método POST da requisição.
  {
  "name": "Thiago", "age": 18, "email": "thiago@mail.com"
  }
  No Controller você pega a requisição para salvar os dados no banco de dados.

Um adendo
Embora o objetivo não seja explicar as diferenças entre os métodos HTTP, preciso explicar uma diferença que será visto na prática no mercado:
O método PUT também recebe Route Params informando qual recurso vai ser modificado e recebe o Body Params com os valores que serão alterados. A diferença básica, em poucas palavras, o método POST cria um novo recurso e o PUT altera um recurso existente, por isso ele recebe um Route Params primeiro para localizar o recurso no back end e altera-o com os dados enviados via Body Params.
