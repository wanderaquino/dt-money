import { Summary } from "../Summary";
import { Transactions } from "../Transactions";
import { DashboardContainer } from "./styles";

export function Dashboard () {
    return (
        <DashboardContainer>
            <Summary />
            <Transactions />
        </DashboardContainer>
    )
}