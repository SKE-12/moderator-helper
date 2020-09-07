import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';

import { context } from '../contexts/gameController';
import Beggar from '../models/Role/Beggar';
import Blacksmith from '../models/Role/Blacksmith';
import ContagiousVillager from '../models/Role/ContagiousVillager';
import Crow from '../models/Role/Crow';
import Elder from '../models/Role/Elder';
import FallenAngel from '../models/Role/FallenAngel';
import Healer from '../models/Role/Healer';
import Huntress from '../models/Role/Huntress';
import PlagueDoctor from '../models/Role/PlagueDoctor';
import Priest from '../models/Role/Priest';
import Sentry from '../models/Role/Sentry';
import SinisterVillager from '../models/Role/SinisterVillager';
import Undertaker from '../models/Role/Undertaker';
import Apothecary from '../models/Role/Apothecary';
import Villager from '../models/Role/Villager';
import WeakVillager from '../models/Role/WeakVillager';

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

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    width: 100%;
`

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    width: 100%;
    margin-top: 10px;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 47.5%;
    align-items: center;
`

const CardHeader = styled.h1`
    font-size: 24px;
    font-weight: bold;
    width: 47.5%;
    text-align: center;
`
const CardComponent = styled.div`
    width: 85%;
    height: 400px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    overflow: auto;
`
const Roconstext = styled.div`
    padding-left: 1%;
    padding-top: 1%;
    cursor: pointer;
`

const roleList = [
    'Plague Doctor',
    'Plague Doctor',
    'Plague Doctor',
    'Plague Doctor',
    'Priest',
    'Apothecary',
    'Healer',
    'Healer',
    'Sentry',
    'Sentry',
    'Villager',
    'Villager',
    'Villager',
    'Blacksmith',
    'Elder',
    'FallenAngel',
    'Beggar',
    'Weak Villager',
    'Contagious Villager',
    'Contagious Villager',
    'Crow',
    'Huntress',
    'Siniter Villager',
    'Undertaker',
]

const Mapper = {
    'Plague Doctor': PlagueDoctor,
    'Priest': Priest,
    'Apothecary': Apothecary,
    'Healer': Healer,
    'Sentry': Sentry,
    'Villager': Villager,
    'Blacksmith': Blacksmith,
    'Elder': Elder,
    'FallenAngel': FallenAngel,
    'Beggar': Beggar,
    'Weak Villager': WeakVillager,
    'Contagious Villager': ContagiousVillager,
    'Crow': Crow,
    'Huntress': Huntress,
    'Siniter Villager': SinisterVillager,
    'Undertaker': Undertaker,
}

// @ts-ignore
@withRouter
class SelectPage extends Component {
    static contextType = context

    state = {
        roleList,
        useList: [] as string[]
    }

    selectRole(role: string){
        const useList = this.state.useList
        const roleList = [...this.state.roleList]
        roleList.splice(roleList.indexOf(role), 1)
        this.setState({ useList: [...useList, role], roleList })
    }

    unselecteRole(role: string){
        const useList = [...this.state.useList]
        const roleList = this.state.roleList

        useList.splice(useList.indexOf(role), 1)
        this.setState({ useList, roleList: [ ...roleList, role] })
    }

    onSubmit = () => {
        // @ts-ignore
        const activeRole = this.state.useList.map(role => Mapper[role])
        const gameState = this.context
        gameState.setInitialiatePlayerClasses(activeRole)

        // @ts-ignore
        this.props.history.push('/input')
    }

    render() {
        return (
            <Container>
                <Header>Selected Role</Header>
                <HeaderContainer>
                    <CardHeader style={{marginRight:'5%'}}>Unselected Role</CardHeader>
                    <CardHeader>Selected Role</CardHeader>
                </HeaderContainer>
                <ComponentContainer>
                    <Card>
                        <CardComponent>
                            {this.state.roleList.map((role) => {
                                return(
                                    <Roconstext onClick={() => this.selectRole(role)}>{role}</Roconstext>
                                )
                            })}
                        </CardComponent>
                    </Card>
                    <ArrowForwardIos style={{width:"5%", fontSize:"45px" , alignSelf:"center"}}/>
                    <Card>
                        <CardComponent>
                            {this.state.useList.map((role) => {
                                return(
                                    <Roconstext onClick={() => this.unselecteRole(role)}>{role}</Roconstext>
                                )
                            })}
                        </CardComponent>
                    </Card>
                </ComponentContainer>
                <Button variant="outlined" style={{marginTop: "20px"}} onClick={this.onSubmit}>Submit</Button>
            </Container>
        )
    }

}

export default SelectPage
