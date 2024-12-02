var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 2995437391000;
body = JSON.stringify(obj);
$done({body});
