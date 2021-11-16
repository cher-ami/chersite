import css from "./HomePage.module.less";
import React, { ForwardedRef, forwardRef, useRef } from "react";
import { useStack } from "@cher-ami/router";
import debug from "@wbe/debug";

interface IProps {}

const componentName = "HomePage";
const log = debug(`front:${componentName}`);

/**
 * @name HomePage
 */
const HomePage = forwardRef((props: IProps, handleRef: ForwardedRef<any>) => {
  const rootRef = useRef<HTMLDivElement>(null);

  /**
   * playIn page transition
   * (remove this example if not use)
   */
  const playIn = (): Promise<void> => Promise.resolve();

  /**
   * playOut page transition
   * (remove this example if not use)
   */
  const playOut = (): Promise<void> => Promise.resolve();

  /**
   * Handle page for Stack
   * Minimal arguments should be: useStack({ componentName, handleRef, rootRef });
   * (remove playIn and playOut if not use)
   */
  useStack({ componentName, handleRef, rootRef, playIn, playOut });

  return (
    <div className={css.root} ref={rootRef}>



      test
      {componentName}
    </div>
  );
});

HomePage.displayName = componentName;
export default HomePage;
