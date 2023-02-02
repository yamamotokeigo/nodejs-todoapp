const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());

app.listen(PORT, () => console.log("サーバーが起動しました"))

app.get("/",(req, res) =>{
    res.send("api学習中");
});

const customers = [
    {title: "田中" , id: 1},
    {title: "斎藤" , id: 2},
    {title: "山田" , id: 3},
    {title: "田口" , id: 4},
    {title: "佐藤" , id: 5},
]

app.get("/api/customers" , (req, res) => {
    res.send(customers);
})

app.post("/api/customers" , (req, res) => {
    const customer = {
        title: req.body.title,
        id: customers.length + 1,
    };
    customers.push(customer);
    res.send(customer);
});

//お客様情報更新
app.put("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    customer.title = req.body.title;
    res.send(customer);
});

//お客様情報削除
app.delete("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));

    const index = customers.indexOf(customer);
    customers.splice(index, 1);

    res.send(customer);
});