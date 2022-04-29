# Arquitetura-de-Sistemas-Computacionais

# MicroServiço1 = Clonagem de fachadas de sites e comunicação com barramento:

- Clonagem rapida, salvando apenas o Conteudo da pagina sem fazer dowload das imagens,fontes e scripts [0]

- Clonagemcompleta, salva tudo que a pagina principal solicitada no DotNet possui, porem não é feito a clonagem das paginas referenciadas nos links da mesma.[1]

<> Cada pagina é salva em uma pasta com o nome do site e dentro dela ira conter somente o HTML no caso da clonagem rapida ou todos os arquivos de script e imagens. Junto a eles sempre tera um arquivo chamado DATAclonagem no formato de JSON, que é utilizado para controle de versao, sendo checado toda vez que o serviço é iniciado e se estiver com 1 dia de desatualização é clonado novamente de forma automatica.

<> O serviço de comunicação HTTP com o barramento, faz uso de requisiçoes GET,como exemplificado no arquivo(Microservico1.postman_collection.JSON), podendo:

- Listar todos os sites ja clonados e atualizados, com resposta no formato JSON

- Receber requisição de clonagem de um ou mais sites, tambem no formato JSON
