---
titulo: "Predictor de Gravedad de Accidentes: Análisis de Datos y ML con Python"
descripcion: "Sistema de clasificación basado en Machine Learning para predecir la severidad de siniestros viales utilizando datos históricos de movilidad urbana."
imagen: "/correlacion.png"
urlRepositorio: "https://github.com/EdinsonAmaya/API-Analisis-Accidentes-De-Trafico-En-Bucaramanga"
etiquetas: ["Python", "Machine Learning", "API", "Data Science", "Data Visualization"]
---

##Reto
Realizar la comparación entre diferentes modelos de machine learning para predecir la gravedad de accidentes de tránsito en la ciudad de Bucaramanga (Colombia).

##Solución
Implementé un flujo de trabajo de Ciencia de Datos estructurado en:
1. **ETL y Limpieza:** Tratamiento de valores nulos y codificación de variables categóricas de siniestros reales.
2. **EDA:** Identificación de patrones espaciales y temporales en la ciudad.
3. **Modelado:** Entrenamiento y validación cruzada de modelos KNN, Árboles de Decisión y Naive Bayes.

##Resultados
El **Árbol de Decisión** lideró el rendimiento, optimizando la precisión en las categorías más frecuentes.

| Modelo | Accuracy |
| :--- | :--- |
| **Árbol de Decisión** | **83.14%** |
| **KNN** | **81.75%** |
| **Naive Bayes** | **67.55%** |

> **Nota de ingeniería:** Identifiqué un fuerte desbalance de clases en víctimas mortales. Como mejora futura, se propone el uso de **SMOTE** para balancear el set de datos y mejorar la sensibilidad del modelo en eventos críticos.