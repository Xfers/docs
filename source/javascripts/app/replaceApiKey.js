// Loops through all the rendered code blocks and swaps them for the user's actual key.
// Keeps track of the currently used key to permit swapping back-and-forth
$(document).ready(function () {
  'use strict';
  var oldUserKey           = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk';
  var oldAppKey           = 'yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ';

  // var oldKey           = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk';
  var targetedElements = 'pre.highlight code span.s1, pre.highlight code span.s2';

  $("#replaceUserApiKey").on('click', function(){
    var newKey = $('#user-key-replace').val();

    // We have a special exception so that if people empty the field, it reverts to the first value
    if (newKey.length > 0) {
      if (newKey.length < 43 ) {
        alert('API keys are at least 43 characters long');
        return false;
      }
    } else {
      newKey = '2zsujd47H3-UmsxDL784beVnYbxCYCzL4psSbwZ_Ngk';
    }
    var oldKeyMatch = new RegExp(oldUserKey, 'g');
    $(targetedElements).each(function () {
       $(this).text($(this).text().replace(oldKeyMatch, newKey));
    });
    oldUserKey = newKey;
  });

    $("#replaceAppApiKey").on('click', function(){
    var newKey = $('#app-key-replace').val();

    // We have a special exception so that if people empty the field, it reverts to the first value
    if (newKey.length > 0) {
      if (newKey.length < 43 ) {
        alert('API keys are at least 43 characters long');
        return false;
      }
    } else {
      newKey = 'yyyMATdkKiv2s9ZQVQ-C1x2RY4xF928xnrUagfQwXaQ';
    }
    var oldKeyMatch = new RegExp(oldAppKey, 'g');
    $(targetedElements).each(function () {
       $(this).text($(this).text().replace(oldKeyMatch, newKey));
    });
    oldAppKey = newKey;
  });


$('#phone_signup').on('input', function() {
   $('#signature_signup').text(sha1($('#phone_signup').val() + $('#secretkey_signup').val() ));
});
$('#secretkey_signup').on('input', function() {
  $('#signature_signup').text(sha1($('#phone_signup').val() + $('#secretkey_signup').val() ));
});

$('#phone_gettoken').on('input', function() {
   $('#signature_gettoken').text(sha1($('#phone_gettoken').val() + $('#otp_gettoken').val() + $('#secretkey_gettoken').val() ));
});
$('#otp_gettoken').on('input', function() {
  $('#signature_gettoken').text(sha1($('#phone_gettoken').val() + $('#otp_gettoken').val()+ $('#secretkey_gettoken').val() ));
});
$('#secretkey_gettoken').on('input', function() {
  $('#signature_gettoken').text(sha1($('#phone_gettoken').val() + $('#otp_gettoken').val()+ $('#secretkey_gettoken').val() ));
});


});


var oldEndpoint = "sandbox.xfers.io";
var targetedElements = 'pre.highlight code span.s1, pre.highlight code span.s2';

function changeEndpoint(environment,country)
{


    var newEndpoint; 
    if(environment == "sandbox" && country == "sg"){newEndpoint = "sandbox.xfers.io";}
    else if(environment == "sandbox" && country == "id"){newEndpoint = "sandbox-id.xfers.com"; }
    else if(environment == "production" && country == "sg"){newEndpoint = "www.xfers.io";}
    else if(environment == "production" && country == "id"){newEndpoint = "id.xfers.com";}

    console.log($('#'+environment+country));
    $('#'+environment+country).addClass("active").siblings().removeClass("active");
    $('#registerAccount').prop("href", "https://" + newEndpoint +'/account_registration')
    $('#viewApiKey').prop("href", "https://" + newEndpoint +'/api_tokens')
    $('#viewApiKey2').prop("href", "https://" + newEndpoint +'/api_tokens')


    var oldEndpointMatch = new RegExp(oldEndpoint, 'g');
    $(targetedElements).each(function () {
       $(this).text($(this).text().replace(oldEndpointMatch, newEndpoint));
    });
    oldEndpoint = newEndpoint;
}







