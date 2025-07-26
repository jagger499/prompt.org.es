import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '@theme/Layout';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  TextField, 
  Paper,
  Chip,
  Stack,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import {
  AutoAwesome,
  Psychology,
  SmartToy,
  Analytics,
  Code,
  Cloud,
  Security,
  Speed,
  TrendingUp,
  Build,
  Science,
  Lightbulb,
  Menu as MenuIcon,
  Close,
  School,
  Business,
  Group
} from '@mui/icons-material';

export default function BusinessPage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  // Usar refs para los inputs del formulario (sin re-renders)
  const nombreRef = useRef<HTMLInputElement>(null);
  const empresaRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const proyectoRef = useRef<HTMLTextAreaElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Obtener valores directamente de los refs
    const formData = {
      nombre: nombreRef.current?.value || '',
      empresa: empresaRef.current?.value || '',
      email: emailRef.current?.value || '',
      proyecto: proyectoRef.current?.value || ''
    };

    try {
      // Configuración de EmailJS - Reemplaza estos valores con los tuyos
      const serviceID = 'service_3f6id6l';  // Tu Service ID de EmailJS
      const templateID = 'template_edyj8ha'; // Tu Template ID de EmailJS 
      const publicKey = 'GxvQu1AMwyj3CsZJR';  // Tu Public Key de EmailJS

      // Preparar los datos del template
      const templateParams = {
        to_email: 'jagg499@gmail.com',
        from_name: formData.nombre,
        from_email: formData.email,
        company: formData.empresa || 'No especificada',
        project_description: formData.proyecto,
        reply_to: formData.email,
        subject: `Nueva consulta de Ingeniería de Prompts - ${formData.nombre}`
      };

      // Enviar email usando EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitMessage('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
        // Limpiar el formulario
        if (nombreRef.current) nombreRef.current.value = '';
        if (empresaRef.current) empresaRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (proyectoRef.current) proyectoRef.current.value = '';
      } else {
        setSubmitMessage('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Error al enviar el mensaje. Por favor intenta más tarde o contacta directamente a jagg499@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Servicios Empresariales - Ingeniería de Prompts"
      description="Servicios de consultoría y formación en ingeniería de prompts para empresas. Optimización de IA, capacitación de equipos y desarrollo de soluciones personalizadas.">
      
      {/* JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Servicios Empresariales de Ingeniería de Prompts",
            "description": "Servicios profesionales de consultoría, formación y desarrollo en ingeniería de prompts para empresas. Optimización de IA corporativa y capacitación de equipos.",
            "url": "https://www.prompt.org.es/business",
            "mainEntity": {
              "@type": "Organization",
              "name": "Prompt.org.es",
              "description": "Especialistas en ingeniería de prompts y servicios corporativos de IA",
              "url": "https://www.prompt.org.es",
              "offers": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consultoría en Ingeniería de Prompts",
                    "description": "Análisis y optimización de prompts existentes, desarrollo de estrategias de IA corporativa"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Formación Empresarial",
                    "description": "Workshops y capacitación especializada en técnicas avanzadas de prompt engineering"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Prompt Engineering Sprint",
                    "description": "Programa intensivo de 5 días para transformación completa de prompts empresariales"
                  }
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://www.prompt.org.es"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Servicios Empresariales",
                  "item": "https://www.prompt.org.es/business"
                }
              ]
            }
          })
        }}
      />
      
      <Box sx={{ 
        minHeight: '100vh', 
        background: 'var(--ifm-background-color)',
        color: 'var(--ifm-font-color-base)',
        '& .MuiPaper-root': {
          backgroundColor: 'var(--ifm-background-surface-color)',
          color: 'var(--ifm-font-color-base)'
        },
        '& .MuiTextField-root .MuiInputBase-root': {
          backgroundColor: 'var(--ifm-background-surface-color)',
          color: 'var(--ifm-font-color-base)'
        },
        '& .MuiTextField-root .MuiInputLabel-root': {
          color: 'var(--ifm-font-color-base)'
        }
      }}>

        {/* Hero Banner */}
        <Box 
          id="inicio"
          component="section"
          sx={{ 
            pt: 8,
            pb: 12,
            px: 2,
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            background: `
              linear-gradient(135deg, 
                var(--ifm-background-color) 0%, 
                var(--ifm-background-surface-color) 100%
              )
            `,
            position: 'relative'
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center">
              <Typography 
                component="h1"
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 800,
                  mb: 4,
                  color: 'var(--ifm-color-primary-lightest)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                Servicios de Ingeniería de Prompts para Empresas
              </Typography>
              
              <Typography 
                component="h2"
                variant="h5" 
                sx={{ 
                  mb: 6, 
                  color: 'var(--ifm-font-color-base)',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                  opacity: 0.9
                }}
              >
                Transformamos equipos empresariales en expertos de IA a través de formación especializada en ingeniería de prompts, 
                consultoría estratégica y desarrollo de soluciones personalizadas para maximizar el ROI de sus herramientas de IA.
              </Typography>

              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="center" 
                flexWrap="wrap" 
                sx={{ 
                  mb: 8, 
                  gap: 3
                }}
              >
                <Chip 
                  icon={<School />} 
                  label="Formación Especializada" 
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    py: 1.5,
                    px: 2,
                    fontWeight: 600,
                    background: 'var(--ifm-background-surface-color)',
                    border: '2px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-font-color-base)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
                <Chip 
                  icon={<Business />} 
                  label="Consultoría Estratégica" 
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    py: 1.5,
                    px: 2,
                    fontWeight: 600,
                    background: 'var(--ifm-background-surface-color)',
                    border: '2px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-font-color-base)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
                <Chip 
                  icon={<Build />} 
                  label="Soluciones Personalizadas" 
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    py: 1.5,
                    px: 2,
                    fontWeight: 600,
                    background: 'var(--ifm-background-surface-color)',
                    border: '2px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-font-color-base)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
              </Stack>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#contacto"
                  sx={{ 
                    px: 6, 
                    py: 2.5,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    backgroundColor: 'var(--ifm-color-primary)',
                    '&:hover': {
                      backgroundColor: 'var(--ifm-color-primary-dark)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  🚀 Consulta Gratuita
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#servicios"
                  sx={{ 
                    px: 6, 
                    py: 2.5, 
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    borderColor: 'var(--ifm-color-primary)',
                    color: 'var(--ifm-color-primary)',
                    '&:hover': {
                      borderColor: 'var(--ifm-color-primary-dark)',
                      backgroundColor: 'var(--ifm-color-primary-dark)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Ver Servicios →
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* Servicios Section */}
        <Box 
          id="servicios" 
          component="section"
          sx={{ 
            py: 12, 
            background: 'var(--ifm-background-surface-color)'
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 10 }}>
              <Typography 
                component="h2"
                variant="h2" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  color: 'var(--ifm-color-primary-lightest)'
                }}
              >
                Nuestros Servicios de Ingeniería de Prompts
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'var(--ifm-font-color-base)',
                  maxWidth: '600px', 
                  mx: 'auto',
                  lineHeight: 1.6,
                  opacity: 0.9
                }}
              >
                Soluciones integrales para maximizar el potencial de la IA en tu empresa
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4
            }}>
              {/* Formación Empresarial */}
              <Card sx={{ 
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-primary)',
                backgroundColor: 'var(--ifm-background-color)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                } 
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <School sx={{ fontSize: 40, color: 'var(--ifm-color-primary)', mr: 2 }} />
                    <Typography variant="h5" fontWeight="bold">
                      Formación Empresarial
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    Programas de formación estructurados para equipos empresariales. Desde introducción básica 
                    hasta técnicas avanzadas de prompt engineering, adaptados al nivel y necesidades de cada equipo.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                    <Chip label="Workshops" size="small" variant="outlined" />
                    <Chip label="Cursos Online" size="small" variant="outlined" />
                    <Chip label="Certificaciones" size="small" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>

              {/* Consultoría Estratégica */}
              <Card sx={{ 
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-primary)',
                backgroundColor: 'var(--ifm-background-color)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                } 
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Business sx={{ fontSize: 40, color: 'var(--ifm-color-primary)', mr: 2 }} />
                    <Typography variant="h5" fontWeight="bold">
                      Consultoría Estratégica
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    Análisis profundo de procesos empresariales para identificar oportunidades de optimización 
                    mediante IA. Desarrollamos estrategias personalizadas de implementación de prompts.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                    <Chip label="Auditoría IA" size="small" variant="outlined" />
                    <Chip label="Estrategia" size="small" variant="outlined" />
                    <Chip label="ROI Analysis" size="small" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>

              {/* Desarrollo de Prompts */}
              <Card sx={{ 
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-primary)',
                backgroundColor: 'var(--ifm-background-color)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                } 
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Code sx={{ fontSize: 40, color: 'var(--ifm-color-primary)', mr: 2 }} />
                    <Typography variant="h5" fontWeight="bold">
                      Desarrollo de Prompts
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    Creación de bibliotecas de prompts personalizadas para casos de uso específicos. 
                    Optimización de prompts existentes y desarrollo de sistemas de prompt chaining.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                    <Chip label="Prompt Library" size="small" variant="outlined" />
                    <Chip label="Optimización" size="small" variant="outlined" />
                    <Chip label="Chain of Thought" size="small" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>

              {/* Integración y Automatización */}
              <Card sx={{ 
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-primary)',
                backgroundColor: 'var(--ifm-background-color)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                } 
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Build sx={{ fontSize: 40, color: 'var(--ifm-color-primary)', mr: 2 }} />
                    <Typography variant="h5" fontWeight="bold">
                      Integración y Automatización
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    Integración de soluciones de prompting en workflows existentes. Automatización de tareas 
                    repetitivas mediante sistemas de IA y desarrollo de APIs personalizadas.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                    <Chip label="API Integration" size="small" variant="outlined" />
                    <Chip label="Workflows" size="small" variant="outlined" />
                    <Chip label="Automation" size="small" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* Casos de Éxito */}
        <Box 
          id="casos" 
          component="section" 
          sx={{ 
            py: 12, 
            background: 'var(--ifm-background-color)'
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 10 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  color: 'var(--ifm-color-primary-lightest)'
                }}
              >
                Casos de Éxito
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'var(--ifm-font-color-base)',
                  maxWidth: '600px', 
                  mx: 'auto',
                  opacity: 0.9
                }}
              >
                Empresas que han transformado sus procesos con ingeniería de prompts
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
              gap: 4
            }}>
              {[
                {
                  title: "E-commerce",
                  description: "Automatización de descripciones de productos",
                  metric: "+300% velocidad",
                  icon: <Analytics />
                },
                {
                  title: "Marketing Agency",
                  description: "Generación de contenido personalizado",
                  metric: "+250% productividad",
                  icon: <TrendingUp />
                },
                {
                  title: "Startup Tech",
                  description: "Asistente de código y documentación",
                  metric: "+180% eficiencia",
                  icon: <Code />
                }
              ].map((caso, index) => (
                <Paper key={index} sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  borderRadius: '12px',
                  backgroundColor: 'var(--ifm-background-surface-color)',
                  border: '1px solid var(--ifm-color-primary)',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                  }
                }}>
                  <Box sx={{ 
                    color: 'var(--ifm-color-primary)', 
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {caso.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    {caso.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                    {caso.description}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    fontWeight="bold" 
                    sx={{ color: 'var(--ifm-color-primary)' }}
                  >
                    {caso.metric}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Por qué elegir nuestros servicios */}
        <Box 
          id="nosotros" 
          component="section" 
          sx={{ 
            py: 12, 
            background: 'var(--ifm-background-surface-color)'
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 10 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  color: 'var(--ifm-color-primary-lightest)'
                }}
              >
                ¿Por qué somos tu mejor opción en Ingeniería de Prompts?
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'var(--ifm-font-color-base)',
                  maxWidth: '600px', 
                  mx: 'auto',
                  lineHeight: 1.6,
                  opacity: 0.9,
                  mb: 3
                }}
              >
                Más de 50 proyectos exitosos en optimización de IA con prompt engineering
              </Typography>
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="center" 
                flexWrap="wrap" 
                sx={{ gap: 2 }}
              >
                <Chip 
                  label="💼 Experiencia Comprobada" 
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    py: 1,
                    px: 2,
                    fontWeight: 600,
                    background: 'var(--ifm-background-color)',
                    border: '1px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-font-color-base)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
                <Chip 
                  label="🏆 Líderes en Prompting" 
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    py: 1,
                    px: 2,
                    fontWeight: 600,
                    background: 'var(--ifm-background-color)',
                    border: '1px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-font-color-base)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
              </Stack>
            </Box>

            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
              gap: 4
            }}>
              {/* Desarrollo Personalizado */}
              <Paper sx={{ 
                p: 4, 
                textAlign: 'center',
                borderRadius: '12px',
                backgroundColor: 'var(--ifm-background-color)',
                border: '1px solid var(--ifm-color-primary)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                }
              }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '12px',
                    backgroundColor: 'var(--ifm-color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    color: 'white'
                  }}
                >
                  <Build sx={{ fontSize: 30 }} />
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'var(--ifm-color-primary)' }}>
                  Prompts 100% Personalizados
                </Typography>
                <Typography sx={{ color: 'var(--ifm-font-color-base)', lineHeight: 1.6, opacity: 0.9 }}>
                  No usamos plantillas genéricas. Cada prompt se diseña desde cero 
                  para resolver exactamente tu caso de uso específico.
                </Typography>
              </Paper>

              {/* Seguridad y Privacidad */}
              <Paper sx={{ 
                p: 4, 
                textAlign: 'center',
                borderRadius: '12px',
                backgroundColor: 'var(--ifm-background-color)',
                border: '1px solid var(--ifm-color-primary)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                }
              }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '12px',
                    backgroundColor: 'var(--ifm-color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    color: 'white'
                  }}
                >
                  <Security sx={{ fontSize: 30 }} />
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'var(--ifm-color-primary)' }}>
                  Confidencialidad Garantizada
                </Typography>
                <Typography sx={{ color: 'var(--ifm-font-color-base)', lineHeight: 1.6, opacity: 0.9 }}>
                  Tus prompts y datos empresariales permanecen privados. 
                  Firmamos NDAs y seguimos estrictos protocolos de seguridad.
                </Typography>
              </Paper>

              {/* ROI Medible */}
              <Paper sx={{ 
                p: 4, 
                textAlign: 'center',
                borderRadius: '12px',
                backgroundColor: 'var(--ifm-background-color)',
                border: '1px solid var(--ifm-color-primary)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                }
              }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '12px',
                    backgroundColor: 'var(--ifm-color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    color: 'white'
                  }}
                >
                  <TrendingUp sx={{ fontSize: 30 }} />
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'var(--ifm-color-primary)' }}>
                  ROI Medible desde el Primer Mes
                </Typography>
                <Typography sx={{ color: 'var(--ifm-font-color-base)', lineHeight: 1.6, opacity: 0.9 }}>
                  Nuestras optimizaciones de prompts generan resultados tangibles: 
                  reducción del 50% en tokens y aumento del 80% en precisión.
                </Typography>
              </Paper>
            </Box>
          </Container>
        </Box>

        {/* Tecnologías y Herramientas */}
        <Box 
          id="tecnologia" 
          component="section" 
          sx={{ 
            py: 12, 
            background: 'var(--ifm-background-color)'
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 10 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  color: 'var(--ifm-color-primary-lightest)'
                }}
              >
                Tecnologías de Vanguardia en IA
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'var(--ifm-font-color-base)',
                  maxWidth: '650px', 
                  mx: 'auto',
                  lineHeight: 1.6,
                  opacity: 0.9,
                  mb: 3
                }}
              >
                Trabajamos con las plataformas de IA más avanzadas del mercado para crear prompts optimizados
              </Typography>
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="center" 
                flexWrap="wrap" 
                sx={{ gap: 2 }}
              >
                <Chip 
                  label="🚀 Última Tecnología" 
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    py: 1,
                    px: 2,
                    fontWeight: 600,
                    background: 'var(--ifm-background-surface-color)',
                    border: '1px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-font-color-base)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
                <Chip 
                  label="⚡ Alto Rendimiento" 
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    py: 1,
                    px: 2,
                    fontWeight: 600,
                    background: 'var(--ifm-background-surface-color)',
                    border: '1px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-font-color-base)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
              </Stack>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 3, 
              justifyContent: 'center', 
              mb: 8
            }}>
              {[
                { name: 'OpenAI GPT-4', color: 'var(--ifm-color-primary)' },
                { name: 'Claude 3', color: 'var(--ifm-color-primary)' },
                { name: 'LangChain', color: 'var(--ifm-color-primary)' },
                { name: 'LlamaIndex', color: 'var(--ifm-color-primary)' },
                { name: 'Hugging Face', color: 'var(--ifm-color-primary)' },
                { name: 'Prompt Flow', color: 'var(--ifm-color-primary)' },
                { name: 'Azure OpenAI', color: 'var(--ifm-color-primary)' },
                { name: 'Gemini Pro', color: 'var(--ifm-color-primary)' }
              ].map((tech, index) => (
                <Chip 
                  key={tech.name}
                  label={tech.name} 
                  variant="outlined" 
                  sx={{ 
                    fontSize: '1rem', 
                    py: 1.5,
                    px: 2.5,
                    fontWeight: 600,
                    background: 'var(--ifm-background-surface-color)',
                    color: tech.color,
                    border: `2px solid ${tech.color}`,
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      background: tech.color,
                      color: 'white',
                      transform: 'translateY(-3px) scale(1.05)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                    }
                  }}
                />
              ))}
            </Box>

            {/* Stats Section */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gap: 4
            }}>
              {[
                { number: '200+', label: 'Prompts Optimizados', color: 'var(--ifm-color-primary)' },
                { number: '98%', label: 'Precisión Promedio', color: 'var(--ifm-color-primary)' },
                { number: '50%', label: 'Reducción de Tokens', color: 'var(--ifm-color-primary)' },
                { number: '24/7', label: 'Soporte Especializado', color: 'var(--ifm-color-primary)' }
              ].map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: '12px',
                    backgroundColor: 'var(--ifm-background-surface-color)',
                    border: '1px solid var(--ifm-color-primary)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800, 
                      color: stat.color, 
                      mb: 1,
                      fontSize: { xs: '1.8rem', md: '2.2rem' }
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'var(--ifm-font-color-base)', 
                      fontWeight: 600,
                      opacity: 0.9
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Programa Intensive Sprint */}
        <Box 
          id="sprint" 
          component="section" 
          sx={{ 
            py: 12, 
            background: 'var(--ifm-background-surface-color)',
            position: 'relative'
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 10 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: 'var(--ifm-color-primary-lightest)'
                }}
              >
                🚀 Prompt Engineering Sprint
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'var(--ifm-font-color-base)',
                  maxWidth: '800px', 
                  mx: 'auto',
                  lineHeight: 1.5,
                  fontSize: { xs: '1.3rem', md: '1.8rem' },
                  fontWeight: 600,
                  mb: 3,
                  opacity: 0.9
                }}
              >
                Programa Intensivo de 5 Días para Transformar tus Prompts
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'var(--ifm-font-color-base)',
                  maxWidth: '700px', 
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  mb: 6,
                  opacity: 0.8
                }}
              >
                Diseñamos e implementamos una estrategia completa de prompt engineering que puedes ejecutar inmediatamente
              </Typography>
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="center" 
                flexWrap="wrap" 
                sx={{ gap: 2 }}
              >
                <Chip 
                  label="⚡ Resultados en 5 Días" 
                  sx={{ 
                    fontSize: '1rem',
                    py: 1.5,
                    px: 3,
                    fontWeight: 600,
                    background: 'var(--ifm-background-color)',
                    border: '2px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-color-primary)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
                <Chip 
                  label="📈 Eficiencia Garantizada" 
                  sx={{ 
                    fontSize: '1rem',
                    py: 1.5,
                    px: 3,
                    fontWeight: 600,
                    background: 'var(--ifm-background-color)',
                    border: '2px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-color-primary)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
                <Chip 
                  label="🎯 100% Personalizado" 
                  sx={{ 
                    fontSize: '1rem',
                    py: 1.5,
                    px: 3,
                    fontWeight: 600,
                    background: 'var(--ifm-background-color)',
                    border: '2px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-color-primary)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
              </Stack>
            </Box>

            {/* Timeline del Sprint */}
            <Box sx={{ mb: 10 }}>
              <Typography 
                variant="h3" 
                textAlign="center"
                sx={{ 
                  mb: 8, 
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  color: 'var(--ifm-color-primary-lightest)'
                }}
              >
                Tu Roadmap de Transformación
              </Typography>
              
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: '1fr' },
                gap: 4, 
                maxWidth: '900px', 
                mx: 'auto'
              }}>
                {[
                  {
                    day: "Día 1-2",
                    title: "Auditoría & Análisis de Prompts Actuales",
                    description: "Revisamos tus prompts existentes, identificamos oportunidades de mejora inmediata y establecemos líneas base de rendimiento para medir el progreso.",
                    icon: "🔍",
                    metrics: "+30% precisión inicial"
                  },
                  {
                    day: "Día 3", 
                    title: "Diseño de Arquitectura de Prompts",
                    description: "Creamos una biblioteca estructurada de prompts optimizados, implementamos técnicas avanzadas como Chain-of-Thought y few-shot learning específicos para tu dominio.",
                    icon: "⚡",
                    metrics: "+50% eficiencia en respuestas"
                  },
                  {
                    day: "Día 4",
                    title: "Testing & Optimización Avanzada", 
                    description: "Realizamos pruebas A/B con diferentes variaciones, optimizamos para reducir tokens y mejorar calidad, implementamos sistemas de validación automática.",
                    icon: "🚀",
                    metrics: "+70% consistencia"
                  },
                  {
                    day: "Día 5",
                    title: "Entrega & Capacitación del Equipo",
                    description: "Entregamos la biblioteca completa de prompts, documentación detallada, capacitamos a tu equipo y establecemos métricas de seguimiento para mejora continua.",
                    icon: "📊",
                    metrics: "Kit completo + Training"
                  }
                ].map((phase, index) => (
                  <Paper 
                    key={index}
                    sx={{ 
                      p: 4,
                      borderRadius: '12px',
                      backgroundColor: 'var(--ifm-background-color)',
                      border: '1px solid var(--ifm-color-primary)',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          backgroundColor: 'var(--ifm-color-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: '1.5rem'
                        }}
                      >
                        {phase.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="overline" 
                          sx={{ 
                            color: 'var(--ifm-color-primary)',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            letterSpacing: '1px'
                          }}
                        >
                          {phase.day}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 700,
                            mb: 2,
                            color: 'var(--ifm-font-color-base)',
                            fontSize: { xs: '1.1rem', md: '1.3rem' }
                          }}
                        >
                          {phase.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'var(--ifm-font-color-base)',
                            lineHeight: 1.6,
                            mb: 3,
                            opacity: 0.9
                          }}
                        >
                          {phase.description}
                        </Typography>
                        <Chip 
                          label={phase.metrics}
                          sx={{ 
                            background: 'var(--ifm-background-surface-color)',
                            color: 'var(--ifm-color-primary)',
                            fontWeight: 600,
                            border: '1px solid var(--ifm-color-primary)'
                          }}
                        />
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>

            {/* CTA del Sprint */}
            <Box textAlign="center">
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 700,
                  color: 'var(--ifm-font-color-base)'
                }}
              >
                ¿Listo para Revolucionar tus Prompts en 5 Días?
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 6, 
                  color: 'var(--ifm-font-color-base)',
                  maxWidth: '600px',
                  mx: 'auto',
                  opacity: 0.9
                }}
              >
                Únete a más de 30 empresas que han optimizado sus sistemas de IA con nuestro Prompt Engineering Sprint
              </Typography>
              
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#contacto"
                  sx={{ 
                    px: 8, 
                    py: 3,
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    backgroundColor: 'var(--ifm-color-primary)',
                    '&:hover': {
                      backgroundColor: 'var(--ifm-color-primary-dark)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  🚀 Iniciar Mi Sprint de Prompts
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#contacto"
                  sx={{ 
                    px: 6, 
                    py: 3, 
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    borderColor: 'var(--ifm-color-primary)',
                    color: 'var(--ifm-color-primary)',
                    '&:hover': {
                      borderColor: 'var(--ifm-color-primary-dark)',
                      backgroundColor: 'var(--ifm-color-primary-dark)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  📞 Consulta Sprint Gratuita
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box 
          id="faq" 
          component="section" 
          sx={{ 
            py: 12, 
            background: 'var(--ifm-background-color)'
          }}
        >
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 10 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  color: 'var(--ifm-color-primary-lightest)'
                }}
              >
                Preguntas Frecuentes
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'var(--ifm-font-color-base)',
                  maxWidth: '700px', 
                  mx: 'auto',
                  lineHeight: 1.6,
                  opacity: 0.9,
                  mb: 3
                }}
              >
                Resolvemos las dudas más comunes sobre nuestros servicios de ingeniería de prompts
              </Typography>
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="center" 
                flexWrap="wrap" 
                sx={{ gap: 2 }}
              >
                <Chip 
                  label="❓ Dudas Comunes" 
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    py: 1,
                    px: 2,
                    fontWeight: 600,
                    background: 'var(--ifm-background-surface-color)',
                    border: '1px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-font-color-base)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
                <Chip 
                  label="💡 Respuestas Claras" 
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    py: 1,
                    px: 2,
                    fontWeight: 600,
                    background: 'var(--ifm-background-surface-color)',
                    border: '1px solid var(--ifm-color-primary)',
                    color: 'var(--ifm-font-color-base)',
                    '&:hover': { 
                      background: 'var(--ifm-color-primary)',
                      color: 'white',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                />
              </Stack>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3, 
              maxWidth: '900px', 
              mx: 'auto'
            }}>
              {[
                {
                  question: "¿Qué incluye exactamente un proyecto de ingeniería de prompts?",
                  answer: "Incluye auditoría completa de tus prompts actuales, diseño de nueva arquitectura optimizada, implementación de técnicas avanzadas (Chain-of-Thought, few-shot, role prompting), testing A/B, documentación detallada, capacitación del equipo y seguimiento post-implementación."
                },
                {
                  question: "¿Cuánto tiempo toma optimizar nuestros prompts existentes?",
                  answer: "Depende del alcance, pero típicamente: análisis inicial (1-2 días), optimización básica (1-2 semanas), proyecto completo con nuevos prompts (3-6 semanas). Nuestro Sprint intensivo entrega resultados en solo 5 días."
                },
                {
                  question: "¿Trabajamos con nuestra plataforma de IA actual o necesitamos cambiar?",
                  answer: "Trabajamos con tu infraestructura actual. Somos agnósticos a la plataforma - OpenAI, Claude, Gemini, modelos locales, etc. Optimizamos los prompts para tu stack tecnológico específico sin requerir migraciones."
                },
                {
                  question: "¿Qué garantías ofrecen sobre la mejora en el rendimiento?",
                  answer: "Garantizamos mejoras medibles: mínimo 30% de reducción en tokens, 40% mejora en precisión, y 50% incremento en consistencia de respuestas. Si no alcanzamos estos objetivos, refinamos sin costo adicional."
                },
                {
                  question: "¿Cuál es la inversión para un proyecto de prompt engineering?",
                  answer: "Varía según alcance: Auditoría y optimización básica desde $1,500, Sprint completo desde $5,000, proyectos empresariales desde $10,000. Incluimos consulta gratuita para evaluar tu caso y proporcionar presupuesto exacto."
                },
                {
                  question: "¿Proporcionan entrenamiento para nuestro equipo interno?",
                  answer: "Sí, incluimos capacitación completa: workshops prácticos, documentación detallada, best practices, sesiones de Q&A, y 3 meses de soporte técnico. Tu equipo quedará completamente autónomo para mantener y evolucionar los prompts."
                }
              ].map((faq, index) => (
                <Paper 
                  key={index}
                  sx={{ 
                    p: 4,
                    borderRadius: '12px',
                    border: '1px solid var(--ifm-color-primary)',
                    backgroundColor: 'var(--ifm-background-surface-color)',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 2,
                      color: 'var(--ifm-color-primary)',
                      fontSize: '1.1rem'
                    }}
                  >
                    {faq.question}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'var(--ifm-font-color-base)',
                      lineHeight: 1.6,
                      opacity: 0.9
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </Paper>
              ))}
            </Box>

            {/* Call to Action */}
            <Box textAlign="center" sx={{ mt: 8 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: 'var(--ifm-font-color-base)' }}>
                ¿No encuentras la respuesta que buscas?
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="#contacto"
                sx={{ 
                  px: 6, 
                  py: 2.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  backgroundColor: 'var(--ifm-color-primary)',
                  '&:hover': {
                    backgroundColor: 'var(--ifm-color-primary-dark)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                💬 Hacer una Pregunta Personalizada
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Formulario de Contacto */}
        <Box 
          id="contacto" 
          component="section" 
          sx={{ 
            py: 12, 
            background: 'var(--ifm-background-surface-color)'
          }}
        >
          <Container maxWidth="md">
            <Box textAlign="center" sx={{ mb: 8 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  color: 'var(--ifm-color-primary-lightest)'
                }}
              >
                ¿Listo para Transformar tu Empresa?
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'var(--ifm-font-color-base)',
                  opacity: 0.9,
                  mb: 4
                }}
              >
                Cuéntanos sobre tu proyecto y descubre cómo la ingeniería de prompts puede revolucionar tus procesos
              </Typography>
            </Box>

            <Paper sx={{ 
              p: 6, 
              borderRadius: '12px',
              backgroundColor: 'var(--ifm-background-color)',
              border: '1px solid var(--ifm-color-primary)'
            }}>
              <Box component="form" onSubmit={handleSubmit}>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3,
                  mb: 3
                }}>
                  <TextField
                    inputRef={nombreRef}
                    label="Nombre completo"
                    variant="outlined"
                    required
                    fullWidth
                  />
                  <TextField
                    inputRef={empresaRef}
                    label="Empresa"
                    variant="outlined"
                    fullWidth
                  />
                </Box>
                
                <TextField
                  inputRef={emailRef}
                  label="Correo electrónico"
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                  sx={{ mb: 3 }}
                />
                
                <TextField
                  inputRef={proyectoRef}
                  label="Describe tu proyecto o necesidades de ingeniería de prompts"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                  fullWidth
                  sx={{ mb: 4 }}
                />
                
                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{ 
                      px: 6, 
                      py: 2.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      backgroundColor: 'var(--ifm-color-primary)',
                      '&:hover': {
                        backgroundColor: 'var(--ifm-color-primary-dark)'
                      }
                    }}
                  >
                    {isSubmitting ? 'Enviando...' : '🚀 Solicitar Consulta Gratuita'}
                  </Button>
                </Box>
                
                {submitMessage && (
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mt: 3, 
                      textAlign: 'center',
                      color: submitMessage.includes('exitosamente') ? 'green' : 'red'
                    }}
                  >
                    {submitMessage}
                  </Typography>
                )}
              </Box>
            </Paper>
          </Container>
        </Box>

      </Box>
    </Layout>
  );
}
