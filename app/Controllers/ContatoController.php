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
            if (isset($_POST['ContatoController'])) {
                $this->submit();
            }
        }

        public function submit()
        {
             
        }

        public function redirect($to)
        {
            header('Location: ' . $to);
        }
    }

 /**
  * ---------------------------------------------------------------------------------
  * Iniciado a class ContatoController
  * ---------------------------------------------------------------------------------
  */
  $class = new ContatoController();
?>