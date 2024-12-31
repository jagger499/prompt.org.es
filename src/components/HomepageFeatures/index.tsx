import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fundamentos de Prompting',
    description: 'Aprende los conceptos básicos de la ingeniería de prompts y cómo comunicarte efectivamente con modelos de IA. Descubre las mejores prácticas y técnicas fundamentales para crear instrucciones precisas y obtener resultados óptimos.',
    icon: '🎯',
    link: '/docs/prompt-basics/intro'
  },
  {
    title: 'Chain of Thought',
    description: 'Domina el arte del razonamiento paso a paso. Aprende a guiar a la IA a través de procesos de pensamiento estructurados para obtener respuestas más precisas y fundamentadas.',
    icon: '🔄',
    link: '/docs/prompt-basics/chain-of-thought-prompting-guia-completa'
  },
  {
    title: 'Few-Shot Learning',
    description: 'Explora cómo enseñar a la IA mediante ejemplos. Aprende a proporcionar casos de muestra efectivos para mejorar la precisión y relevancia de las respuestas.',
    icon: '🎓',
    link: '/docs/prompt-basics/few-shot-prompting-guia-completa'
  },
  {
    title: 'Role Prompting',
    description: 'Descubre cómo asignar roles específicos a la IA para obtener respuestas más especializadas. Aprende a aprovechar diferentes perspectivas de expertos para mejorar la calidad de las respuestas.',
    icon: '🎭',
    link: '/docs/prompt-basics/role-prompting-guia-completa'
  },
  {
    title: 'Zero-Shot Prompting',
    description: 'Aprende a obtener resultados precisos sin necesidad de ejemplos previos. Domina el arte de crear instrucciones claras y directas para tareas específicas.',
    icon: '🎯',
    link: '/docs/prompt-basics/zero-shot-prompting-guia-completa'
  },
  {
    title: 'Self-Consistency',
    description: 'Explora técnicas para obtener respuestas consistentes y confiables. Aprende a validar y verificar la coherencia de las respuestas de la IA.',
    icon: '🔄',
    link: '/docs/prompt-basics/self-consistency-prompting-guia-completa'
  },
  {
    title: 'Recursive Prompting',
    description: 'Domina el arte de dividir problemas complejos en subtareas manejables. Aprende a abordar desafíos paso a paso para obtener soluciones más completas.',
    icon: '📝',
    link: '/docs/prompt-basics/recursive-prompting-guia-completa'
  },
  {
    title: 'Template Prompting',
    description: 'Descubre cómo usar plantillas estructuradas para crear prompts efectivos. Optimiza tus interacciones mediante patrones probados y documentados.',
    icon: '📋',
    link: '/docs/prompt-basics/template-prompting-guia-completa'
  },
  {
    title: 'Metacognitive Prompting',
    description: 'Profundiza en técnicas para entender el proceso de pensamiento de la IA. Aprende a obtener explicaciones detalladas sobre el razonamiento detrás de las respuestas.',
    icon: '🤔',
    link: '/docs/prompt-basics/metacognitive-prompting-guia-completa'
  },
  {
    title: 'Contrarian Prompting',
    description: 'Explora diferentes perspectivas y argumentos opuestos. Aprende a obtener análisis más equilibrados y completos considerando múltiples puntos de vista.',
    icon: '⚖️',
    link: '/docs/prompt-basics/contrarian-prompting-guia-completa'
  }
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.introduction}>
          <h2>Descubre el poder de la ingeniería de prompts con nuestra guía definitiva en español.</h2>
          <p>
            Navega por una colección de recursos premium, tutoriales interactivos y ejemplos del 
            mundo real que transformarán tu manera de comunicarte con la IA. Desde conceptos 
            básicos hasta técnicas avanzadas, te acompañamos en cada paso para convertirte 
            en un experto en la creación de prompts efectivos.
          </p>
        </div>
        <div className={styles.grid}>
          {FeatureList.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <a href={feature.link} className={styles.featureLink}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <Heading as="h3">{feature.title}</Heading>
                <p>{feature.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
