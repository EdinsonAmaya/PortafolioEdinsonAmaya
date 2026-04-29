---
titulo: "Sistema de Gestión de Reservas API con Java y SpringBoot."
descripcion: "API RESTfull diseñada para administrar un sistema de reserva. El proyecto está construido utilizando Java con el framework Spring Boot y utiliza MySQL como base de datos. Implementa funcionalidades para la gestión de usuarios, servicios y las propias reservas, siguiendo una arquitectura de capas."
imagen: "/gestion-reservas.png"
urlRepositorio: "https://github.com/EdinsonAmaya/API-de-gestion-de-reservas"
etiquetas:
  [
    "java",
    "spring-boot",
    "mysql",
    "api-rest",
    "gestion-de-reservas",
    "backend",
    "maven",
  ]
---

##Reto
**Sincronización de formatos de fecha y hora**
En una API de reservas, el servidor (Java/Spring) y el cliente (Frontend/Postman) deben hablar el mismo idioma respecto al tiempo. El reto surge porque Java utiliza objetos complejos como LocalDateTime, mientras que JSON es puro texto. Si no se maneja bien, el sistema puede fallar al recibir una fecha en un formato inesperado (ej. DD/MM/YYYY vs YYYY-MM-DD) o perder la precisión de la hora.

##Solución
**Uso de Anotaciones de Jackson y Serialización**
En el código de este proyecto, para asegurar que la reserva se guarde con la precisión necesaria, se implementó lo siguiente:
**Anotaciones @JsonFormat:** En las entidades (Entities) o DTOs, se decoran los atributos de fecha para forzar un patrón específico. Por ejemplo:

@JsonFormat(pattern = "yyyy-MM-DD HH:mm:ss")

**Manejo de Tipos en JPA:** Se configuró el repositorio para que Hibernate traduzca correctamente los tipos LocalDateTime de Java a tipos DATETIME de MySQL, asegurando que la zona horaria sea consistente.

**Validación de Pasado/Futuro:** Se integran validaciones para que la lógica de negocio impida crear reservas en fechas anteriores a la actual usando @Future o validaciones manuales en el Service.

##Resultados
Gracias a este manejo en el código, el proyecto logró:

**Interoperabilidad:** Cualquier aplicación externa puede enviar una reserva y el sistema la entenderá sin errores de "parseo".

**Precisión en el Agendamiento:** Se eliminaron los riesgos de que una reserva se guarde en un día distinto debido a malentendidos entre el formato del cliente y el del servidor.

**Datos Limpios:** La base de datos MySQL mantiene una cronología exacta, lo que permite generar reportes de reservas por mes o día con total fiabilidad.
