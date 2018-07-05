import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const {
    div,
    p,
    h3,
    h4,
} = hh(h);

function titleView(invoice) {
    const { date, clientName } = invoice;
    return div([
        h4('Invoice for:'),
        h3({ className: 'mt0 mb0' }, clientName),
        p({ className: 'mt0' }, date.toDateString()),
    ]);
}

export default titleView;