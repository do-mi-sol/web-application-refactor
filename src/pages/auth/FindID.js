import React, { Component } from "react";
import { Container, Divider } from "@material-ui/core";
import DMSInput from "../../components/customs/DMSInput";
import DMSButton from "../../components/customs/DMSButton";

export default class FindID extends Component {
  state = {
    name: "",
    email: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  render() {
    const { name, email } = this.state;
    return (
      <Container
        maxWidth="xs"
        style={{
          marginTop: 50,
          marginBottom: 20,
          paddingTop: "10vh",
          minHeight: "90vh",
        }}
      >
        <img
          className="signUp-logoIcon"
          src={require("../../assets/images/Logo3.png")}
          alt="logo"
        />
        <h3>아이디 찾기</h3>
        <Divider />
        <br />
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

        <div>
          <DMSInput
            value={email}
            name="email"
            type="email"
            label="EMAIL"
            onChange={this.handleChange}
            variant="outlined"
            helper="등록되어있는 이름과 이메일을 정확하게 입력해주세요."
          />
        </div>

        <div>
          <div>
            <DMSButton children="확인" variant="contained" size="large" width={400} margin={20} />
          </div>
        </div>
      </Container>
    );
  }
}
