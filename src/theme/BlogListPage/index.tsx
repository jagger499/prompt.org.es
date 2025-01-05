import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import styles from './styles.module.css';

function BlogPostCard({children}) {
  const {metadata} = useBlogPost();
  const {permalink, title, description, date, authors} = metadata;
  
  // Formatear la fecha usando el objeto Date
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={styles.blogCard}>
      <Link to={permalink} className={styles.blogLink}>
        <div className={styles.blogContent}>
          <h2 className={styles.blogTitle}>{title}</h2>
          <p className={styles.blogDescription}>{description || 'Sin descripción'}</p>
          <div className={styles.blogMeta}>
            <time dateTime={date}>{formattedDate}</time>
            {authors.length > 0 && (
              <span>por {authors.map(author => author.name).join(', ')}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BlogListPage(props) {
  const {items} = props;

  return (
    <Layout>
      <div className={styles.blogContainer}>
        <div className={styles.blogGrid}>
          {items.map(({content: BlogPostContent}) => (
            <BlogPostProvider
              key={BlogPostContent.metadata.permalink}
              content={BlogPostContent}>
              <BlogPostCard>{BlogPostContent}</BlogPostCard>
            </BlogPostProvider>
          ))}
        </div>
      </div>
    </Layout>
  );
} 