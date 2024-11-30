const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let votes = { partyA: 0, partyB: 0, partyC: 0 };

// Get votes
app.get('/api/votes', (req, res) => {
    res.json(votes);
});

// Cast a vote
app.post('/api/vote', (req, res) => {
    const { party } = req.body;
    if (votes[party] !== undefined) {
        votes[party]++;
        res.json({ success: true, votes });
    } else {
        res.status(400).json({ success: false, message: 'Invalid party' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
