import { registerRoot } from "remotion";

import BlogExample from "./compositions/blog-example";
import Delba from "./compositions/delba";
import Matt from "./compositions/matt";

registerRoot(function RemotionRoot() {
  return (
    <>
      <BlogExample />
      <Matt />
      <Delba />
    </>
  );
});
