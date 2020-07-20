/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json())
app.use(morgan('combined'))
app.get('/', (req, res) => {	
	res.send('Hello remote world!\n');	
});

app.post('/', (req, res) => {
	console.log("body", req.body)
	res.send('Hello remote world!\n');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);