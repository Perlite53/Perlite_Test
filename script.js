const fs = require('fs');
const path = require('path');

async function downloadFile(url, directory) {
  const res = await fetch("https://puravankara-bangalore.com/puravankara-hennur/fonts/Nunito/static/Nunito-Light.ttf", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"147\", \"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"147\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "font",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_gcl_au=1.1.1018532745.1776493351; IQDGUID=JTV7LSWTwdYYZJNXMKKyZag3; visitor_id=69e3232a49485d0dc9163d07; _gcl_gs=2.1.k1$i1776494512$u74881427; _gcl_aw=GCL.1776494962.CjwKCAjwhe3OBhABEiwA6392zEfn0GattJr83efpFxWT5pAU-ebDCm7qsflD0RMDp8ffRr8eRJ9n3hoC3lkQAvD_BwE",
    "Referer": "https://puravankara-bangalore.com/puravankara-hennur/css/style.css"
  },
  "body": null,
  "method": "GET"
});

  if (!res.ok) {
    throw new Error(`Failed: ${res.status}`);
  }

  // Extract filename from URL
  const urlPath = new URL(url).pathname;
  let fileName = path.basename(urlPath);

  // fallback if URL ends with /
  if (!fileName) {
    fileName = 'downloaded_file';
  }

  const filePath = path.join('./fonts/Abhaya_Libre', 'AbhayaLibre-Medium.ttf');

  const fileStream = fs.createWriteStream(filePath);

  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on('error', reject);
    fileStream.on('finish', resolve);
  });

  return filePath;
}

// usage
downloadFile(
  'https://puravankara-bangalore.com/puravankara-hennur/images/1.png',
  './images'
).then(console.log).catch(console.error);




