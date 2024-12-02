var body = $response.body.replace(/member_type":\d/g,'member_type":4')
.replace(/end_date":".*?"/g,'end_date":"9999-01-04 13:02:15"')
.replace(/has_perpetual_vip":\d/g,'has_perpetual_vip":1')
.replace(/member_status":\d/g,'member_status":4')
.replace(/auto_renew_status":\d+/g,'auto_renew_status":2')
.replace(/is_publish":\d/g,'is_publish":1')
$done({ body });
