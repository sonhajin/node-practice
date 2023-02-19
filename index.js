/* 조코딩 강의 */

/* 피글렛
var figlet = require('figlet');

figlet('SonHajin', function(err, data) {
    if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
*/

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// html파일에서 요청보내기 위해선 cors 모듈을 추가해야 한다.
app.use(cors())

// 라우팅 루트
app.get('/', (req, res) => {
    res.send('Hello World')
})

// 변수로 라우팅 (feat. youtube)
app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q)

    res.json({'userid': q})
})


// 동물소리 API
app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    
    if(name == "dog"){
        res.json({'sound': '멍멍'})
    } else if (name == "cat") {
        res.json({'sound': '야옹'})
    } else if (name == "pig") {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '알수없음'})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})