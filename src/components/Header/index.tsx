import logoImg from "../../assets/images/logo.svg";
import { HeaderContainer, HeaderContent } from "./styles";


export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="Logo da DT Money"></img>
                <button type="button">Nova Transação</button>
            </HeaderContent>
        </HeaderContainer>
    )
}