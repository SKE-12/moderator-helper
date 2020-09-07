import React, { Component } from 'react';
import styled from 'styled-components';
import roleImgResolver from '../roleImgResolver';
import { Button } from '@material-ui/core';
import {
    Photo
} from 'solarxui';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Header = styled.h1`
    font-size: 32px;
    font-weight: bold;
    text-align: center
`

const RoleName = styled.h2`
    font-size: 24px;
    font-weight: bold;
`

const InputName = styled.input`
    font-size: 20px;
    border: 1px solid black;
    width: 40%
    vertical-align: middle;
    padding 1%;
    border-radius: 20px;
    outline: none;
`

class InputPage extends Component {

    render() {
        return (
            <Container>
                <Header>Input Name</Header>
                <Photo size={400} src={roleImgResolver('aphothecary')}/>
                <RoleName>Aphotecary</RoleName>
                <InputName/>
                <Button variant="outlined" style={{marginTop: "20px"}}>Submit</Button>
            </Container>
        )
    }
}

export default InputPage
