import { html, styled, useState } from './modules.js'
import { chats } from './data/chats.js'

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 10px;
  border-bottom: 1px solid #f5f6fa;
  font-size: 20px;
`

const Body = styled.div`
  height: calc(100% - 56px);
  overflow: auto;
`

const Chat = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 60px;
  padding: 5px 10px;
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

const MenuIcon = styled.img`
  margin-left: 8px;
  height: 22px;
`

const HeaderTitle = styled.span`
  margin-left: 24px;
`

const Sidebar = styled.div`
  position: absolute;
  width: ${props => props.visible ? '80%' : '0'};
  transition: width 1s;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
`

export default function Messages(props) {

    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu() {
        setShowMenu(showMenu => !showMenu)
    }

    function handleOnLoad() {

    }

    return html`
        <${Header}>
            <${MenuIcon} onClick=${toggleMenu} src="./images/menu.svg" alt="" />
            <${HeaderTitle}>诡秘之主</HeaderTitle>
        </Header>
        <${Body}>
        ${chats.map(it => html`
            <${Chat}>
                <${Avatar} onLoad=${handleOnLoad} src=${it.avatar} alt="" />
                <${ChatDescription}>
                    ${it.title}
                </ChatDescription>
            </Chat>
        `)}
        </Body>
    `
}