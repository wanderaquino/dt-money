import logoImg from "../../assets/images/logo.svg";
import { HeaderContainer, HeaderContent } from "./styles";

interface HeaderProps {
    onOpenNewTrasactionModal: () => void
}

export function Header({onOpenNewTrasactionModal}: HeaderProps) {

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="Logo da DT Money"></img>
                <button type="button" onClick={onOpenNewTrasactionModal}>Nova Transação</button>
            </HeaderContent>
        </HeaderContainer>
    )
}