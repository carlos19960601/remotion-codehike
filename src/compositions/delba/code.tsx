import { HighlightedCode, Pre } from "codehike/code";
import React from "react";

import { loadFont } from "@remotion/google-fonts/RobotoMono";
import { mark } from "./annotations/mark";
import { tokenTransitions, useTokenTransitions } from "./token-transitions";
const { fontFamily } = loadFont();

export function Code({
  oldCode,
  newCode,
  durationInFrames = 30,
}: {
  oldCode?: HighlightedCode;
  newCode: HighlightedCode;
  durationInFrames?: number;
}) {
  const { code, ref } = useTokenTransitions(oldCode, newCode, durationInFrames);
  return (
    <div
      style={{
        fontSize: 20,
        lineHeight: 1.6,
        fontFamily,
        color: "#fffa",
        width: "100%",
      }}
    >
      <div style={{ textAlign: "center", height: "1.5rem" }}>
        {newCode.meta}
      </div>
      <Pre ref={ref} code={code} handlers={[tokenTransitions, mark]} />
    </div>
  );
}
