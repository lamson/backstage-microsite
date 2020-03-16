const React = require("react");
const simpleComponent = (Component, baseClassName = '', mods = []) => {
    const SimpleComponent = props => {
        // Extra BEM modifiers, e.g. `Block__Container--reversed`
        const modClasses = mods.map(mod => props[mod] ? `${baseClassName}--${mod}` : undefined).filter(Boolean).join(' ')

        return <Component {...props} className={`${baseClassName} ${props.className || ''} ${modClasses}`}/>
    }
    SimpleComponent.displayName = `SimpleComponent(${Component}, ${baseClassName})`
    return SimpleComponent
}

const Block = simpleComponent('section', 'Block', ['small']);
Block.Container = simpleComponent('div', 'Block__Container', ['reversed'])
Block.TitleBox = simpleComponent('h1', 'Block__TitleBox', ['large'])
Block.TextBox = simpleComponent('div', 'Block__TextBox', ['wide'])
Block.Title = simpleComponent('h1', 'Block__Title')
Block.Paragraph = simpleComponent('p', 'Block__Paragraph')
Block.LinkButton = simpleComponent('a', 'Block__LinkButton')
Block.Quote = simpleComponent('p', 'Block__Quote')
Block.Graphics = ({children}) => (
    <div className='Block__GraphicsContainer'>
        <div className='Block__Graphics' children={children}/>
    </div>
)
Block.Graphic = props => {
    /* Coordinates and size are in % of graphics container size, e.g. width={50} is 50% of parent width */
    const {x = 0, y = 0, width = 0, src, className = ''} = props
    const style = Object.assign({left: `${x}%`, top: `${y}%`, width: `${width}%`}, props.style)
    return <img src={src} alt="" {...props} style={style} className={`Block__Graphic ${className}`}/>
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

module.exports = {
    Block,
    ActionBlock,
    Breakpoint
}