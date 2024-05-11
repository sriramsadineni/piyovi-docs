import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faSmile,  } from '@fortawesome/free-regular-svg-icons';
import Link from '@docusaurus/Link';
import { faBook, faBullhorn, faCode } from '@fortawesome/pro-light-svg-icons';

type FeatureItem = {
  title: string;
  Svg: IconDefinition;
  description: JSX.Element;
  url?:string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Product Guide',
    url : "/docs/guides/intro",
    Svg: faBook,
    description: (
      <>
       <Translate> Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.</Translate>
      </>
    ),
  },
  {
    title: 'Api Reference',
    Svg: faCode,
    url : "/api-reference/v1",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Release',
    Svg:  faBullhorn,
    url : "/docs/changelogs/intro",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description,url}: FeatureItem) {
  return (
    <div className={clsx('col col--4 ')}>
         <div  className="card">
          <div className="card__header text--center">
          <h1> <FontAwesomeIcon icon={Svg} /></h1>

          </div>
          <div className="card__body text--center" >
            <Heading as="h3">
                <Translate>{title}</Translate>
            </Heading>
          <p>{description}</p>
          </div>
          </div>
     </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
