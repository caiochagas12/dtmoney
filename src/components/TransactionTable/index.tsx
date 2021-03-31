import { useEffect } from 'react'
import { api } from '../../services/api'

import { Container} from './styles'

export function TransitionTable(){
    useEffect(() => {
api.get('transactions')
.then(response => console.log(response.data))
    },[]
)
    return(
    <Container>
        <table>

            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
<tr>
    <td>Desenvolvimento de Web Site</td>
    <td className="deposit">R$1.000</td>
    <td>Front End | Web</td>
    <td>26/07/2021</td>
</tr>

<tr>
    <td>Desenvolvimento de App</td>
    <td className="deposit">R$1.000</td>
    <td>Front End | Mobile</td>
    <td>26/07/2021</td>
</tr>

<tr>
    <td>Aposta no jogo do bixo</td>
    <td className="withdraw">-R$15.00</td>
    <td>Essencial</td>
    <td>06/03/2021</td>
</tr>

            </tbody>
        </table>
    </Container>
    )
    
}