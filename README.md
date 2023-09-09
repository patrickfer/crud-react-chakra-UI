# CRUD com React e Chakra UI

Link do projeto: https://crud-react-chakra-ui.netlify.app/

Este projeto é um estudo de um aplicativo CRUD (Create, Read, Update, Delete) desenvolvido usando React como framework principal e Chakra UI para a criação de componentes de interface do usuário. O objetivo é criar uma aplicação simples que permita ao usuário gerenciar registros de clientes em um banco de dados fictício armazenado localmente no navegador.

# Tecnologias Utilizadas
React: Um framework JavaScript popular para construir interfaces de usuário.
<br>
Chakra UI: Uma biblioteca de componentes para a criação de interfaces de usuário modernas e responsivas.

# Funcionalidades
O aplicativo CRUD possui as seguintes funcionalidades:

Listagem de Clientes: Os clientes cadastrados são exibidos em uma lista.
<br>
Adição de Cliente: Os usuários podem adicionar novos clientes.
<br>
Edição de Cliente: Os usuários podem editar informações de clientes existentes.
<br>
Exclusão de Cliente: Os usuários podem excluir clientes.
<br>
# Componentes Principais
ModalComp: Um componente reutilizável que fornece um modal para adição e edição de clientes.
<br>
DeleteIcon e EditIcon: Ícones fornecidos pela biblioteca Chakra UI para ações de exclusão e edição.

# Banco de Dados Simulado
O banco de dados dos clientes é simulado usando o localStorage. Os dados são armazenados na forma de uma lista JSON em localStorage com a chave "cad_cliente".
