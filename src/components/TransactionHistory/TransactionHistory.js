import { TabConteiner, TabHead, Table, TabCellHead,TabCell } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TabConteiner>
            <Table>
                <TabHead>
                    <tr>
                        <TabCellHead>Type</TabCellHead>
                        <TabCellHead>Amount</TabCellHead>
                        <TabCellHead>Currency</TabCellHead>
                    </tr>
                </TabHead>

                <tbody>{items.map(({id, type, amount, currency}) => (
                    <tr key={id}>
                        <TabCell>{type}</TabCell>
                        <TabCell>{amount}</TabCell>
                        <TabCell>{currency}</TabCell>
                    </tr>
                ))}
                </tbody>
            </Table>
        </TabConteiner>
    );
};

