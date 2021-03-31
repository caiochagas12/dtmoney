import Modal from 'react-modal';
import {Container, TransactionTypeContainer} from './styles'
import closeImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProp{
    isOpen:boolean;
    onRequestClose:() => void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProp){
    return(
        <Modal isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
                <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'>

                <img src={closeImg} alt='Fechar modal'></img>

                </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                placeholder='Título'
                />

                <input
                type='number'
                placeholder='Valor'
                />

                <TransactionTypeContainer>
                        <button type='button'>
                        <img src={IncomeImg} alt='Entrada'></img>
                        <span>Entrada</span>
                        </button>
                        
                        <button type='button'>
                        <img src={OutcomeImg} alt='saida'></img>
                        <span>Saída</span>
                        </button>
                </TransactionTypeContainer>

                <input
                placeholder='Categoria'
                
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
            
  </Modal>
    )
}