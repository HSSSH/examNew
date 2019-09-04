import axios from 'axios';

//获取某学生所有做过的试卷
export function getCommitPaperList() {
    return axios.get('/paper/listPaperCommit',{
        params: {
        }
    })
    .then(res => res.data);
}