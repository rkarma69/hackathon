
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
    "deviceId": userDeviceId
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

  $("#statusButton").click(function () {
//    console.log("+queryDeviceStatus");
    $.ajax({
      url: "https://open.hknetworks.kr/smarthome/queryDeviceStatus",
      type: 'POST',
      dataType: "json", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(queryDeviceStatusData),
      success: function (data) {
        console.log(data);
      }
    });
  })

  $("#splugOnCommandButton").click(function () {
  //  console.log("+splugOnCommand");
    $.ajax({
      url: "https://open.hknetworks.kr/smarthome/controlDevice",
      type: 'POST',
      dataType: "json", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(splugOnCommand),
      success: function (data) {
        console.log(data);
      }
    });
  })

  $("#splugOffCommandButton").click(function () {
  //  console.log("+splugOffCommand");
    $.ajax({
      url: "https://open.hknetworks.kr/smarthome/controlDevice",
      type: 'POST',
      dataType: "json", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(splugOffCommand),
      success: function (data) {
        console.log(data);
      }
    });
  })
})
