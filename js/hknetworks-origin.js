
$(function () {
  var userId = "soto1935@gmail.com";
  var userPw = "$jsgj1218H";
  var userMac = "a020a611fedd";
  var userDeviceId = "ddc7691862e64ebca2a42554cca76f75";
  var userDeviceType = 60;

  var upButtonData = { "userid": userId, "password": userPw }
  var downButtonData = {
    "userid": userId,
    "password": userPw,
    "mac": userMac,
    "deviceId": userDeviceId,
    "irDeviceId": "5695",
    "deviceType": userDeviceType
  }

  var stepButtonData = {
    "userid": userId,
    "password": userPw,
    "mac": userMac,
    "deviceId": userDeviceId,
    "deviceType": userDeviceType,
    "command":
      {
          "type":"ir",
          "parameter":
          {
              "fid":507,
              "repeat":1
          }
      }
  }

  $("#upButton").click(function () {
    console.log("+upButton");
    $.ajax({
      url: "https://open.hknetworks.kr/smarthome/getDeviceList",
      type: 'POST',
      dataType: "json", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(upButtonData),
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

  $("#downButton").click(function () {
    console.log("+downButton");
    $.ajax({
      url: "https://open.hknetworks.kr/smarthome/getDeviceCapability",
      type: 'POST',
      dataType: "json", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(downButtonData),
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

  $("#stepButton").click(function () {
    console.log("+stepButton");
    $.ajax({
      url: "https://open.hknetworks.kr/smarthome/controlDevice",
      type: 'POST',
      dataType: "json", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(stepButtonData),
      success: function (data) {
        console.log(data);

      }
    });
  })
})
