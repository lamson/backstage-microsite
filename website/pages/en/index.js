/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const GridBlockWithButton = require(`${process.cwd()}/core/GridBlockWithButton.js`);

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.buttonContent}
        </a>
      </div>
    );

    const Block = props => (
      <Container
        align="left"
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlockWithButton
          align="left"
          contents={props.children}
          layout={props.layout}
        ></GridBlockWithButton>
      </Container>
    );

    const Register = () => (
      <Block>
        {[
          {
            content:
              "Your engineers deserve better. Meet Backstage, an open platform for building rad developer portals.",
            imageAlign: "right",
            image: `${baseUrl}img/home-image1.png`,
            title: "Happy engineers really do make happier code.",
            buttonContent: "Register",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              "A 1-click experience for creating new software that follows best practices. We call this Golden Paths. Standards your teams will love to adopt.",
            image: `${baseUrl}img/home-image2.svg`,
            imageAlign: "right",
            title:
              "Introduce standards that your teams will be happy to adopt.",
            buttonContent: "Explore the docs",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    );

    const Components = () => (
      <Block>
        {[
          {
            content:
              "Backstage ties together infrastructure components in a single, consistent, and simple developer portal. Let product teams focus on shipping products.",
            image: `${baseUrl}img/home-image3.png`,
            imageAlign: "left",
            title:
              "Don’t expose the innards of your infrastructure to product teams.",
            buttonContent: "Discover",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    );

    const Onboarding = () => (
      <Block>
        {[
          {
            content:
              "As the complexity of your software ecosystem growns, it gets harder for individual engineers to keep track of it all. Backstage helps make sense of it all. Not more jumping around between different systems -- all your tools and docs in one central location.",
            // image: `${baseUrl}img/home-image3.png`,
            imageAlign: "left",
            title: "Package up your complexity. Onboard people faster.",
            buttonContent: "Discover",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    );

    const Compliance = () => (
      <Block>
        {[
          {
            content:
              "These things are not as fun as chasing the next productivity boost. But without them your company may not be there tomorrow. Backstage makes running 5 services easier. And 5000 services possible. A single inventory of all your software with clear ownership.",
            // image: `${baseUrl}img/home-image3.png`,
            imageAlign: "left",
            title:
              "Compliance, privacy and security. We know. You don’t want to think about that right now.",
            buttonContent: "Discover",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    );

    return (
      <div>
        <div className="mainContainer homeContainer">
          <Register />
          <Components />
          <TryOut />
          <Onboarding />
          <Compliance />
        </div>
      </div>
    );
  }
}

module.exports = Index;