function sha1 (str) {
  //  discuss at: http://locutus.io/php/sha1/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Michael White (http://getsprink.com)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  //    input by: Brett Zamir (http://brett-zamir.me)
  //      note 1: Keep in mind that in accordance with PHP, the whole string is buffered and then
  //      note 1: hashed. If available, we'd recommend using Node's native crypto modules directly
  //      note 1: in a steaming fashion for faster and more efficient hashing
  //   example 1: sha1('Kevin van Zonneveld')
  //   returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'
  var hash
  try {
    var crypto = require('crypto')
    var sha1sum = crypto.createHash('sha1')
    sha1sum.update(str)
    hash = sha1sum.digest('hex')
  } catch (e) {
    hash = undefined
  }
  if (hash !== undefined) {
    return hash
  }
  var _rotLeft = function (n, s) {
    var t4 = (n << s) | (n >>> (32 - s))
    return t4
  }
  var _cvtHex = function (val) {
    var str = ''
    var i
    var v
    for (i = 7; i >= 0; i--) {
      v = (val >>> (i * 4)) & 0x0f
      str += v.toString(16)
    }
    return str
  }
  var blockstart
  var i, j
  var W = new Array(80)
  var H0 = 0x67452301
  var H1 = 0xEFCDAB89
  var H2 = 0x98BADCFE
  var H3 = 0x10325476
  var H4 = 0xC3D2E1F0
  var A, B, C, D, E
  var temp
  // utf8_encode
  str = unescape(encodeURIComponent(str))
  var strLen = str.length
  var wordArray = []
  for (i = 0; i < strLen - 3; i += 4) {
    j = str.charCodeAt(i) << 24 |
      str.charCodeAt(i + 1) << 16 |
      str.charCodeAt(i + 2) << 8 |
      str.charCodeAt(i + 3)
    wordArray.push(j)
  }
  switch (strLen % 4) {
    case 0:
      i = 0x080000000
      break
    case 1:
      i = str.charCodeAt(strLen - 1) << 24 | 0x0800000
      break
    case 2:
      i = str.charCodeAt(strLen - 2) << 24 | str.charCodeAt(strLen - 1) << 16 | 0x08000
      break
    case 3:
      i = str.charCodeAt(strLen - 3) << 24 |
        str.charCodeAt(strLen - 2) << 16 |
        str.charCodeAt(strLen - 1) <<
      8 | 0x80
      break
  }
  wordArray.push(i)
  while ((wordArray.length % 16) !== 14) {
    wordArray.push(0)
  }
  wordArray.push(strLen >>> 29)
  wordArray.push((strLen << 3) & 0x0ffffffff)
  for (blockstart = 0; blockstart < wordArray.length; blockstart += 16) {
    for (i = 0; i < 16; i++) {
      W[i] = wordArray[blockstart + i]
    }
    for (i = 16; i <= 79; i++) {
      W[i] = _rotLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1)
    }
    A = H0
    B = H1
    C = H2
    D = H3
    E = H4
    for (i = 0; i <= 19; i++) {
      temp = (_rotLeft(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff
      E = D
      D = C
      C = _rotLeft(B, 30)
      B = A
      A = temp
    }
    for (i = 20; i <= 39; i++) {
      temp = (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff
      E = D
      D = C
      C = _rotLeft(B, 30)
      B = A
      A = temp
    }
    for (i = 40; i <= 59; i++) {
      temp = (_rotLeft(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff
      E = D
      D = C
      C = _rotLeft(B, 30)
      B = A
      A = temp
    }
    for (i = 60; i <= 79; i++) {
      temp = (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff
      E = D
      D = C
      C = _rotLeft(B, 30)
      B = A
      A = temp
    }
    H0 = (H0 + A) & 0x0ffffffff
    H1 = (H1 + B) & 0x0ffffffff
    H2 = (H2 + C) & 0x0ffffffff
    H3 = (H3 + D) & 0x0ffffffff
    H4 = (H4 + E) & 0x0ffffffff
  }
  temp = _cvtHex(H0) + _cvtHex(H1) + _cvtHex(H2) + _cvtHex(H3) + _cvtHex(H4)
  return temp.toLowerCase()
}