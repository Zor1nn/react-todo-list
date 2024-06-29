
- Criar as duas aulas simples
- Iniciar a réplica da live seguindo o workflow do vídeo de e commerce

### Instalando o React

A instalação será realizada para o VSCode: [Link](https://www.youtube.com/watch?v=Jg6JaEjovJk&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=3). Para realizá-la, você precisa inicialmemente do Node.js. Ao instala-lo, você deve conferir se funcionou utilizando os comandos `node -v` e `npm -v`retornando uma resposta das versões. Caso o npm não esteja com permissão pra executar, será necessário trocar a política de permissões utilizando o PowerShell como admnistrador, rodando o seguinte comando ```
```
set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Com isso, basta executar o comando `npx create-vite .` para criar o projeto na própria pasta, ou não utiliza o ponto e da um nome pra pasta que será criado o projeto, selecionando as dependências dele. Com isso deve-se acessar a pasta caso tenha sido criada e rodar o comando `npm install` para instalar todas as dependências selecionadas, executando o comando `npm run dev` para rodar o servidor de desenvolvimento. Se der ruim em algum desses comandos, como sempre, utilize o comando `npm install -g npm` para atualizar que o npm crie uma pasta no AppData.

Comandos importantes:
- `npm start` : Inicia o server de desenvolvimento
- `npm run build` : Transforma o app em arquivo estático para produção
- `npm test` : Roda os testes
- `npm run ejct` : Comando avançado pra fazer alguma coisa

Quando instalado, o react cria diversas pastas e arquivos, sendo eles:
- README : Com os comandos supracitados e mais docs
- Pacotes Json : Depêndencias pro react rodar
- gitignore : Para excluir alguns arquivos quando for dar merge
- node_module: Pasta com toda a estrutura do react, que é ignorada no git pois ela é descartável, sendo necessário dar um npm start toda vez que iniciarmos em outra máquina.
- public: todos os arquivos do projeto, tendo o index.html como o arquivo base do navegador.
- src: Onde criamos as modificações e alteramos as coisas, sendo o index.js o arquivo responsável pelo boot strap, importando o componente App.jsx e inserindo na div root do index.html. Aqui também temos o index.css para gerar todas as imagens e vídeos da aplicação.

Diante dessa organização, fica claro que os recursos que aparecerão na página são os programados dentro do App.js. Sendo assim, tudo o que tiver dentro da div app será a nossa aplicação final.

### Primeiros Passos

1. Limpe o index.css
2. Remova os imports do App.jsx, exceto o do App.css
3. Remova tudo o cordo do App.jsx, deixando somente a função e o return.
4. Insira uma div.App para fazer as modificações do arquivo
5. Limpe o App.css

### Git

#### Comandos Básicos e Inicialização

1. Acesse a página web do git e crie um novo repositório
2. Com o novo repo, inicialize o git : `git init`
3. Após isso, adicione os arquivos do repo local: `git add *`
4. Com eles adicionados, hora de dar commmit: `git commit -m "<mensagem>"`
5. Com o commit, crie a branch com:`git branch -M main`
6. Conecte-se ao repo global:`git remote add origin <URL>`
7. Por fim, basta empurrar o código local com o comando:`git push -u origin main` isso é só pra primeira, nas demais, podemos utilizar o git push somente.
8. Se tiver algo no repo que não está no seu, basta realizar `git pull`
9. Para transitar entre as branches, utilizamos:`git checkout <nome_branch from 'origin'`

#### Workflow de Trabalho

O Workflow para trabalhar com o git consiste em deixar a main somente como a versão de implantação do código no repo global.
Por conta disso, criamos uma nova branch de desenvolvimento, espelhada da main, para abrigar o código que ainda está sendo construído.
Além disso, para cada funcionalidade do código, criamos um novo repo com o nome dessa funcionalidade, assim, ela espelha o desenvolvimento, consequentemente espelhando tudo o que tem na main.
Dessa forma, quando a funcionalidade terminar de ser implementada, mergeamos para o desenvolvimento. Após realizar todas as funcionalidades planejadas e validar que está tudo certo, damos um merge para a main.

Dessa forma, ao finalizar a funcioanlidade, executamos:
1. `git add *`
2. `git commit -m "<mensagem>"`
3. `git push`
4. Acesse o repositório no github e clique no botão de pull request.
5. Com ele aberto, seleciona a branch que vai receber o merge, que nesse caso será a desenvolvimento.
6. Com o merge realizado, atualizamos o repo local utilizando `git checkout desenvolvimento` e logo na sequência `git pull`


### Criando projeto em Next.js

1. Conferir se o npm está instalado
2. Executar o comando `npx create-next-app <nome pasta>`