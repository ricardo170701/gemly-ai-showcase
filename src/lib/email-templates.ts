export interface EmailTemplate {
  subject: string;
  body: string;
}

export const emailTemplates = {
  // Template general para consultas
  general: (): EmailTemplate => ({
    subject: "Consulta General - Gemly",
    body: `Hola equipo de Gemly,

Me interesa obtener más información sobre sus servicios y cómo pueden ayudarme con mi proyecto.

Información de contacto:
- Nombre:
- Empresa:
- Teléfono:
- Ubicación:

Servicio de interés:
- [ ] Automatización IA
- [ ] Machine Learning
- [ ] Software a Medida
- [ ] Análisis de Datos
- [ ] Otro: ________________

Descripción del proyecto o consulta:

Por favor, me gustaría obtener información sobre:
- Servicios disponibles
- Proceso de trabajo
- Estimación de costos
- Tiempos de entrega
- Casos de éxito

Saludos cordiales.`,
  }),

  // Template para software a medida
  softwareMedida: (): EmailTemplate => ({
    subject: "Solicitud de Cotización - Software a Medida - Gemly",
    body: `Hola equipo de Gemly,

Me interesa solicitar una cotización para el desarrollo de software a medida para mi empresa.

Información del proyecto:
- Tipo de aplicación: [Web/Móvil/Desktop/Enterprise]
- Descripción del proyecto: 
- Funcionalidades principales:
- Usuarios estimados:
- Plazo de entrega deseado:

Información de contacto:
- Nombre de la empresa:
- Nombre del contacto:
- Teléfono:
- Ubicación:

Por favor, me gustaría obtener información sobre:
- Proceso de desarrollo y metodología
- Tecnologías recomendadas
- Cronograma estimado
- Costos y modalidades de pago
- Soporte post-lanzamiento

Saludos cordiales.`,
  }),

  // Template para machine learning
  machineLearning: (): EmailTemplate => ({
    subject: "Solicitud de Consulta Técnica - Machine Learning - Gemly",
    body: `Hola equipo de Gemly,

Me interesa solicitar una consulta técnica sobre implementación de Machine Learning para mi empresa.

Información del proyecto:
- Tipo de aplicación ML: [Análisis Predictivo/Reconocimiento de Patrones/Sistemas de Recomendación/Otro]
- Descripción del problema a resolver: 
- Datos disponibles:
- Objetivos del proyecto:
- Plazo de implementación deseado:

Información de contacto:
- Nombre de la empresa:
- Nombre del contacto:
- Teléfono:
- Ubicación:

Por favor, me gustaría obtener información sobre:
- Evaluación de viabilidad del proyecto
- Arquitectura de ML recomendada
- Requisitos de datos y infraestructura
- Cronograma de desarrollo
- Costos y ROI estimado
- Soporte post-implementación

Saludos cordiales.`,
  }),

  // Template para automatización IA
  automatizacionAI: (): EmailTemplate => ({
    subject: "Solicitud de Consulta - Automatización IA - Gemly",
    body: `Hola equipo de Gemly,

Me interesa solicitar una consulta sobre automatización con Inteligencia Artificial para mi empresa.

Información del proyecto:
- Tipo de automatización: [Procesamiento de Documentos/Atención al Cliente/Gestión de Inventarios/Otro]
- Procesos a automatizar: 
- Volumen de trabajo actual:
- Objetivos de mejora:
- Plazo de implementación deseado:

Información de contacto:
- Nombre de la empresa:
- Nombre del contacto:
- Teléfono:
- Ubicación:

Por favor, me gustaría obtener información sobre:
- Evaluación de procesos automatizables
- Soluciones IA recomendadas
- Estimación de ahorro de costos
- Cronograma de implementación
- ROI esperado
- Soporte y mantenimiento

Saludos cordiales.`,
  }),

  // Template para análisis de datos
  analisisDatos: (): EmailTemplate => ({
    subject: "Solicitud de Análisis de Datos - Gemly",
    body: `Hola equipo de Gemly,

Me interesa solicitar un análisis de datos para mi empresa.

Información del proyecto:
- Tipo de análisis: [Análisis Descriptivo/Análisis Predictivo/Análisis Prescriptivo/Análisis Exploratorio]
- Fuentes de datos disponibles: [Bases de datos/APIs/Archivos CSV/Excel/Otros]
- Volumen de datos aproximado:
- Objetivos del análisis:
- Plazo de entrega deseado:

Información de contacto:
- Nombre de la empresa:
- Nombre del contacto:
- Teléfono:
- Ubicación:

Descripción del proyecto:
- ¿Qué problemas específicos busca resolver con el análisis de datos?
- ¿Qué métricas o KPIs son importantes para su negocio?
- ¿Tiene algún dashboard o reporte existente que desee mejorar?
- ¿Qué decisiones espera tomar con los resultados del análisis?

Por favor, me gustaría obtener información sobre:
- Metodología de análisis recomendada
- Herramientas y tecnologías a utilizar
- Proceso de limpieza y preparación de datos
- Tipos de visualizaciones y dashboards disponibles
- Cronograma de trabajo detallado
- Costos y modalidades de pago
- Capacitación para el equipo interno
- Soporte post-implementación

Saludos cordiales.`,
  }),
};

// Función para generar el enlace mailto
export const generateMailtoLink = (template: EmailTemplate): string => {
  const subject = encodeURIComponent(template.subject);
  const body = encodeURIComponent(template.body);
  return `mailto:gemlytech@gmail.com?subject=${subject}&body=${body}`;
};

// Función para abrir el correo directamente
export const openEmail = (template: EmailTemplate): void => {
  const mailtoLink = generateMailtoLink(template);
  window.location.href = mailtoLink;
};
