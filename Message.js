import { html, styled } from './modules.js'
import { chats } from './chats.js'

const Header = styled.div`
  box-sizing: border-box;
  height: 50px;
  border-bottom: 1px solid #f5f6fa;
  padding: 12px;
  font-size: 20px;
`

const Body = styled.div`
  height: calc(100% - 50px);
  overflow: auto;
`

const ChatItem = styled.div`
  display: block;
  box-sizing: border-box;
  height: 60px;
  padding: 4px;
  border: none;
  background-color: unset;
  cursor: pointer;

  &:hover {
    background-color: #f4f6fa;
  }
`

export default function Message(props) {
    return html`
        <${Header}>
            Lord of the Mysteries
        </Header>
        <${Body}>
        ${chats.map(it => html`
            <${ChatItem} href="#">
                ${it.title}
            </ChatItem>
        `)}
        </Body>

    `
}