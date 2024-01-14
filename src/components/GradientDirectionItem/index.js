// Write your code here
import {ListElement, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {onClickChangeDirection, gradientDetails, isActive} = props
  const {directionId, displayText} = gradientDetails

  const gradientChange = () => {
    onClickChangeDirection(directionId)
  }

  return (
    <ListElement>
      <DirectionButton
        onClick={gradientChange}
        type="button"
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListElement>
  )
}

export default GradientDirectionItem
