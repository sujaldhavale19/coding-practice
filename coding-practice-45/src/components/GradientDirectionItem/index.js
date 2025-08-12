import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, onClickDirection} = props
  const {displayText, value} = directionDetails

  const changeDirection = () => {
    onClickDirection(value)
  }

  return (
    <DirectionItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={changeDirection}
      >
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
