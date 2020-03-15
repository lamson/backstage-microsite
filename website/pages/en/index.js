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

    const OldBlock = props => (
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
      <OldBlock>
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
      </OldBlock>
    );

    const Products = () => (
      <OldBlock>
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
      </OldBlock>
    )

    const Inventory = () => (
      <OldBlock>
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
      </OldBlock>
    )

    const GoldenPath = () => (
      <OldBlock>
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
      </OldBlock>
    )

    const Compliance = () => (
      <OldBlock>
        {[
          {
            content: "We know. These things aren’t exactly fun. But they’re necessary. Think of Backstage as an investment - it makes running 5 services easier and wrangling 5000 services possible.",
            imageAlign: "right",
            image: `<img src="${baseUrl}img/home-5.svg" />`,
            title: "Hit the mark with compliance, privacy and security.",
            buttonContent: "Get started",
            href: "https://github.com/spotify/backstage"
          }
        ]}
      </OldBlock>
    )

    const simpleComponent = (Component, baseClassName = '') => {
      const SimpleComponent = props => (
        <Component {...props} className={`${baseClassName} ${props.className || ''}`}/>
      )
      SimpleComponent.displayName = `SimpleComponent(${Component}, ${baseClassName})`
      return SimpleComponent
    }

    const Block = simpleComponent('section', 'Block');
    Block.Container = simpleComponent('div', 'Block__Container')
    Block.TextBox = simpleComponent('div', 'Block__TextBox')
    Block.Title = simpleComponent('h1', 'Block__Title')
    Block.Paragraph = simpleComponent('p', 'Block__Paragraph')
    Block.Graphics = simpleComponent('div', 'Block__Graphics')

    const ActionBlock = simpleComponent('section', 'ActionBlock')
    ActionBlock.Title = simpleComponent('h1', 'ActionBlock__Title')
    ActionBlock.Link = simpleComponent('a', 'ActionBlock__Link')

    const Breakpoint = ({narrow, wide}) => (
      <React.Fragment>
        <div className='Breakpoint--narrow'>{narrow}</div>
        <div className='Breakpoint--wide'>{wide}</div>
      </React.Fragment>
    )

    const OverlayImg = props => {
      const {x, y, path, className = ''} = props
      const style = Object.assign({left: x, top: y}, props.style)
      return <img src={baseUrl + path} alt="" {...props} style={style} className={`OverlayImg ${className}`}/>
    }

    return (
      <div className="mainContainer">
        <Block className="stripe bg-grey-black">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>Happy developers make happy code.</Block.Title>
              <Block.Paragraph>Meet the first open-source infrastructure platform that puts developer experience first. With an elegant, unified UI for all your tooling, Backstage gets your developers up and running faster, which makes them happier. And a happier developer is a more productive developer.</Block.Paragraph>
              <a className="button" href={"https://github.com/spotify/backstage"}>Get started</a>
            </Block.TextBox>
            <Block.Graphics>
              <OverlayImg path='img/laptop.svg' x={0} y={0}/>
              <img src='img/laptop-screen.svg' className="laptop-screen"/>
            </Block.Graphics>
          </Block.Container>
        </Block>
        <Block className="stripe bg-black">
          <Block.Container>
            <Block.Graphics>
              <OverlayImg path='img/plugin.svg' x={-82} y={-100}/>
            </Block.Graphics>
            <Block.TextBox>
              <Block.Title>As simple as writing a plugin.</Block.Title>
              <Block.Paragraph>Backstage makes unifying all of your infrastructure tooling, services, and documentation as simple as writing a plugin. With all your developer tools
in one place, your engineers will always know where to find the right tool for the job. And they’ll already know how to use it, too — because now all your tools use the same, easy-to-use UI.</Block.Paragraph>
            </Block.TextBox>
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            Get a sneak peek.
          </ActionBlock.Title>
          <ActionBlock.Link href='https://github.com/spotify/backstage'>
            GitHub
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe bg-dots">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>Less wrangling, more building.</Block.Title>
              <Block.Paragraph>The philosophy behind Backstage is simple: Don't expose your engineers to the full complexity of your infrastructure tooling. Engineers should be shipping code — not figuring out a whole new toolset every time they want to implement the basics.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics style={{margin: '0 100px'}}>
              <img src={`${baseUrl}img/logos.svg`}/>
              <Breakpoint
                wide={<OverlayImg path='img/logos-background.svg' x={-320} y={-50}/>}
                narrow={<div className='logos-mobile-background'/>}
              />
            </Block.Graphics>
          </Block.Container>
        </Block>
        
        <Block className="stripe bg-grey-black">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>Developers are people, too.</Block.Title>
              <Block.Paragraph>Why shouldn’t developer tools provide a first-class user experience? After all, engineers are people, too. Backstage is elegantly designed to make a diverse ecosystem of plugins, components, and frameworks easier to access and easier to use. How? By doing what other developer portals forget to consider: the developer on the other end of the portal.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <OverlayImg path='img/developers.svg' x={0} y={0}/>
            </Block.Graphics>
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            See for yourself.
          </ActionBlock.Title>
          <ActionBlock.Link href='https://github.com/spotify/backstage'>
            GitHub
          </ActionBlock.Link>
        </ActionBlock>

        <Block className="stripe bg-grey-black">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>An open platform inside and out.</Block.Title>
              <Block.Paragraph>As a fully extendable platform, Backstage enables infrastructure teams to integrate new ideas from wherever they come from — whether that’s the open source community at large or the people who understand your infrastructure pain points the best: your own engineers. This extendibility is one reason why Backstage wasn’t just adopted, but embraced by Spotify’s own engineers.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <OverlayImg path='img/open-platform.svg' x={0} y={0}/>
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block className="stripe bg-black">
          <Block.Container>
            <Block.Graphics>
              <OverlayImg path='img/compliance.svg' x={-82} y={-100}/>
            </Block.Graphics>
            <Block.TextBox>
              <Block.Title>Compliance, privacy, and security, oh my!</Block.Title>
              <Block.Paragraph>Managing compliance across five services is one thing. Managing 5,000 is quite another. Backstage makes it possible to scale and makes all the hairy bits less hairy. Plus, happier lawyers, accountants, and security officers also make for happier developers.</Block.Paragraph>
            </Block.TextBox>
          </Block.Container>
        </Block>

        <ActionBlock className="stripe bg-teal">
          <ActionBlock.Title>
            Get a demo.
          </ActionBlock.Title>
          <ActionBlock.Link href='https://github.com/spotify/backstage'>
            GitHub
          </ActionBlock.Link>
        </ActionBlock>
      </div>
    );
  }
}

module.exports = Index;
