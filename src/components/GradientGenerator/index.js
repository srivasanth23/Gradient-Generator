import {Component} from 'react'

import {
  AppContainer,
  Heading,
  Para,
  UnorderedList,
  ColorsContainer,
  InnerColorContainer,
  ColorValue,
  InputElement,
  GenerateButtonElement,
  ResponsiveContainer,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    primaryColor: '#8ae323',
    secondaryColor: ' #014f7b',
    activeGradientDirection: gradientDirectionsList[0].directionId,
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323, #014f7b`,
  }

  onClickChangeDirection = d => {
    this.setState({activeGradientDirection: d})
  }

  onChangePrimaryColor = event => {
    this.setState({primaryColor: event.target.value})
  }

  onChangeSecondaryColor = event => {
    this.setState({secondaryColor: event.target.value})
  }

  renderView = () => {
    const {primaryColor, secondaryColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${primaryColor}, ${secondaryColor}`,
    })
  }

  render() {
    const {
      primaryColor,
      secondaryColor,
      activeGradientDirection,
      gradientValue,
    } = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading> Generate a CSS Color Gradient </Heading>
          <Para> Choose Direction </Para>
          <UnorderedList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                gradientDetails={each}
                onClickChangeDirection={this.onClickChangeDirection}
                isActive={activeGradientDirection === each.directionId}
              >
                {each.displayText}
              </GradientDirectionItem>
            ))}
          </UnorderedList>
          <Para>Pick the Colors</Para>
          <ColorsContainer>
            <InnerColorContainer>
              <ColorValue> {primaryColor} </ColorValue>
              <InputElement
                type="color"
                value={primaryColor}
                onChange={this.onChangePrimaryColor}
              />
            </InnerColorContainer>
            <InnerColorContainer>
              <ColorValue> {secondaryColor} </ColorValue>
              <InputElement
                type="color"
                value={secondaryColor}
                onChange={this.onChangeSecondaryColor}
              />
            </InnerColorContainer>
          </ColorsContainer>
          <GenerateButtonElement onClick={this.renderView}>
            Generate
          </GenerateButtonElement>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
