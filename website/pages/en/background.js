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
      <Block className="stripe-bottom bg-grey-black">
        <Block.Container>
          <Block.TitleBox large>The Spotify Story</Block.TitleBox>
          <Block.TextBox wide>
            <Block.Paragraph>A best-in-class developer portal — from a music company? Since the very beginning, Spotify has been known for its agile, autonomous engineering culture. More than music, we’re a tech company that has always put engineers first, empowering our developers with the ability to innovate quickly and at scale. Backstage is the natural result of that focus.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block className="stripe bg-black">
        <Block.Container>
          <Block.TitleBox>Productivity and happiness, together again</Block.TitleBox>
          <Block.TextBox wide>
            <Block.Paragraph>Since adopting Backstage internally at Spotify, we’ve seen a 55% decrease in onboarding time for our engineers (as measured by time until 10th pull request).</Block.Paragraph>
            <Block.Paragraph>For a company growing as fast as ours, this is a game-changing improvement to both productivity and developer happiness — which we believe go hand in hand.</Block.Paragraph>
            <Block.Paragraph>Instead of keeping all those gains for ourselves, we decided to share that developer joy by making the Backstage platform open source. After all, openness, community, and extendability are all at the heart of Backstage.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block small className="stripe bg-black">
        <Block.QuoteContainer>
          <Block.Divider quote />
          <Block.Quote>
            Openness, community, and extendability make up the foundation of Backstage.
          </Block.Quote>
        </Block.QuoteContainer>
      </Block>

      <Block className="stripe bg-grey-black">
        <Block.Container>
          <Block.TitleBox>Why did we build it?</Block.TitleBox>
          <Block.TextBox wide>
            <Block.Paragraph>Short answer: we had to in order to reduce friction for our engineers.</Block.Paragraph>
            <Block.Paragraph>From the start, engineering teams at Spotify have been organized almost like independent states — each with a distinct mission and the freedom to decide how to best fulfil that mission. From many self-sufficient teams come many innovations.</Block.Paragraph>
            <Block.Paragraph>But as the number of teams grew — and the number of tools they built grew with them — our ecosystem became too complex. Fragmentation was increasing the cognitive load on engineers. We started seeing a lot more friction and engineers having to sort problems outside of their main scope.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block className="stripe bg-black">
        <Block.Container>
          <Block.TitleBox>A platform for platforms</Block.TitleBox>
          <Block.TextBox wide>
            <Block.Paragraph>Our idea was to unify all our tooling, services, and documentation into a single location, with a single interface, behind a single layer of abstraction. So it’s easy for engineers to share solutions and even easier for anyone to find them. Not another tool, but a better toolbox. A one-stop shop for all things infrastructure. A platform of platforms.</Block.Paragraph>
            <Block.Paragraph>Leveraging the simplicity of plugins and a thoughtful UI, now every question has the same answer. How do I find out how many pods service X is running in production? Go to Backstage. How do I integrate this data set into my app? Backstage. Is this ML service acting weird for anyone else? Figure it out on Backstage.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block small className="stripe bg-black">
        <Block.QuoteContainer>
          <Block.Divider quote />
          <Block.Quote>
            A one-stop shop for all things infrastructure.<br/> A platform for platforms.
          </Block.Quote>
        </Block.QuoteContainer>
      </Block>

      <Block small className="stripe bg-dots bg-dots-opacity">
        <Block.Container className="opacity-override">
          <Block.TitleBox>Not just adopted, embraced</Block.TitleBox>
          <Block.TextBox wide>
            <Block.Paragraph>In 2019, more than 200 engineers inside Spotify contributed to Backstage. We now have 110+ plugins developed by 50+ teams. And 80% of contributions came from people outside the Backstage core team.</Block.Paragraph>
            <Block.Paragraph>Any Spotifier, not just engineers, but also compliance and security team members, can easily discover all the software in our ecosystem, see who owns it, and access technical documentation in a centralised location.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>

      <Block small className="stripe bg-dots">
        <Block.Container className="opacity-override stats_label_block">
          <Block.Paragraph className="stats_label">
            A LOOK AT THE NUMBERS
          </Block.Paragraph>
          <Block.Container>
            <img src={`${baseUrl}img/embraced.svg`}/>
          </Block.Container>
        </Block.Container>
      </Block>
      

      <Block className="stripe-top bg-grey-black">
        <Block.Container>
          <Block.TitleBox>T-shaped engineers, lighter cognitive loads </Block.TitleBox>
          <Block.TextBox wide>
            <Block.Paragraph>By providing a consistent experience, even across domains, Backstage helps engineers be <a href="https://medium.com/@jchyip/why-t-shaped-people-e8706198e437">T-shaped</a>. They don’t need to learn an entirely new set of tools, each with a different UX. Because the tools for troubleshooting a failing data pipeline are similar enough to the ones for deploying a website, a T-shaped web engineer is able to help out with basic data engineering tasks.</Block.Paragraph>
            <Block.Paragraph>A familiar, well-designed developer experience reduces the cognitive load on engineers. They spend less time searching and more time building. More energy is spent at the top of the stack instead of the bottom. Features bloom. And developer happiness goes up along with productivity.</Block.Paragraph>
          </Block.TextBox>
        </Block.Container>
      </Block>
    </div>
  );
}

module.exports = Background;
