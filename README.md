<div align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/88779658/200624000-b7186d4d-01ce-4eab-ab19-fd32bed18381.svg"/></br>
</div>

# :iphone: MyContacts

É um projeto front-end e back-end do curso JStack do instrutor @MateusSilva. Este projeto consiste em criação, edição e deleção de contatos e seleção de 
suas categorias, utilizando os padrões API Restfull e Repository Pattern.

<div align="center" >
  <img width="900px" src="https://user-images.githubusercontent.com/88779658/200625395-ba31a122-b711-4011-9421-118f5c62bf4a.png" />
</div>

## :computer: Linguagens
<div>
  <div align="start">
    <img src="https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=Node.js" />
    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express" />
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
    <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" />
    <img src="https://img.shields.io/badge/Docker-black?style=for-the-badge&logo=docker" />
  </div>
  
  <div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
    <img src="https://img.shields.io/badge/Create React App-09d3ac?style=for-the-badge&logo=create-react-app&logoColor=white" />
  </div>
  
  <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
</div>

## :dart: Para Utilizar
Você pode fazer o git clone para clonar o repo em sua máquina.</br>
```bash
git clone https://github.com/JuniorCundari/jstack-mycontacts.git
```
<br />
Lembre-se de baixar/atualizar as dependências do projeto com:

```bash
npm i
```

ou

```bash
yarn
```
</br>

>**Use a versão do Node.js <= 16.15.1**

</br>

---
Lembrando que este projeto foi criado usando [Docker](https://www.docker.com/) com banco de dados [Postgress](https://www.postgresql.org/).</br>
Aconselho você consultar a documentação de ambos.

Depois de instalar o Docker e o Postgress, é preciso criar uma imagem do container docker:
```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

e em seguida:
```bash
docker start pg
```

Depois de instalar o Docker e criar o container, você precisa conectar com o banco de dados Postgres.
```bash
docker exec -it pg bash # esse comando irá executar o container de forma interativa
```
Dentro da bash vamos logar o Postgres:
```bash
psql -U root
```

Próximo passo criar:
```bash
CREATE DATABASE mycontacts;
```

E agora conectar o banco de dados:
```bash
\c mycontacts
```

Depois de conectar com o postgres é só copiar e colar na sequência de códigos do arquivo **schema.sql** para criar as tabelas categories e contacts. 
Pronto agora o servidor pode rodar.

---
### Projeto da API
Para rodar o projeto basta utilizar o comando.</br>

```bash
yarn dev
```

---
### Web
Para rodar o projeto na versão web basta utilizar o comando.

```bash
yarn start
```

---

## :star: Layout
Você pode visualizar/copiar o layout no figma através desse
[link.](https://www.figma.com/file/zhAwjW2RimyjccDgiY6luz/MyContacts?node-id=0%3A1)
