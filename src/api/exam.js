import axios from 'axios';

//获取测试卷列表
export function getPaperList(status,subjectId) {
    return axios.get('/paper/listPapers',{
        params: {
            status: status,
            subjectId: subjectId
        }
    })
    .then(res => res.data);
}

//检测是否已经测试
export function checkFirstTest(pid,uid) {
    return axios.get('/paper/hasCommit',{
        params: {
            pid: pid,
            uid: uid,
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
        url: '/paper/commit',
        data: paper
    })
        .then(res => res.data)
}