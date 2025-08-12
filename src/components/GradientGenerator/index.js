import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientContainer,
  Heading,
  DirectionList,
  ColorInputContainer,
  ColorItem,
  Label,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {id: 'TOP', value: 'top', displayText: 'Top'},
  {id: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {id: 'RIGHT', value: 'right', displayText: 'Right'},
  {id: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
    gradientColor1: '#8ae323',
    gradientColor2: '#014f7b',
  }

  onClickDirection = value => {
    this.setState({activeDirection: value})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onGenerateGradient = () => {
    const {activeDirection, color1, color2} = this.state
    this.setState({
      gradientDirection: activeDirection,
      gradientColor1: color1,
      gradientColor2: color2,
    })
  }

  render() {
    const {
      activeDirection,
      color1,
      color2,
      gradientDirection,
      gradientColor1,
      gradientColor2,
    } = this.state

    return (
      <GradientContainer
        direction={gradientDirection}
        color1={gradientColor1}
        color2={gradientColor2}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <p style={{color: '#ffffff'}}>Choose Direction</p>

        <DirectionList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.id}
              directionDetails={each}
              isActive={activeDirection === each.value}
              onClickDirection={this.onClickDirection}
            />
          ))}
        </DirectionList>

        <p style={{color: '#ffffff'}}>Pick the Colors</p>
        <ColorInputContainer>
          <ColorItem>
            <Label>{color1}</Label>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.onChangeColor1}
            />
          </ColorItem>
          <ColorItem>
            <Label>{color2}</Label>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.onChangeColor2}
            />
          </ColorItem>
        </ColorInputContainer>

        <GenerateButton type="button" onClick={this.onGenerateGradient}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
