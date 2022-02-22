    // JavaScript Document
function arabicTime(original)
{						
	var str1 = original, remaining = original;
	var rv = "";
	var d_u = " يوم ", h_u = " ساعة ", m_u = " دقيقة ", s_u = " ثانية ";
	var d = "", h = "", m = "", s = "";
	
	if(str1 == "") return "";
	
	if(str1.indexOf("d") >= 0)
	{
		var str = str1.split("d");
		d = (str[0] != "") ? (str[0] + d_u) : "";
		remaining = str[1];
	}
	if(str1.indexOf("h") >= 0)
	{
		var str = remaining.split("h");
		h = (str[0] != "") ? (str[0] + h_u) : "";
		remaining = str[1];
	}
	if(str1.indexOf("m") >= 0)
	{
		var str = remaining.split("m");
		m = (str[0] != "") ? (str[0] + m_u) : "";
		remaining = str[1];
	}
	if(str1.indexOf("s") >= 0)
	{
		var str = remaining.split("s");
		s = (str[0] != "") ? (str[0] + s_u) : "";
		remaining = str[1];
	}
	return d + h + m + s;
}

function arabicBytes(original)
{
	var rv;
	var int1 = original;
	var GB = " جيجابايت ", MB = " ميجابايت ", KB = " كيلوبايت ", B = " بايت ";
	if(int1 < 1024) rv = int1 + B;
	else if(int1 < (1024 * 1024)) rv = Math.round(int1 / 1024) + KB; 
	else if(int1 < (1024 * 1024 * 1024)) rv = Math.round(int1 / (1024 * 1024)) + MB;
	else rv = Math.round(int1 / (1024 * 1024 * 1024)) + GB;
	return rv;					 
}

function arabicError(original)
{
	"me too"
	
	var rv = original;
    if(original.indexOf("user") >= 0 && original.indexOf("not found") >= 0)
    {
        rv = "لقد ادخلت الكرت بطريقة غير صحيحة، الرجاء المحاولة مرة اخرى";
    }
    else if(original.indexOf("simultaneous session limit reached") >= 0)
    {
        rv = "المعذرة ، هذا الكرت مستخدم حالياً في جهاز آخر";
    }
    else if(original.indexOf("no more sessions are allowed") >= 0)
    {
        rv = "المعذرة ، هذا الكرت مستخدم حالياً في جهاز آخر";
    }
    else if(original.indexOf("invalid password") >= 0)
    {
        rv = "تاكد من كتابة كلمة المرور بشكل صحيح";
    }
    else if(original.indexOf("uptime limit reached") >= 0)
    {
        rv = "عذراً لقد انتهى الوقت المتاح لك..";
    }
    else if(original.indexOf("uptime limit") >= 0)
    {
        rv = "لقد انتهى رصيد هذا الحساب";
    }
    else if(original.indexOf("invalid username or password") >= 0)
    {
        rv = "خطأ في كلمة المرور";
    }
    else if(original.indexOf("uptime limit reached") >= 0)
    {
        rv = "عذراً لقد انتهى الوقت المتاح لك..";
    }
    else if(original.indexOf("uptime limit") >= 0)
    {
        rv = "لقد انتهى رصيد هذا الحساب";
    }
    else if(original.indexOf("no valid profile found") >= 0)
    {
        rv = "لقد انتهت صلاحية هذا الكرت";
    }
    else if(original.indexOf("not found") >= 0)
    {
        rv = "لقد ادخلت اسم المستخدم بطريقة غير صحيحة، الرجاء المحاولة مرة اخرى";
    }
    else if(original.indexOf("invalid Calling-Station-Id") >= 0)
    {
        rv = "هذا الحساب مقترن بجهاز آخر!";
    }
    else if(original.indexOf("server") >= 0 && original.indexOf("is") >= 0 && original.indexOf("not") >= 0 && original.indexOf("responding") >= 0)
    {
        rv = "يرجى الانتظار، يتم الآن اعادة تشغيل الشبكة، هذه العملية قد تستغرق أكثر من 5 دقائق";
    }
    else if(original.indexOf("web") >= 0 && original.indexOf("browser") >= 0 && original.indexOf("did") >= 0 && original.indexOf("not") >= 0 && original.indexOf("send") >= 0)
    {
        rv = "يرجى محاولة ادخال الكرت مرة اخرى";
    }
	else
	{
		rv = "حصل خطا :" + rv;
	}
    return rv;
}

