import { html, styled } from './modules.js'
import { chats } from './chats.js'

const Header = styled.div`
  box-sizing: border-box;
  height: 56px;
  border-bottom: 1px solid #f5f6fa;
  padding: 12px;
  font-size: 20px;
`

const Body = styled.div`
  height: calc(100% - 50px);
  overflow: auto;
`

const ChatItem = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 60px;
  padding: 10px;
  border: none;
  background-color: unset;
  cursor: pointer;

  &:active {
    background-color: #f4f6fa;
  }
`

const Avatar = styled.img`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

const ChatDescription = styled.div`
  padding: 4px 10px;
`

export default function Message(props) {
    return html`
        <${Header}>
            诡秘之主
        </Header>
        <${Body}>
        ${chats.map(it => html`
            <${ChatItem}>
                <${Avatar} src=${it.avatar} alt="" />
                <${ChatDescription}>
                    ${it.title}
                </ChatDescription>
            </ChatItem>
        `)}
        </Body>
    `
}