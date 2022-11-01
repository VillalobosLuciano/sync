import React from 'react';
import { TileWrapper, TileBackground, TileContent, Tile } from './Tile';
import {
  SolutionBackground,
  SolutionContainer,
  SolutionLeft,
  SolutionRight
} from './Solution';
import Image from 'next/image';
import { SolutionLink } from './Solution';

const Solutions = () => (
  <TileWrapper numberOfTiles={3}>
    <TileBackground>
      <SolutionBackground />
    </TileBackground>
    <TileContent>
      <Tile
        tile={0}
        renderContent={({ progress }) => (
          <SolutionContainer>
            <SolutionLeft progress={progress}>
              <h1>smart lighting</h1>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SolutionLink href="">Lighting systems</SolutionLink>
              </div>
            </SolutionLeft>
            <SolutionRight progress={progress}>
              <Image
                src="https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
                alt="smart lighting"
                width={700}
                height={1000}
                layout="responsive"
              />
            </SolutionRight>
          </SolutionContainer>
        )}
      ></Tile>
      <Tile
        tile={1}
        renderContent={({ progress }) => (
          <SolutionContainer>
            <SolutionLeft progress={progress}>
              <h1>Spatial Audio</h1>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SolutionLink href="">Dolby Atmos SS</SolutionLink>
              </div>
            </SolutionLeft>
            <SolutionRight progress={progress}>
              <Image
                src="https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
                alt="smart lighting"
                width={700}
                height={1000}
                layout="responsive"
              />
            </SolutionRight>
          </SolutionContainer>
        )}
      ></Tile>
      <Tile
        tile={2}
        renderContent={({ progress }) => (
          <SolutionContainer>
            <SolutionLeft progress={progress}>
              <h1>smart lighting</h1>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <SolutionLink href="">Lighting systems</SolutionLink>
              </div>
            </SolutionLeft>
            <SolutionRight progress={progress}>
              <Image
                src="https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
                alt="smart lighting"
                width={700}
                height={1000}
                layout="responsive"
              />
            </SolutionRight>
          </SolutionContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Solutions;
