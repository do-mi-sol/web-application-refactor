import React, {Component} from 'react'
import {Container, Divider} from '@material-ui/core'
import DMSInput from '../../components/customs/DMSInput'
import DMSButton from '../../components/customs/DMSButton'

export default class FindPW extends Component {
    state = {
        name: '',
        email: '',
        id: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }

    render() {
        const {name, email, id} = this.state
        return (
            <Container
                maxWidth="xs"
                style={{marginTop: 30, marginBottom: 20}}
            >
                <img
                    className="logo-icon"
                    src={require('../../assets/images/Logo.jpg')}
                    alt="logo"
                />
                <h3>비밀번호 찾기</h3>
                <Divider />
                <br />
                {/* NAME */}
                <div>
                    <DMSInput
                        value={name}
                        name="name"
                        type="text"
                        label="NAME"
                        onChange={this.handleChange}
                        variant="outlined"
                    />
                </div>

                {/* EMAIL */}
                <div>
                    <DMSInput
                        value={email}
                        name="email"
                        type="email"
                        label="EMAIL"
                        onChange={this.handleChange}
                        variant="outlined"
                    />
                </div>

                {/* ID */}
                <div>
                    <DMSInput
                        value={id}
                        name="id"
                        type="text"
                        label="ID"
                        onChange={this.handleChange}
                        variant="outlined"
                        helper="등록되어있는 정보를 정확하게 입력해주세요."
                    />
                </div>

                <div>
                    <div className="buttonContainer">
                        <DMSButton
                            className="button1"
                            children="확인"
                            variant="contained"
                            size="large"
                            width={400}
                            color="#ffd400"
                            margin={20}
                        />
                    </div>
                </div>
            </Container>
        )
    }
}