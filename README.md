# Arquitetura-de-Sistemas-Computacionais
## Tema (Luta contra a censura em paises afetados pela guerra) ⚠️

### **MicroServiço1 = Clonagem de fachadas de sites e comunicação com barramento:**

- Clonagem rapida, salvando apenas o Conteudo da pagina sem fazer dowload das imagens,fontes e scripts [0]

- Clonagem completa, salva tudo que a pagina principal solicitada no DotNet possui, porem não é feito a clonagem das paginas referenciadas nos links da mesma.[1]

<> Funcionamento :
- [X] Cada pagina é salva em uma pasta com o mesmo nome do site que esta sendo clonado, dentro dela contém o HTML no caso da clonagem rapida ou todos os arquivos de script e imagens, dependendo do tipo de clonagem selecionado. Dentro de cada pasta sempre tera um arquivo chamado DATAclonagem no formato de JSON, que é utilizado para controle de versao, sendo checado toda vez que o serviço é iniciado e caso estiver com 1 dia de desatualização é clonado novamente de forma automatica.

<> O serviço de comunicação HTTP com o barramento, faz uso de requisiçoes GET,como exemplificado no arquivo(Microservico1.postman_collection.JSON), podendo:

- Listar todos os sites ja clonados e atualizados, com resposta no formato JSON

- Receber requisição de clonagem de um ou mais sites, tambem no formato JSON

### **MicroServiço2 = Conexão com banco de dados remoto::**

#### Com uso da biblioteca axios e MongoDb foi criado o Server: 

- Ao ser iniciado, a primeira coisa feita é a validação das credenciais passadas e checagem do estado do banco de dados. Feito isso, e tendo resultado positivo, é aguardado por requisições na porta 5000 que podem ser /create ou /login

+ Sendo /create: é recebido um JSON  com os dados que se quer cadastrar, mas antes de realizar o salvamento é feito uma verificação de uniciade (realizado uma conexão com o Mongo Buscando pela tabela Maua e coleção Maua), caso não exista previamente armazenado nenhuma conta com o Email que se quer cadastrar, o programa prossegue para o envio e salvamento das informaçoes no banco de dados.

+ Sendo /login: é feita uma solicitação no Banco Buscando o Cadastro pelo Email, caso exista, é feito uma comparação entreo email enviado do formulario web e o retornado pelo banco de dados, em casode serem iguais, é retornado True ao Serviço e o Usuario é redirecionado para a pagina principal, caso contrario ele fica na tela de login e é exibido um alerta de email ou senha incorretos.

- O servidor Mongo db não foi Hospedado localmente, e sim gatuitamente via a Plataforma Azure, por meio do Atlas, serviço gratuito do Mongo DB e o gerenciamento foi feito por meio da aplicação Compas, tambem do proprio Mongo DB.

- Coisas que ainda teriam que ser implementada: Gerenciamento pelo Router Guard das rotas, pois da foma que esta atualmente basta digitar / main e ir para o menu sem se autenticar. Outra coisa é o fato de nem todas as paginas clonadas estarem fncionais, por alguma incompatibilidade com o Angular.


## Uso:
- Inicar o Micro serviço1  dentro da pasta Angular/projeto1/src/app/Microsrviços com o comando (node ./microServiço1.js)
- Iniciar o (ng serve) dentro da pasta projeto1
- Iniciar o servidor dentro da pasta ServidorMongoDB, com o comando (node ./server.js)

### **FrontEnd:**

- Front feito com uso do FrameWork Angular CLI e interfaces criadas com auxilio do Bootstrap. E interações ceriadas por meio de Typescript

## Imagens:
![alt text](https://github.com/NULLBYTE-RGH/Arquitetura-de-Sistemas-Computacionais/blob/4007f79d6014e61bb6c4dc9cb15fa5d5aa9e7238/imgens/log.png)
![alt text](https://github.com/NULLBYTE-RGH/Arquitetura-de-Sistemas-Computacionais/blob/169ca8ac61362c7feb7c9e8c4798a427f6c197b6/imgens/criar-conta.png)
![alt text](https://github.com/NULLBYTE-RGH/Arquitetura-de-Sistemas-Computacionais/blob/169ca8ac61362c7feb7c9e8c4798a427f6c197b6/imgens/main.png)
![alt text](https://github.com/NULLBYTE-RGH/Arquitetura-de-Sistemas-Computacionais/blob/2ccb3f6c82ec68c872bd11398f06dd0fc5606364/imgens/MongoDB.png)


