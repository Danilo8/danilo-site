<?php
/**
 * --------------------------------------------------------------------------------
 *  Classe responsavel por enviar o formulario de contato por email
 * --------------------------------------------------------------------------------
 */
 class ContatoController
 {
  
    function __construct ( )
    {
        if (isset($_POST)) {
            $this->enviar();
        }
    }

    public function enviar()
    {
        if ($this->form_valido()) {
            header("Location: ../../../");
        } else {
            header("Location: ../../../");
        }  
    }

    public function form_valido()
    {
        
    }
 }

 /**
  * ---------------------------------------------------------------------------------
  * Iniciado a class ContatoController
  * ---------------------------------------------------------------------------------
  */
  $class = new ContatoController();
?>