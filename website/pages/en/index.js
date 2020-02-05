/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const GridBlockWithButton = require(`${process.cwd()}/core/GridBlockWithButton.js`);

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

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
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlockWithButton
          align="left"
          contents={props.children}
          layout={props.layout}>
        </GridBlockWithButton>
      </Container>
    );

    const Register = () => (
      <Block>
        {[
          {
            content:
              'Your engineers deserve better. Meet Backstage, an open platform for building rad developer portals.',
            imageAlign: 'right',
            image: `${baseUrl}img/home-image1.png`,
            title: 'Happy engineers really do make happier code.',
            buttonContent: 'Register',
            href: 'https://github.com/spotify/backstage'
          },
        ]
      }
      </Block>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              "Empower your autonomous teams to manage software at scale with an easy, out-of-the-box, developer touchpoint",
            image: `${baseUrl}img/home-image2.svg`,
            imageAlign: 'left',
            title: 'Makes coding “Hello World” look difficult.',
            buttonContent: 'Explore the docs',
            href: 'https://github.com/spotify/backstage'
          },
        ]}
      </Block>
    );

    const Components = () => (
      <Block>
        {[
          {
            content:
              'Backstage ties together infrastructure components in a single, consistent, and simple developer portal.',
            image: `${baseUrl}img/home-image3.png`,
            imageAlign: 'right',
            title: 'The life-changing magic of tidying your infra up',
            buttonContent: 'Discover',
            href: 'https://github.com/spotify/backstage'
          },
        ]}
      </Block>
    );

    return (
      <div>
        <div className="mainContainer homeContainer">
          <Register />
          <TryOut />
          <Components />
        </div>
      </div>
    );
  }
}

module.exports = Index;
