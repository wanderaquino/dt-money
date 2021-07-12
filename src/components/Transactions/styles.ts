import styled from "styled-components";

export const TransactionsContainer = styled.div `
    margin-top: 4rem;
        table {
            width: 100%;
            border-spacing: 0 0.5rem;

            th {
                font-weight: 400;
                padding: 1rem 2rem;
                font-size: 1rem;
                text-align: left;
                color: var(--text-body);
                line-height: 1.5rem;
            }

            td {
                border-radius: 0.25rem;
                background: var(--shape);
                padding: 1rem 2rem;
                border: 0;
                color: var(--text-body);

                &:first-child {
                    color: var(--text-title);
                }
            }
        }
`

export const TransactionItem = styled.tr `

`