const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: 'd26a3965',
  apiSecret: 'cBJ3CWNWAXOiboS5'
});

// Function to generate a random OTP
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to send OTP
function sendOtp(phoneNumber) {
  const otp = generateOtp();
  const message = `Hey folk what are you doing !`;
    vonage.sms.send({
        to: phoneNumber,
        from: 'Anonymus',
        text: message
      }, (err, responseData) => {
        if (err) {
          console.error('Error sending OTP:', err);
        } else {
          if (responseData.messages[0]['status'] === '0') {
            console.log(`OTP sent to ${phoneNumber}: ${otp}`);
          } else {
            console.error(`Message failed with error: ${responseData.messages[0]['error-text']}`);
          }
        }
      });
  }

// Example usage
const userPhoneNumber = '+916300625861'; // Replace with the recipient's phone number
sendOtp(userPhoneNumber);
