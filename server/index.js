const express = require("express");
const messages = require("./controllers/message_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const messagesBaseUrl = "/api/messages";
app.get(`/api/messages`, messages.read);
app.put(`/api/messages/:id`, messages.update);
app.post(`/api/messages`, messages.create);
app.delete(`/api/messages/:id`, messages.delete);

let port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
