import React from "react";
import Layout from "./src/components/layout";
// import Fur from "./src/components/fur"

const transitionDelay = 350;
// const fur = new Fur();

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};

// export const onRouteUpdate = ({ location, prevLocation }) => {
//   if (location.pathname == '/') {
//     fur.reset();
//     fur.draw();
//   } else {
//     fur.clear()
//   }
// }
