const express = require('express')

const app = express()

/*
需求：给定一段JSON数据，里面含有fruits data，属性包括 name color id
要求根据不同的属性返回对应的结果呈现在页面
*/ 

const fruits_data = {
    fruits: [
        {name: 'apple', color: 'red', id: 1},
        {name: 'banana', color: 'yellow', id: 2},
        {name: 'watermelon', color: 'green', id: 3},
        {name: 'grape', color: 'purple', id: 4},
    ]
}
let {fruits} = fruits_data

app.get('/:id.html', (req, res) => {
    let {name, color, id} = req.params
    let foundFruit = fruits.find(item => {
        if(item.id === Number(id)) return true
    })
    //返回找到的对象
    console.log(foundFruit)
    if(!foundFruit) {
        res.statusCode = 404
        res.end('404 Not Found')
    }
    else {
        res.end(`<h1>${foundFruit.name}</h1><br/><p>${foundFruit.color}</p>`)
    }
})

app.listen(666, () => {
    console.log('service listening port 666 is started.')
})