import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 32px;
`

export const DirectionList = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
`

export const ColorInputContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

export const ColorItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`

export const Label = styled.p`
  color: #ffffff;
`

export const ColorInput = styled.input`
  border: none;
  padding: 0;
  background: none;
  width: 60px;
  height: 30px;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #ffffff;
  border: none;
  padding: 10px 16px;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`
