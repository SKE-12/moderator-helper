import React, { useState } from "react";

import Case from "case";
import { Photo } from "solarxui";
import styled from "styled-components";

import { Button } from "@material-ui/core";

import { useGameState } from "../contexts/gameController";
import Player from "../models/Player";
import roleImgResolver, { RoleImageName } from "../roleImgResolver";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

const RoleName = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const InputName = styled.input`
  font-size: 20px;
  border: 1px solid black;
  width: 40%;
  vertical-align: middle;
  padding: 1%;
  border-radius: 20px;
  outline: none;
`;

const InputPage = () => {
  const { activePlayerClasses, setPlayerAndStartGame } = useGameState(
    (gameState) => ({
      activePlayerClasses: gameState.activePlayerClasses,
      setPlayerAndStartGame: gameState.setPlayerAndStartGame,
    })
  );
  const [activeClasses, setActiveClasses] = useState<any>(activePlayerClasses);
  const [players, setPlayers] = useState<Player[]>([]);
  const [name, setName] = useState("");

  const onChange = ({ target: { value } }: any) => {
    setName(value);
  };

  const onSubmit = () => {
    const [ActiveClass, ...otherClasses] = activeClasses;
    const player = new ActiveClass() as Player;
    player.playerName = name;

    if (otherClasses.length === 0) {
      const fullPlayers = [...players, player].sort((p1, p2) =>
        p1.order < p2.order ? 1 : -1
      );
      setPlayerAndStartGame(fullPlayers);
    } else {
      setActiveClasses(otherClasses);
      setName("");
      setPlayers([...players, player]);
    }
  };

  const activeClass = activeClasses[0];
  const player = new activeClass() as Player;
  const roleName = player.role;

  return (
    <Container>
      <Header>Input Name</Header>
      <Photo size={400} src={roleImgResolver(roleName as RoleImageName)} />
      <RoleName>{roleName}</RoleName>
      <div hidden={roleName !== "PlagueDoctor"}>
        (หากมี Crow ในเกม ให้ Crow ลืมตาขึ้นมาด้วย และให้ Plague Doctor
        ทุกคนยกนิ้วโป้งขึ้น)
      </div>
      <div hidden={roleName !== "Apothecary"}>
        ให้เรียก Healer ขึ้นมาด้วย แล้วให้ Apothecary ยกนิ้วโป้งขึ้น
      </div>
      <div hidden={roleName !== "SinisterVillager"}>
        ให้เรียก Crow ลืมตาขึ้นมาด้วยแล้วให้ Plague Doctor ทุกคนชูนิ้วโป้งขึ้น
      </div>
      <InputName onChange={onChange} value={name} />
      <Button
        variant="outlined"
        style={{ marginTop: "20px" }}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default InputPage;
