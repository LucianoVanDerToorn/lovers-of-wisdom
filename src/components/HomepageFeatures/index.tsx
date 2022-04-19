import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Learning Guides",
    Svg: require("@site/static/img/undraw_learnguide.svg").default,
    description: (
      <>
        Helping both beginning and intermediate learners of philosophy, with
        other subjects in the humanities coming soon.
      </>
    ),
  },
  {
    title: "Expert interviews",
    Svg: require("@site/static/img/undraw_interviews.svg").default,
    description: (
      <>
        Interviews with experts to give insight into how to learn, what to
        learn, and how to keep motivated to learn.
      </>
    ),
  },
  {
    title: "Community",
    Svg: require("@site/static/img/undraw_community.svg").default,
    description: (
      <>
        With our active Discord community of over 1000 members you can ask
        questions when you're stuck or you can join reading groups to learn
        together.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
