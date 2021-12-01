# Chatapp-Backend

```
1- Baixar Projeto e abrí-lo com sua IDE de preferência
```
## Project setup/ Instalação do Projeto
```
( é necessário ter o gerenciador de pacotes YARN instalado, segue link para sua instalação https://classic.yarnpkg.com/en/docs/install#windows-stable )

2-Criar arquivo .env com estes chaves valores:
```
ENV=DEVELOPMENT
DATABASE=mongodb://localhost/chatapp

SECRET=ukaISD1asddasads123slk
```

3 - Abrir terminal e efetuar o comando a abaixo:

yarn install
```

### Run the server/ Iniciar o server
```
4- No terminal efetuar o comando a abaixo:

yarn start

5- Após inicialização correta do server, aparecerá esta menssagem: 
 

[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Server listenig on port 5000
MongoDB Connected!
```

## Routes/ Rotas

No momento as rotas em funcionamento são: 

### 1 POST- localhost:5000/user/register 
    
    body Entrada ->
    ```
    {
    "name": "john", 
    "lastName": "doe", 
    "phone": "+5511942552211", 
    "cpf": 00000000000, 
    "password": "senha", 
    "passwordCheck": "senha" 
    }
```
Todos campos são requeridos.
phone e cpf possuem validação própria.
password e passwordCheck são validados, e senha é criptografada.
token JWT é gerado.
```
body Saída ->
    ```
    {
        "success": Boolean,
        "message": 'Mensagem de Sucesso ou Erro',
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTNiZmUwYzIwZmMyYTgyZjU5MjQwZiIsImlhdCI6MTYzODMxOTI5OH0.wfUQsxMCm5-FpP02StNF6xgs89Fxgw1V0CszzQlAWR0"
    }

### 2 POST- localhost:5000/user/login 
    
    body Entrada ->
    ```
    {
   
    "cpf": 00000000000, 
    "password": "senha", 
}
```
Todos campos são requeridos.
body Saída ->
    ```
    {
        "success": Boolean,
        "message": 'Mensagem de Sucesso ou Erro'
    }
   ```

 ### 3 PUT- localhost:5000/user/edit/:id 
    headers -> {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTNiZmUwYzIwZmMyYTgyZjU5MjQwZiIsImlhdCI6MTYzODMxOTI5OH0.wfUQsxMCm5-FpP02StNF6xgs89Fxgw1V0CszzQlAWR0"
    }
    body Entrada ->
    ```
    {
    "name": "john", 
    "lastName": "doe", 
    "phone": "+5511942552211", 
    "password": "senha", 
    "passwordCheck": "senha" 
    }
```
Token no headers é requerido
CPF não é editável.
Todos campos são requeridos.
phone possue validação própria.
password e passwordCheck são validados, e senha é criptografada 
```
body Saída ->
    ```
    {
        "success": Boolean,
        "message": 'Mensagem de Sucesso ou Erro',
        "userEdited": {
            "_id": "61a3bfe0c2xxxxxf",
            "name": "usuario",
            "lastName": "doe",
            "phone": "+5511968552211",
            "cpf": 9813167051,
            "createdAt": "2021-11-28T17:44:00.869Z",
            "updatedAt": "2021-12-01T00:42:53.190Z",
            "__v": 0
        }
    }
    ```

### 4 DELETE- localhost:5000/user/delete/:id 
    headers -> {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTNiZmUwYzIwZmMyYTgyZjU5MjQwZiIsImlhdCI6MTYzODMxOTI5OH0.wfUQsxMCm5-FpP02StNF6xgs89Fxgw1V0CszzQlAWR0"
    }
    
    Só é necessário o token no headers

    body Saída ->
    ```
    {
        "success": Boolean,
        "message": 'Mensagem de Sucesso ou Erro'
    }

### 5 GET- localhost:5000/user/listAll 
    headers -> {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTNiZmUwYzIwZmMyYTgyZjU5MjQwZiIsImlhdCI6MTYzODMxOTI5OH0.wfUQsxMCm5-FpP02StNF6xgs89Fxgw1V0CszzQlAWR0"
    }
    
    Só é necessário o token no headers

    body Saída ->
    ```
    {
         "success": true,
    "userList": [
            {
                "name": "Josias",
                "lastName": "Fernando",
                "createdAt": "2021-11-30T15:14:00.756Z",
                "updatedAt": "2021-11-30T15:14:00.756Z",
                "__v": 0
            },
            {
                "name": "Josualdo",
                "lastName": "Ricarlison",
                "createdAt": "2021-11-30T15:52:57.740Z",
                "updatedAt": "2021-11-30T15:52:57.740Z",
                "__v": 0
            },
            {
                "name": "Barriguinha mole",
                "lastName": "bla",
                "createdAt": "2021-11-30T15:54:36.291Z",
                "updatedAt": "2021-11-30T15:54:36.291Z",
                "__v": 0
            }
        ]    
    }

    

    


