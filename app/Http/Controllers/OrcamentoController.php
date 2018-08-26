<?php
/**
 * ---------------------------------------------------------------
 * Classe responsavel por enviar o formulario de orçamento por email
 * ---------------------------------------------------------------
 */

    class OrcamentoController
    {
        function __construct ( ) 
        {
            if (isset($_POST['OrcamentoController'])) {
                $this->submit();
            }
        }

        public function submit()
        {
            
        }
    }

 /**
  * ---------------------------------------------------------------------------------
  * Iniciado a class OrcamentoController
  * ---------------------------------------------------------------------------------
  */
  $class = new OrcamentoController();
?>