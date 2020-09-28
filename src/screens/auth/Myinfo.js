import React, {Component} from 'react'
import {Container} from '@material-ui/core'
// import DMSButton from '../../components/customs/DMSButton'

import MyBar from '../../components/myinfo/MyBar'
import MyWritten from '../../components/myinfo/MyWritten'
import MyReply from '../../components/myinfo/MyReply'

import '../../assets/css/Myinfo.css'

export default class Myinfo extends Component {
    state = {
        PROFILE: '',
        ID: '',
        PASSWORD: '',
        EMAIL: '',
        AGE: '',
        SEX: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.PROFILE]: e.target.value,
        })
    }

    render() {
        return (
            <Container
                maxWidth="xl"
                disableGutters
                style={{
                    minHeight: '90vh',
                    margin: 0,
                }}
            >
                <MyBar button2Color="None" link2="/myinfo2" />
                <Container
                    style={{
                        width: '80%',
                        minWidth: 900,
                        marginTop: '5%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <MyWritten />
                    <MyReply />
                </Container>
            </Container>
        )
    }
}
