import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Our Services',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We are providing these Services
      </>
    ),
  },
  {
    title: 'Team',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We have this Team.
      </>
    ),
  },
  {
    title: 'Technologies',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We are working on these Technologies.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={ clsx('col col--4') }>
      <div className="text--center">
        <Svg className={ styles.featureSvg } role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={ styles.features }>
      <div className="container">
        <div className="row">
          { FeatureList.map((props, idx) => (
            <Feature key={ idx } { ...props } />
          )) }
        </div>
      </div>
    </section>
  );
}
