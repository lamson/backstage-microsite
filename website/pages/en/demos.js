/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const Components = require(`${process.cwd()}/core/Components.js`);
const Block = Components.Block;

const Background = (props) => {
  const { config: siteConfig } = props;
  const { baseUrl } = siteConfig;
  return (
    <div className="mainWrapper">

      <Block small className="stripe-bottom bg-black-grey">
        <Block.Container style={{justifyContent: "flex-start"}}>
          <Block.TextBox>
            <Block.Title>How to create a microservice (or any component).</Block.Title>
            <Block.Paragraph>You’re a Spotify engineer about to build a new microservice using Spring Boot. Where do you start? Search for a quick start guide online? Create an empty repo on GitHub? Copy and paste an old project? Nope. Just go to Backstage, and you’ll be up and running in two minutes — with a “Hello World” app, CI, and documentation all automatically set up and configured in a standardized way.</Block.Paragraph>
            <Block.LinkButton href={"https://www.youtube.com/watch?v=U1iwe3L5pzc"}>View on YouTube</Block.LinkButton>
          </Block.TextBox>
          <Block.TextBox>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/U1iwe3L5pzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block className="stripe-bottom bg-grey-black">
      <Block.Container style={{justifyContent: "flex-start"}}>
        <Block.TextBox>
          <Block.Title>How to manage data pipelines (aka workflows).</Block.Title>
          <Block.Paragraph>We manage a lot of data pipelines here at Spotify. So, of course, we made a great workflows plugin for our version of Backstage. All our workflow tools — including a scheduler, log inspector, data lineage graph, and configurable alerts — are integrated into one simple interface.</Block.Paragraph>
          <Block.LinkButton href={"https://www.youtube.com/watch?v=rH46MLNZIPM "}>View on YouTube</Block.LinkButton>
        </Block.TextBox>
        <Block.TextBox>
          <iframe width="800" height="500" src="https://www.youtube.com/embed/rH46MLNZIPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Block.TextBox>
      </Block.Container>
      </Block>
    </div>
  );
}

module.exports = Background;
