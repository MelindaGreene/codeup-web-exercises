"use strict";

// 1f53ed63485bdefddb5afd94d9ac95ff582be796





const wait = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
};



wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// fetch(url, {headers: {'Authorization': 'token 1f53ed63485bdefddb5afd94d9ac95ff582be796\n'}});

const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": `token ${`1f53ed63485bdefddb5afd94d9ac95ff582be796\n`}`}})
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};

lastCommit("davidandstephens");

// }();

