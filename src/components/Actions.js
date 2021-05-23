import { Container, HStack } from './Layout'
import Title from './Title/Title.js'
import ButtonGroup from './ButtonGroup/ButtonGroup'

function Actions() {
  return (
    <Container>
      <HStack>
        <Title>
          In Water!
        </Title>
        <ButtonGroup/>
      </HStack>
    </Container>
  )
}

export default Actions
