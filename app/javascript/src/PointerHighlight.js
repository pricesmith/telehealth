import React from 'react'

const animate = (handler) => {
  let request
  let frame = 0
  const loop = () => {
    request = requestAnimationFrame(loop)
    handler(frame++)
  }
  loop()
  return () => cancelAnimationFrame(request)
}

export default class extends React.Component {
  static defaultProps = {
    color: 'DodgerBlue',
    size: 120,
    duration: 20
  }

  state = {
    frame: null
  }

  constructor (...args) {
    super(...args)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onEnterFrame = this.onEnterFrame.bind(this)
  }

  componentDidMount () {
    window.addEventListener('mousedown', this.onMouseDown)
  }

  componentWillUnmount () {
    window.removeEventListener('mousedown', this.onMouseDown)
  }

  onMouseDown (e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
      element: e
    }, () => {
      let presentation = document.getElementById('presentation')
      if(e.target === presentation || presentation.contains(e.target)) {
        this.stopAnimation && this.stopAnimation()
        this.stopAnimation = animate(this.onEnterFrame)
      }
    })
  }
  // onMouseDown (e) {
  //   debugger
  //   this.setState({
  //     x: e.clientX,
  //     y: e.clientY,
  //     element: ""
  //   }, () => {
  //     this.stopAnimation && this.stopAnimation()
  //     this.stopAnimation = animate(this.onEnterFrame)
  //   })
  // }

  onEnterFrame (frame) {
    if (frame >= this.props.duration) {
      this.stopAnimation()
      this.setState({
        frame: null
      })
    } else {
      this.setState({
        frame: frame
      })
    }
  }

  render () {
    let { x, y, frame } = this.state
    if (frame === null) return null
    let { color, size, duration } = this.props
    let progress = frame / duration
    return (
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{
        pointerEvents: 'none',
        position: 'fixed',
        left: x - size / 2,
        top: y - size / 2
      }}>
        <circle fill={color} opacity={1 - progress} cx={size / 2} cy={size / 2} r={size / 2 * progress}></circle>
      </svg>
    )
  }
}
