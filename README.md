# Trybers and Dragons - Framework de RPG

## Visão Geral

Este projeto tem como objetivo criar um framework para jogos de interpretação de papéis (RPG) baseado nos princípios da arquitetura SOLID e na Programação Orientada a Objetos (POO). O universo do jogo, conhecido como Trybers and Dragons - T&D, é habitado por várias raças e arquétipos, cada um com suas características únicas.

## Pré-requisitos

Certifique-se de atender aos seguintes requisitos:

- O seu `docker-compose` deve estar na versão 1.29 ou superior. Se necessário, consulte a documentação para atualizar.

## Inicializando os Serviços

Para iniciar os serviços Node.js e MySQL em containers Docker, siga os passos abaixo:

1. Abra o terminal.

2. Navegue até o diretório raiz do projeto onde está localizado o arquivo `docker-compose.yml`.

3. Execute o seguinte comando para construir e iniciar os containers:

   ```bash
   docker-compose up -d --build
   
Certifique-se de que o MySQL local não esteja em execução na porta padrão (3306) ou faça as adaptações necessárias nas configurações se você desejar utilizar a aplicação em containers.

## Acessando o Terminal Interativo do Container
Para acessar o terminal interativo do container onde a aplicação está sendo executada, utilize o seguinte comando:
   ```bash
   docker exec -it blogs_api
   ```

Isso permitirá que você acesse o terminal dentro do container em execução.

## Instalando Dependências (Dentro do Container)
Dentro do container, você pode instalar as dependências necessárias com o seguinte comando:

   ```bash
   npm install
   ```

### ⚠️ Atenção:

Todos os comandos disponíveis no package.json (como npm start, npm test, npm run dev, etc.) devem ser executados dentro do container, ou seja, no terminal aberto após a execução do comando docker exec mencionado acima.

O Git dentro do container não virá configurado com suas credenciais. Você pode optar por fazer commits fora do container ou configurar suas credenciais do Git dentro do container conforme necessário.

Evite rodar o comando npm audit fix, pois ele atualizará várias dependências do projeto e pode gerar conflitos com o avaliador.

## ✨ Dica
A extensão "Remote - Containers" do Visual Studio Code é recomendada para desenvolver sua aplicação diretamente no container Docker, como se estivesse trabalhando com seus arquivos locais.

## Requisitos do Projeto

### 1. Crie a Classe `Race`

A classe `Race` representa as raças dos seres no universo do jogo. Cada raça tem um nome e destreza.

- O arquivo deve ser criado em `src/Races/` e se chamar `Race.ts`.
- A classe `Race` deve ter atributos privados `name` e `dexterity`, ambos inicializados no construtor.
- `name` deve ser do tipo string, e `dexterity` deve ser do tipo número.
- Os atributos `name` e `dexterity` podem ser lidos, mas não podem ser alterados.
- A classe `Race` deve ter um método estático `createdRacesInstances` que retorna o número de instâncias criadas a partir de classes que herdam de `Race`.
- A classe `Race` deve ter um getter abstrato chamado `maxLifePoints` que retorna um número.

### 2. Crie Classes que Herdam de `Race`

Devem ser criadas classes que representam raças específicas no jogo, cada uma com seu máximo de pontos de vida.

- As classes `Dwarf`, `Elf`, `Halfling` e `Orc` devem ser criadas em arquivos com esses nomes em `src/Races/`.
- Cada raça deve possuir um máximo de pontos de vida inicializado no construtor.
- Não se esqueça de implementar os métodos necessários após estender a classe abstrata `Race`.

### 3. Crie a Interface `Energy`

A interface `Energy` representa a energia usada pelos seres no jogo, que pode ser "mana" ou "stamina."

- Crie o arquivo `Energy.ts` na raiz do diretório `src/`.
- A interface `Energy` deve ter atributos `type_` (do tipo `EnergyType`) e `amount` (do tipo número).
- `EnergyType` deve ser exportado.
- `type_` pode ter os valores 'mana' ou 'stamina'.

### 4. Crie a Classe `Archetype`

A classe `Archetype` representa os arquétipos dos personagens no jogo, com um nome, poder de ataque especial e custo de energia.

- O arquivo `Archetype.ts` deve ser criado em `src/Archetypes/`.
- A classe `Archetype` deve ter atributos privados `name`, `special` e `cost`, inicializados no construtor.
- `name` deve ser do tipo string, `special` e `cost` devem ser do tipo número.
- Os atributos `name`, `special` e `cost` podem ser lidos, mas não podem ser alterados.
- A classe `Archetype` deve ter um método estático `createdArchetypeInstances` que retorna o número de instâncias criadas a partir de classes que herdam de `Archetype`.
- A classe `Archetype` deve ter um getter abstrato chamado `energyType` que retorna um `EnergyType`.

### 5. Crie Classes que Herdam de `Archetype`

Devem ser criadas classes que representam arquétipos específicos no jogo, cada um com sua habilidade única de causar dano.

- As classes `Mage`, `Necromancer`, `Warrior` e `Ranger` devem ser criadas em arquivos com esses nomes em `src/Archetypes/`.
- Cada arquétipo possui uma habilidade de causar dano inicializada no construtor.
- Não se esqueça de implementar os métodos necessários após estender a classe abstrata `Archetype`.

### 6. Crie a Interface `Fighter`

A interface `Fighter` representa seres capazes de lutar no jogo, com atributos como pontos de vida, força, defesa e energia.

- Crie uma interface chamada `Fighter` no arquivo `Fighter.ts` em `src/Fighter/`.
- A interface deve ter atributos `lifePoints`, `strength`, `defense` e `energy` (do tipo `Energy`).
- A interface deve ter métodos `attack()`, `special()`, `levelUp()` e `receiveDamage()`.

### 7. Crie a Classe `Character`

A classe `Character` representa personagens no jogo, compostos por uma raça e um arquétipo.

- O arquivo deve ser criado na raiz do diretório `src/` e se chamar `Character.ts`.
- A classe deve implementar a interface `Fighter`.
- A classe `Character` deve ter atributos privados `race`, `archetype`, `maxLifePoints`, `lifePoints`, `strength`, `defense`, `dexterity`, `energy` e `name`, todos inicializados no construtor.
- `race`, `archetype`, `maxLifePoints`, `lifePoints`, `strength`, `defense`, `dexterity`, `energy` e `name` podem ser lidos, mas não podem ser alterados.
- A classe `Character` deve implementar os métodos da interface `Fighter`.

### 8. Crie a Interface `SimpleFighter`

A interface `SimpleFighter` representa seres simples lutadores no jogo, sem defesa avançada ou ataques especiais.

- Crie uma interface chamada `SimpleFighter` no arquivo `SimpleFighter.ts` em `src/Fighter/`.
- A interface deve ter atributos `lifePoints` e `strength`.
- A interface deve ter métodos `attack()` e `receiveDamage()`.

## Instruções Adicionais

- Certifique-se de que todos os arquivos e classes estão organizados em suas respectivas pastas e siga as instruções de exportação/importação conforme especificado nos requisitos.
- Utilize os princípios da Programação Orientada a Objetos e os princípios SOLID para criar classes e interfaces de forma coesa e modular.
- Você pode usar a função `getRandomInt` do arquivo `utils.ts` para gerar valores aleatórios quando necessário.

Agora, embarque nesta jornada e explore o mundo de Trybers and Dragons - T&D, completando missões e enfrentando desafios!
