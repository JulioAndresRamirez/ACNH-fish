import React from 'react'
import { Container, HStack, Block } from '../Layout'
import WithLove from '../WithLove'

function Footer() {
  return (
    <footer className="py-5">
      <Container>
        <Block>
          <HStack>
            <WithLove />
          </HStack>
        </Block>
      </Container>
    </footer>
  );
}

export default Footer
