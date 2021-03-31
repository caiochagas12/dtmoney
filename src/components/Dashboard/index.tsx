import { Summary } from "../Summary";
import { TransitionTable } from "../TransactionTable";

import { Container } from "./styles";


export function Dashboard(){
    return(
        <Container>
    <Summary/>
    <TransitionTable/>
        </Container>
    )
}