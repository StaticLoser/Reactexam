import { Component } from 'react';
import axios from 'axios'
const MessageArrList = [
    { ID: 1, TITLE: '你好中国', CONTENT: '中国是世界第一' },
    { ID: 1, TITLE: '你好匈牙利', CONTENT: '匈牙利的message' },
    { ID: 1, TITLE: '你好麦加利', CONTENT: '麦加利的message' }
]
export default class Detail extends Component {
    render() {
        const { id } = this.props.match.params
        const messobj = MessageArrList.find((item) => {
            return item.ID = id
        })
        axios.get('/user?ID=12345')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        const { ID, TITLE, CONTENT } = messobj
        console.log(messobj);
        return (
            <ul key={ID}>
                <li>ID:{ID}</li>
                <li>TITLE:{TITLE}</li>
                <li>CONTENT:{CONTENT}</li>                            
            </ul>

        )
    }
}
