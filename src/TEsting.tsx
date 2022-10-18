import React from 'react';

export default function TEsting() {
const loadData = async() => {
    // const person = {
    //     script: "<?php echo 123; ?>",
    //     language: "php",
    //     versionIndex: "0",
    //     clientId: "74c5658d9e7de18e8997535be7c85056",
    //     clientSecret: "b0a3f24e392f9d4d593b6990df84a552ac4ba115147147f35dcc8377c7111ef"
    // }

    // await fetch('https://api.jdoodle.com/v1/execute', {
    //     mode: "no-cors",
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         // 'Accept': 'application/json',
    //         //'charset': 'utf-8',
    //         //'dataType': 'json',
    //     },
    //     body: JSON.stringify(person),
    // })
    // .then(response => {
    //     console.log(response)
    // })
    // .catch(err => {
    //     console.log(err)
    // })

    
    // this is postman generated code

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "clientId": "74c5658d9e7de18e8997535be7c85056",
        "clientSecret": "b0a3f24e392f9d4d593b6990df84a552ac4ba115147147f35dcc8377c7111ef",
        "script": "<?php echo \"hello world\" ?>",
        "language": "php",
        "versionIndex": "0"
    });

    var requestOptions:any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        // redirect: 'follow',
        // mode: "no-cors",
    };

    fetch(`https://api.jdoodle.com/v1/execute`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

  return (
    <div>
        <h2>TEsting</h2>
        <button onClick={loadData}>Hello</button>
    </div>
  )
}
