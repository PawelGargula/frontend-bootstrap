import axios from 'axios';

const { WEBHOOK_URL, MESSAGE } = process.env;

const requestConfig = {
    url: WEBHOOK_URL,
    message: MESSAGE
};

async function notifyWebhook(config) {
    try {
        await axios.post(config.url, {
            text: 'Notification',
            attachments: [
                {
                    text: config.message
                }
            ]
        });
    } catch (error) {
        console.error('Failed to notify webhook', error);
    }
}

notifyWebhook(requestConfig);