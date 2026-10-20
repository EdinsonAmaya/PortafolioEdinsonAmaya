---
titulo: "Control de Deudas API"
descripcion: "API REST para la gestión y control de deudas personales o grupales, organizadas por carpetas y usuarios."
imagen: "/control-deudas.png"
urlRepositorio: "https://github.com/EdinsonAmaya/Control-de-Deudas-API"
etiquetas: ["Java", "Spring Boot", "API", "Spring Security"]
---

## Reto

Desarrollar una API REST robusta y segura para el control y gestión de deudas personales o grupales, organizada por **carpetas** y **usuarios**, diseñada como backend para una aplicación web en Angular.

## Solución

Implementé una arquitectura basada en buenas prácticas de ingeniería de software estructurada en:

1. **Arquitectura y Seguridad:** Organización _package-by-feature_, seguridad _stateless_ con JWT (HS256) y validación estricta anti-IDOR.
2. **Modelo y Persistencia:** Uso de Spring Data JPA / Hibernate con MySQL, manejando precisión financiera con `BigDecimal` y transacciones concurrentes con bloqueo pesimista.
3. **Validación y Pruebas:** Pruebas unitarias e integración con JUnit 5, Mockito, MockMvc y H2 en memoria, acompañadas de documentación con OpenAPI / Swagger UI.

## Resultados

El sistema garantiza una gestión transaccional segura y un cálculo dinámico de saldos y estados de deudas.

| Componente / Capa | Detalle Tecnológico                       |
| :---------------- | :---------------------------------------- |
| **Backend**       | **Java 17 & Spring Boot**                 |
| **Base de Datos** | **MySQL 8 (`BigDecimal` para precisión)** |
| **Seguridad**     | **Spring Security + JWT**                 |

> **Nota de ingeniería:** Implementé cálculos dinámicos de saldos mediante consultas JPQL agregadas para evitar inconsistencias de datos, y bloqueo pesimista (`SELECT ... FOR UPDATE`) en el registro de abonos para prevenir condiciones de carrera bajo concurrencia.
