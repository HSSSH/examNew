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

//获取单张试卷
export function getPaperById(id) {
    return axios.get('/paper/getOnePaper/'+id)
    .then(res => res.data);
}

//提交答题试卷
export function commitPaper(paper) {
    return axios({
        method: 'post',
        url: '/commit/paper',
        params: paper
    })
        .then(res => res.data)
}