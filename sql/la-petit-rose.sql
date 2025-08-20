Create table pedidos(
    id int primary key auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null,
    pedido varchar(100) not null,
    data_entrega datetime not null,
    hora_entrega time not null,
    observacoes text
);