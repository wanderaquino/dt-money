import logoImg from "../../assets/images/logo.svg";
import { HeaderContainer } from "./styles";


export function Header() {
    return (
        <HeaderContainer>
            <img src={logoImg} alt="Logo da DT Money"></img>
            <button type="button">Nova Transação</button>
        </HeaderContainer>
    )
}