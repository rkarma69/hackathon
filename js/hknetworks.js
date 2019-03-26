
$(function () {
  var userId = "star@star.com";
  var userPw = "iot123456";
  var userMac = "600194260a36";
  var userDeviceId = "615458ebd5f1403fb42ded956d66c2cb";


  var getDeviceListData = { "userid": userId, "password": userPw }
  var queryDeviceStatusData = {
    "userid": userId,
    "password": userPw,
    "mac": userMac,
    "deviceId": userDeviceId,
    "irDeviceId": "5695",
  }

  var splugOnCommand = {
    "userid": userId,
    "password": userPw,
    "mac": userMac,
    "deviceId": userDeviceId,
    "command":{
          "type":"turnon"
      }
  }

  var splugOffCommand = {
    "userid": userId,
    "password": userPw,
    "mac": userMac,
    "deviceId": userDeviceId,
    "command":{
          "type":"turnoff"
      }
  }

  $("statusButton").click(function () {
    console.log("+queryDeviceStatus");
    $.ajax({
      url: "https://open.hknetworks.kr/smarthome/queryDeviceStatus",
      type: 'POST',
      dataType: "json", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(queryDeviceStatusData),
      success: function (data) {
        console.log(data);
        var list = data.deviceList;
        var listLen = list.length;

        var table_body = '<table border="1" id="example"><thead><tr><th>deviceName</th><th>mac</th><th>deviceId</th><th>deviceType</th><th>irDeviceId</th></tr></thead><tbody>';
        for(var i=0; i<listLen; i++){
          table_body+='<tr>';
          table_body +='<td>';
          table_body += list[i].deviceName;
          table_body +='</td>';

          table_body +='<td>';
          table_body += list[i].mac;
          table_body +='</td>';

          table_body +='<td>';
          table_body += list[i].deviceId;
          table_body +='</td>';

          table_body +='<td>';
          table_body += list[i].deviceType;
          table_body +='</td>';

          table_body +='<td>';
          table_body += list[i].irDeviceId;
          table_body +='</td>';

          table_body+='</tr>';

        }

        table_body+='</tbody></table>';
        $("#response").html(table_body);

      }
    });
  })

  $("splugOnCommandButton").click(function () {
    console.log("+splugOnCommand");
    $.ajax({
      url: "https://open.hknetworks.kr/smarthome/controlDevice",
      type: 'POST',
      dataType: "json", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(splugOnCommand),
      success: function (data) {
        console.log(data);
        var list = data.keyList;
        var listLen = list.length;

        var table_body = '<table border="1" id="example"><thead><tr><th>fid</th><th>fkey</th><th>fname</th></tr></thead><tbody>';
        for(var i=0; i<listLen; i++){
          table_body+='<tr>';
          table_body +='<td>';
          table_body += list[i].fid;
          table_body +='</td>';

          table_body +='<td>';
          table_body += list[i].fkey;
          table_body +='</td>';

          table_body +='<td>';
          table_body += list[i].fname;
          table_body +='</td>';

          table_body+='</tr>';

        }

        table_body+='</tbody></table>';
        $("#response").html(table_body);
      }
    });
  })

  $("splugOffCommandButton").click(function () {
    console.log("+splugOffCommand");
    $.ajax({
      url: "https://open.hknetworks.kr/smarthome/controlDevice",
      type: 'POST',
      dataType: "json", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(splugOffCommand),
      success: function (data) {
        console.log(data);

        var table_body = '<table border="1" id="example"><thead><tr><th>status</th><th>msg</th></tr></thead><tbody>';

        table_body+='<tr>';
        table_body +='<td>';
        table_body += data.status;
        table_body +='</td>';

        table_body +='<td>';
        table_body += data.msg;
        table_body +='</td>';

        table_body+='</tr>';

        table_body+='</tbody></table>';
        $("#response").html(table_body);
      }
    });
  })
})
