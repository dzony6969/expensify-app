import moment from 'moment';

export default [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 123,
    createdAt: 0
    }, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 10837,
    createdAt: moment(0).subtract(4, 'days').valueOf()
            // odejmuje 4 dni
    }, {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
    //dodaje 4 dni
    }];
