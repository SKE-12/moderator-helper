import React, { useState } from "react";

// @ts-ignore
import Select from "react-dropdown-select";
import { Button, Gap, Modal } from "solarxui";
import styled from "styled-components";

import { useGameState } from "../../contexts/gameController";
import Player from "../../models/Player";

const Container = styled.div`
  padding: 16px;
`;

const Danger = styled(Button)`
  background-color: red !important;
`;

const Wrapper = styled.div`
  > div {
    overflow: visible !important;
  }
`;

const VoteOutModal = () => {
  const [state, setState] = useState("none");
  const [currentSelect, setCurrentSelect] = useState<Player>();
  const { players, voteOut } = useGameState((gameState) => ({
    players: gameState.getAlivePlayer().map((player) => ({
      value: player,
      label: player.playerName,
    })),
    voteOut: gameState.voteOut,
  }));
  const onVoteOutStart = () => {
    setState("start");
  };

  const onVoteSelect = () => {
    if (state === "start") {
      setState("select");
    } else {
      voteOut(currentSelect!);
    }
  };

  const onCancel = () => {
    setState("none");
    setCurrentSelect(undefined);
  };

  return (
    <>
      <Button onClick={onVoteOutStart}>Vote Out</Button>
      {state !== "none" && (
        <Wrapper>
          <Modal isOpen>
            <Container>
              <Gap type="vertical" size="8px">
                {state === "start" ? (
                  <>
                    <div className="title">Vote Out</div>
                    {/** @ts-ignore */}
                    <Select
                      options={players}
                      values={currentSelect as any}
                      dropdownPosition="top"
                      onChange={([value]) => setCurrentSelect(value.value)}
                    />
                  </>
                ) : (
                  <div>
                    {currentSelect?.playerName} will die and go to night phase
                  </div>
                )}
                <Gap size="8px">
                  <Danger onClick={onCancel}>Cancel</Danger>
                  <Button onClick={onVoteSelect}>OK</Button>
                </Gap>
              </Gap>
            </Container>
          </Modal>
        </Wrapper>
      )}
    </>
  );
};

export default VoteOutModal;
