/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Index extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    const { baseUrl } = siteConfig;

    const simpleComponent = (Component, baseClassName = '', mods = []) => {
      const SimpleComponent = props => {
        // Extra BEM modifiers, e.g. `Block__Container--reversed`
        const modClasses = mods.map(mod => props[mod] ? `${baseClassName}--${mod}` : undefined).filter(Boolean).join(' ')
    
        return <Component {...props} className={`${baseClassName} ${props.className || ''} ${modClasses}`}/>
      }
      SimpleComponent.displayName = `SimpleComponent(${Component}, ${baseClassName})`
      return SimpleComponent
    }
    
    const Block = simpleComponent('section', 'Block');
    Block.Container = simpleComponent('div', 'Block__Container', ['reversed'])
    Block.TextBox = simpleComponent('div', 'Block__TextBox')
    Block.Title = simpleComponent('h1', 'Block__Title')
    Block.Paragraph = simpleComponent('p', 'Block__Paragraph')
    Block.Graphics = ({children}) => (
      <div className='Block__GraphicsContainer'>
        <div className='Block__Graphics' children={children}/>
      </div>
    )
    Block.Graphic = props => {
      /* Coordinates and size are in % of graphics container size, e.g. width={50} is 50% of parent width */
      const {x = 0, y = 0, width = 0, path, className = ''} = props
      const style = Object.assign({left: `${x}%`, top: `${y}%`, width: `${width}%`}, props.style)
      return <img src={baseUrl + path} alt="" {...props} style={style} className={`Block__Graphic ${className}`}/>
    }
    
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
      <main className="MainContent">
        <Block className="stripe bg-grey-black">
          <Block.Container>
            <Block.TextBox>
              <Block.Title>Happy developers make happy code.</Block.Title>
              <Block.Paragraph>Meet the first open-source infrastructure platform that puts developer experience first. With an elegant, unified UI for all your tooling, Backstage gets your developers up and running faster, which makes them happier. And a happier developer is a more productive developer.</Block.Paragraph>
              <a className="button" href={"https://github.com/spotify/backstage"}>Get started</a>
            </Block.TextBox>
            <Block.Graphics>
              <Block.Graphic x={-12.5} y={16} width={120} path='img/laptop.svg'/>
              <Block.Graphic x={5.5} y={21.5} width={89} path='img/laptop-screen.svg'/>
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block className="stripe bg-black">

          <Block.Container reversed>
            <Block.TextBox>
              <Block.Title>As simple as writing a plugin.</Block.Title>
              <Block.Paragraph>Backstage makes unifying all of your infrastructure tooling, services, and documentation as simple as writing a plugin. With all your developer tools
in one place, your engineers will always know where to find the right tool for the job. And they’ll already know how to use it, too — because now all your tools use the same, easy-to-use UI.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Block.Graphic x={-20} y={-5} width={140} path='img/plugin-overlay.svg'/>
              <Block.Graphic x={5} y={30} width={90} path='img/triple-icons.svg'/>
            </Block.Graphics>
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
              <Breakpoint
                wide={<Block.Graphic x={-28} y={10} width={260} path='img/logos-background.svg'/>}
                narrow={<div className='logos-mobile-background'/>}
              />
              <Block.Graphic x={20} y={10} width={60} path='img/logos.svg'/>
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
              <Block.Graphic x={5} y={10} width={100} path='img/developers.svg'/>
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
              <Block.Graphic x={5} y={10} width={100} path='img/open-platform.svg'/>
            </Block.Graphics>
          </Block.Container>
        </Block>

        <Block className="stripe bg-black">
          <Block.Container reversed>
            <Block.TextBox>
              <Block.Title>Compliance, privacy, and security, oh my!</Block.Title>
              <Block.Paragraph>Managing compliance across five services is one thing. Managing 5,000 is quite another. Backstage makes it possible to scale and makes all the hairy bits less hairy. Plus, happier lawyers, accountants, and security officers also make for happier developers.</Block.Paragraph>
            </Block.TextBox>
            <Block.Graphics>
              <Block.Graphic x={5} y={-5} width={100} path='img/compliance.svg'/>
            </Block.Graphics>
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
      </main>
    );
  }
}

module.exports = Index;
