var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 2206373610000;
body = JSON.stringify(obj);
$done({body});