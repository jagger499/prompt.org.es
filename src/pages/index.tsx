import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Typical from 'react-typical';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

import { Analytics } from "@vercel/analytics/react"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
          <br />
          <Typical
            steps={[
              "Ingeniería de Prompts", 1000,
              "Modelos de Lenguaje", 1000,
              "GPT-4", 1000,
              "Transformers", 1000,
              "Procesamiento de Lenguaje Natural", 1000,
              "Generación de Texto", 1000,
              "Aprendizaje Profundo", 1000,
              "Optimización de Prompts", 1000,
              "Fine-Tuning", 1000,
              "Transferencia de Conocimiento", 1000,
              "Análisis de Sentimientos", 1000,
              "Chatbots", 1000,
              "Automatización de Tareas", 1000,
              "Interacción Humano-Computadora", 1000,
              "Inteligencia Conversacional", 1000,
              "Análisis de Datos", 1000,
              "Innovación Tecnológica", 1000,
              "Desarrollo de IA", 1000,
              "Soluciones Inteligentes", 1000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </Heading>
        <Analytics />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Inicio"
      description="Aprende ingeniería de prompts y domina la comunicación con IA. Tutoriales, guías y recursos en español para principiantes y expertos.">
      <Head>
        <meta property="og:title" content="Prompt.org.es - Aprende Ingeniería de Prompts" />
        <meta property="og:description" content="Domina el arte de comunicarte con IA a través de nuestras guías y tutoriales en español" />
        <meta name="twitter:title" content="Prompt.org.es - Aprende Ingeniería de Prompts" />
        <meta name="twitter:description" content="Domina el arte de comunicarte con IA a través de nuestras guías y tutoriales en español" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