function improveInput(input) {
    var rv = input.toLowerCase();
	
	//obfuscate macs
	rv = rv.replace(new RegExp(":", 'g'), "0");
	//
	
	
    rv = rv.replace(new RegExp(" ", 'g'), "");

    rv = rv.replace(new RegExp(String.fromCharCode(1632), 'g'), "0");
    rv = rv.replace(new RegExp(String.fromCharCode(1633), 'g'), "1");
    rv = rv.replace(new RegExp(String.fromCharCode(1634), 'g'), "2");
    rv = rv.replace(new RegExp(String.fromCharCode(1635), 'g'), "3");
    rv = rv.replace(new RegExp(String.fromCharCode(1636), 'g'), "4");
    rv = rv.replace(new RegExp(String.fromCharCode(1637), 'g'), "5");
    rv = rv.replace(new RegExp(String.fromCharCode(1638), 'g'), "6");
    rv = rv.replace(new RegExp(String.fromCharCode(1639), 'g'), "7");
    rv = rv.replace(new RegExp(String.fromCharCode(1640), 'g'), "8");
    rv = rv.replace(new RegExp(String.fromCharCode(1641), 'g'), "9");

    return rv;
}


function hideHalfCard(input) {
    var rv = input.toLowerCase();
	
	//hide macs
	if(rv.indexOf(":") >= 0)
    {
        return "اشتراك";
    }
	
    var shown_count = Math.ceil(rv.length / 2);

    rv = rv.substring(0, shown_count);

    for (i = 0; i < (input.length - shown_count); i++) {
        rv += "*";
    }

    return rv;
}

// HawaE_Pages Modifications


// reading the json file
$(function() {

    $.getJSON('js/jquery.json', function(data) {

        //input fields types
        login_type = data.Login_Type;
        if ( login_type == 0 ) //user name and password
        {
            var template = $('#usr_and_pwd_tmp').html();
            var html = Mustache.to_html(template);
            $('#input_field').html(html);
           
        }
        else if ( login_type == 1 ) // user name equal password
        {
            var template = $('#card_code_tmp').html();
            var html = Mustache.to_html(template);
            $('#input_field').html(html);
        }
        else  //user name and empty password
        {
           var template = $('#card_code_tmp').html();
            var html = Mustache.to_html(template);
            $('#input_field').html(html);
        }
        // QR Link
        var QR_App_Link = data.QR_App_Link_Enable;
        var template = $('#QR_link_tmp').html();
        var html = Mustache.to_html(template);
        if (QR_App_Link == true)
        {
            $('#QR_link').html(html);
        }
        else
        {
        	 $('#qr_div').remove();
        }

        var network_name = data.Network_Name;
        var dns_link = data.DNS;
        
        var Customer_Service = data.Customer_Service;
        var Library_link = data.Library_Link;
        $('#page_title').html(network_name);
        $('#Network_Name').html(network_name);
        $('#dns').html(dns_link);
        $('a#dns').attr("href",dns_link);
        $('#news_bar').html(news_bar);
        $('#customer_survice').html(Customer_Service);
        if (Customer_Service == "" )
        {
        	$('footer').remove();
        }

        
        // $('#library_link').html(Library_link);
        //Library link
        if (Library_link != "")
        {
        var template_Library = $('#library_link_tmp').html();
        var html_Library = Mustache.to_html(template_Library, data);
        $('#library_link_div').html(html_Library);
        $('a#link_library').attr("href",Library_link);   
        }
        else
        {
            null;
        }
        // profiles
        var profiles = data.Profiles;
        if (profiles == null)
        {
           $('#profiles_sec').remove();
        }
        else
        {
        var template_profiles = $('#profiles_tpl').html();
        var html_profiles = Mustache.to_html(template_profiles, data);
        $('#profiles_table').html(html_profiles);   
        }

        // selling points
        var Selling_Points = data.Selling_Points;
        if (Selling_Points == null)
        {
            $('#selling_points_sec').remove();
        }
        else
        {
            var template_SP = $('#selling_points_tmp').html();
            var html_SP = Mustache.to_html(template_SP, data);
            $('#selling_points').html(html_SP);

        }
        // selling points address 
        var sp_empty_chk = true;
        for (var i = 0; i < Selling_Points.length; i++) {
        	if (Selling_Points[i].Address == "")
        	{
        		sp_empty_chk = false;
        	}
        }
        if (sp_empty_chk == false )
        {
        	$('#sp_address_lable').remove();
        	$('#selling_points_address').remove();
        	
        	$('#sp_name_lable').attr("class","col-xs-12 text-center");
        	
        	for (var i = 0; i < Selling_Points.length; i++) {
        		$('#selling_points_name').attr("class","col-xs-12 text-center");
        		$('#selling_points_address').attr("class","text-center");
        	}
        	
        }
       
        // news bar
        var news_bar = data.Last_News;
        if ( news_bar != "")
        {
            var template_news_bar = $('#news_bar_tmp').html();
            var html_news_bar = Mustache.to_html(template_news_bar, data);
            $('#news_bar').html(html_news_bar);
        }
        else
        {
            null;
        }
        // Logo_enable
        var Logo_Enable = data.Logo_Enable;
        if ( Logo_Enable == true)
        {
            var template_Logo_Enable = $('#Logo_Enable_Tmp').html();
            var html_Logo_Enable = Mustache.to_html(template_Logo_Enable, data);
            $('#logo').html(html_Logo_Enable);
        }
        else
        {
          
            null;
        }
       
        var Profile_Description_Enable = data.Profile_Description_Enable; 
        var Profile_Time_Limit_Enable = data.Profile_Time_Limit_Enable;
        var Profile_Download_Limit_Enable = data.Profile_Download_Limit_Enable;
        var Profile_Validity_Enable = data.Profile_Validity_Enable;
        var profiles_divs_num = data.Profiles.length;
      
        for (i = 0; i < profiles_divs_num; i++) { 

            // profiles descriptions
               if (Profile_Description_Enable == false)
                {
                       	
				   	$('.Profile_Description_div').remove();   		
                }
                else
                {
                    null;
                }
            // time limit    
                if (Profile_Time_Limit_Enable == false) 
                {
                    $('.Time_Limit_div').remove();
                   
                }
                else
                {
                    null;
                }
            // download limit
                if (Profile_Download_Limit_Enable == false) 
                {
                    $('.Download_Limit_div').remove();
                }
                else
                {
                    null;
                }
            // validity 
                if (Profile_Validity_Enable == false) 
                {
                    $('.validity_lable_div').remove();
                }
                else
                {
                    null;
                }

            // checking if time limit and download limit not enabled then hide the validity lable
              
        }

    }); //getJSON

 

    	
}); //function







