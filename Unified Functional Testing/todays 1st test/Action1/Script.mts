systemutil.Run"C:\Program Files (x86)\HP\Unified Functional Testing\samples\flight\app\flight4a.exe"
Dialog("Login").WinEdit("Agent Name:").Set "Teona" @@ hightlight id_;_3410116_;_script infofile_;_ZIP::ssf1.xml_;_
Dialog("Login").WinEdit("Password:").SetSecure "61e7724a059c34337d86ca12acc4c957c03adebd" @@ hightlight id_;_1509018_;_script infofile_;_ZIP::ssf2.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_4260854_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").WinObject("Date of Flight:").Type "121222" @@ hightlight id_;_657644_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt" @@ hightlight id_;_5769044_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "Zurich" @@ hightlight id_;_1116232_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_4326390_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Select "13587   FRA   10:24 AM   ZRH   12:24 PM   SR     $162.30" @@ hightlight id_;_330062_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_395596_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "Obama" @@ hightlight id_;_1574554_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_461124_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Window").WinListView("SysListView32").Click 1923,1270 @@ hightlight id_;_131396_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Exit"