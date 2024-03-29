import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CrookIcon from '@site/static/img/exn_crook_icon.png';
import HammerIcon from '@site/static/img/exn_hammer_icon.png';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Ex Nihilo: Sequentia',
    img: CrookIcon,
    description: (
      <>
        Ex Nihilo: Sequentia is a modern port of Ex Nihilo: Creatio for 1.12, which in turn was a fork of Ex Nihilo: Adscensio for 1.10, which was a continuation of Ex Nihilo for 1.7.10.
      </>
    ),
    docSource: '/exnihilosequentia',
  },
  {
    title: 'Ex Nihilo: Sequentia - AE Addon',
    img: CrookIcon,
    description: (
      <>
        Addon that adds all neccessary items for compatibility with Applied Energistics 2.
      </>
    ),
    docSource: '#',
  },
  {
    title: 'Ex Nihilo: Sequentia - Mekanism Addon',
    img: CrookIcon,
    description: (
      <>
        Addon that adds all neccessary items for compatibility with Mekanism.
      </>
    ),
    docSource: '#',
  },
  {
    title: 'Ex Nihilo: Sequentia - Tinkers Addon',
    img: HammerIcon,
    description: (
      <>
        Addon that adds all neccessary items for compatibility with Tinkers Construct.
      </>
    ),
    docSource: '#',
  },
  {
    title: 'Ex Nihilo: Sequentia - Thermal Addon',
    img: CrookIcon,
    description: (
      <>
        Addon that adds all neccessary items for compatibility with the Thermal Series.
      </>
    ),
    docSource: '#',
  },
];

function Feature({ title, img, description, docSource }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div style={{ display: "flex" }}>
          <img src={img} height={64} />
          <Link to={docSource}><h3>{title}</h3></Link>
        </div>
      <p>{description}</p>
    </div>
    </div >
  );
}

export default function ModsList() {
  return (
    <div style={{ textAlign: "center", paddingTop: 10 }}>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