// fdfasjfhakfh
function SubmitQueryData(n, t) {
    var h = HiddenValues.vCity, vthanksAutoClose = (n && n.vthanksAutoClose !== undefined) ? false : true, vagt = Number(n.vAgentID), c = HiddenValues.vCountry, s = HiddenValues.vIP, l = n.vURL + "{device=" + HiddenValues.iqGuid + "}", d = n.thankspageurl, g = contains.call(blockedIP, s), a = HiddenValues.campaignid, v = HiddenValues.gad_source, y = HiddenValues.gclid, p = HiddenValues.keyword, w = HiddenValues.utm_campaign, b = HiddenValues.utm_medium, k = HiddenValues.utm_source, o, i, r, u, f, e;
    if (!g) {
        if (o = $("#" + t.SenderControlID).val(),
        checkempty(o))
            return invalid_data_msg($("#" + t.SenderControlID), "Please enter a valid name to submit your query!"),
            $("#" + t.SenderControlID).focus(),
            !1;
        if (invalid_data_msg($("#" + t.SenderControlID), ""),
        i = "",
        checkempty(t.SenderControlCountryCodeID))
            i = HiddenValues.vCountryCode;
        else if (i = $("#" + t.SenderControlCountryCodeID).val(),
        i == undefined)
            i = HiddenValues.vCountryCode;
        else {
            if (checkempty(i))
                return invalid_data_msg($("#" + t.SenderControlCountryCodeID), "Please enter a valid country-code to submit your query!"),
                $("#" + t.SenderControlCountryCodeID).focus(),
                !1;
            invalid_data_msg($("#" + t.SenderControlCountryCodeID), "")
        }
        if (r = $("#" + t.SenderControlMobileID).val(),
        checkempty(r))
            return invalid_data_msg($("#" + t.SenderControlMobileID), "You have entered an invalid mobile number. Please try again."),
            $("#" + t.SenderControlMobileID).focus(),
            !1;
        if (is_numeric(r)) {
            if (HiddenValues.vCountryCode == "+91" && r.length != 10 && vagt !== 4845)
                return invalid_data_msg($("#" + t.SenderControlMobileID), "Please enter a valid 10 digit mobile number."),
                $("#" + t.SenderControlMobileID).focus(),
                !1;
            invalid_data_msg($("#" + t.SenderControlMobileID), "")
        } else
            return invalid_data_msg($("#" + t.SenderControlMobileID), "You have entered an invalid mobile number. Please try again."),
            $("#" + t.SenderControlMobileID).focus(),
            !1;
        if (u = $("#" + t.SenderControlEmailID).val(),
        checkempty(u))
            return invalid_data_msg($("#" + t.SenderControlEmailID), "You have entered an invalid e-mail address. Please try again."),
            $("#" + t.SenderControlEmailID).focus(),
            !1;
        if (validate_email(u))
            invalid_data_msg($("#" + t.SenderControlEmailID), "");
        else
            return invalid_data_msg($("#" + t.SenderControlEmailID), "You have entered an invalid e-mail address. Please try again."),
            $("#" + t.SenderControlEmailID).focus(),
            !1;
        if (qMessage = $("#" + t.SenderControlMsgID).val(),
        checkempty(qMessage))
            return invalid_data_msg($("#" + t.SenderControlMsgID), "Please provide some information about your query!"),
            $("#" + t.SenderControlMsgID).focus(),
            !1;
        invalid_data_msg($("#" + t.SenderControlMsgID), "");
        f = $("#" + t.SenderControlTimeID).val();
        f === undefined && (f = "");
        e = $("#" + t.SenderControlBudgetRangeID).val();
        checkempty(e) && (e = "Any");
        sendQueryDataToDashboard(n.vAgentID, o, i, f, r, u, qMessage, c, h, s, l, n.vProject, e, a, v, y, p, w, b, k, d, vthanksAutoClose);
        setProjectQueryData(n.vAgentID, o, i, f, r, u, qMessage, c, h, s, l, n.vProject, e, a, v, y, p, w, b, k);
        $("#" + t.SenderControlID).val("");
        $("#" + t.SenderControlMobileID).val("");
        $("#" + t.SenderControlMobileID).val("");
        $("#" + t.SenderControlEmailID).val("");
        $("#" + t.SenderControlMsgID).val("");
        $("#" + t.SenderControlTimeID).prop("selectedIndex", 0)
    }
    return !0
}
function setProjectQueryData(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d) {
    var g;
    g = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    g.onreadystatechange = function() {
        g.readyState == 4 && g.status == 200
    }
    ;
    g.open("GET", "https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=" + n + "&qSenderName=" + t + "&qMobileNo=" + u + "&qEmailID=" + f + "&qCountryCode=" + i + "&qTimeslot=" + r + "&qQueryMessage=" + e + "&qCountry=" + o + "&qCityName=" + s + "&qIP=" + h + "&micrositeurl=" + c + "&qProjectName=" + l + "&qBudgetRange=" + a + "&qcampaignid=" + v + "&qgad_source=" + y + "&qgclid=" + p + "&qkeyword=" + w + "&qutm_campaign=" + b + "&qutm_medium=" + k + "&qutm_source=" + d + "", !0);
    g.send()
}
function sendQueryDataToDashboard(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, vthanksAutoClose) {
    try {
        const tt = getCookie("visitor_id")
          , nt = {
            visitorId: String(tt ?? ""),
            qAgentID: String(n ?? ""),
            qSenderName: String(t ?? ""),
            qMobileNo: String(u ?? ""),
            qEmailID: String(f ?? ""),
            qCountryCode: String(i ?? ""),
            qTimeslot: String(r ?? ""),
            qQueryMessage: String(e ?? ""),
            qCountry: String(o ?? ""),
            qCityName: String(s ?? ""),
            qIP: String(h ?? ""),
            micrositeurl: String(c ?? ""),
            qProjectName: String(l ?? ""),
            qBudgetRange: String(a ?? ""),
            qcampaignid: String(v ?? ""),
            qgad_source: String(y ?? ""),
            qgclid: String(p ?? ""),
            qkeyword: String(w ?? ""),
            qutm_campaign: String(b ?? ""),
            qutm_medium: String(k ?? ""),
            qutm_source: String(d ?? "")
        };
        fetch("https://dashboard-api.gtftech.com/api/v1/webhook/microsite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nt)
        }).then(async n => {
            const t = await n.json().catch( () => null);
            if (n.ok) {
                const n = t?.data?.jobId
                  , r = new URLSearchParams(nt).toString()
                  , u = window.location.href;
                var i = window.open(g + "?" + r + "&jobid=" + n + "&redirect_url=" + u, "popupWindow", "popupWindow", "width=359,height=365,top=150,left=500,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
                console.log('vthanksAutoClose', vthanksAutoClose);
                if (vthanksAutoClose) {
                    setTimeout(function() {
                        i.close()
                    }, 3e3)
                }
            } else
                console.warn("New Dashboard Query API failed:", n.status)
        }
        ).catch(n => {
            console.warn("New Dashboard Query API error:", n)
        }
        )
    } catch (nt) {
        console.warn("NewDashboard Query exception:", nt)
    }
    return !0
}
function sendVisitorDataToDashboard(n, t, i, r, u, f, e, o, s, h) {
    try {
        const c = getCookie("visitor_id");
        c && setCookie("visitor_id", c, 180);
        const l = {
            agent_id: String(n ?? ""),
            event_type: "Page Load",
            query_id: "0",
            url: String(t ?? ""),
            project: String(i ?? ""),
            user_did: String(c ?? ""),
            campaign_id: String(r ?? ""),
            gad_source: String(u ?? ""),
            gclid: String(f ?? ""),
            keyword: String(e ?? ""),
            utm_campaign: String(o ?? ""),
            utm_medium: String(s ?? ""),
            utm_source: String(h ?? "")
        };
        fetch("https://dashboard-api.gtftech.com/api/v1/webhook/visit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(l)
        }).then(async n => {
            const t = await n.json().catch( () => null);
            if (!n.ok) {
                console.warn("New Dashboard Visitor API failed:", n.status, t || "");
                return
            }
            const i = t?.data?.visitorId;
            i && setCookie("visitor_id", i, 180)
        }
        ).catch(n => {
            console.warn("New Dashboard Visitor API failed-1:", n)
        }
        )
    } catch (c) {
        console.warn("New Dashboard Visitor API failed-2:", c)
    }
    return !0
}
function isNumberKey(n) {
    var t = n.which ? n.which : event.keyCode;
    return t > 31 && (t < 48 || t > 57) ? !1 : !0
}
function emailValidator(n) {
    return n.value.match(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/) ? !0 : (alert("Invalid E-mail Address! Please re-enter ?"),
    n.focus(),
    !1)
}
function validate_email(n) {
    var t = !1;
    return n.match(/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/) != null && (t = !0),
    t
}
function is_numeric(n) {
    return /^[0-9-+]+$/.test(n) ? !0 : !1
}
function checkempty(n) {
    return n == null || n == undefined || n == "undefined" || n == "" || n.length == 0 ? !0 : !1
}
function getCookie(n) {
    for (var i, r = n + "=", u = document.cookie.split(";"), t = 0; t < u.length; t++)
        if (i = u[t].replace(/^\s+|\s+$/g, ""),
        i.indexOf(r) === 0)
            return decodeURIComponent(i.substring(r.length));
    return ""
}
function setCookie(n, t, i) {
    var u = i * 86400
      , f = encodeURIComponent(t)
      , r = n + "=" + f + "; Path=/; Max-Age=" + u + "; SameSite=Lax";
    location.protocol === "https:" && (r += "; Secure");
    document.cookie = r
}
function randomValueGenerator(n, t) {
    for (var r = "", u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", f = u.length, i = 0; i < n; i++)
        i != 0 && i % t == 0 && i - 1 != n && (r += "-"),
        r += u.charAt(Math.floor(Math.random() * f));
    return r
}
var HiddenValues = {
    vCity: "",
    vIP: "",
    vCountry: "",
    vCountryCode: "",
    iqGuid: "",
    campaignid: "",
    gad_source: "",
    gclid: "",
    keyword: "",
    utm_campaign: "",
    utm_medium: "",
    utm_source: ""
}
  , blockedIP = ["180.151.11.118", "219.90.110.197", "49.248.15.74", "103.174.87.30", "122.176.28.132", "49.36.139.148", "49.36.136.174", "49.204.92.150"]
  , contains = function(n) {
    var t = n !== n, i;
    return i = t || typeof Array.prototype.indexOf != "function" ? function(n) {
        for (var i = -1, u = -1, r, i = 0; i < this.length; i++)
            if (r = this[i],
            t && r !== r || r === n) {
                u = i;
                break
            }
        return u
    }
    : Array.prototype.indexOf,
    i.call(this, n) > -1
}
  , invalid_data_msg = function(n, t) {
    checkempty(t) ? ($(n).attr("data-exists", "false"),
    $(n).next(".invalid-data").remove()) : ($(n).attr("data-exists", "true"),
    $(n).next(".invalid-data").remove(),
    $(n).after("<label class='invalid-data existingCheck' style='color:red; width:100%;padding-left: 10px;background-color: #ffffff;'> " + t + "<\/label>"))
};
$(document).on("keypress", ".number-only", function(n) {
    var t = isNumberKey(n);
    t ? invalid_data_msg(this, "") : ($(this).focus(),
    invalid_data_msg(this, "You have entered an invalid mobile number. Please try again."))
});
$(document).on("focusout", ".number-only", function() {
    var n = $(this).val(), t;
    checkempty(n) ? invalid_data_msg(this, "") : (t = is_numeric(n),
    t ? invalid_data_msg(this, "") : ($(this).focus(),
    invalid_data_msg(this, "You have entered an invalid mobile number. Please try again.")))
});
$(document).on("focusout", ".email-address", function() {
    var n = $(this).val(), t;
    checkempty(n) ? invalid_data_msg(this, "") : (t = validate_email(n),
    t ? invalid_data_msg(this, "") : ($(this).focus(),
    invalid_data_msg(this, "You have entered an invalid e-mail address. Please try again.")))
});
$(document).ready(function() {
    var n = getCookie("IQDGUID"), t, i;
    checkempty(n) && (t = randomValueGenerator(24, 24),
    setCookie("IQDGUID", t, 2),
    n = getCookie("IQDGUID"));
    const r = new URLSearchParams(window.location.search)
      , u = {};
    r.forEach( (n, t) => {
        u[t] = n,
        t.toLowerCase() === "campaignid" && n.trim() !== "" ? HiddenValues.campaignid = n : t.toLowerCase() === "gad_source" && n.trim() !== "" ? HiddenValues.gad_source = n : t.toLowerCase() === "gclid" && n.trim() !== "" ? HiddenValues.gclid = n : t.toLowerCase() === "keyword" && n.trim() !== "" ? HiddenValues.keyword = n : t.toLowerCase() === "utm_campaign" && n.trim() !== "" ? HiddenValues.utm_campaign = n : t.toLowerCase() === "utm_medium" && n.trim() !== "" ? HiddenValues.utm_medium = n : t.toLowerCase() === "utm_source" && n.trim() !== "" ? HiddenValues.utm_source = n : n.trim() !== "" && (HiddenValues.gclid += t + "--" + n)
    }
    );
    sendVisitorDataToDashboard(AgentInfo.vAgentID, AgentInfo.vURL, AgentInfo.vProject, HiddenValues.campaignid, HiddenValues.gad_source, HiddenValues.gclid, HiddenValues.keyword, HiddenValues.utm_campaign, HiddenValues.utm_medium, HiddenValues.utm_source);
    i = "https://api2.gtftech.com/ip/visits?user_did=" + n + "&url=" + AgentInfo.vURL + "&project=" + AgentInfo.vProject + "&query_id=0&event_type=Page Load&agent_id=" + AgentInfo.vAgentID + "";
    $.ajax({
        url: i,
        type: "GET",
        success: function(t) {
            HiddenValues.vCity = t[0].city;
            HiddenValues.vCountry = t[0].country;
            HiddenValues.vIP = t[0].ip;
            HiddenValues.vCountryCode = "+" + t[0].callingCode;
            HiddenValues.iqGuid = n;
            $(".countryCode").val("+" + t[0].callingCode);
            var i = contains.call(blockedIP, t[0].ip);
            i && $('input[type="submit"]').css("display", "none")
        },
        error: function(n) {
            console.log(n)
        }
    })
});
