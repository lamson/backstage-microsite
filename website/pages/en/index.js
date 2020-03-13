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
    const { config: siteConfig } = this.props;
    const { baseUrl } = siteConfig;

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

    const Experience = () => (
      <Block>
        {[
          {
            content:
              "Meet the first open-source infrastructure platform that puts developer experience first. With an elegant, unified UI for all your tooling, Backstage gets your developers up and running faster, which makes them happier. And a happier developer is a more productive developer.",
            imageAlign: "right",
            image: <React.Fragment>
              <img src={`${baseUrl}img/laptop-screen-bezel.svg`} className="laptop-screen-bezel" />
              <img src={`${baseUrl}img/laptop-screen.svg`} className="laptop-screen" />
              <img src={`${baseUrl}img/laptop-bottom.svg`} className="laptop-bottom" />
              <img src={`${baseUrl}img/laptop-keypad.svg`} className="laptop-keypad"/>
            </React.Fragment>,
            title: "Happy developers make happy code.",
            buttonContent: "Get started",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    );

    const Products = () => (
      <Block>
        {[
          {
            content:
              "Backstage ties together infrastructure components in a single and simple developer portal. No more digging through systems to find tools and docs.",
            imageAlign: "left",
            image: `${baseUrl}img/home-2.svg`,
            title: "Product teams should ship products, not fight with tools.",
            buttonContent: "Get started",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    )

    const Inventory = () => (
      <Block>
        {[
          {
            content: "Drives standardisation in your software ecosystem with one central developer portal that has all tools and technical documentation, easily searchable.",
            imageAlign: "right",
            image: `${baseUrl}img/home-3.svg`,
            title: "Imagine one inventory of all your software with clear ownership",
            buttonContent: "Get started",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    )

    const GoldenPath = () => (
      <Block>
        {[
          {
            content: "Backstage helps you setup a 1-click experience for creating software. Best practices are built in -- we call this Golden Paths. Standards your teams will love to adopt.",
            imageAlign: "left",
            image: `${baseUrl}img/home-4.svg`,
            title: "We believe in the Golden Path.",
            buttonContent: "Get started",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    )

    const Compliance = () => (
      <Block>
        {[
          {
            content: "We know. These things aren’t exactly fun. But they’re necessary. Think of Backstage as an investment - it makes running 5 services easier and wrangling 5000 services possible.",
            imageAlign: "right",
            image: `${baseUrl}img/home-5.svg`,
            title: "Hit the mark with compliance, privacy and security.",
            buttonContent: "Get started",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </Block>
    )

    return (
      <div className="mainContainer">
        <div className="stripe-bottom bg-grey-black content-experience">
          <Experience />
        </div>
        <div className="stripe content-block">
          <Products />
        </div>
        <div className="stripe action-block bg-teal">
          Get a sneak peek.
        </div>
        <div className="stripe content-block">
          <Experience />
        </div>
        <div className="stripe content-block bg-black-grey">
          <GoldenPath />
        </div>
        <div className="stripe action-block bg-teal">
          See for yourself.
        </div>
        <div className="stripe content-block">
          <Inventory />
        </div>
        <div className="stripe content-block bg-black-grey">
          <Compliance />
        </div>
        <div className="stripe-top action-block bg-teal">
          Get a demo.
        </div>
      </div>
    );
  }
}

module.exports = Index;
