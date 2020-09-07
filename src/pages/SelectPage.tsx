import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { ArrowForwardIos } from '@material-ui/icons';
 
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
const RoleText = styled.div`
    padding-left: 1%;
    padding-top: 1%;
    cursor: pointer;
`

let roleList = [
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
    'FallenAngle',
    'Beggar',
    'Weak Villager',
    'Contagious Villager',
    'Contagious Villager',
    'Crow',
    'Huntress',
    'Siniter Villager',
    'Undertaker',
]

class SelectPage extends Component {

    state = {
        roleList: roleList,
        useList: [] as string[]
    }

    selectRole(role: string){
        let index = this.state.roleList.indexOf(role)
        let useList = this.state.useList
        let roleList = this.state.roleList
        useList.push(role)
        roleList.splice(index, 1)
        this.setState({useList: useList, roleList: roleList})
    }

    unselecteRole(role: string){
        let index = this.state.roleList.indexOf(role)
        let useList = this.state.useList
        let roleList = this.state.roleList
        roleList.push(role)
        useList.splice(index, 1)
        this.setState({useList: useList, roleList: roleList})
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
                                    <RoleText onClick={() => this.selectRole(role)}>{role}</RoleText>
                                )
                            })}
                        </CardComponent>
                    </Card>
                    <ArrowForwardIos style={{width:"5%", fontSize:"45px" , alignSelf:"center"}}/>
                    <Card>
                        <CardComponent>
                            {this.state.useList.map((role) => {
                                return(
                                    <RoleText onClick={() => this.unselecteRole(role)}>{role}</RoleText>
                                )
                            })}
                        </CardComponent>
                    </Card>
                </ComponentContainer>
                <Button variant="outlined" style={{marginTop: "20px"}}>Submit</Button>
            </Container>
        )
    }

}

export default SelectPage
