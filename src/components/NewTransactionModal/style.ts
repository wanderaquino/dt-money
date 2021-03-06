import styled from "styled-components";

export const NewTransactionModalContainer = styled.form `
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #D7D7D7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.25rem;
        font-weight: 600;
        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9);
        }
    }

`;

export const TransactionTypeContainer = styled.div `
    display: flex;
    gap: 1rem;
`

interface TrasactionButtonProps {
    color: "green" | "red" | "transparent"
}

const colors = {
    green: "#CFF9E2",
    red: "#F9CFCF",
    transparent: "transparent"
}

export const TransactionTypeButton = styled.button<TrasactionButtonProps>`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1;
    border: 1px solid #D7D7D7;
    margin: 1rem 0;
    padding: 1rem .5rem;
    border-radius: .3rem;
    background: ${props => colors[props.color]};
    z-index: 1;

    &:hover {
        border-color: #aaa;
    }

    &.income-selected {
        background: 
    }

    &.outcome-selected {
        background: var(--light-red);
    }
`