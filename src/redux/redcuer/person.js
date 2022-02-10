import { AddPerson } from '../constant'
const initState = [{ id: '001', name: 'tom', age: '15' }]
export default function countRedcuer(perstste = initState, action) {
    const { type, data } = action
    switch (type) {
        case AddPerson:
            return [data, ...perstste]
        default:
            return perstste
    }
}