//     $(function(){
//         $("#username").keyup(function(ev){
//             var othersOption = document.getElementById("username").value;              
//         });
//         $('#form_id').submit(function() {
//             var othersOption = document.getElementById("username").value;              
//         });
//     });
// </script>    
// <script src="js/custom.modernizr.html" type="text/javascript" ></script>
// <script type="text/javascript">

//     window.onload = function() {
//         document.login.username.focus();
//     };
    

//toggle selling points div/////////////////////
// var sp_shown = false;
// var hideSp = false;
// function toggle_sp()
// {
//     hideSp = false;
//     if (!sp_shown)
//     {
//         document.getElementById("sp").style.display = "block";
//         sp_shown = true;
//     }
//     else
//     {
//         document.getElementById("sp").style.display = "none";
//         sp_shown = false;
//     }
// }

// function hide_sp()
// {
//     if (sp_shown && hideSp)
//     {
//         document.getElementById("sp").style.display = "none";
//         sp_shown = false;
//     }
//     //to ignore the document event on toggle click
//     if (!hideSp)
//     {
//         hideSp = true;
//     }
//     //alert("after");*/
// }
//////////////////////////////////////////

// //toggle profiles div/////////////////////
// var prof_shown = false;
// var hideProf = false;
// function toggle_prof()
// {
//     hideProf = false;
//     if (!prof_shown)
//     {
//         document.getElementById("prof").style.display = "block";
//         prof_shown = true;
//     }
//     else
//     {
//         document.getElementById("prof").style.display = "none";
//         prof_shown = false;
//     }
// }

// function hide_prof()
// {
//     if (prof_shown && hideProf)
//     {
//         document.getElementById("prof").style.display = "none";
//         prof_shown = false;
//     }

//     if (!hideProf)
//     {
//         hideProf = true;
//     }
// }
          