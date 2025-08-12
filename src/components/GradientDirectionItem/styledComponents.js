import styled from 'styled-components'

export const DirectionItem = styled.li`
  margin: 8px;
`

export const DirectionButton = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  color: ${props => (props.isActive ? '#334155' : '#64748b')};
`
