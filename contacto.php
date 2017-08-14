<?php
if(empty($_REQUEST[email]) || empty($_REQUEST[movil])){

	$data[0] = "red"; 
	$data[1] = "Debe escribir por lo menos, un correo electronico y un telefono movil."; 
	$data[2] = "Error enviando contacto."; 

}else{

	$para      = 'it@diezequis.com, directorteleventas@diezequis.com';
	$titulo    = 'Contacto Landing';
	$mensaje   = 'Email: '.$_REQUEST[email].'\n';
	$mensaje   .= 'Movil: '.$_REQUEST[movil].'\n';
	$mensaje   .= 'Comentario: '.$_REQUEST[comentario].'\n';

	$cabeceras = 'From: clientemed@diezequis.com' . "\r\n" .
	    'Reply-To: clientemed@diezequis.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	$success = mail($para, $titulo, $mensaje, $cabeceras);
	if (!$success) {
		$data[0] = "red"; 
		$data[1] = error_get_last()['message'];
		$data[2] = "Error enviando contacto.";  
	}else{
		$data[0] = "green"; 
		$data[1] = "Contacto enviado correctamente, en breve un asesor se comunicará con usted, gracias por confiar en Diez Equis Food Service"; 	
		$data[2] = "!! Recibimos tu mensaje !!.";  
	}
}

echo json_encode($data);
?>