import axios from 'axios';

//获取测试卷列表
export function getPaperList(status) {
    return axios.get('/paper/listPapers',{
        params: {
            status: status
        }
    })
    .then(res => res.data);
}