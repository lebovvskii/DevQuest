import classNames from "classnames";

import styles from "./styles.module.scss";
import type { PageLayoutProps } from "./types";

export const PageLayout = ({ eyebrow, title, description, actions, className, children }: PageLayoutProps) => {
  return (
    <main className={classNames(styles.root, className)}>
      <section className={styles.hero}>
        <div className={styles.intro}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <div className={styles.copy}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        {actions ? <div className={styles.actions}>{actions}</div> : null}
      </section>

      <div className={styles.body}>{children}</div>
    </main>
  );
};
