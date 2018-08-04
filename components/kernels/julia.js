// @flow
import * as React from "react";

import Kernel from "./kernel";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/styles/hljs";
import {
  ContentSection,
  ContentSectionPane
} from "../content-section/content-section";

const install = `Pkg.add("IJulia")`;

export default () => (
  <ContentSection>
    <ContentSectionPane full>
      <Kernel
        displayName="Julia"
        repository="https://github.com/JuliaLang/IJulia.jl"
        installURL="https://irkernel.github.io/installation/"
        logo="https://raw.githubusercontent.com/JuliaLang/IJulia.jl/master/deps/ijulialogo.png"
      >
        <h3>Installation</h3>
        <div className="columns">
          <div className="column">
            <h4>Within Julia</h4>
            <SyntaxHighlighter language="julia" style={github}>
              {install}
            </SyntaxHighlighter>
          </div>
        </div>
      </Kernel>
    </ContentSectionPane>
  </ContentSection>
);
