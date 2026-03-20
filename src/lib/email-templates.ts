export interface EmailTemplate {
  subject: string;
  body: string;
}

export const emailTemplates = {
  general: (): EmailTemplate => ({
    subject: "Auditoría Digital Gratuita - Gemly",
    body: `Hola equipo de Gemly,

Me interesa solicitar una auditoría digital gratuita para mi negocio.

Información de contacto:
- Nombre:
- Empresa:
- Teléfono:
- Ubicación:

Cuéntanos brevemente sobre tu negocio y qué desafíos enfrentas:


Saludos cordiales.`,
  }),

  softwareMedida: (): EmailTemplate => ({
    subject: "Solicitud de Cotización - Software a Medida - Gemly",
    body: `Hola equipo de Gemly,

Me interesa solicitar una cotización para el desarrollo de software a medida.

Información del proyecto:
- Tipo de aplicación: [Web/Móvil/Desktop]
- Descripción del proyecto: 
- Funcionalidades principales:
- Plazo de entrega deseado:

Información de contacto:
- Nombre:
- Empresa:
- Teléfono:
- Ubicación:

Saludos cordiales.`,
  }),

  machineLearning: (): EmailTemplate => ({
    subject: "Consulta Técnica - Machine Learning - Gemly",
    body: `Hola equipo de Gemly,

Me interesa una consulta técnica sobre Machine Learning.

Información del proyecto:
- Descripción del problema a resolver: 
- Datos disponibles:
- Objetivos del proyecto:

Información de contacto:
- Nombre:
- Empresa:
- Teléfono:

Saludos cordiales.`,
  }),

  automatizacionAI: (): EmailTemplate => ({
    subject: "Consulta - Automatización IA - Gemly",
    body: `Hola equipo de Gemly,

Me interesa automatizar procesos con IA en mi empresa.

Información del proyecto:
- Procesos a automatizar: 
- Volumen de trabajo actual:
- Objetivos de mejora:

Información de contacto:
- Nombre:
- Empresa:
- Teléfono:

Saludos cordiales.`,
  }),

  analisisDatos: (): EmailTemplate => ({
    subject: "Solicitud de Análisis de Datos - Gemly",
    body: `Hola equipo de Gemly,

Me interesa un análisis de datos para mi empresa.

Información del proyecto:
- Fuentes de datos disponibles:
- Objetivos del análisis:

Información de contacto:
- Nombre:
- Empresa:
- Teléfono:

Saludos cordiales.`,
  }),

  saberMas: (servicio: string): EmailTemplate => ({
    subject: `Deseo saber más sobre ${servicio} - Gemly`,
    body: `Hola equipo de Gemly,

Deseo saber más sobre ${servicio}.

Información de contacto:
- Nombre:
- Empresa:
- Teléfono:

Saludos cordiales.`,
  }),
};

export const generateMailtoLink = (template: EmailTemplate): string => {
  const subject = encodeURIComponent(template.subject);
  const body = encodeURIComponent(template.body);
  return `mailto:gemlytech@gmail.com?subject=${subject}&body=${body}`;
};

export const openEmail = (template: EmailTemplate): void => {
  const mailtoLink = generateMailtoLink(template);
  window.location.href = mailtoLink;
};
