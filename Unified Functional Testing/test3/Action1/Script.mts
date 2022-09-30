systemutil.Run "C:\Program Files (x86)\HP\Unified Functional Testing\samples\flight\app\flight4a.exe"
Dialog("Login").WinEdit("Agent Name:").Set DataTable("teona", dtGlobalSheet) @@ hightlight id_;_722550_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinEdit("Password:").SetSecure DataTable("DataTable61e8d469998dca0640274d9eb31bdbd99b32a8d6_param_dtGlobalSheet", dtGlobalSheet) @@ hightlight id_;_1050254_;_script infofile_;_ZIP::ssf2.xml_;_
wait(2)
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_1180808_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Exit"