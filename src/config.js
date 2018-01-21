let baseURL;
if (process.env.NODE_ENV == 'production') {
    baseURL = 'http://ec2-18-217-136-146.us-east-2.compute.amazonaws.com:8080'
}
else {
    baseURL = 'http://localhost:8080'
}

export default baseURL;