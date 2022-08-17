const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// get request
app.get('/get', (req, res) => {
    /**
    Q1. Write a function to find non-repetitive numbers, that are only once in a given array.
    Input: [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]
    Output: [9, 1]
    */
    let arr = [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5];
    let notrepeate = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i !== j) break;
            else if (j === arr.length - 1) {
                notrepeate.push(arr[i]);
            }
        }
    }
    console.log(notrepeate);
    res.json({ msg: 'get route', data: notrepeate });
})

// post request
app.post('/post', (req, res) => {
    let data = req.body.data;
    res.json({ msg: data });
})

const port = 5151;
app.listen(port, () => console.log(`Server up and run on port ${port}`));


