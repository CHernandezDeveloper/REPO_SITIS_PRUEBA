# Prueba tecnica SITIS

##Descripcion del proyecto:

1. Backend:
  ###Spring Boot

  1. Un endpoint para el registro de usuarios con los atributos:
    a. Nombre de usuario
    b. Correo electrónico
    c. Constraseña
    d. Perfil ( Administrador, Coordinador o Invitado)
  2. Un endpoint que permita obtener los usuarios registrados.
  Pueden crearse más endpoints si lo considera necesario.
  
2. Frontend:
  1. Lista de usuarios
    a. Contiene una tabla donde se visualizan todos los usuarios registrados.
    b. Contiene la opción para filtrar los usuarios por su atributo ‘Perfil’.
  2. Crear usuarios
    a. Contiene un formulario con los siguientes campos:
      i. Nombre de usuario
      ii. Correo electrónico
      iii. Perfil ( Administrador, Coordinador o Invitado)
      iv. Contraseña
      v. Confirmar contraseña
    b. El formulario debe tener al menos las siguientes validaciones:
      i. La contraseña debe tener mínimo 6 caracteres.
      ii. El correo electrónico debe tener el formato correcto.
      iii. El perfil debe ser obligatorio.
