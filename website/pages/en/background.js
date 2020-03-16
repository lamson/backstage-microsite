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
      <Block className="stripe bg-grey-black">
        <Block.Container>
          <Block.TextBox>
            <Block.Title>The Spotify Story</Block.Title>
            <Block.Paragraph>A best-in-class developer portal — from a music company? Since the very beginning, Spotify has been known for its agile, autonomous engineering culture. More than music, we’re a tech company that has always put engineers first, empowering our developers with the ability to innovate quickly and at scale. Backstage is the natural result of that focus.</Block.Paragraph>
          </Block.TextBox>
          <Block.Graphics>
            <Block.Graphic src={`${baseUrl}img/spotify-story.svg`} x={0} y={0} width={100}/>
          </Block.Graphics>
        </Block.Container>
      </Block>

      <Block className="stripe bg-black">
        <Block.Container>
          <Block.Quote>
            Openness, community, and extendability make up the foundation of Backstage.
          </Block.Quote>
        </Block.Container>
      </Block>

      <Block className="stripe bg-black">
        <Block.Container>
          <Block.TextBox>
            <Block.Title>Productivity and happiness, together again</Block.Title>
          </Block.TextBox>
          <Block.TextBox>
            <Block.Paragraph>Since adopting Backstage internally at Spotify, we’ve seen a 55% decrease in onboarding time for our engineers (as measured by time until 10th pull request). For a company growing as fast as ours, this is a game-changing improvement to both productivity and developer happiness — which we believe go hand in hand. Instead of keeping all those gains for ourselves, we decided to share that developer joy by making the Backstage platform open source. After all, openness, community, and extendability are all at the heart of Backstage.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block className="stripe bg-grey-black">
        <Block.Container>
          <Block.TextBox>
            <Block.Title>Why did we build it?</Block.Title>
          </Block.TextBox>
          <Block.TextBox>
            <Block.Paragraph>Short answer: We had to for the sanity of our engineers. From the start, engineering teams at Spotify have been organized almost like tiny independent states — each with a distinct mission and the freedom to decide how to best fulfil that mission. From many self-sufficient teams come many innovations. But as the number of teams grew — and the number of tools they built grew with them — our ecosystem became too complex. Fragmentation was increasing the cognitive load on engineers. We started seeing development slow down and engineers getting more frustrated. A very bad, no-good cycle.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block className="stripe bg-black">
        <img src={`${baseUrl}img/photo-montage.svg`}/>
      </Block>

      <Block className="stripe bg-black">
        <Block.Container>
          <Block.Quote>
            A one-stop shop for all things infrastructure.<br/> A platform for platforms.
          </Block.Quote>
        </Block.Container>
      </Block>

      <Block className="stripe bg-dots bg-dots-opacity">
        <Block.Container className="opacity-override">
          <Block.TextBox>
            <Block.Title>Not just adopted, embraced</Block.Title>
          </Block.TextBox>
          <Block.TextBox>
            <Block.Paragraph>In 2019, more than 200 engineers inside Spotify contributed to Backstage. We now have 110+ plugins developed by 50+ teams. And 80% of contributions came from people outside the Backstage core team. Any Spotifier, not just engineers, but also compliance and security team members, can easily discover all the software in our ecosystem, see who owns it, and access technical documentation in a centralised location.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block className="stripe bg-dots">
        <img src={`${baseUrl}img/embraced.svg`}/>
      </Block>

      <Block className="stripe bg-grey-black">
        <Block.Container>
          <Block.TextBox>
            <Block.Title>T-shaped engineers, lighter cognitive loads </Block.Title>
          </Block.TextBox>
          <Block.TextBox>
            <Block.Paragraph>By providing a consistent experience, even across domains, Backstage helps engineers be T-shaped. They don’t need to learn an entirely new set of tools, each with a different UX. Because the tools for troubleshooting a failing data pipeline are similar enough to the ones for deploying a website, a T-shaped web engineer is able to help out with basic data engineering tasks. A familiar, well-designed developer experience reduces the cognitive load on engineers. They spend less time searching and more time building. More energy is spent at the top of the stack instead of the bottom. Features bloom. And developer happiness goes up along with productivity.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>
    </div>
  );
}

module.exports = Background;
