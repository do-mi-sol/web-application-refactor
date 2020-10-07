import React, {Component} from 'react';
import '../../assets/css/Write.css';
//import {Container, Grid} from '@material-ui/core'
import DMSButton from '../../components/customs/DMSButton';
import DMSTextfield from '../../components/customs/DMSTextfield';
import {CustomInput, FormGroup, Label} from 'reactstrap';
import RichTextEditor from '../../components/customs/TextEditor';
//import Paper from '@material-ui/core/Paper'
//import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import LineInput from '../../components/customs/LineInput';

export default class Write extends Component {
  state = {
    test: 'https://cdn.clien.net/web/api/file/F01/3802215/92348cd7fe8441e8956.JPG',
    file: '',
    previewURL: '',
  };
  //글쓰기 버튼 클릭함수
  clickWrite = () => {
    console.log (this.state);
  };

  //title,contents저장함수
  handleChange = e => {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  };

  //사진저장후 프리뷰함수
  handleFileOnChange = event => {
    event.preventDefault ();
    let reader = new FileReader ();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState ({
        test: '',
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL (file);
  };

  handleSudmit = e => {
    e.preventDefult ();
    this.props.onSaveData (this.state);
    this.setState ({});
  };

  render () {
    //이미지크기조절,이미지여러개 받기,이미지프리뷰슬라이드처리,css,사용자 정보 받기,로고
    let talk_preview = null;
    if (this.state.file !== '') {
      talk_preview = (
        <img className="talk_preview" src={this.state.previewURL} alt="" />
      );
    }
    return (
      <div className="write-background">
        <form className="container" onSubmit={this.handleSudmit}>
          <hr className="write-line1" />
          <h3 className="write-community-guide">공지 사항</h3>
          <br />
          <br />
          <div className="write-community-guide">
            * 커뮤니티 가이드를 지켜주세요. 욕설,비방 금지
          </div>
          <div className="write-community-guide">
            * 광고성 게시물은 자동으로 삭제될수있습니다.
          </div>
          <br />
          <br />

          <hr className="write-line2" />

          <div className="write-picture-container">
            <Label for="talk_img">
              <img className="write-talk-img" src={this.state.test} alt="" />
            </Label>
            <CustomInput
              type="file"
              id="talk_img"
              accept="image/jpg,image/png,image/jpeg"
              name="talk_img"
              className="write-talk-input"
              onChange={this.handleFileOnChange}
            />
            {' '}
            {talk_preview}
          </div>
          <div className="write-input-container">
            {/* <h6 className="write-board-name">잘하고싶다..연애</h6>
            <hr className="write-yellow-line" />*/}
            <FormGroup>
              <div className="write-title-input">
                <LineInput
                  className="write-title-input"
                  label="title"
                  rows={1}
                  defaultValue=" "
                  multiline
                  //defaultValue="제목을 입력해주세요"
                  onChange={this.handleChange}
                />

              </div>
              <div className="write-contents-input">
                <RichTextEditor />
              </div>
            </FormGroup>
          </div>

        </form>
        <div className="write-button-container">
          <div className="write-button">
            <DMSButton
              className="write-write-button"
              variant="contained"
              onClick={this.clickWrite}
            >
              글쓰기{' '}
            </DMSButton>
          </div>
          <div className="write-button">
            <DMSButton
              className="write-write-button"
              variant="contained"
              onClick={this.clickWrite}
            >
              다시 쓰기
            </DMSButton>
          </div>
          <div className="write-button">
            <DMSButton
              className="write-write-button"
              variant="contained"
              onClick={this.clickWrite}
            >

              취소
            </DMSButton>
          </div>
        </div>
      </div>
    );
  }
}
