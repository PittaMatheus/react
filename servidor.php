<?php
$menu =[
    ['titulo' =>"home2", 'link' => "#home"],
    ['titulo' =>"Sobre", 'link' => "#sobre"],
    ['titulo' =>"Contato", 'link' => "#contato"]
];

$dados =[
    ['titulo' => "Noticia 1", 'descricao' => "Descrição 1", 'detalhe' => "Texto de detalhe do cartão 1", 'imagem' => "http://materializecss.com/images/office.jpg", 'link' => "#teste"],
    ['titulo' => "Título 2", 'descricao' => "Descrição 2", 'detalhe' => "Texto de detalhe do cartão 2", 'imagem' => "http://materializecss.com/images/office.jpg", 'link' => "#teste"],
    ['titulo' => "Título 3", 'descricao' => "Descrição 3", 'detalhe' => "Texto de detalhe do cartão 3", 'imagem' => "http://materializecss.com/images/office.jpg", 'link' => "#teste"],
    ['titulo' => "Título 4", 'descricao' => "Descrição 4", 'detalhe' => "Texto de detalhe do cartão 4", 'imagem' => "http://materializecss.com/images/office.jpg", 'link' => "#teste"],
    ['titulo' => "Título 5", 'descricao' => "Descrição 5", 'detalhe' => "Texto de detalhe do cartão 5", 'imagem' => "http://materializecss.com/images/office.jpg", 'link' => "#teste"],
    ['titulo' => "Título 6", 'descricao' => "Descrição 6", 'detalhe' => "Texto de detalhe do cartão 6", 'imagem' => "http://materializecss.com/images/office.jpg", 'link' => "#teste"],
    ['titulo' => "Título 7", 'descricao' => "Descrição 7", 'detalhe' => "Texto de detalhe do cartão 7", 'imagem' => "http://materializecss.com/images/office.jpg", 'link' => "#teste"]
];

if(isset($_GET['menu'])){
    echo json_encode($menu); exit;
}
if(isset($_GET['dados'])){
    echo json_encode($dados); exit;
}

?>